import React from 'react';

const CandidateModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Add New Candidate</h3>
        <p>(Form coming soon...)</p>
        <button onClick={onClose} className="modal-close-btn">
          Close
        </button>
      </div>
    </div>
  );
};

export default CandidateModal;
