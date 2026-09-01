import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import ParticleBanner from '../components/ParticleBanner';
import CallToAction from '../components/CallToAction';
import styles from '../styles/GalleryPage.module.css';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      title: 'New Year Celebration 2025',
      category: 'Office Party',
      image: '/galleries/gal1.jpg',
      description: 'Celebrating team member birthday with cake and fun activities'
    },
    {
      id: 3,
      title: 'Office Puja 2025',
      category: 'Events',
      image: '/galleries/gal4.jpg',
      description: 'Team gathering for birthday celebration with decorations'
    },
    {
      id: 4,
      title: 'Mountain Trek 2025',
      category: 'Office Trip',
      image: '/galleries/gal18.jpg',
      description: 'Annual office trip to the mountains for team bonding'
    },
    {
      id: 5,
      title: 'Night Outing',
      category: 'Office Party',
      image: '/galleries/gal17.jpg',
      description: 'Team enjoying a relaxing night out together'
    },
    {
      id: 6,
      title: 'Hill Station Visit',
      category: 'Office Trip',
      image: '/galleries/gal16.jpg',
      description: 'Exploring beautiful hill stations with the team'
    },
    {
      id: 7,
      title: 'Adventure Trip',
      category: 'Office Trip',
      image: '/galleries/gal15.jpg',
      description: 'Team building through adventure activities and trekking'
    },
    {
      id: 9,
      title: 'Relex Moments',
      category: 'Office Trip',
      image: '/galleries/gal31.jpg',
      description: 'Festival celebration with traditional decorations and sweets'
    },
    {
      id: 2,
      title: 'New Year Party 2025',
      category: 'Office Party',
      image: '/galleries/gal2.jpg',
      description: 'Company anniversary celebration with the entire team'
    },
    {
      id: 10,
      title: 'Birthday Celebration',
      category: 'Birthday Party',
      image: '/galleries/gal12.jpg',
      description: 'Holiday season celebration with gifts and decorations'
    },
    {
      id: 12,
      title: 'Milestone Celebration',
      category: 'Events',
      image: '/galleries/gal10.jpg',
      description: 'Celebrating team achievements and personal milestones'
    },
    {
      id: 13,
      title: 'Target Achivers',
      category: 'Events',
      image: '/galleries/gal9.jpg',
      description: 'Monthly recognition of top performers and achievers'
    },
    {
      id: 14,
      title: 'Office Celebration',
      category: 'Events',
      image: '/galleries/gal61.jpeg',
      description: 'Colorful Holi festival celebration with the team'
    },
    {
      id: 15,
      title: 'Office Puja 2025',
      category: 'Events',
      image: '/galleries/gal7.jpg',
      description: 'Celebrating project success and team efforts'
    },
    {
      id: 16,
      title: 'Corporate Event',
      category: 'Events',
      image: '/galleries/gal5.jpg',
      description: 'Annual corporate gathering with entertainment and awards'
    },
    {
      id: 11,
      title: 'Cake Cutting',
      category: 'Birthday Party',
      image: '/galleries/gal11.jpg',
      description: 'Team bonding over dinner and conversations'
    },
    {
      id: 17,
      title: 'Office Puja',
      category: 'Events',
      image: '/galleries/gal6.jpg',
      description: 'Team exploring nature trails and scenic beauty'
    },
    {
      id: 18,
      title: 'Ganesh Chaturthi',
      category: 'Events',
      image: '/galleries/gal3.jpg',
      description: 'Team gathering for cake cutting and celebration'
    },
    {
      id: 19,
      title: 'NainiTal Trip',
      category: 'Office Trip',
      image: '/galleries/gal19.jpg',
      description: 'Celebrating diverse cultures with performances and food'
    },
    {
      id: 20,
      title: 'New Year 2026 Tour',
      category: 'Office Trip',
      image: '/galleries/gal20.jpg',
      description: 'Team participating in a workshop to foster innovation'
    },
    {
      id: 21,
      title: 'Diwali Celebration 2025',
      category: 'Events',
      image: '/galleries/gal21.jpeg',
      description: 'Team participating in a workshop to foster innovation'
    },
    {
      id: 22,
      title: 'Movie Outing',
      category: 'Office Party',
      image: '/galleries/gal22.jpeg',
      description: 'Team enjoying a movie together for relaxation and fun'
    },
    {
      id: 23,
      title: 'Night Dinner',
      category: 'Office Party',
      image: '/galleries/gal23.jpeg',
      description: 'Team bonding over dinner and conversations'
    },
    {
      id: 24,
      title: 'Mountain Memories',
      category: 'Office Trip',
      image: '/galleries/gal40.jpg',
      description: 'Spooky fun and costumes for Halloween celebration'
    },
    {
      id: 25,
      title: 'Team Building Activities',
      category: 'Events',
      image: '/galleries/gal25.jpeg',
      description: 'Engaging in activities to strengthen team collaboration'
    },
    {
      id: 26,
      title: 'Annual Sports Day',
      category: 'Office Trip',
      image: '/galleries/gal26.jpg',
      description: 'Friendly sports competitions to promote fitness and fun'
    },
    {
      id: 27,
      title: 'Mountain Trekking',
      category: 'Office Trip',
      image: '/galleries/gal27.jpg',
      description: 'Exploring nature trails and scenic beauty'
    },
    {
      id: 28,
      title: 'Bhimtal Tour',
      category: 'Office Trip',
      image: '/galleries/gal28.jpg',
      description: 'Participating in a charity run to support a good cause'
    },
    {
      id: 29,
      title: 'New Year Trip 2026',
      category: 'Office Trip',
      image: '/galleries/gal29.jpg',
      description: 'Welcoming the new year with a refreshing team outing'
    },
    {
      id: 30,
      title: 'Spring Festival',
      category: 'Office Trip',
      image: '/galleries/gal30.jpg',
      description: 'Welcoming spring with a festive celebration'
    },
    {
      id: 31,
      title: 'Team Visit',
      category: 'Office Trip',
      image: '/galleries/gal32.jpg',
      description: 'Visiting a local attraction as a team outing'
    },
    {
      id: 32,
      title: 'Mountain Hiking',
      category: 'Office Trip',
      image: '/galleries/gal33.jpg',
      description: 'Beautifying the office space with a gardening activity'
    },
    {
      id: 33,
      title: 'New Year Celebration',
      category: 'Office Trip',
      image: '/galleries/gal34.jpg',
      description: 'Hosting a gala to raise funds for a charitable cause'
    },
    {
      id: 34,
      title: 'Team Building Party',
      category: 'Office Trip',
      image: '/galleries/gal35.jpg',
      description: 'Celebrating the winter season with a themed party'
    },
    {
      id: 35,
      title: 'Team Moments',
      category: 'Office Trip',
      image: '/galleries/gal36.jpg',
      description: 'Competing in fun office-themed Olympic games'
    },
    {
      id: 36,
      title: 'Cristmas Celebration',
      category: 'Office Party',
      image: '/galleries/gal41.jpeg',
      description: 'Holiday season celebration with gifts and decorations'
    },
    {
      id: 37,
      title: 'Cristmas Day',
      category: 'Office Party',
      image: '/galleries/gal42.jpeg',
      description: 'Holiday celebration with gifts and decorations'
    },
    {
      id: 38,
      title: 'Team Member Birthday',
      category: 'Birthday Party',
      image: '/galleries/gal43.jpeg',
      description: 'Celebrating team member birthday with cake and fun activities'
    },
    {
      id: 39,
      title: 'Diwali 2025',
      category: 'Events',
      image: '/galleries/gal44.jpeg',
      description: 'Festival celebration with traditional decorations and sweets'
    },
    {
      id: 40,
      title: 'Samosa Party',
      category: 'Office Party',
      image: '/galleries/gal50.jpeg',
      description: 'Team bonding over Samosa and conversations'
    },
    {
      id: 44,
      title: 'Team Lead Birthday',
      category: 'Birthday Party',
      image: '/galleries/gal45.jpeg',
      description: 'Celebrating team lead birthday with cake and fun activities'
    },
    {
      id: 41,
      title: 'Independence Day',
      category: 'Office Party',
      image: '/galleries/gal46.jpeg',
      description: 'Celebrating Independence Day with patriotic fervor'
    },
    {
      id: 8,
      title: 'Birthday Bash',
      category: 'Birthday Party',
      image: '/galleries/gal63.jpeg',
      description: 'Celebrating team member birthday with cake and fun activities'
    },
    {
      id: 42,
      title: 'Team Bonding',
      category: 'Office Party',
      image: '/galleries/gal47.jpeg',
      description: 'Team bonding over fun activities and conversations'
    },
    {
      id: 43,
      title: 'Office Birthday',
      category: 'Birthday Party',
      image: '/galleries/gal48.jpeg',
      description: 'Celebrating office birthday with cake and fun activities'
    },
    {
      id: 45,
      title: 'Cristmas Gifts',
      category: 'Events',
      image: '/galleries/gal65.jpeg',
      description: 'Exchanging gifts and spreading holiday cheer'
    },
    {
      id: 46,
      title: 'Office Trip Fun',
      category: 'Office Trip',
      image: '/galleries/gal68.jpeg',
      description: 'Enjoying fun moments during the office trip'
    },
    {
      id: 47,
      title: 'Team Outing',
      category: 'Office Trip',
      image: '/galleries/gal67.jpeg',
      description: 'Relaxing and unwinding during a team outing'
    },
    {
      id: 48,
      title: 'Employee Recognition',
      category: 'Events',
      image: '/galleries/gal62.jpeg',
      description: 'Honoring employees for their hard work and dedication'
    },
    {
      id: 49,
      title: 'Cristmas Perks',
      category: 'Events',
      image: '/galleries/gal64.jpeg',
      description: 'Enjoying special perks and treats during the Christmas season'
    },
    {
      id: 50,
      title: 'Fun Time',
      category: 'Office Trip',
      image: '/galleries/gal66.jpeg',
      description: 'Having fun and relaxing during office breaks'
    },
    {
      id: 51,
      title: 'Mountain Adventure',
      category: 'Office Trip',
      image: '/galleries/gal69.jpeg',
      description: 'Celebrating office events with enthusiasm and joy'
    },
    {
      id: 52,
      title: 'Gift Exchange',
      category: 'Office Party',
      image: '/galleries/hrm1.jpeg',
      description: 'Exchanging gifts and spreading holiday cheer'
    },
    {
      id: 53,
      title: 'Solo Enjoyment',
      category: 'Office Trip',
      image: '/galleries/hrm2.jpeg',
      description: 'Taking a moment to enjoy some solo time during the trip'
    }
  ];

  const categories = ['all', 'Birthday Party', 'Events', 'Office Trip', 'Office Party'];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Helper function to get image path without extension
  const getImagePath = (imagePath) => {
    return imagePath.replace(/\.(jpg|jpeg|png)$/, '');
  };

  // Helper function to get original extension
  const getImageExtension = (imagePath) => {
    const match = imagePath.match(/\.(jpg|jpeg|png)$/);
    return match ? match[1] : 'jpg';
  };

  return (
    <div className={styles.galleryPage}>
      <SEOHead
        title="Gallery | Bhoomi Techzone Portfolio & Office Showcase"
        description="Explore Bhoomi Techzone’s gallery featuring web, mobile, and software projects. Discover our innovative designs and successful digital solutions."
        keywords="Bhoomi Techzone gallery, IT company photos Noida, office photos, team gallery, events, Gallery"
        canonical="https://bhoomitechzone.in/gallery"
      />
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Our Work Gallery</h1>
            <p className={styles.subtitle}>
              Explore our portfolio showcasing innovative projects, modern designs, and successful solutions delivered across industries.
            </p>
            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.breadcrumbCurrent}>Gallery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Values Section */}
      <section className={styles.cultureSection}>
        <div className={styles.container}>
          <div className={styles.cultureContent}>
            <h2 className={styles.cultureTitle}>Our Memorable Moments at Bhoomi Techzone</h2>
            <p className={styles.cultureText}>
              At Bhoomi Techzone, we believe that a great workplace is built not only on innovation and technology but also on strong team bonding, creativity, and memorable experiences. Our gallery showcases the vibrant culture that drives our team forward and reflects the energy behind every successful project we deliver. From exciting office celebrations to team outings and special events, each moment captured here tells a story of collaboration, passion, and growth. These experiences strengthen our team spirit and help us maintain a positive and motivating work environment.
            </p>
            
            <h2 className={styles.cultureTitle}>A Glimpse Into Our Work Culture</h2>
            <p className={styles.cultureText}>
              Our gallery highlights the real essence of life at Bhoomi Techzone. Whether it's celebrating birthdays, organizing office parties, or enjoying fun-filled trips, we ensure that our team stays motivated and connected. These activities play a key role in enhancing productivity and building a collaborative atmosphere. We believe that a happy team creates better solutions. That's why we regularly organize events that allow our employees to relax, connect, and recharge. This balance between work and fun helps us deliver high-quality <Link to="/software-development">software development</Link>, <Link to="/web-development">web development</Link>, and digital marketing services to our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          {/* Gallery Header */}
          <div className={styles.galleryHeader}>
            <h2 className={styles.sectionTitle}>What You’ll Find in Our Gallery</h2>
            <p className={styles.sectionSubtitle}>
              Take a journey through our exciting activities that make Bhoomi Techzone a vibrant workplace
            </p>
          </div>

          {/* Category Filter */}
          <div className={styles.filterSection}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'all' ? 'All Events' : category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className={styles.galleryGrid}>
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className={styles.galleryItem}
                onClick={() => openLightbox(image)}
              >
                <div className={styles.imageWrapper}>
                  <picture>
                    <source srcSet={`${getImagePath(image.image)}.webp`} type="image/webp" />
                    <img 
                      src={image.image} 
                      alt={image.title} 
                      className={styles.galleryImage} 
                      width="350" 
                      height="250" 
                      loading="lazy" 
                    />
                  </picture>
                  <div className={styles.imageOverlay}>
                    <h3 className={styles.imageTitle}>{image.title}</h3>
                    <p className={styles.imageCategory}>{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className={styles.noResults}>
              <p>No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeLightbox}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <picture>
              <source srcSet={`${getImagePath(selectedImage.image)}.webp`} type="image/webp" />
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className={styles.lightboxImage} 
              />
            </picture>
          </div>
        </div>
      )}

      {/* Why These Moments Matter Section */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.valuesContent}>
            <h2 className={styles.valuesTitle}>Why These Moments Matter</h2>
            <p className={styles.valuesText}>
              At Bhoomi Techzone, we understand that success is not just about delivering projects but also about creating a workplace where people feel inspired. Our gallery is a reflection of our values-teamwork, creativity, and positivity.
            </p>
            <p className={styles.valuesText}>
              These moments help us:
            </p>
            <ul className={styles.valuesList}>
              <li>Build strong team relationships</li>
              <li>Encourage creativity and innovation</li>
              <li>Maintain a healthy work-life balance</li>
              <li>Boost employee satisfaction and productivity</li>
            </ul>
          </div>
        </div>
      </section>

      {/* More Than Just Work Section */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyContent}>
            <h2 className={styles.storyTitle}>More Than Just Work</h2>
            <p className={styles.storyText}>
              Behind every successful website, mobile app, or digital solution we deliver, there is a team that works with dedication and enthusiasm. Our gallery gives you a behind-the-scenes look at the people who make it all happen. We are proud to create not just technology solutions but also a workplace where ideas grow, friendships develop, and success is celebrated together.
            </p>
          </div>
        </div>
      </section>

      {/* Join Our Journey Section */}
      <section className={styles.joinSection}>
        <div className={styles.container}>
          <div className={styles.joinContent}>
            <h2 className={styles.joinTitle}>Join Our Journey</h2>
            <p className={styles.joinText}>
              Want to be part of a dynamic and growing team? Explore our gallery and experience the culture that makes Bhoomi Techzone unique. Whether you are a client, partner, or future team member, we invite you to be part of our journey.
            </p>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default GalleryPage;
