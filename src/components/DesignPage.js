import React from 'react';
import './DesignPage.css'
import InquiryForm from './InquiryForm'; // Adjust path as needed
import Process from './Process'; // Adjust path as needed
import useScrollToTop from './useScrollToTop';
import ReusableLanding from './ReusableLanding';
import image1 from '../img/pexels-itsterrymag-2635038.jpg';

const DesignPage = () => {
  useScrollToTop();
  return (
    <div>
      <ReusableLanding
        imageUrl={image1}
        title="Our Custom Home Design Process: Step-by-Step"
        description="Use Housekaar customized house designing services to design your dream home your way - fast, easy and affordably."
      />
      <Process />
      <InquiryForm />
    </div>
  );
};

export default DesignPage;