import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import TodoApp from './Components/TodoApp';
import TodoAppRedux from './ReduxToolkit/TodoApp/index';
import Counter from './ReduxToolkit/Counter';
import Appcontext from './Hooks/contextAPI/index';
import UseReducer from './Hooks/useReducer';
import UseCallback from './Hooks/usecallback';
import FormData from './Pages/FormData';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='todoApp' element={<TodoApp />} />
        <Route path='todoAppRedux' element={<TodoAppRedux />} />
        <Route path='counter' element={< Counter />} />
        <Route path='contextApi' element={<Appcontext />} />
        <Route path='useReducer' element={<UseReducer />} />
        <Route path='useCallback' element={<UseCallback />} />
        <Route path='formData' element={<FormData />} />
      </Routes>

    </>
  )
}

export default App