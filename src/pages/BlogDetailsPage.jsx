import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import API_BASE_URL, { API_ENDPOINTS } from '../config/api';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/BlogDetailsPage.module.css';
import CallToAction from '../components/CallToAction';
import { convertListsToHTML } from '../utils/htmlHelper';

const getImageUrl = (imagePath) => {
  if (!imagePath) return 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80';
  if (imagePath.startsWith('http')) return imagePath;
  return `${API_BASE_URL}${imagePath.startsWith('/') ? '' : '/'}${imagePath}`;
};

const BlogDetailsPage = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      setLoading(true);
      setError('');

      try {
        const blogUrl = API_ENDPOINTS.BLOG_BY_SLUG(blogId);

        const response = await fetch(blogUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();

        let blogData = null;

        if (Array.isArray(responseData)) {
          blogData = responseData[0];
        }
        else if (responseData.success && responseData.data) {
          if (Array.isArray(responseData.data)) {
            blogData = responseData.data[0];
          } else {
            blogData = responseData.data;
          }
        }
        else if (responseData.blog) {
          if (Array.isArray(responseData.blog)) {
            blogData = responseData.blog[0];
          } else {
            blogData = responseData.blog;
          }
        }
        else if (responseData.data) {
          if (Array.isArray(responseData.data)) {
            blogData = responseData.data[0];
          } else {
            blogData = responseData.data;
          }
        }
        else if (responseData._id || responseData.id) {
          blogData = responseData;
        }

        if (!blogData || (!blogData._id && !blogData.id)) {
          throw new Error('Invalid blog data received');
        }

        const transformedBlog = {
          id: blogData._id || blogData.id || Date.now().toString(),
          slug: blogData.slug,
          title: blogData.title || blogData.heading || 'Untitled',
          metaTitle: blogData.metaTitle || blogData.meta_title || blogData.title || 'Untitled',
          metaDescription: blogData.metaDescription || blogData.meta_description || blogData.description || '',
          description: blogData.description || blogData.excerpt || blogData.summary || '',
          content: blogData.content ||
            blogData.fullContent ||
            blogData.body ||
            blogData.text ||
            blogData.articleContent ||
            blogData.html ||
            blogData.description ||
            '<p>No content available</p>',
          category: blogData.category || blogData.tag || blogData.type || 'Technology',
          author: blogData.author || blogData.authorName || blogData.writer || 'Bhoomi Techzone',
          date: blogData.createdAt || blogData.publishedDate || blogData.publishDate || blogData.dateCreated
            ? new Date(blogData.createdAt || blogData.publishedDate || blogData.publishDate || blogData.dateCreated).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })
            : new Date().toLocaleDateString(),
          image: getImageUrl(blogData.image || blogData.thumbnail || blogData.coverImage),
          tags: Array.isArray(blogData.tags) ? blogData.tags : (Array.isArray(blogData.keywords) ? blogData.keywords : [])
        };

        setBlog(transformedBlog);

        try {
          const sanitizedCategory = (blogData.category || 'Technology').trim();
          const relatedUrl = `${API_ENDPOINTS.BLOGS}?category=${encodeURIComponent(sanitizedCategory)}&limit=3`;

          const relatedResponse = await fetch(relatedUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          });

          if (relatedResponse.ok) {
            const relatedData = await relatedResponse.json();

            let relatedList = [];
            if (Array.isArray(relatedData)) {
              relatedList = relatedData;
            } else if (relatedData.success && Array.isArray(relatedData.data)) {
              relatedList = relatedData.data;
            } else if (Array.isArray(relatedData.blogs)) {
              relatedList = relatedData.blogs;
            } else if (Array.isArray(relatedData.data)) {
              relatedList = relatedData.data;
            }

            const relatedTransformed = relatedList
              .filter(b => (b._id || b.id) !== blogId)
              .slice(0, 3)
              .map(b => ({
                id: b._id || b.id,
                slug: b.slug,
                title: b.title || b.heading || 'Untitled',
                excerpt: b.description || b.excerpt || b.content?.substring(0, 150) || '',
                category: b.category || b.tag || 'Technology',
                date: b.createdAt || b.publishedDate
                  ? new Date(b.createdAt || b.publishedDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })
                  : new Date().toLocaleDateString(),
                image: getImageUrl(b.image || b.thumbnail || b.coverImage)
              }));

            setRelatedBlogs(relatedTransformed);
          }
        } catch (relatedErr) {}
      } catch (err) {
        setError('Failed to load blog details. Please try again later.');
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    if (blogId) {
      fetchBlogDetails();
    }
  }, [blogId]);

  if (loading) {
    return (
      <div className={styles.blogDetailsPage}>
        <SEOHead
          title="Loading Blog | Bhoomi Techzone"
          description="Loading blog details..."
        />
        <div className={styles.loadingContainer}>
          <div className={styles.spinner}></div>
          <p>Loading blog...</p>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className={styles.blogDetailsPage}>
        <SEOHead
          title="Blog Not Found | Bhoomi Techzone"
          description="The blog you're looking for could not be found."
        />
        <div className={styles.errorContainer}>
          <div className={styles.errorContent}>
            <h1>Oops! Blog Not Found</h1>
            <p>{error || 'The blog you are looking for does not exist.'}</p>
            <button className={styles.backButton} onClick={() => navigate('/blog')}>
              Back to Blogs
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.blogDetailsPage}>
      <SEOHead
        title={blog.metaTitle || `${blog.title} | Bhoomi Techzone`}
        description={blog.metaDescription || blog.description?.substring(0, 160) || 'Read this interesting blog post on Bhoomi Techzone'}
        keywords={`${blog.category}, ${blog.tags?.join(', ') || 'tech blog'}`}
        canonical={`https://bhoomitechzone.in/blog/${blog.slug || blog.id}`}
      />

      <section className={styles.heroSection}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.heroContainer}>
          <div className={styles.breadcrumb}>
            <Link to="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.separator}>/</span>
            <Link to="/blog" className={styles.breadcrumbLink}>Blog</Link>
            <span className={styles.separator}>/</span>
            <span className={styles.breadcrumbCurrent}>Blog Details</span>
          </div>
          <h1 className={styles.blogTitle}>{blog.title || 'Untitled Blog'}</h1>
          <p className={styles.blogCategory}>{blog.category || 'Technology'}</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.blogContent}>
            <div className={styles.contentImageWrapper}>
              <img
                src={blog.image}
                alt={blog.title}
                className={styles.contentImage}
              />
            </div>

            <div className={styles.blogMetaContent}>
              <span className={styles.author}>By {blog.author || 'Bhoomi Techzone'}</span>
              <span className={styles.separator}>•</span>
              <span className={styles.date}>{blog.date || new Date().toLocaleDateString()}</span>
            </div>

            {blog.description ? (
              <div
                className={styles.blogBody}
                dangerouslySetInnerHTML={{
                  __html: convertListsToHTML(blog.description)
                }}
              />
            ) : (
              <div className={styles.blogBody}>
                <p>No content available</p>
              </div>
            )}

            {blog.tags && blog.tags.length > 0 && (
              <div className={styles.tagsSection}>
                <h3>Tags:</h3>
                <div className={styles.tagsList}>
                  {blog.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.authorInfo}>
              <div className={styles.authorAvatar}>
                {blog.author && typeof blog.author === 'string' ? blog.author.charAt(0).toUpperCase() : 'B'}
              </div>
              <div className={styles.authorDetails}>
                <h4 className={styles.authorName}>{blog.author || 'Bhoomi Techzone'}</h4>
                <p className={styles.authorBio}>
                  Tech enthusiast and writer at Bhoomi Techzone. Passionate about sharing knowledge and insights.
                </p>
              </div>
            </div>

            <button className={styles.backButton} onClick={() => navigate('/blog')}>
              ← Back to All Blogs
            </button>
          </div>
        </div>
      </section>

      {relatedBlogs.length > 0 && (
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <h2 className={styles.relatedTitle}>Related Articles</h2>
            <div className={styles.relatedGrid}>
              {relatedBlogs.map((relatedBlog) => (
                <article
                  key={relatedBlog.id}
                  className={styles.relatedCard}
                  onClick={() => navigate(`/blog/${relatedBlog.slug}`)}
                >
                  <div className={styles.relatedImageWrapper}>
                    <img
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      className={styles.relatedImage}
                    />
                  </div>
                  <div className={styles.relatedContent}>
                    <h3 className={styles.relatedCardTitle}>{relatedBlog.title}</h3>
                    <p className={styles.relatedCardMeta}>{relatedBlog.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <CallToAction />
    </div>
  );
};

export default BlogDetailsPage;