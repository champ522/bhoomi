import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../styles/Blog.module.css';
import API_BASE_URL from '../config/api';
import { truncateHtml, convertListsToHTML } from '../utils/htmlHelper';

const Blog = () => {
  const [hoveredPost, setHoveredPost] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch latest blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const API_URL = API_BASE_URL;

        // Fetch featured blogs from the published endpoint
        const response = await fetch(`${API_URL}/api/blogs/published?featured=true&limit=6`);

        console.log('API URL:', `${API_URL}/api/blogs/published?featured=true&limit=6`);
        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers.get('content-type'));

        // Check if response is HTML (error page)
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('text/html')) {
          const htmlText = await response.text();
          console.error('Server returned HTML instead of JSON. This means the route might not exist on production server.');
          console.error('HTML response (first 500 chars):', htmlText.substring(0, 500));
          throw new Error('API endpoint not available. Please redeploy backend server with latest routes.');
        }

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Error response:', errorText);
          throw new Error(`Failed to fetch blogs: ${response.status} - ${errorText.substring(0, 100)}`);
        }

        if (!contentType || !contentType.includes('application/json')) {
          const text = await response.text();
          console.error('Non-JSON response:', text.substring(0, 200));
          throw new Error('Server returned non-JSON response');
        }

        const data = await response.json();
        console.log('Fetched data:', data);

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

        // Handle empty blog list
        if (blogList.length === 0) {
          console.log('No featured blogs found in database');
          setBlogPosts([]);
          setError(null);
          setLoading(false);
          return;
        }

        // Transform API data to match component structure
        const transformedBlogs = blogList.map(blog => ({
          id: blog._id || blog.id,
          slug: blog.slug,
          title: blog.title,
          excerpt: blog.description || blog.excerpt || blog.content || '',
          author: blog.author || 'Bhoomi Techzone',
          date: blog.createdAt ? new Date(blog.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }) : new Date().toLocaleDateString(),
          category: blog.category || 'Technology',
          image: blog.image?.startsWith('http') ? blog.image : `${API_URL}${blog.image?.startsWith('/') ? '' : '/'}${blog.image}`,
          tags: blog.tags || [],
          featured: blog.featured || false
        }));

        console.log('Transformed blogs:', transformedBlogs);
        setBlogPosts(transformedBlogs);
        setError(null);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError(err.message || 'Failed to load blogs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Get featured post (first blog or first featured blog)
  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];
  const carouselPosts = blogPosts.filter(post => post.id !== featuredPost?.id);

  return (
    <section className={styles.blogSection}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.headerContent}>
          <div className={styles.welcomeSection}>
            <span className={styles.welcomeText}>Our Blog</span>
            <div className={styles.welcomeLine}></div>
          </div>

          <h2 className={styles.sectionTitle}>
            Latest <span className={styles.titleHighlight}>Insights</span> & News
          </h2>

          <p className={styles.sectionDescription}>
            Stay updated with the latest trends, tips, and insights from the world of technology.
            Our expert team shares valuable knowledge to help you stay ahead in the digital landscape.
            Learn from industry leaders like{' '}
            <a href="https://developer.mozilla.org/en-US/" target="_blank" rel="noopener noreferrer" style={{ color: '#28a745', textDecoration: 'none' }}>MDN Web Docs</a>{' '}
            and stay informed with{' '}
            <a href="https://techcrunch.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#28a745', textDecoration: 'none' }}>TechCrunch</a>.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
            <p>Loading latest blogs...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className={styles.errorContainer}>
            <p>{error}</p>
          </div>
        )}

        {/* No Blogs Available */}
        {!loading && !error && blogPosts.length === 0 && (
          <div className={styles.loadingContainer}>
            <p>No blogs available yet. Check back soon!</p>
          </div>
        )}

        {/* Featured Post */}
        {!loading && !error && featuredPost && (
          <div className={styles.featuredSection}>
            <div
              className={styles.featuredPost}
              onMouseEnter={() => setHoveredPost('featured')}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <div className={styles.featuredImageContainer}>
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className={styles.featuredImage}
                />
                <div className={styles.featuredBadge}>Featured</div>
                <div className={styles.categoryBadge}>
                  {featuredPost.category}
                </div>
              </div>

              <div className={styles.featuredContent}>
                <div className={styles.featuredMeta}>
                  <span className={styles.author}>{featuredPost.author}</span>
                  <span className={styles.date}>{featuredPost.date}</span>
                </div>

                <h3 className={styles.featuredTitle}>{featuredPost.title}</h3>

                <div
                  className={styles.featuredExcerpt}
                  dangerouslySetInnerHTML={{
                     __html: truncateHtml(convertListsToHTML(featuredPost.excerpt || ''), 250)
                  }}
                />

                <div className={styles.featuredTags}>
                  {featuredPost.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                <Link to={`/blog/${featuredPost.slug || featuredPost.id}`} className={styles.readMoreBtn}>
                  <span>Read Full Article</span>
                  <svg className={styles.readMoreIcon} viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Blog Swiper Carousel */}
        {!loading && !error && carouselPosts.length > 0 && (
          <div className={styles.carouselSection}>
            <div className={styles.carouselHeader}>
              <h3 className={styles.carouselTitle}>Latest Insights & Technology Updates</h3>
            </div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              loop={true}
              centeredSlides={false}
              className={styles.blogSwiper}
            >
              {carouselPosts.map((post) => (
                <SwiperSlide key={post.id}>
                  <article
                    className={styles.carouselCard}
                    onMouseEnter={() => setHoveredPost(post.id)}
                    onMouseLeave={() => setHoveredPost(null)}
                  >
                    <div className={styles.cardImageContainer}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className={styles.cardImage}
                      />
                      <div className={styles.cardOverlay}>
                        <Link to={`/blog/${post.slug || post.id}`} className={styles.quickReadBtn}>Quick Read</Link>
                      </div>
                      <div className={styles.cardCategory}>
                        {post.category}
                      </div>

                      {(post.category === 'AI Technology' || post.category === 'Machine Learning') && (
                        <div className={styles.aiIcon}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                          </svg>
                        </div>
                      )}
                    </div>

                    <div className={styles.cardContent}>
                      <div className={styles.cardMeta}>
                        <span className={styles.cardAuthor}>{post.author}</span>
                        <span className={styles.cardDate}>{post.date}</span>
                      </div>

                      <h4 className={styles.cardTitle}>{post.title}</h4>

                      <div
                        className={styles.cardExcerpt}
                        dangerouslySetInnerHTML={{
                          __html: truncateHtml(convertListsToHTML(post.excerpt || ''), 200)
                        }}
                      />

                      <div className={styles.cardFooter}>
                        <div className={styles.cardTags}>
                          {post.tags.slice(0, 2).map((tag, index) => (
                            <span key={index} className={styles.smallTag}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}

              <div className="swiper-button-prev-custom">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
              </div>

              <div className="swiper-button-next-custom">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </div>
            </Swiper>
          </div>
        )}

        {/* Load More Section */}
        <div className={styles.loadMoreSection}>
          <Link to="/blog" className={styles.loadMoreBtn}>
            <span>Load More Articles</span>
            <div className={styles.loadMoreSpinner}>
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog