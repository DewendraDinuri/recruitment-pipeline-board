import React, { useState } from 'react';
import CandidateModal from './CandidateModal';
import candidates from './candidates'; // your data
import Column from './Column';

function Board() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="board-header">
        <button onClick={() => setShowModal(true)} className="modal-trigger-button">
          Add New Candidate
        </button>
      </div>

      <div className="board">
        <Column title="Applying Period" stage="applying" candidates={candidates} />
        <Column title="Screening" stage="screening" candidates={candidates} />
        <Column title="Interview" stage="interview" candidates={candidates} />
      </div>

      <CandidateModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default Board;
