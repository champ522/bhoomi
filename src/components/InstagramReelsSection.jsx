import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/InstagramReelsSection.module.css';

const InstagramReelsSection = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [reels, setReels] = useState([]);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const containerRef = useRef(null);
  const scriptLoadedRef = useRef(false);

  // Fetch Instagram Reels from backend API
  const fetchReels = async (forceRefresh = false) => {
    try {
      setIsLoading(true);
      setError(null);

      // Replace with your actual backend URL
      const url = forceRefresh 
        ? 'https://backend.bhoomitechzone.in/api/reels?refresh=true'
        : 'https://backend.bhoomitechzone.in/api/reels';
      
      const response = await fetch(url);
      const result = await response.json();

      if (result.success) {
        // Transform API data to component format
        const transformedReels = result.data.map((reel) => ({
          id: reel.id,
          url: reel.permalink,
          embedUrl: `${reel.permalink}embed`,
          caption: reel.caption || '',
          thumbnail: reel.thumbnail_url,
          mediaUrl: reel.media_url,
          timestamp: reel.timestamp
        }));
        
        // Randomly shuffle and select 4 reels
        const shuffled = [...transformedReels].sort(() => Math.random() - 0.5);
        const randomFour = shuffled.slice(0, 4);
        
        setReels(randomFour);
        setLastUpdated(new Date());
      } else {
        setError(result.error || 'Failed to fetch reels');
        console.error('Error fetching reels:', result.error);
      }
    } catch (err) {
      setError('Unable to connect to Instagram API');
      console.error('Error fetching reels:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReels();
  }, []);

  // Load Instagram embed script
  useEffect(() => {
    if (scriptLoadedRef.current) return;

    const loadInstagramScript = () => {
      // Check if script already exists
      if (document.querySelector('script[src*="instagram.com/embed.js"]')) {
        scriptLoadedRef.current = true;
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        scriptLoadedRef.current = true;
        
        // Process Instagram embeds
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };

      script.onerror = () => {
        console.error('Failed to load Instagram embed script');
      };

      document.body.appendChild(script);
    };

    // Delay loading slightly for performance
    const timer = setTimeout(() => {
      loadInstagramScript();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Reprocess embeds when reels are loaded
  useEffect(() => {
    if (window.instgrm && scriptLoadedRef.current && reels.length > 0) {
      setTimeout(() => {
        window.instgrm.Embeds.process();
      }, 100);
    }
  }, [reels]);

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
          {lastUpdated && (
            <div className={styles.updateInfo}>
              <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
              <button 
                onClick={() => fetchReels(true)} 
                className={styles.refreshButton}
                disabled={isLoading}
              >
                {isLoading ? '🔄 Updating...' : '🔄 Refresh'}
              </button>
            </div>
          )}
        </div>

        {/* Reels Grid */}
        <div className={styles.reelsContainer} ref={containerRef}>
          {/* Error Message */}
          {error && (
            <div className={styles.errorMessage}>
              <p>⚠️ {error}</p>
              <p className={styles.errorSubtext}>Please check your backend server or try again later.</p>
            </div>
          )}

          {/* Loading Skeleton */}
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

          {/* Reels Grid */}
          {!isLoading && !error && reels.length > 0 && (
            <div className={styles.reelsGrid}>
              {reels.map((reel) => (
                <div key={reel.id} className={styles.reelCard}>
                  <div className={styles.reelWrapper}>
                    <a 
                      href={reel.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.reelLink}
                    >
                      <div className={styles.videoContainer}>
                        <video
                          className={styles.reelVideo}
                          poster={reel.thumbnail}
                          loop
                          muted={isMuted}
                          playsInline
                          onMouseEnter={(e) => e.target.play()}
                          onMouseLeave={(e) => {
                            e.target.pause();
                            e.target.currentTime = 0;
                          }}
                        >
                          <source src={reel.mediaUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <button 
                          className={styles.unmuteButton}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsMuted(!isMuted);
                          }}
                          title={isMuted ? 'Unmute' : 'Mute'}
                        >
                          {isMuted ? '🔇' : '🔊'}
                        </button>
                        
                        <div className={styles.playIcon}>
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.6)" />
                            <path d="M18 14L34 24L18 34V14Z" fill="white" />
                          </svg>
                        </div>
                        <div className={styles.instagramIcon}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </div>
                      </div>
                      {reel.caption && (
                        <div className={styles.reelCaption}>
                          <p>{reel.caption.slice(0, 80)}{reel.caption.length > 80 ? '...' : ''}</p>
                        </div>
                      )}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Reels Found */}
          {!isLoading && !error && reels.length === 0 && (
            <div className={styles.noReels}>
              <p>📱 No reels found at the moment.</p>
              <p className={styles.noReelsSubtext}>Check back soon for new content!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InstagramReelsSection;
