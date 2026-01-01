import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Pricing.module.css';

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      title: "Static Website",
      price: "3,999",
      currency: "₹",
      period: "/-",
      description: "Perfect for startups and small businesses.",
      features: [
        "3-5 Modern Design Static Pages",
        "Home, About, Services, Contact etc.",
        "Mobile Friendly",
        "Basic SEO & Speed Optimization"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      id: 2,
      title: "Dynamic Website",
      price: "9,999",
      currency: "₹",
      period: "/-",
      description: "Ideal for growing businesses with contents.",
      features: [
        "Admin Dashboard (CMS)",
        "Blog, Portfolio, or Services Management",
        "Mobile Responsive Design",
        "Delivery in 7-10 Days"
      ],
      buttonText: "Get Started",
      popular: true
    },
    {
      id: 3,
      title: "E-Commerce Website",
      price: "18,999",
      currency: "₹",
      period: "/-",
      description: "Complete online store solution for retailers.",
      features: [
        "Product Catalog + Shopping Cart",
        "Payment Gateway Integration",
        "Admin Dashboard for Inventory & Orders",
        "Mobile & SEO Optimized"
      ],
      buttonText: "Get Started",
      popular: false
    }
  ];

  return (
    <section className={styles.pricingSection}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.welcomeSection}>
            <span className={styles.welcomeText}>Our Pricing</span>
            <div className={styles.welcomeLine}></div>
          </div>
          <h2 className={styles.sectionTitle}>
            Choose Your <span className={styles.titleHighlight}>Perfect</span> Plan
          </h2>
          <p className={styles.sectionDescription}>
            Transparent pricing with no hidden costs. Choose the plan that fits your business needs. All plans include free support and maintenance.
          </p>
        </div>

        <div className={styles.pricingGrid}>
          {pricingPlans.map((plan, index) => (
            <div 
              key={plan.id} 
              className={`${styles.pricingCard} ${plan.popular ? styles.popularCard : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className={styles.popularBadge}>
                  Most Popular
                </div>
              )}
              
              <div className={styles.cardHeader}>
                <h3 className={styles.planTitle}>{plan.title}</h3>
                <div className={styles.priceSection}>
                  <span className={styles.currency}>{plan.currency}</span>
                  <span className={styles.price}>{plan.price}</span>
                  <span className={styles.period}>{plan.period}</span>
                </div>
                <p className={styles.planDescription}>{plan.description}</p>
              </div>

              <div className={styles.cardBody}>
                <ul className={styles.featuresList}>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={styles.featureItem}>
                      <div className={styles.checkIcon}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20,6 9,17 4,12"/>
                        </svg>
                      </div>
                      <span className={styles.featureText}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardFooter}>
                <Link to="/contact" className={styles.ctaButton}>
                  {plan.buttonText}
                </Link>
              </div>

              <div className={styles.cardDecoration}>
                <div className={styles.decorationShape}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;