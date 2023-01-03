import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
// import Todo from './Components/TodoApp';
import TodoAppRedux from './ReduxToolkit/TodoApp/index';
import Navbar from './Components/Navbar';
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='todoApp' element={< TodoAppRedux />} />
      </Routes>

    </>
  )
}

export default App