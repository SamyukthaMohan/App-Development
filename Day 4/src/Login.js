import React  from 'react'
import { Link } from 'react-router-dom'
import './Login.css'



export default function Login() {
 

    
    
  return (
    <div>
    <div className='bg'>
    
    </div>
    
    <h1 className='priapp'><b>Ohh!!</b></h1>
    <img className='prilogin' src='https://static.vecteezy.com/system/resources/thumbnails/007/033/146/small_2x/profile-icon-login-head-icon-vector.jpg' alt='login'></img>
    <label className='priph' for="myInput"><h3>Email :</h3></label>
<input className='priphone' type="text" />
<br></br>
<br></br>

  
<label  className='pripsd' for="myInput"><h3>Password   :</h3></label>
<input className='pripwd'  type="text" />
<Link to= "/home"><h3  className='pricont'>Continue</h3></Link>

<h3  className='priforgot'>Forgot Password?</h3>
<h3 className='prinew' ><b>New to OHH : </b></h3>
<Link to='/register'> <h3  className='prisign'>Sign Up!</h3> </Link>
     </div>
  )
}