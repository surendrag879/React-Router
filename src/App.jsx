import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './pages/Navbar/index';
import Home from './pages/Home/index';
import Contact from './pages/Contact/contact'
import Counter from './features/Counter/counter';
import TodoApp from './features/TodoApp/index';
import Login from './pages/Login/index';
import Protected from './Router/Protected';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Protected>Component={Home} </Protected>} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/todoapp' element={<TodoApp />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
      </Routes>


    </>
  );
}

export default App;
