import React from 'react';
import Column from '../components/Column';
import { DragDropContext } from 'react-beautiful-dnd';
import candidatesData from '../data/candidates';

const columnsFromBackend = {
  applying: {
    name: 'Applying Period',
    items: candidatesData.filter(c => c.stage === 'applying'),
  },
  screening: {
    name: 'Screening',
    items: candidatesData.filter(c => c.stage === 'screening'),
  },
  interview: {
    name: 'Interview',
    items: candidatesData.filter(c => c.stage === 'interview'),
  },
  test: {
    name: 'Test',
    items: candidatesData.filter(c => c.stage === 'test'),
  }
};

function Board() {
  return (
    <div className="board">
      <div className="columns">
        {Object.entries(columnsFromBackend).map(([columnId, column]) => (
          <Column key={columnId} columnId={columnId} column={column} />
        ))}
      </div>
    </div>
  );
}

export default Board;
