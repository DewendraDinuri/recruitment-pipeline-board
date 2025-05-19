import React from 'react';
import { FaArrowLeft, FaUser, FaMapMarkerAlt, FaShareAlt, FaEllipsisH, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="page-header">
      {/* Top Section */}
      <div className="header-top">
        <div className="header-title-row">
          <FaArrowLeft className="back-icon" />
          <h2>Research and Development Officer</h2>
          <span className="dropdown-icon">▾</span>
          <div className="pagination-controls">
            <FaChevronLeft />
            <FaChevronRight />
            <span>1 of 8</span>
          </div>
          <FaEllipsisH className="icon-btn" />
          <button className="share-btn"><FaShareAlt /> Share & Promote</button>
        </div>
        <div className="header-tags">
          <span className="badge green">🟢 Open</span>
          <span className="badge gray"><FaUser /> Researcher</span>
          <span className="badge gray"><FaMapMarkerAlt /> Onsite</span>
          <span className="badge creator">👤 Created by Bagus Fikri</span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="header-tabs">
        <div className="tabs">
          <span className="tab active">👥 Candidates</span>
          <span className="tab">📄 Job Info</span>
          <span className="tab">📅 Calendar</span>
          <span className="tab">🗂️ Score Card</span>
          <span className="tab">⚡ Activity</span>
          <span className="tab">📝 Application Form</span>
          <span className="tab">⚙️ Automation <span className="badge gray">5</span></span>
        </div>
        <div className="filters">
          <input type="text" placeholder="Search" className="search" />
          <select className="filter"><option>Date Range</option></select>
          <select className="filter"><option>Score Range</option></select>
          <select className="filter"><option>Advance Filter</option></select>
          <button className="filter">👤 Refer People</button>
          <button className="filter">📊 Kanban ▾</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
