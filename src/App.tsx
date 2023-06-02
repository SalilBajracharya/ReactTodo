import React from 'react';
import Navbar from './components/Nav/Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import Homepage from './components/Home/Homepage';
import Todo from './components/Todo/Todo';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Todo" element={<Todo/>} />
      </Routes>
    </>
  );
}

export default App;
