import React from 'react';
import '../Style/CandidateCard.css';
import { FaGripVertical, FaEllipsisV } from 'react-icons/fa';

const CandidateCard = ({ candidate }) => {
  return (
    <div className="candidate-card">
      <div className="card-top">
        <FaGripVertical className="drag-handle" />
        <FaEllipsisV className="card-menu" />
      </div>
      <img src={candidate.avatar} alt={candidate.name} className="avatar" />
      <h4>{candidate.name}</h4>
      <p className="application-date">Applied at {candidate.appliedDate}</p>
      <div className="rating">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className={i < Math.round(candidate.score) ? 'star filled' : 'star'}>★</span>
        ))} <span className="score-label">{candidate.score} Overall</span>
      </div>
      {candidate.referred && <span className="badge referred">Referred</span>}
      {candidate.addAssessment && <button className="assessment-btn">+ Add Assessment</button>}
    </div>
  );
};

export default CandidateCard;
