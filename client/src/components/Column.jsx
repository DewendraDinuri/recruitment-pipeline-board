import React from 'react';
import CandidateCard from './CandidateCard';

function Column({ title, stage, candidates }) {
  const filteredCandidates = candidates.filter(c => c.stage === stage);

  return (
    <div className="column">
      <div className="column-header">
        <div className="column-title-wrapper">
          <span className={`column-title ${stage}`}>{title}</span>
          <span className="column-count">{filteredCandidates.length}</span>
        </div>
        <span className="column-detail">Detail &gt;</span>
      </div>

      <div className="candidate-list">
        {filteredCandidates.map(candidate => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </div>
  );
}

export default Column;