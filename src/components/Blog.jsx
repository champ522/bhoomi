import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../styles/Blog.module.css';

const Blog = () => {
  const [hoveredPost, setHoveredPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: AI-Powered Coding Revolution",
      excerpt: "Discover how AI-powered coding assistants like GitHub Copilot and ChatGPT are revolutionizing web development, from automated code generation to intelligent debugging and optimization.",
      author: "Rakesh Kumar",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "AI Technology",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["AI", "Web Development", "Automation"]
    },
    {
      id: 2,
      title: "Building Scalable E-commerce Solutions for Modern Businesses",
      excerpt: "Learn how to create robust e-commerce platforms that can handle high traffic and provide exceptional user experiences across all devices.",
      author: "Priya Patel",
      date: "December 12, 2024",
      readTime: "8 min read",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["E-commerce", "Scalability", "Business"]
    },
    {
      id: 3,
      title: "Machine Learning in Business: Practical Applications & Benefits",
      excerpt: "Explore real-world applications of machine learning in business operations, from predictive analytics to customer personalization and automated decision-making systems.",
      author: "Rahul Gupta",
      date: "December 10, 2024",
      readTime: "12 min read",
      category: "Machine Learning",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["Machine Learning", "Intelligence", "Analytics"]
    },
    {
      id: 4,
      title: "Cybersecurity Best Practices for Modern Web Applications",
      excerpt: "Essential security measures every developer should implement to protect web applications from common threats and vulnerabilities.",
      author: "Anita Desai",
      date: "December 8, 2024",
      readTime: "10 min read",
      category: "Security",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["Cybersecurity", "Web Development", "Best Practices"]
    },
    {
      id: 5,
      title: "The Rise of No-Code Platforms: Opportunities and Limitations",
      excerpt: "Exploring how no-code platforms are democratizing software development and what this means for traditional developers and businesses.",
      author: "Vikash Jain",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["No-Code", "Innovation", "Development"]
    },
    {
      id: 6,
      title: "Mobile-First Design: Creating Responsive Experiences",
      excerpt: "Why mobile-first design is crucial for modern websites and how to implement responsive design principles that work across all devices.",
      author: "Sumitra Nayer",
      date: "December 3, 2024",
      readTime: "7 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["Mobile Design", "Responsive", "UX/UI"]
    }
  ];

  const featuredPost = blogPosts[0];
  const carouselPosts = blogPosts.slice(1);

  return (
    <section className={styles.blogSection}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.headerContent}>
          <div className={styles.welcomeSection}>
            {/* <div className={styles.welcomeLine}></div> */}
            <span className={styles.welcomeText}>Our Blog</span>
            <div className={styles.welcomeLine}></div>
          </div>
          
          <h2 className={styles.sectionTitle}>
            Latest <span className={styles.titleHighlight}>Insights</span> & News
          </h2>
          
          <p className={styles.sectionDescription}>
            Stay updated with the latest trends, tips, and insights from the world of technology. 
            Our expert team shares valuable knowledge to help you stay ahead in the digital landscape.
          </p>
        </div>

        {/* Featured Post */}
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
                <span className={styles.readTime}>{featuredPost.readTime}</span>
              </div>
              
              <h3 className={styles.featuredTitle}>{featuredPost.title}</h3>
              <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
              
              <div className={styles.featuredTags}>
                {featuredPost.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>{tag}</span>
                ))}
              </div>
              
              <button className={styles.readMoreBtn}>
                <span>Read Full Article</span>
                <svg className={styles.readMoreIcon} viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Blog Swiper Carousel */}
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
                      <button className={styles.quickReadBtn}>Quick Read</button>
                    </div>
                    <div className={styles.cardCategory}>
                      {post.category}
                    </div>
                    {(post.category === 'AI Technology' || post.category === 'Machine Learning') && (
                      <div className={styles.aiIcon}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
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
                    <p className={styles.cardExcerpt}>{post.excerpt}</p>
                    
                    <div className={styles.cardFooter}>
                      <div className={styles.cardTags}>
                        {post.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className={styles.smallTag}>{tag}</span>
                        ))}
                      </div>
                      <span className={styles.cardReadTime}>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons */}
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

        {/* Load More Section */}
        <div className={styles.loadMoreSection}>
          <button className={styles.loadMoreBtn}>
            <span>Load More Articles</span>
            <div className={styles.loadMoreSpinner}>
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;