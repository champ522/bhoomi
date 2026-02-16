import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/AboutUs.module.css';

const AboutUs = () => {
    const orbitRef = useRef(null);

    useEffect(() => {
        const orbit = orbitRef.current;
        if (!orbit) return;

        const icons = orbit.querySelectorAll("a");

        function arrangeInCircle() {
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
        }

        arrangeInCircle();

        const handleResize = () => arrangeInCircle();
        window.addEventListener("resize", handleResize);

        icons.forEach(icon => {
            const handleMouseEnter = () => orbit.classList.add(styles.paused);
            const handleMouseLeave = () => orbit.classList.remove(styles.paused);

            icon.addEventListener("mouseenter", handleMouseEnter);
            icon.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            window.removeEventListener("resize", handleResize);
            icons.forEach(icon => {
                const handleMouseEnter = () => orbit.classList.add(styles.paused);
                const handleMouseLeave = () => orbit.classList.remove(styles.paused);

                icon.removeEventListener("mouseenter", handleMouseEnter);
                icon.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return (
        <section className={styles.aboutSection}>
            <div className={styles.container}>
                <div className={styles.aboutContent}>
                    <div className={styles.textContent}>
                        <div className={styles.welcomeSection}>
                            <span className={styles.welcomeText}>Welcome to</span>
                            <div className={styles.welcomeLine}></div>
                        </div>
                        <h2 className={styles.title}>
                            <span className={styles.highlight}>Bhoomi</span> Techzone Pvt. Ltd.
                        </h2>
                        <p className={styles.description}>
                            We are a passionate team of technology experts dedicated to transforming
                            businesses through innovative software solutions. Our mission is to bridge
                            the gap between complex technology and simple, effective business solutions.
                            With over 4 years of experience, we have successfully delivered 250+ projects
                            to satisfied clients across various industries. We specialize in{' '}
                            <Link to="/software-development" style={{ color: '#28a745', textDecoration: 'none' }}>custom software development</Link>,{' '}
                            <Link to="/web-development" style={{ color: '#28a745', textDecoration: 'none' }}>website development</Link>,{' '}
                            <Link to="/mobile-app-development" style={{ color: '#28a745', textDecoration: 'none' }}>mobile app development</Link>, and{' '}
                            <Link to="/web-application" style={{ color: '#28a745', textDecoration: 'none' }}>web applications</Link>.
                        </p>
                        <p className={styles.description}>
                            Based in Noida, Bhoomi Techzone Pvt. Ltd. has been delivering exceptional IT services since 2023. We partner with businesses to create custom web solutions, mobile applications, and enterprise software that drive growth. Our team of experienced developers and digital strategists combines technical expertise with creative innovation to build solutions that truly make a difference.
                        </p>
                        <Link to="/about" className={styles.learnMoreBtn}>
                            Learn More
                        </Link>
                    </div>
                    <div className={styles.imageContent}>
                        <div className={styles.orbitBox}>
                            <img
                                src="/images/girlimg.png"
                                className={styles.centerImg}
                                alt="man with laptop"
                                onError={(e) => {
                                    e.target.src = '/images/aboutimg.jpg';
                                }}
                            />
                            <div className={styles.orbit} ref={orbitRef}>
                                <a href="#"><img src="/images/icon1.png" alt="Innovation" /></a>
                                <a href="#"><img src="/images/icon2.png" alt="Mission" /></a>
                                <a href="#"><img src="/images/icon3.png" alt="Excellence" /></a>
                                <a href="#"><img src="/images/icon9.png" alt="Vision" /></a>
                                <a href="#"><img src="/images/icon4.png" alt="Partnership" /></a>
                                <a href="#"><img src="/images/icon5.png" alt="Growth" /></a>
                                <a href="#"><img src="/images/icon6.png" alt="Experience" /></a>
                                <a href="#"><img src="/images/icon7.png" alt="Creative" /></a>
                                <a href="#"><img src="/images/icon8.png" alt="Solution" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;