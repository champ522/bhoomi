import React, { useState } from 'react';
import styles from '../styles/ClientReviews.module.css';

const ClientReviews = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      id: 1,
      type: "youtube",
      title: "Cab Booking App",
      videoId: "lHBEUSLq7G4",
      thumbnail: "https://img.youtube.com/vi/lHBEUSLq7G4/hqdefault.jpg"
    },
    {
      id: 2,
      type: "youtube",
      title: "CRM Solution Overview",
      videoId: "zDfDRVZWyhU",
      thumbnail: "https://img.youtube.com/vi/zDfDRVZWyhU/hqdefault.jpg"
    },
    {
      id: 3,
      type: "youtube",
      title: "Gym Website Project",
      videoId: "-bUTdPnhC8c",
      thumbnail: "https://img.youtube.com/vi/-bUTdPnhC8c/hqdefault.jpg"
    },
    {
      id: 4,
      type: "youtube",
      title: "E-commerce Platform Demo",
      videoId: "du56Lh0WV4g",
      thumbnail: "https://img.youtube.com/vi/du56Lh0WV4g/hqdefault.jpg"
    },
    {
      id: 5,
      type: "youtube",
      title: "CRM & Website",
      videoId: "h71AZ_cDcag",
      thumbnail: "https://img.youtube.com/vi/h71AZ_cDcag/hqdefault.jpg"
    },
    {
      id: 6,
      type: "youtube",
      title: "Hospital Management App",
      videoId: "8zDNpyc-5lo",
      thumbnail: "https://img.youtube.com/vi/8zDNpyc-5lo/hqdefault.jpg"
    },
    {
      id: 7,
      type: "direct",
      title: "Dynamic Website",
      videoUrl: "/images/clintvideo.mp4",
      thumbnail: "/images/clvthumb.png"
    }
  ];


  const handleVideoPlay = (video) => {
    setActiveVideo(video);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  return (
    <section className={styles.clientReviews}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.welcomeSection}>
            <span className={styles.welcomeText}>Project Reviews</span>
            <div className={styles.welcomeLine}></div>
          </div>
          <h2 className={styles.sectionTitle}>
            Our <span className={styles.titleHighlight}>Client</span> Reviews
          </h2>
          <p className={styles.sectionDescription}>
            Watch how we bring ideas to life through innovative solutions
          </p>
        </div>

        <div className={styles.videosGrid}>
          {videos.map((video) => (
            <div key={video.id} className={styles.videoCard}>
              <div className={styles.videoContainer}>
                <div
                  className={styles.videoThumbnail}
                  onClick={() => handleVideoPlay(video)}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className={styles.thumbnailImage}
                    onError={e => {
                      // If maxresdefault fails, try hqdefault
                      if (e.target.src.includes('maxresdefault')) {
                        e.target.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                      } else if (e.target.src.includes('hqdefault')) {
                        // If hqdefault also fails, use a generic placeholder
                        e.target.src = 'https://via.placeholder.com/320x180?text=No+Preview';
                      }
                    }}
                  />
                  <div className={styles.playButton}>
                    <svg viewBox="0 0 24 24" width="50" height="50" fill="white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className={styles.videoInfo}>
                <h3>{video.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {activeVideo && (
          <div className={styles.videoModal} onClick={closeVideo}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeBtn} onClick={closeVideo}>×</button>
              <div className={styles.videoWrapper}>
                {activeVideo.type === "youtube" ? (
                  <iframe
                    width="100%"
                    height="400"
                    src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1`}
                    title="Project Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video
                    width="100%"
                    height="400"
                    controls
                    autoPlay
                    style={{ backgroundColor: '#000' }}
                  >
                    <source src={activeVideo.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientReviews;