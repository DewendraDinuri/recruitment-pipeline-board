import React, { useState } from 'react';
import { FaStar, FaEllipsisV } from 'react-icons/fa';
import '../styles/CandidateCard.css'; // If separated; or remove if all in app.css

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
      <div className="candidate-header">
        {candidate.avatar ? (
          <img src={candidate.avatar} alt={candidate.name} className="avatar" />
        ) : (
          <div className="avatar placeholder">{getInitial(candidate.name)}</div>
        )}
        <div className="candidate-info">
          <strong>{candidate.name}</strong>
          <p className="application-date">Applied at {candidate.appliedDate}</p>
        </div>
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

      <div className="candidate-footer">
        <span className="score-pill">
          <FaStar className="star filled" />
          {candidate.score} Overall
        </span>

        {candidate.referred && (
          <span className="referred-pill">
            <i className="fa fa-user-plus"></i> Referred
          </span>
        )}

        {candidate.assessment && (
          <button className="assessment-btn">+ Add Assessment</button>
        )}
      </div>
    </div>
  );
};

export default CandidateCard;
