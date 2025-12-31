import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/InstagramReelsSection.module.css';

const InstagramReelsSection = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);
  const scriptLoadedRef = useRef(false);

  // Instagram Reel URLs - Replace these with your actual Instagram Reel URLs
  const reels = [
    {
      id: 1,
      url: 'https://www.instagram.com/reel/DS44OPYD1Xc/',
      embedUrl: 'https://www.instagram.com/reel/DS44OPYD1Xc/embed'
    },
    {
      id: 2,
      url: 'https://www.instagram.com/reel/DS44OPYD1Xc/',
      embedUrl: 'https://www.instagram.com/reel/DS44OPYD1Xc/embed'
    },
    {
      id: 3,
      url: 'https://www.instagram.com/reel/DS44OPYD1Xc/',
      embedUrl: 'https://www.instagram.com/reel/DS44OPYD1Xc/embed'
    },
    {
      id: 4,
      url: 'https://www.instagram.com/reel/DS44OPYD1Xc/',
      embedUrl: 'https://www.instagram.com/reel/DS44OPYD1Xc/embed'
    }
  ];

  // Load Instagram embed script
  useEffect(() => {
    if (scriptLoadedRef.current) return;

    const loadInstagramScript = () => {
      // Check if script already exists
      if (document.querySelector('script[src*="instagram.com/embed.js"]')) {
        scriptLoadedRef.current = true;
        setIsLoading(false);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        scriptLoadedRef.current = true;
        setIsLoading(false);
        
        // Process Instagram embeds
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };

      script.onerror = () => {
        console.error('Failed to load Instagram embed script');
        setIsLoading(false);
      };

      document.body.appendChild(script);
    };

    // Delay loading slightly for performance
    const timer = setTimeout(() => {
      loadInstagramScript();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Reprocess embeds when component mounts or updates
  useEffect(() => {
    if (window.instgrm && scriptLoadedRef.current) {
      window.instgrm.Embeds.process();
    }
  }, [isLoading]);

  return (
    <section className={styles.instagramSection} id="instagram-reels">
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.headerContent}>
          <div className={styles.welcomeSection}>
            <span className={styles.welcomeText}>Social Media</span>
            <div className={styles.welcomeLine}></div>
          </div>
          <h2 className={styles.sectionTitle}>
            Watch Our Latest <span className={styles.titleHighlight}>Instagram Reels</span>
          </h2>
          <p className={styles.sectionDescription}>
            Follow us on Instagram for daily tech tips and behind-the-scenes content.
          </p>
        </div>

        {/* Reels Grid */}
        <div className={styles.reelsContainer} ref={containerRef}>
          {isLoading && (
            <div className={styles.loadingGrid}>
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className={styles.skeletonCard}>
                  <div className={styles.skeletonVideo}></div>
                  <div className={styles.skeletonText}></div>
                  <div className={styles.skeletonTextSmall}></div>
                </div>
              ))}
            </div>
          )}

          <div className={`${styles.reelsGrid} ${isLoading ? styles.hidden : ''}`}>
            {reels.map((reel) => (
              <div key={reel.id} className={styles.reelCard}>
                <div className={styles.reelWrapper}>
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={reel.url}
                    data-instgrm-version="14"
                    style={{
                      background: '#FFF',
                      border: '0',
                      borderRadius: '8px',
                      boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                      margin: '1px',
                      maxWidth: '100%',
                      minWidth: '280px',
                      padding: '0',
                      width: 'calc(100% - 2px)'
                    }}
                  >
                    <div style={{ padding: '16px' }}>
                      <a
                        href={reel.url}
                        style={{
                          background: '#FFFFFF',
                          lineHeight: '0',
                          padding: '0 0',
                          textAlign: 'center',
                          textDecoration: 'none',
                          width: '100%'
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View this post on Instagram
                      </a>
                    </div>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramReelsSection;
