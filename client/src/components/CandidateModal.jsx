
import React from 'react';

const CandidateModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '10px',
        width: '400px',
        maxWidth: '90%'
      }}>
        <h3>Add New Candidate</h3>
        <p>(Form coming soon...)</p>
        <button onClick={onClose} style={{
          marginTop: '15px',
          background: '#ef4444',
          color: 'white',
          padding: '6px 12px',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer'
        }}>Close</button>
      </div>
    </div>
  );
};

export default CandidateModal;
