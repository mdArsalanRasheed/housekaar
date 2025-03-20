import React from 'react';
import './CompanyPages.css';
import useScrollToTop from './useScrollToTop';

const Careers = () => {
    useScrollToTop();
  return (
    <div className="company-page">
      <h1>Careers</h1>
      <p>
        Join our team and be part of a dynamic and innovative company. At Housekaar, we offer exciting career opportunities for talented professionals in architecture, design, and construction.
      </p>

      <section>
        <h2>Current Openings</h2>
        <article className="job-opening">
          <h3>Architect</h3>
          <p>We are seeking a creative and experienced architect to join our design team.</p>
          <a href="/careers/architect">Apply Now</a>
        </article>

        <article className="job-opening">
          <h3>Interior Designer</h3>
          <p>We are looking for a passionate interior designer to create inspiring and functional spaces.</p>
          <a href="/careers/interior-designer">Apply Now</a>
        </article>

        <article className="job-opening">
          <h3>Construction Manager</h3>
          <p>We need a skilled construction manager to oversee our building projects.</p>
          <a href="/careers/construction-manager">Apply Now</a>
        </article>
      </section>

      <section>
        <h2>Why Join Us?</h2>
        <ul>
          <li><strong>Growth Opportunities:</strong> Advance your career with professional development.</li>
          <li><strong>Collaborative Environment:</strong> Work with a team of talented and supportive colleagues.</li>
          <li><strong>Meaningful Projects:</strong> Contribute to projects that make a difference.</li>
          <li><strong>Competitive Benefits:</strong> Enjoy a comprehensive benefits package.</li>
        </ul>
      </section>

      <section>
        <h2>How to Apply</h2>
        <p>
          To apply for a position, please send your resume and cover letter to <a href="mailto:careers@housekaar.com">careers@housekaar.com</a>.
        </p>
      </section>
    </div>
  );
};

export default Careers;