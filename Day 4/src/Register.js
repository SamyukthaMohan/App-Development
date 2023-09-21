import React from 'react'
import './Register.css';
import { Link } from 'react-router-dom';

export default function Register() {
  
  return (
    <div>
    <img className='signpic'  src='https://media.istockphoto.com/id/1477512312/photo/happy-kid-and-headphones-for-music-radio-and-fun-podcast-on-isolated-red-background-and.jpg?s=612x612&w=0&k=20&c=ODz-VlQIZiR3wsLjbEtQbTtTDPZlJLAMfJOl_wPvFOI=' alt='sign'
    height={"90%"}></img><text-fieldset required>
    <div id='Allign'>
  <h1 style={{paddingLeft :"58%",paddingTop:"1%"}}>SIGN UP</h1>
  <div>
  <label  className='firstName' for="myInput"><h3>First Name  :</h3></label>
  <input className='firstName1' required type="text" />
  </div>
  <div>
  <label  className='lastName' for="myInput"><h3>Last Name  :</h3></label>
  <input className='lastName1' required type="text" />
  </div>
  <div>
  <label  className='Email' for="myInput"><h3>Email  :</h3></label>
  <input className='Email1' required type="text" />
  </div>
  <div>
  <label  className='ph' for="myInput"><h3>PhoneNumber :</h3></label>
  <input className='ph1' required type="text" />
  </div>
  <div>
  <label  className='pwd' for="myInput"><h3>Password :</h3></label>
  <input className='pwd1' required type="password" />
  </div>
  <div>
  <label  className='cp' for="myInput"><h3>Confirm Password:</h3></label>
  <input className='cp1'required type="password" />
  </div>
  <Link to="/home"><button  className='signup' type="submit">Sign Up</button></Link>
  <label  className='cb1' for="myInput"><h3>I agree to the Terms and Conditions</h3></label>
  <input  className='cb' required type="checkbox" />  
  </div>
  </text-fieldset>
    </div>
  )
}