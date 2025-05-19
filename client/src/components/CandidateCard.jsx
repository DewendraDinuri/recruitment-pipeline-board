
import React, { useState } from 'react';

const CandidateCard = ({ candidate }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleDelete = () => {
    console.log("Delete candidate", candidate.id);
    setShowMenu(false);
  };

  const handleEdit = () => {
    console.log("Edit candidate", candidate.id);
    setShowMenu(false);
  };

  return (
    <div className="candidate-card" style={{ position: 'relative' }}>
      <div className="card-top">
        <span className="drag-handle">⋮⋮</span>
        <span className="card-menu" onClick={() => setShowMenu(!showMenu)}>⋮</span>
        {showMenu && (
          <div className="dropdown-menu">
            <div onClick={handleEdit}>Edit</div>
            <div onClick={handleDelete}>Delete</div>
          </div>
        )}
      </div>
      <img src={candidate.avatar} alt={candidate.name} className="avatar" />
      <strong>{candidate.name}</strong>
      <p>Applied at {candidate.appliedDate}</p>
      <p>⭐ {candidate.score} Overall</p>
      {candidate.referred && <p className="referred">Referred</p>}
      {candidate.assessment && <button className="assessment-btn">+ Add Assessment</button>}
    </div>
  );
};

export default CandidateCard;
