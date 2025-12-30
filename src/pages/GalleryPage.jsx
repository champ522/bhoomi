import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/GalleryPage.module.css';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      title: 'Birthday Celebration 2024',
      category: 'Birthday Party',
      image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80',
      description: 'Celebrating team member birthday with cake and fun activities'
    },
    {
      id: 2,
      title: 'Anniversary Celebration',
      category: 'Birthday Party',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
      description: 'Company anniversary celebration with the entire team'
    },
    {
      id: 3,
      title: 'Birthday Party Fun',
      category: 'Birthday Party',
      image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800&q=80',
      description: 'Team gathering for birthday celebration with decorations'
    },
    {
      id: 4,
      title: 'Mountain Trek 2024',
      category: 'Office Trip',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
      description: 'Annual office trip to the mountains for team bonding'
    },
    {
      id: 5,
      title: 'Beach Outing',
      category: 'Office Trip',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
      description: 'Team enjoying a relaxing day at the beach'
    },
    {
      id: 6,
      title: 'Hill Station Visit',
      category: 'Office Trip',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      description: 'Exploring beautiful hill stations with the team'
    },
    {
      id: 7,
      title: 'Adventure Trip',
      category: 'Office Trip',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
      description: 'Team building through adventure activities and trekking'
    },
    {
      id: 8,
      title: 'Year End Party 2024',
      category: 'Office Party',
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80',
      description: 'Celebrating achievements and success of the year'
    },
    {
      id: 9,
      title: 'Diwali Celebration',
      category: 'Office Party',
      image: 'https://images.unsplash.com/photo-1591271300850-46d0d3c49ec3?w=800&q=80',
      description: 'Festival celebration with traditional decorations and sweets'
    },
    {
      id: 10,
      title: 'Christmas Party',
      category: 'Office Party',
      image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80',
      description: 'Holiday season celebration with gifts and decorations'
    },
    {
      id: 11,
      title: 'Team Dinner Night',
      category: 'Office Party',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
      description: 'Team bonding over dinner and conversations'
    },
    {
      id: 12,
      title: 'Milestone Celebration',
      category: 'Birthday Party',
      image: 'https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=800&q=80',
      description: 'Celebrating team achievements and personal milestones'
    },
    {
      id: 13,
      title: 'Weekend Getaway',
      category: 'Office Trip',
      image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&q=80',
      description: 'Weekend retreat for team relaxation and bonding'
    },
    {
      id: 14,
      title: 'Holi Celebration',
      category: 'Office Party',
      image: 'https://images.unsplash.com/photo-1583241800698-c318e81d8b90?w=800&q=80',
      description: 'Colorful Holi festival celebration with the team'
    },
    {
      id: 15,
      title: 'Success Party',
      category: 'Office Party',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
      description: 'Celebrating project success and team efforts'
    },
    {
      id: 16,
      title: 'Corporate Event',
      category: 'Office Party',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
      description: 'Annual corporate gathering with entertainment and awards'
    },
    {
      id: 17,
      title: 'Nature Trail',
      category: 'Office Trip',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80',
      description: 'Team exploring nature trails and scenic beauty'
    },
    {
      id: 18,
      title: 'Cake Cutting Ceremony',
      category: 'Birthday Party',
      image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=800&q=80',
      description: 'Team gathering for cake cutting and celebration'
    }
  ];

  const categories = ['all', 'Birthday Party', 'Office Trip', 'Office Party'];

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
    </div>
  );
};

export default GalleryPage;
