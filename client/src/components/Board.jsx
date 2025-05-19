import React from 'react';
import Column from '../components/Column';
import { getGroupedCandidates } from '../data/candidates'; // or your state

function Board() {
  const columns = getGroupedCandidates(); // or fetch from props/state

  return (
    <div className="board">
      {Object.entries(columns).map(([columnId, column]) => (
        <Column key={columnId} column={column} columnId={columnId} />
      ))}
    </div>
  );
}

export default Board;
