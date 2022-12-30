import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './_Components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import About from './Pages/about';
import Contact from './Pages/Contact';

import Protected from './Routes/Protected';
import UseMemo from './Hooks/useMemo';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={'comming soon.....'} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={'comming soon....'} />
        <Route path='/login' element={<Login />} />

        <Route path='/protected' element={<Protected />}>
          <Route path='/useMemo' element={<UseMemo />} />
        </Route>

      </Routes>


    </>
  );
}

export default App;
