import React, { useState }  from 'react'
import Image1 from './Image1/word.png'
import Image2 from './Image2/bee.png'
import Image3 from './Image3/smart.png'
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
    username: "",
    password:"",
});

const dispatch = useDispatch();
    const navigate=useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      if(formdata.username.length===0){
        alert("Enter Username!")
      }
      else if(formdata.password.length===0){
        alert("Enter Password!")
      }
   else{      navigate("/home");
   }
      dispatch(
        login({
          username: formdata.username,
        })
);
};
  return (
    <div>
    <div className='bg'>
    </div>
    <header id='sammheader'>
        <img className='logword' src={Image1} alt='img'></img>
        <img className='loglogo' src={Image2} alt='img'></img>
        <img className='logsmart' src={Image3} alt='img'></img>
    </header>
    <form>
    <div className="cover"></div>
    <h1 className='login'>Log in..</h1>
   
    <input className='dappa' name='username' type="text" placeholder='UserName' required value={formdata.username}
    onChange={handleChange}/>
<br></br>
<br></br>
<input className='pripwd' name='password' type="password" placeholder='Password' required value={formdata.password}
onChange={handleChange} />
<h3  className='priforgot'><Forget/></h3>
<button  className='prilog' onClick={handleSubmit}>Login</button>

<p className='prinew' ><b>Don't have account yet? </b></p>
<Link to='/register'> <p  className='prisign'>Sign Up!</p> </Link>


<p className='pri' ><b>Are you an admin? Go to </b></p>
<Link to={"/admin"}><p  className='priadd'>Admin</p></Link>
</form>
</div>
)
//<img className='prilogin' src='https://static.vecteezy.com/system/resources/thumbnails/007/033/146/small_2x/profile-icon-login-head-icon-vector.jpg' alt='login'></img>
//<img id = "img1" src='https://media.istockphoto.com/id/1271954585/photo/the-best-songs-keep-you-smiling.jpg?s=612x612&w=0&k=20&c=DEhyrl7GhUJfwQJt7cUyviY7VJSCbEGrmZicbcos8UM=' alt='img'></img>
}