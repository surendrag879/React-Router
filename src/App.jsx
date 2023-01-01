import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Todo from './Components/TodoApp';
import Navbar from './Components/Navbar';
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='todoApp' element={< Todo />} />
      </Routes>

    </>
  )
}

export default App