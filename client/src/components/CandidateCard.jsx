import React, { useState } from 'react';
import { FaStar, FaEllipsisV } from 'react-icons/fa';

const CandidateCard = ({ candidate }) => {
  const [showMenu, setShowMenu] = useState(false);
  const getInitial = (name) => name?.charAt(0).toUpperCase();

  const handleDelete = () => {
    console.log("Delete candidate", candidate.id);
    setShowMenu(false);
  };

  const handleEdit = () => {
    console.log("Edit candidate", candidate.id);
    setShowMenu(false);
  };

  return (
    <div className="candidate-card">
      {candidate.avatar ? (
        <img src={candidate.avatar} className="avatar" alt={candidate.name} />
      ) : (
        <div className="avatar placeholder">{getInitial(candidate.name)}</div>
      )}

      <strong>{candidate.name}</strong>
      <p className="application-date">Applied at {candidate.appliedDate}</p>

      <div className="rating">
        <FaStar className="star filled" />
        <span className="score-label">{candidate.score} Overall</span>
      </div>

      {candidate.referred && <span className="referred">Referred</span>}
      {candidate.assessment && (
        <button className="assessment-btn">+ Add Assessment</button>
      )}

      <div className="card-menu" onClick={() => setShowMenu(!showMenu)}>
        <FaEllipsisV />
        {showMenu && (
          <div className="dropdown-menu">
            <div onClick={handleEdit}>Edit</div>
            <div onClick={handleDelete}>Delete</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CandidateCard;
