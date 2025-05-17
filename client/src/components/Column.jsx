import React from 'react';
import CandidateCard from './CandidateCard';

function Column({ column, columnId }) {
  return (
    <div className="column">
      <h2>{column.name}</h2>
      <div className="candidate-list">
        {column.items.map(candidate => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </div>
  );
}

export default Column;
