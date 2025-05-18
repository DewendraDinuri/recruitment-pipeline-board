import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Board from './pages/Board';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="App">
        <Sidebar />
        <Board />
      </div>
    </>
  );
}

export default App;
