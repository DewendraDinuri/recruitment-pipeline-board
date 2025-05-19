import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Board from './pages/Board';
import CandidateModal from './components/CandidateModal';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar onAddClick={() => setShowModal(true)} />
      <Header />
      <div className="App">
        <Sidebar />
        <Board />
      </div>
      <CandidateModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

export default App;
