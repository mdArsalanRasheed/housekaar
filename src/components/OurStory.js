import React from 'react';
import './CompanyPages.css';
import useScrollToTop from './useScrollToTop';
import ReusableLanding from './ReusableLanding'
import image2 from '../img/dream_home.jpg'

const OurStory = () => {
    useScrollToTop();
  return (
    <>
    
       <ReusableLanding
      imageUrl={image2}
      title="Our Story"
      description=" Housekaar was founded with a vision to transform the way people design and build their homes. We believe in creating spaces that are not only beautiful but also functional and sustainable."
    />
    <div className="company-page">
      <section>
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide exceptional architectural and construction services, delivering innovative and personalized solutions to our clients. We strive to exceed expectations and build lasting relationships.
        </p>
      </section>

      <section>
        <h2>Our Values</h2>
        <ul>
          <li><strong>Integrity:</strong> We conduct our business with honesty and transparency.</li>
          <li><strong>Quality:</strong> We are committed to delivering the highest standards of workmanship.</li>
          <li><strong>Innovation:</strong> We embrace new technologies and design approaches.</li>
          <li><strong>Customer Focus:</strong> We prioritize our clients' needs and satisfaction.</li>
        </ul>
      </section>

      <section>
        <h2>Our Journey</h2>
        <p>
          Since our inception, we have grown from a small team of passionate professionals to a leading construction company. We have successfully completed numerous projects, earning a reputation for excellence and reliability.
        </p>
      </section>
    </div>
    </>
  );
};

export default OurStory;