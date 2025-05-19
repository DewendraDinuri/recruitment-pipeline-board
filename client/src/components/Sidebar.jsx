import React from 'react';
import {
  FaHome,
  FaCalendarAlt,
  FaUsers,
  FaBuilding,
  FaChartLine,
  FaUser,
  FaClock,
  FaCog,
  FaQuestionCircle
} from 'react-icons/fa';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <aside className="vertical-sidebar">
      <div className="sidebar-top">
        <div className="logo-circle">FIK</div>
      </div>

      <div className="sidebar-section">
        <FaHome title="Home" />
        <FaCalendarAlt title="Calendar" />
        <FaUsers title="Candidates" />
        <div className="icon-active">
          <FaBuilding title="Jobs" />
          <span className="dot" />
        </div>
        <FaUser title="Profile" />
        <FaClock title="Logs" />
        <FaChartLine title="Reports" />
      </div>

      <div className="sidebar-bottom">
        <FaCog title="Settings" />
        <FaQuestionCircle title="Help" />
        <div className="circle-help">?</div>
      </div>
    </aside>
  );
}

export default Sidebar;
