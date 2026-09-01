import { Helmet } from 'react-helmet-async';

const SEOHead = ({ title, description, keywords, canonical }) => {
  const siteName = 'Bhoomi Techzone';

  // Title without automatic brand append
  const fullTitle = title || siteName;

  const defaultDescription =
    'Bhoomi Techzone - Leading IT solutions provider offering web development, mobile apps, digital marketing, ERP, CRM and more.';

  const defaultKeywords =
    'Bhoomi Techzone, IT solutions, web development, mobile app, digital marketing, software development';

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta
        name="description"
        content={description || defaultDescription}
      />

      <meta
        name="keywords"
        content={keywords || defaultKeywords}
      />

      {canonical && (
        <link rel="canonical" href={canonical} />
      )}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta name="twitter:title" content={fullTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
    </Helmet>
  );
};

export default SEOHead;