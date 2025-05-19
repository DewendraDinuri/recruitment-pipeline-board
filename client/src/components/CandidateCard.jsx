import React, { useState } from 'react';
import { FaStar, FaEllipsisV } from 'react-icons/fa';
import '../styles/CandidateCard.css'; // CSS file for styling the candidate card

// CandidateCard component to display individual candidate information
const CandidateCard = ({ candidate }) => {
  const [showMenu, setShowMenu] = useState(false); // Toggle for dropdown menu

  // Helper to get the initial letter of the candidate's name
  const getInitial = (name) => name?.charAt(0).toUpperCase();

  // Handler for deleting a candidate (placeholder logic)
  const handleDelete = () => {
    console.log("Delete candidate", candidate.id);
    setShowMenu(false);
  };

  // Handler for editing a candidate (placeholder logic)
  const handleEdit = () => {
    console.log("Edit candidate", candidate.id);
    setShowMenu(false);
  };

  return (
    <div className="candidate-card">
      {/* Header: avatar, name, and menu */}
      <div className="candidate-header">
        {candidate.avatar ? (
          // Display image avatar if available
          <img src={candidate.avatar} alt={candidate.name} className="avatar" />
        ) : (
          // Fallback to first initial if no avatar image
          <div className="avatar placeholder">{getInitial(candidate.name)}</div>
        )}

        {/* Candidate name and applied date */}
        <div className="candidate-info">
          <strong>{candidate.name}</strong>
          <p className="application-date">Applied at {candidate.appliedDate}</p>
        </div>

        {/* Menu button (3 dots) for edit/delete actions */}
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

      {/* Footer: score, referred badge, and assessment button */}
      <div className="candidate-footer">
        {/* Score pill with star icon */}
        <span className="score-pill">
          <FaStar className="star filled" />
          {candidate.score} Overall
        </span>

        {/* Show 'Referred' badge if applicable */}
        {candidate.referred && (
          <span className="referred-pill">
            <i className="fa fa-user-plus"></i> Referred
          </span>
        )}

        {/* Show assessment button if candidate has assessments */}
        {candidate.assessment && (
          <button className="assessment-btn">+ Add Assessment</button>
        )}
      </div>
    </div>
  );
};

export default CandidateCard;
