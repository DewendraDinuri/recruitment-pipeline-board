import React from 'react';

// CandidateModal component for displaying a modal popup
const CandidateModal = ({ show, onClose }) => {
  // If `show` is false, render nothing (modal is hidden)
  if (!show) return null;

  return (
    // Modal overlay to dim the background
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Modal heading */}
        <h3>Add New Candidate</h3>

        {/* Placeholder content – you can replace this with a form */}
        <p>(Form coming soon...)</p>

        {/* Close button */}
        <button onClick={onClose} className="modal-close-btn">
          Close
        </button>
      </div>
    </div>
  );
};

export default CandidateModal;
