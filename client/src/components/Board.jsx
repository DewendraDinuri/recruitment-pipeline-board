import React, { useState } from 'react';
import CandidateModal from './CandidateModal'; // Modal component for adding new candidates
import candidates from './candidates'; // Sample or actual candidate data
import Column from './Column'; // Column component to display candidates by stage

function Board() {
  // State to control whether the candidate modal is shown
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {/* Header section with button to trigger modal */}
      <div className="board-header">
        <button
          onClick={() => setShowModal(true)} // Show the modal when clicked
          className="modal-trigger-button"
        >
          Add New Candidate
        </button>
      </div>

      {/* Main board with three columns for different hiring stages */}
      <div className="board">
        {/* Each Column represents a hiring stage */}
        <Column title="Applying Period" stage="applying" candidates={candidates} />
        <Column title="Screening" stage="screening" candidates={candidates} />
        <Column title="Interview" stage="interview" candidates={candidates} />
      </div>

      {/* Modal for adding new candidates, shown conditionally */}
      <CandidateModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default Board;
