import React, { useState }  from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './AdminLogin.css'
import { useDispatch } from "react-redux";
import { login } from './Redux/UserSlice';
// import {Image} from './Images/adminbg.jpg';


export default function AdminLogin() {
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
   else{      navigate("/addash");
   }
      dispatch(
        login({
          email: formdata.email,
        })
);
};
  return (
    <div>
    <div className='adbg'>
    </div>
    <form>
    <div className="adcover"></div>
    <h1 className='adlogin'>Admin Login</h1>
    <label className='adpriph' for="myInput"><h3>Email :</h3></label>
    <input className='adpriphone' name='email' type="text" required value={formdata.email}
    onChange={handleChange}/>
<br></br>
<br></br>


<label  className='adpripsd' for="myInput"><h3>Password   :</h3></label>
<input className='adpripwd' name='password' type="password" required value={formdata.password}
onChange={handleChange} />
<Link to={"/addash"}></Link><button  className='adprilog' onClick={handleSubmit}>Admin Login</button>







</form>
</div>
)
//<img className='prilogin' src='https://static.vecteezy.com/system/resources/thumbnails/007/033/146/small_2x/profile-icon-login-head-icon-vector.jpg' alt='login'></img>
//<img id = "img1" src='https://media.istockphoto.com/id/1271954585/photo/the-best-songs-keep-you-smiling.jpg?s=612x612&w=0&k=20&c=DEhyrl7GhUJfwQJt7cUyviY7VJSCbEGrmZicbcos8UM=' alt='img'></img>
//<img className='adimg1' src="./Images/adminbg.jpg" alt='background'></img>
}