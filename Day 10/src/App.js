import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import './App.css';
import Dash from './Dash';
// import DashboardPage from './DashboardPage';
import AdminLogin from './AdminLogin';
import AdminDash from './AdminDash';
import Languages from './Languages';
import Home from './Home'
import Settings from './Settings';
import FaQ from './FaQ';
import NewStories from './NewStories';
import Contact from './Contact';
import Wishlist from './Wishlist';

function App() {
  return (
    
    <div className="App">
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
     <Route path='/dash' element={<Dash/>}></Route>
     <Route path='/admin' element={<AdminLogin/>}></Route>
     <Route path='/addash' element={<AdminDash/>}></Route>
     <Route path='/lang' element={<Languages/>}></Route>
     <Route path='/home' element={<Home/>}></Route>
     <Route path='/set' element={<Settings/>}></Route>
     <Route path='/faq' element={<FaQ/>}></Route>
     <Route path='/story' element={<NewStories/>}></Route>
     <Route path='/contact' element={<Contact/>}></Route>
     <Route path='/wish' element={<Wishlist/>}></Route>


      </Routes>
    </BrowserRouter>
    </div>
    );
  }
  
  export default App;
