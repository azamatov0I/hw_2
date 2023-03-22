import React from 'react';
import TaskList from './components/List';
import Modal from './components/Modal';
import { useState } from 'react';
import Home from './components/Home';

function App() {
  const tasks = [
    { id: 1, task: 'coding' },
    { id: 2, task: 'eat' },
    { id: 3, task: 'sleep' },
  ];
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>  
      <div>
        <h1>My Task List</h1>
        <TaskList tasks={tasks} />
        
      </div>
      <div>
      <h1>My App</h1>
      <button onClick={() => setModalOpen(true)}>Open modal</button>
      <Modal isOpen={modalOpen} onClose={handleModalClose} />
      <Home />
    </div>
    </>
  );
}

export default App;
