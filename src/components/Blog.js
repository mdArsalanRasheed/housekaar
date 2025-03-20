import React from 'react';
import './CompanyPages.css';
import useScrollToTop from './useScrollToTop';
import Seo from './Seo';

const Blog = () => {
  useScrollToTop();

  // Define your blog post data
  const post = {
    title: 'Our Blog - Housekaar Construction Company',
    excerpt:
      'Welcome to our blog, where we share insights, tips, and trends in architecture, interior design, and home construction. Stay updated with the latest news and inspiration from Housekaar.',
    tags: ['architecture', 'interior design', 'construction', 'tips'],
    imageUrl: '/images/blog-banner.jpg', // Replace with your banner image
    publishedDate: '2023-11-20T10:00:00+00:00', // ISO 8601 format
    modifiedDate: '2023-11-25T14:30:00+00:00', // ISO 8601 format
  };

  return (
    <div className="company-page">
      <Seo
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        location="Patna"
        imageUrl={post.imageUrl}
        article={true}
        publishedTime={post.publishedDate}
        modifiedTime={post.modifiedDate}
      />
      <h1>Our Blog</h1>
      <p>
        Welcome to our blog, where we share insights, tips, and trends in
        architecture, interior design, and home construction. Stay updated with
        the latest news and inspiration from Housekaar.
      </p>

      <section className="blog-posts">
        <h2>Featured Posts</h2>
        <article className="blog-post">
          <h3>The Latest Trends in Modern Home Design</h3>
          <p>
            Explore the innovative design trends shaping modern homes, from
            open-plan layouts to sustainable materials.
          </p>
          <a href="/blog/modern-home-design">Read More</a>
        </article>

        <article className="blog-post">
          <h3>Tips for Creating a Productive Home Office</h3>
          <p>
            Discover practical tips and design ideas to create a functional and
            inspiring home office space.
          </p>
          <a href="/blog/home-office-tips">Read More</a>
        </article>

        <article className="blog-post">
          <h3>Sustainable Building Practices for Eco-Friendly Homes</h3>
          <p>
            Learn about the importance of sustainable building and how to
            incorporate eco-friendly practices into your home construction.
          </p>
          <a href="/blog/sustainable-building">Read More</a>
        </article>
      </section>

      <section className="blog-categories">
        <h2>Categories</h2>
        <ul>
          <li>
            <a href="/blog/category/architecture">Architecture</a>
          </li>
          <li>
            <a href="/blog/category/interior-design">Interior Design</a>
          </li>
          <li>
            <a href="/blog/category/construction">Construction</a>
          </li>
          <li>
            <a href="/blog/category/tips">Tips and Advice</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Blog;