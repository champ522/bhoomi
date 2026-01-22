import React, { useState } from 'react';
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

  return (
    <div className={styles.galleryPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Our Gallery</h1>
            <p className={styles.subtitle}>
              Explore our portfolio of innovative projects and memorable moments
            </p>
            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.breadcrumbCurrent}>Gallery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          {/* Gallery Header */}
          <div className={styles.galleryHeader}>
            <h2 className={styles.sectionTitle}>Our Memorable Moments</h2>
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
                  <img src={image.image} alt={image.title} className={styles.galleryImage} />
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
            <img src={selectedImage.image} alt={selectedImage.title} className={styles.lightboxImage} />
          </div>
        </div>
      )}
      <CallToAction />
    </div>
  );
};

export default GalleryPage;
