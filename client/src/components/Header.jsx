import React from 'react';
import {
  FaArrowLeft,
  FaChevronLeft,
  FaChevronRight,
  FaShareAlt,
  FaUsers,
  FaFileAlt,
  FaCalendarAlt,
  FaClipboardList,
  FaBolt,
  FaWpforms,
  FaCog,
  FaUser,
  FaMapMarkerAlt,
  FaUserPlus
} from 'react-icons/fa';
import { RiBarChartGroupedLine } from 'react-icons/ri'; // Kanban-style icon
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
          <FaShareAlt className="icon-btn" />
          <button className="share-btn"><FaShareAlt /> Share & Promote</button>
        </div>
        <div className="header-tags">
          <span className="badge green">🟢 Open</span>
          <span className="badge gray"><FaUser /> Researcher</span>
          <span className="badge gray"><FaMapMarkerAlt /> Onsite</span>
          <span className="badge creator">Created by Bagus Fikri</span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="header-tabs">
        <div className="tabs">
          <span className="tab active"><FaUsers className="tab-icon" /> Candidates</span>
          <span className="tab"><FaFileAlt className="tab-icon" /> Job Info</span>
          <span className="tab"><FaCalendarAlt className="tab-icon" /> Calendar</span>
          <span className="tab"><FaClipboardList className="tab-icon" /> Score Card</span>
          <span className="tab"><FaBolt className="tab-icon" /> Activity</span>
          <span className="tab"><FaWpforms className="tab-icon" /> Application Form</span>
          <span className="tab"><FaCog className="tab-icon" /> Automation <span className="automation-badge">5</span></span>
        </div>

        
        <div className="filters">
          <input type="text" placeholder="Search" className="search" />
          <select className="filter"><option>Date Range</option></select>
          <select className="filter"><option>Score Range</option></select>
          <select className="filter"><option>Advance Filter</option></select>

          
          <button className="filter">
            <FaUserPlus className="tab-icon" />
            Refer People
          </button>
          <button className="filter">
            <RiBarChartGroupedLine className="tab-icon" />
            Kanban ▾
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
