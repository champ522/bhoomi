import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/AboutUs.module.css';

const AboutUs = () => {
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
                            to satisfied clients across various industries. We specialize in custom software
                            development, web applications, mobile apps, and cloud solutions.
                        </p>
                        <p className={styles.description}>
                            Based in Noida, Bhoomi Techzone Pvt. Ltd. has been delivering exceptional IT services since 2023. We partner with businesses to create custom web solutions, mobile applications, and enterprise software that drive growth. Our team of experienced developers and digital strategists combines technical expertise with creative innovation to build solutions that truly make a difference.
                        </p>
                        <Link to="/about" className={styles.learnMoreBtn}>
                            Learn More
                        </Link>
                    </div>
                    <div className={styles.imageContent}>
                        <div className={styles.imageContainer}>
                            <img
                                src="/images/aboutimg.jpg"
                                alt="BhoomiTech About Us"
                                className={styles.aboutImage}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            <div className={styles.imagePlaceholder} style={{ display: 'none' }}>
                                <div className={styles.placeholderIcon}>🏢</div>
                                <p>About BhoomiTech</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;