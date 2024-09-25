// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import P1Component from './Pages/P1';
import P2Component from './Pages/P2';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

const App = () => {
  return (
    <Router>
    
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/p1" element={<P1Component/>}/>
          <Route path="/p2" element={<P2Component/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
     
    </Router>
  );
};

export default App;
