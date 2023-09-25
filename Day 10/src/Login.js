import React, { useState }  from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { useDispatch } from "react-redux";
import { login } from './Redux/UserSlice';
import Forget from './Forget'


export default function Login() {
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
    console.log(formdata);
  };
  const [formdata, setFormdata] = useState({
    email: "",
    password:"",
});

const dispatch = useDispatch();
    const navigate=useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      if(formdata.email.length===0){
        alert("Enter Email!")
      }
      else if(formdata.password.length===0){
        alert("Enter Password!")
      }
   else{      navigate("/home");
   }
      dispatch(
        login({
          email: formdata.email,
        })
);
};
  return (
    <div>
    <div className='bg'>
    </div>
    <form>
    <div className="cover"></div>
    <h1 className='login'>Login..</h1>
    <label className='priph' for="myInput"><h3>UserName :</h3></label>
    <input className='dappa' name='email' type="text" required value={formdata.email}
    onChange={handleChange}/>
<br></br>
<br></br>


<label  className='pripsd' for="myInput"><h3>Password   :</h3></label>
<input className='pripwd' name='password' type="password" required value={formdata.password}
onChange={handleChange} />
<button  className='prilog' onClick={handleSubmit}>Login</button>
<Link to={"/admin"}><button  className='priadd'>Admin</button></Link>


<h3  className='priforgot'><Forget/></h3>
<h3 className='prinew' ><b>New to BEESmart : </b></h3>
<Link to='/register'> <button  className='prisign'>Sign Up!</button> </Link>
</form>
</div>
)
//<img className='prilogin' src='https://static.vecteezy.com/system/resources/thumbnails/007/033/146/small_2x/profile-icon-login-head-icon-vector.jpg' alt='login'></img>
//<img id = "img1" src='https://media.istockphoto.com/id/1271954585/photo/the-best-songs-keep-you-smiling.jpg?s=612x612&w=0&k=20&c=DEhyrl7GhUJfwQJt7cUyviY7VJSCbEGrmZicbcos8UM=' alt='img'></img>
}