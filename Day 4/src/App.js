import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
   <Route path='/' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
