import React from 'react';
import CandidateCard from './CandidateCard';

function Column({ column, columnId }) {
  return (
    <div className="column">
      {/* Header with stage pill, count, and detail link */}
      <div className="column-header">
        <div className="column-left">
          <span className={`stage-pill ${columnId}`}>{column.name}</span>
          <span className="stage-count">{column.items.length}</span>
        </div>
        <span className="column-detail">Detail &gt;</span>
      </div>

      {/* Candidate Cards */}
      <div className="candidate-list">
        {column.items.map(candidate => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </div>
  );
}

export default Column;
