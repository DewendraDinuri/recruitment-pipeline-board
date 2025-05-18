import React from 'react';
import { FaArrowLeft, FaUser, FaMapMarkerAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="page-header">
      <div className="header-container">
        <div className="header-left">
          <FaArrowLeft className="back-icon" />
          <div>
            <h2>Research and Development Officer</h2>
            <div className="job-meta">
              <span className="badge green">🟢 Open</span>
              <span className="badge gray"><FaUser /> Researcher</span>
              <span className="badge gray"><FaMapMarkerAlt /> Onsite</span>
              <span className="badge creator">👤 Created by Bagus Fikri</span>
            </div>
          </div>
        </div>
        <div className="header-right">
          <span className="pagination">1 of 8</span>
          <button className="more-btn">⋮</button>
        </div>
      </div>

      <div className="header-tabs">
        <div className="tabs">
          <span className="tab active">Candidates</span>
          <span className="tab">Job Info</span>
          <span className="tab">Calendar</span>
          <span className="tab">Score Card</span>
          <span className="tab">Activity</span>
        </div>
        <div className="filters">
          <input type="text" className="search" placeholder="Search" />
          <select className="filter"><option>Date Range</option></select>
          <select className="filter"><option>Score Range</option></select>
        </div>
      </div>
    </div>
  );
};

export default Header;
