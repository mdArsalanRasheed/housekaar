// Seo.js
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Seo = ({
  title,
  description,
  keywords,
  location,
  imageUrl,
  article,
  publishedTime,
  modifiedTime,
}) => {
  const companyName = 'Housekaar Construction Company';
  const defaultTitle = `${companyName} - ${title}`;
  const defaultDescription =
    description ||
    `Housekaar Construction Company provides expert architectural design, interior design, and construction services in ${location}, Bihar. We specialize in creating beautiful and functional homes. Contact us for your dream home.`;
  const defaultKeywords =
    keywords ||
    `house construction, interior design, architectural design, construction company, ${location}, Bihar, Housekaar`;

  return (
    <Helmet>
      <title>{defaultTitle}</title>
      <meta name="description" content={defaultDescription} />
      <meta name="keywords" content={defaultKeywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:site_name" content={companyName} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {article && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {article && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={defaultTitle} />
      <meta name="twitter:description" content={defaultDescription} />
      <meta name="twitter:url" content={window.location.href} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}

      {/* Location specific meta tags */}
      <meta name="geo.region" content={`IN-BR`} />
      <meta name="geo.placename" content={location} />
      <meta name="geo.position" content="25.0961;85.3131" />
      <meta name="ICBM" content="25.0961, 85.3131" />

      {/* Company related */}
      <meta name="author" content={companyName} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={window.location.href} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': article ? 'Article' : 'WebSite',
          'name': defaultTitle,
          'description': defaultDescription,
          'url': window.location.href,
          'image': imageUrl,
          'author': {
            '@type': 'Organization',
            'name': companyName,
          },
          ...(article && publishedTime && { datePublished: publishedTime }),
          ...(article && modifiedTime && { dateModified: modifiedTime }),
        })}
      </script>
    </Helmet>
  );
};

export default Seo;