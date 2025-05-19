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
      {/* Avatar */}
      {candidate.avatar ? (
        <img src={candidate.avatar} alt={candidate.name} className="avatar" />
      ) : (
        <div className="avatar placeholder">{getInitial(candidate.name)}</div>
      )}

      {/* Name and Info */}
      <strong>{candidate.name}</strong>
      <p>Applied at {candidate.appliedDate}</p>

      {/* Rating */}
      <div className="rating">
        <FaStar className="star filled" />
        <span>{candidate.score} Overall</span>
      </div>

      {/* Referred */}
      {candidate.referred && <p className="referred">Referred</p>}

      {/* Add Assessment */}
      {candidate.assessment && (
        <button className="assessment-btn">+ Add Assessment</button>
      )}

      {/* Three-dot Menu */}
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
