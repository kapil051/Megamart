import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Home} from "./components/Home"
import {LoginPage} from "./components/Loginpage"

function App() {
  return (
  
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage/>} ></Route>
      </Routes>
 
  );
}

export default App;

