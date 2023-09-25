import React from 'react'
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Register() {
  
  const nav=useNavigate();
  const[firstname,setusername]=useState("");
  
  const[email,setemail]=useState("");
  const[phonenumber,setphonenumber]=useState("");
  const[password,setpassword]=useState("");
  
  const submit=(event)=>{
    event.preventDefault();
    if(email.length===0&&password.length===0&&phonenumber.length===0) 
    { alert("Enter the Details");

    }
    else
    {
    nav("/")
    }
  }
  return (
    <div>
    <img className='signpic'  src='https://media.istockphoto.com/id/1477512312/photo/happy-kid-and-headphones-for-music-radio-and-fun-podcast-on-isolated-red-background-and.jpg?s=612x612&w=0&k=20&c=ODz-VlQIZiR3wsLjbEtQbTtTDPZlJLAMfJOl_wPvFOI=' alt='sign'
    height={"90%"}></img><text-fieldset required>
    <div id='Allign'>
    <form>
    <h1 style={{paddingLeft :"58%",paddingTop:"1%"}}>SIGN UP</h1>


    <div>
  <label  className='firstName' for="myInput"><h3>Username  :</h3></label>
  <input className='firstName1' value={firstname} required type="text" onChange={(e) =>setusername(e.target.value)}/>
  </div>
  <div>
  <label  className='Email' for="myInput"><h3>Email  :</h3></label>
  <input className='Email1' value={email}  required type="text" onChange={(e) =>setemail(e.target.value)}/>
  </div>
  <div>
  <label  className='ph' for="myInput"><h3>PhoneNumber :</h3></label>
  <input className='ph1' value={phonenumber}  required type="text" onChange={(e) =>setphonenumber(e.target.value)}/>
  </div>
  <div>
  <label  className='pwd' for="myInput"><h3>Password :</h3></label>
  <input className='pwd1' value={password} required type="password" onChange={(e) =>setpassword(e.target.value)}/>
  </div>
  <button  className='signup' type="submit" onClick={submit}>Sign Up</button>
  </form>
  </div>
  </text-fieldset>
  <label  className='cb1' for="myInput"><h3>I agree to the Terms and Conditions</h3></label>
  <input  className='cb' required type="checkbox" />  
    </div>
  )
}
  // <div>
  // <label  className='lastName' for="myInput"><h3>Last Name  :</h3></label>
  // <input className='lastName1'value={lastname}  required type="text" onChange={(e) =>setlastname(e.target.value)}/>
  // </div>
  // <div>
  // <label  className='cp' for="myInput"><h3>Confirm Password:</h3></label>
  // <input className='cp1'  value={confirmpassword} required type="password" onChange={(e) =>setconfirmpassword(e.target.value)}/>
  // </div>