import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import candidatesData from '../data/candidates';
import CandidateCard from '../components/CandidateCard';
export default Board;

const getGroupedCandidates = () => ({
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
});

function Board() {
  const [columns, setColumns] = useState(getGroupedCandidates());

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    const sourceCol = columns[source.droppableId];
    const destCol = columns[destination.droppableId];
    const sourceItems = [...sourceCol.items];
    const destItems = [...destCol.items];
    const [movedItem] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, movedItem);

    setColumns({
      ...columns,
      [source.droppableId]: { ...sourceCol, items: sourceItems },
      [destination.droppableId]: { ...destCol, items: destItems },
    });
  };

  return (
    <div className="board">
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.entries(columns).map(([columnId, column]) => (
          <Droppable droppableId={columnId} key={columnId}>
            {(provided) => (
              <div
                className="column"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2>{column.name}</h2>
                <div className="candidate-list">
                  {column.items.map((candidate, index) => (
                    <Draggable key={candidate.id} draggableId={candidate.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <CandidateCard candidate={candidate} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
}
