import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './pages/Navbar/index';
import Home from './pages/Home/index';
import Counter from './features/Counter/counter';
import TodoApp from './features/TodoApp/index';
import Login from './pages/Login/index';
import UseMemo from './pages/useMemo';
import UseCallBack from './pages/useCallback';

function App() {
  return (
    <>
      <Navbar />
      <hr/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/todoapp' element={<TodoApp />} />
        <Route path='/useMemo' element={<UseMemo />} />
        <Route path='/useCallback' element={<UseCallBack />} />
        <Route path='/login' element={<Login />} />
      </Routes>


    </>
  );
}

export default App;
