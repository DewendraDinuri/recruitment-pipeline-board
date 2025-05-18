import CandidateModal from './components/CandidateModal';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Board from './pages/Board';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <CandidateModal show={showModal} onClose={() => setShowModal(false)} />
      <>
        <Navbar />
        <Header />
        <div className="App">
          <Sidebar />
          <Board />
        </div>
      </>
    </>
  );
}

export default App;
