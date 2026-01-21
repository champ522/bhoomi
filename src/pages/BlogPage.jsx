import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ParticleBanner from '../components/ParticleBanner';
import CallToAction from '../components/CallToAction';
import styles from '../styles/BlogPage.module.css';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Artificial Intelligence in 2025',
      excerpt: 'Explore how AI is transforming industries and what to expect in the coming years. From machine learning to neural networks, discover the cutting-edge developments. AI technologies are revolutionizing everything from healthcare diagnostics to autonomous vehicles. Machine learning algorithms are becoming more sophisticated, enabling computers to learn from data and make predictions with unprecedented accuracy. Neural networks, inspired by the human brain, are powering breakthrough innovations in image recognition, natural language processing, and decision-making systems.',
      category: 'AI & ML',
      author: 'Sarah Johnson',
      date: 'Dec 28, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80'
    },
    {
      id: 2,
      title: 'Cloud Computing: Best Practices for 2025',
      excerpt: 'Learn the essential strategies for optimizing your cloud infrastructure. Discover cost-effective solutions and security best practices. Cloud computing has become the backbone of modern IT infrastructure, offering scalability, flexibility, and cost-efficiency. Organizations are migrating to cloud platforms like AWS, Azure, and Google Cloud to leverage powerful computing resources without heavy upfront investments. Understanding cloud architecture, implementing proper security measures, and optimizing costs are crucial for successful cloud adoption.',
      category: 'Cloud Computing',
      author: 'Michael Chen',
      date: 'Dec 27, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
    },
    {
      id: 3,
      title: 'Cybersecurity Trends Every Business Should Know',
      excerpt: 'Stay ahead of cyber threats with the latest security trends and protection strategies. Learn about zero-trust architecture and advanced threat detection. Cybersecurity has become paramount as businesses face increasingly sophisticated attacks. Zero-trust security models assume no user or device should be trusted by default, requiring continuous verification. Advanced threat detection systems use AI and machine learning to identify unusual patterns and potential security breaches before they cause damage.',
      category: 'Cybersecurity',
      author: 'David Martinez',
      date: 'Dec 26, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80'
    },
    {
      id: 4,
      title: 'Web Development Trends in 2025',
      excerpt: 'Discover the latest frameworks, tools, and methodologies shaping modern web development. From React Server Components to Edge Computing. The web development landscape is constantly evolving with new technologies and best practices. Modern frameworks like React, Vue, and Next.js are pushing the boundaries of what web applications can achieve. Edge computing brings computation closer to users, reducing latency and improving performance for globally distributed applications.',
      category: 'Web Development',
      author: 'Emma Wilson',
      date: 'Dec 25, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80'
    },
    {
      id: 5,
      title: 'The Rise of Low-Code/No-Code Platforms',
      excerpt: 'How low-code platforms are democratizing software development and enabling rapid application delivery across organizations. Low-code and no-code platforms empower business users to create applications without extensive programming knowledge. These platforms use visual interfaces, drag-and-drop components, and pre-built templates to accelerate development. Organizations are adopting low-code solutions to bridge the gap between IT teams and business departments, enabling faster innovation and reducing development backlogs.',
      category: 'Software Development',
      author: 'James Brown',
      date: 'Dec 24, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80'
    },
    {
      id: 6,
      title: 'Mobile App Development: Native vs Cross-Platform',
      excerpt: 'A comprehensive comparison of native and cross-platform development approaches. Make informed decisions for your next mobile project. Choosing between native and cross-platform development depends on your project requirements, budget, and timeline. Native development offers optimal performance and full access to device features, while cross-platform frameworks like React Native and Flutter enable code reuse across iOS and Android, reducing development time and costs significantly.',
      category: 'Mobile Development',
      author: 'Lisa Anderson',
      date: 'Dec 23, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80'
    },
    {
      id: 7,
      title: 'Blockchain Technology Beyond Cryptocurrency',
      excerpt: 'Explore practical applications of blockchain in supply chain, healthcare, and enterprise solutions beyond digital currencies.',
      category: 'Blockchain',
      author: 'Robert Taylor',
      date: 'Dec 22, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80'
    },
    {
      id: 8,
      title: 'DevOps Culture: Building High-Performance Teams',
      excerpt: 'Learn how to implement DevOps practices that enhance collaboration, accelerate delivery, and improve software quality.',
      category: 'DevOps',
      author: 'Amanda White',
      date: 'Dec 21, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80'
    },
    {
      id: 9,
      title: 'IoT Revolution: Connecting the Physical and Digital World',
      excerpt: 'Discover how Internet of Things is transforming industries from manufacturing to healthcare with smart connected devices.',
      category: 'IoT',
      author: 'Kevin Rodriguez',
      date: 'Dec 20, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80'
    },
    {
      id: 10,
      title: 'Data Science: Turning Data into Business Insights',
      excerpt: 'Master the art of data analysis and visualization. Learn how data science is driving decision-making in modern businesses.',
      category: 'Data Science',
      author: 'Sophia Lee',
      date: 'Dec 19, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
    {
      id: 11,
      title: 'Microservices Architecture: A Complete Guide',
      excerpt: 'Understanding microservices patterns, benefits, and challenges. Learn when and how to implement this architectural style.',
      category: 'Software Development',
      author: 'Thomas Garcia',
      date: 'Dec 18, 2024',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80'
    },
    {
      id: 12,
      title: 'Quantum Computing: The Next Computing Revolution',
      excerpt: 'An introduction to quantum computing and its potential to solve complex problems beyond classical computing capabilities.',
      category: 'Emerging Tech',
      author: 'Daniel Kim',
      date: 'Dec 17, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80'
    }
  ];

  const categories = ['all', 'AI & ML', 'Cloud Computing', 'Cybersecurity', 'Web Development', 'Mobile Development', 'Software Development', 'Blockchain', 'DevOps', 'IoT', 'Data Science', 'Emerging Tech'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.blogPage}>
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
                className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'all' ? 'All Articles' : category}
              </button>
            ))}
          </div>

          {/* Blog List */}
          <div className={styles.blogList}>
            {filteredPosts.map((post, index) => (
              <article key={post.id} className={`${styles.blogItem} ${index % 2 === 0 ? styles.imageLeft : styles.imageRight}`}>
                <div className={styles.blogImageWrapper}>
                  <img src={post.image} alt={post.title} className={styles.blogImage} />
                </div>
                <div className={styles.blogContent}>
                  <h3 className={styles.blogTitle}>{post.title}</h3>
                  <p className={styles.blogExcerpt}>{post.excerpt}</p>
                  <div className={styles.blogMeta}>
                    <span className={styles.author}>By {post.author}</span>
                    <span className={styles.separator}>•</span>
                    <span className={styles.date}>{post.date}</span>
                    <span className={styles.separator}>•</span>
                    <span className={styles.readTime}>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
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
