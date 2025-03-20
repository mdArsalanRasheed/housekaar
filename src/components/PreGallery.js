import React, { useState } from 'react';
import housePlanImage from '../img/dream_home.jpg';
import './PreGallery.css';
import { MdOutlineCropSquare, MdOutlineStraighten } from 'react-icons/md'; // Import icons

const DesignGallery = ({ designs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const designsPerPage = 6;

  const totalPages = Math.ceil(designs.length / designsPerPage);
  const startIndex = (currentPage - 1) * designsPerPage;
  const endIndex = startIndex + designsPerPage;
  const visibleDesigns = designs.slice(startIndex, endIndex);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const renderDesignItem = (design) => {
    return (
      <div className="custom-design-built">
        <img
          src={housePlanImage}
          alt={design.title}
          className="design-image"
        />
        <div className="design-details">
          <h3>{design.title}</h3>
          <p>{design.description}</p>
          <p>
            <MdOutlineCropSquare className="layout-icon" /> Layout: {design.layout}
          </p>
          <p>
            <MdOutlineStraighten className="built-area-icon" /> Built area: {design.builtArea}
          </p>
          <a href="/view-details" className="view-details-link">
            View Details
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="design-gallery">
      <div className="design-grid">
        {visibleDesigns.map((design, index) => (
          <div key={index} className="design-item-wrapper">
            {renderDesignItem(design)}
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Back
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default DesignGallery;