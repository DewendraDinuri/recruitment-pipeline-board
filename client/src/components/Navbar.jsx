import React, { useEffect, useState } from 'react';
import { FaPlus, FaSearch, FaBell } from 'react-icons/fa';
import avatar from '../assets/avatar1.png';
import { getCandidateCount, getJobCount } from '../api';
import '../styles/Navbar.css';

function Navbar({ onAddClick }) {
  const [jobCount, setJobCount] = useState(0);
  const [candidateCount, setCandidateCount] = useState(0);

  useEffect(() => {
    async function fetchCounts() {
      const jobs = await getJobCount();
      const candidates = await getCandidateCount();
      setJobCount(jobs);
      setCandidateCount(candidates);
    }
    fetchCounts();
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-section left">
        <span className="navbar-logo">
          <strong className="logo-yellow">tiimi</strong>&nbsp;Recruitment
        </span>
      </div>

      <div className="navbar-section center">
        <div className="navbar-tabs">
          <div className="tab active">Jobs <span className="tab-badge-gray">{jobCount}</span></div>
          <div className="tab">Candidate <span className="tab-badge-orange">{candidateCount}</span></div>
          <div className="tab">Career Site</div>
        </div>
      </div>

      <div className="navbar-section right">
        <button className="nav-btn yellow" onClick={onAddClick}><FaPlus /></button>
        <button className="nav-btn dark"><FaSearch /></button>
        <button className="nav-btn dark notification">
          <FaBell />
          <span className="dot" />
        </button>
        <img src={avatar} alt="avatar" className="nav-avatar" />
      </div>
    </header>
  );
}

export default Navbar;
