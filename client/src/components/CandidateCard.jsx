import React from 'react';

function CandidateCard({ candidate }) {
  return (
    <div className="candidate-card">
      <h4>{candidate.name}</h4>
      <p>Applied at {candidate.appliedDate}</p>
      <p>{candidate.score} Overall</p>
      {candidate.referred && <p className="referred">Referred</p>}
    </div>
  );
}

export default CandidateCard;
