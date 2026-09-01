import React, { useState, useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import { Link, useNavigate } from 'react-router-dom';
import ParticleBanner from '../components/ParticleBanner';
import CallToAction from '../components/CallToAction';
import API_BASE_URL, { API_ENDPOINTS } from '../config/api';
import { truncateHtml, convertListsToHTML } from '../utils/htmlHelper';
import styles from '../styles/BlogPage.module.css';

const getImageUrl = (imagePath) => {
  if (!imagePath) return 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80';
  if (imagePath.startsWith('http')) return imagePath;
  return `${API_BASE_URL}${imagePath.startsWith('/') ? '' : '/'}${imagePath}`;
};

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError('');

      try {
        const url =
          selectedCategory === 'all'
            ? API_ENDPOINTS.BLOGS
            : `${API_ENDPOINTS.BLOGS}?category=${encodeURIComponent(selectedCategory)}`;

        console.log('Fetching blogs from:', url);
        const res = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log('Fetched data:', data);
        console.log('Full Response Data:', JSON.stringify(data, null, 2));

        // Handle different response formats
        let blogList = [];
        if (Array.isArray(data)) {
          blogList = data;
        } else if (data && data.success && Array.isArray(data.data)) {
          blogList = data.data;
        } else if (data && Array.isArray(data.blogs)) {
          blogList = data.blogs;
        } else if (data && Array.isArray(data.data)) {
          blogList = data.data;
        }

        console.log('Blog List:', blogList);

        // Transform API data to component format
        const transformedBlogs = blogList
          .filter(blog => blog._id || blog.id) // Filter out invalid entries
          .map((blog) => {
            const transformed = {
              id: blog._id || blog.id,
              slug: blog.slug,
              title: blog.title || 'Untitled',
              excerpt: blog.description || blog.excerpt || blog.content || '',
              category: blog.category || 'Technology',
              author: blog.author || 'Bhoomi Techzone',
              date: blog.createdAt ? new Date(blog.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              }) : new Date().toLocaleDateString(),
              image: getImageUrl(blog.image)
            };
            console.log('Transformed blog item:', transformed);
            return transformed;
          });

        setBlogPosts(transformedBlogs);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Failed to load blogs. Please try again later.');
        setBlogPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [selectedCategory]);

  const categories = [
    'all',
    'AI & ML',
    'Cloud Computing',
    'Cybersecurity',
    'Web Development',
    'Mobile Development',
    'Software Development',
    'Blockchain',
    'DevOps',
    'IoT',
    'Data Science',
    'Emerging Tech'
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'all' || post.category === selectedCategory;

    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.blogPage}>
      <SEOHead
        title="Tech Blog | IT Tips, Trends & Insights - Bhoomi Techzone"
        description="Stay updated with Bhoomi Techzone's tech blog. Read articles on web development, mobile apps, SEO, digital marketing, software trends and IT best practices."
        keywords="tech blog India, IT insights Noida, web development blog, digital marketing tips, software trends"
        canonical="https://bhoomitechzone.in/blog"
      />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Tech Insights & Trends</h1>
          <p className={styles.heroSubtitle}>
            Stay updated with the latest technology trends, insights, and best practices
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className={styles.blogSection}>
        <div className={styles.container}>
          {/* Category Filter */}
          <div className={styles.filterSection}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.filterButton} ${
                  selectedCategory === category ? styles.active : ''
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'all' ? 'All Articles' : category}
              </button>
            ))}
          </div>

          {/* Loading State */}
          {loading && (
            <div className={styles.loadingContainer}>
              <div className={styles.spinner}></div>
              <p>Loading blogs...</p>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className={styles.errorContainer}>
              <p className={styles.errorMessage}>{error}</p>
            </div>
          )}

          {/* Blog List */}
          {!loading && !error && (
            <div className={styles.blogList}>
              {filteredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className={`${styles.blogItem} ${
                    index % 2 === 0 ? styles.imageLeft : styles.imageRight
                  }`}
                >
                  <div className={styles.blogImageWrapper}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className={styles.blogImage}
                      width="400"
                      height="250"
                      loading="lazy"
                    />
                  </div>

                  <div className={styles.blogContent}>
                    <h3 className={styles.blogTitle}>{post.title}</h3>

                    <div
                      className={styles.blogExcerpt}
                      dangerouslySetInnerHTML={{
                        __html: truncateHtml(convertListsToHTML(post.excerpt || ''), 250)
                      }}
                    />

                    <div className={styles.blogMeta}>
                      <span className={styles.author}>By {post.author}</span>
                      <span className={styles.separator}>•</span>
                      <span className={styles.date}>{post.date}</span>
                    </div>

                    <button 
                      className={styles.readMoreButton}
                      onClick={() => navigate(`/blog/${post.slug || post.id}`)}
                    >
                      Read More →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {filteredPosts.length === 0 && !loading && !error && (
            <div className={styles.noResults}>
              <p>No articles found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletterSection}>
        <div className={styles.container}>
          <h2 className={styles.newsletterTitle}>Subscribe to Our Newsletter</h2>
          <p className={styles.newsletterText}>
            Get the latest tech insights delivered directly to your inbox
          </p>

          <div className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.newsletterInput}
            />
            <button className={styles.subscribeButton}>Subscribe</button>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default BlogPage;