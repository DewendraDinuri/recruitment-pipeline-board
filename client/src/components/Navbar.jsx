import React, { useEffect, useState } from 'react';
import avatar from '../assets/avatar1.png';
import { FaPlus, FaSearch, FaBell } from 'react-icons/fa';
import { getCandidateCount, getJobCount } from '../api';
import '../Style/Navbar.css';

function Navbar() {
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
    <header className="navbar-dark">
      <div className="navbar-left">
        <span className="logo-text"><strong>tiimi</strong> Recruitment</span>
        <div className="navbar-tabs">
          <div className="tab active">Jobs <span className="tab-count">{jobCount}</span></div>
          <div className="tab">Candidate <span className="badge">{candidateCount}</span></div>
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
