import React from 'react';
import CandidateCard from './CandidateCard';
import '../app.css'
function Column({ column, columnId }) {
  return (
    <div className="column">
      <div className="column-header">
        <div className="column-title-wrapper">
          <span className={`column-title ${columnId}`}>{column.name}</span>
          <span className="column-count">{column.items.length}</span>
        </div>
        <span className="column-detail">Detail &gt;</span>
      </div>
      
      <div className="candidate-list">
        {column.items.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </div>
  );
}

export default Column;
