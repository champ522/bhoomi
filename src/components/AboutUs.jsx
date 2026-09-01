import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/AboutUs.module.css';

const AboutUs = () => {
  const orbitRef = useRef(null);

  useEffect(() => {
    const orbit = orbitRef.current;
    if (!orbit) return;

    const icons = orbit.querySelectorAll("a");

    const arrangeInCircle = () => {
      const radius = orbit.offsetWidth / 2 + 5;
      const centerX = orbit.offsetWidth / 2;
      const centerY = orbit.offsetHeight / 2;
      const total = icons.length;

      icons.forEach((icon, i) => {
        const angle = (i / total) * (2 * Math.PI);
        const x = centerX + radius * Math.cos(angle) - icon.offsetWidth / 2;
        const y = centerY + radius * Math.sin(angle) - icon.offsetHeight / 2;

        icon.style.left = `${x}px`;
        icon.style.top = `${y}px`;
      });
    };

    arrangeInCircle();
    window.addEventListener("resize", arrangeInCircle);

    return () => window.removeEventListener("resize", arrangeInCircle);
  }, []);

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.aboutContent}>

          {/* TEXT SECTION */}
          <div className={styles.textContent}>
            <div className={styles.welcomeSection}>
              <span className={styles.welcomeText}>Welcome to</span>
              <div className={styles.welcomeLine}></div>
            </div>

            <h2 className={styles.title}>
              <span className={styles.highlight}>Bhoomi</span> Techzone Pvt. Ltd.
            </h2>

            <p className={styles.description}>
              We are a passionate team of technology experts dedicated to transforming businesses through innovative IT services and cutting-edge software solutions. Our mission is simple ,bridge the gap between complex technology and effective, results-driven business outcomes. As a trusted IT services company in India.
              we have spent over 4 years delivering{' '}
              <Link to="/software-development" className={styles.link}>
                custom software development
              </Link>,{' '}
              <Link to="/web-development" className={styles.link}>
                website development
              </Link>,{' '}
              <Link to="/mobile-app-development" className={styles.link}>
                mobile app development
              </Link>and {' '}
              <Link to="/web-application" className={styles.link}>
                web applications
              </Link> that actually move the needle for our clients.
            </p>

            <p className={styles.description}>
              Based in Noida, Bhoomi Techzone Pvt. Ltd. has been delivering exceptional IT services company since 2023 - and in that time, we have successfully completed 250+ projects for satisfied clients across industries like FinTech, EdTech, Real Estate, Logistics, and Manufacturing. We partner with startups, SMEs, and enterprises to build custom web solutions, mobile applications, and enterprise software that drive real business growth. Our team of experienced developers and digital strategists combines deep technical expertise with creative innovation - because at Bhoomi Techzone, we don't just write code, we build solutions that truly make a difference.
            </p>

            <Link to="/about" className={styles.learnMoreBtn}>
              More About Bhoomi Techzone
            </Link>
          </div>

          {/* IMAGE SECTION */}
          <div className={styles.imageContent}>
            <div className={styles.orbitBox}>

              {/* CENTER IMAGE */}
              <picture>
                <source srcSet="/images/girlimg.webp" type="image/webp" />
                <img
                  src="/images/girlimg.png"
                  width="300"
                  height="400"
                  className={styles.centerImg}
                  alt="Bhoomi Techzone Professional Team"
                  loading="eager"
                />
              </picture>

              {/* ORBIT ICONS */}
              <div className={styles.orbit} ref={orbitRef}>
                {[
                  "icon1", "icon2", "icon3", "icon4",
                  "icon5", "icon6", "icon7", "icon8", "icon9"
                ].map((icon, index) => (
                  <Link
                    key={index}
                    to="/services"
                    aria-label={`Service ${index + 1}`}
                  >
                    <picture>
                      <source srcSet={`/images/${icon}.webp`} type="image/webp" />
                      <img
                        src={`/images/${icon}.png`}
                        alt={`Service icon ${index + 1}`}
                        width="64"
                        height="64"
                        loading="lazy"
                      />
                    </picture>
                  </Link>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;