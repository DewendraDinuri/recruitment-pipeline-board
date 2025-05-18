import React from 'react';
import avatar from '../assets/avatar1.png';
import { FaPlus, FaSearch, FaBell } from 'react-icons/fa';

function Navbar() {
  return (
    <header className="navbar-light">
      <div className="navbar-left">
        <span className="logo-text"><strong>tiimi</strong> Recruitment</span>
        <div className="navbar-tabs">
          <div className="tab active">Jobs <span className="tab-count">8</span></div>
          <div className="tab">Candidate <span className="badge">551</span></div>
          <div className="tab">Career Site</div>
        </div>
      </div>
      <div className="navbar-right">
        <button className="icon-btn yellow"><FaPlus /></button>
        <button className="icon-btn"><FaSearch /></button>
        <button className="icon-btn notification">
          <FaBell />
          <span className="dot"></span>
        </button>
        <img src={avatar} alt="Avatar" className="navbar-avatar" />
      </div>
    </header>
  );
}

export default Navbar;
