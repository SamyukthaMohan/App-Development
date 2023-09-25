import React from 'react'
import './AdminDash.css'
import Image1 from './Image1/word.png'
import Image2 from './Image2/bee.png'
import Image3 from './Image3/smart.png'
import Image4 from './Image4/growd.png'

import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './Redux/UserSlice';
import DashBoardPage from './DashboardPage'
import Menuboard from './Menuboard'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

function AdminDash() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // Check if user is not null before accessing its properties
  const email = user ? user.email:"Guest";
  return (
    <div>
    <header>
        <div className="adddash" >
        <Menuboard/></div>
        <nav>
        <ul>
        <div className='addul'>
        <a href="/home">Home</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/admin">Login</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/register">Signup</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        </ul>
        </nav>
        <h3 className='addwel'>Welcome {email} </h3>
        <img className='addword' src={Image1} alt='img'></img>
        <img className='addlogo' src={Image2} alt='img'></img>
        <img className='addsmart' src={Image3} alt='img'></img>
        </header>
    
   <DashBoardPage className="admindash"/>
    
   
   
   
    <button className='addupload'>Upload</button>
    <button className='adddelete'>Delete</button>
   
    <footer className="addfooter">
    <div className="addfooter-content">
    <img  className="addimg8" src={Image4} alt='img'></img>
    <img  className="addimg9" src={Image4} alt='img'></img>
    <img  className="addimg10" src={Image4} alt='img'></img>
    
    <img className='adddash1' src={Image1} alt='img'></img>
    <img className='adddash2' src={Image2} alt='img'></img>
    <img className='adddash3' src={Image3} alt='img'></img>
    <div className='addicon'>
    <FacebookIcon/>
      <WhatsAppIcon/>
      <TwitterIcon/>
      <PinterestIcon/></div>
      <h6 className='addterms'>TERMS AND CONDITIONS</h6>
      <p className='addcon'> User Generated<br/>
      Submission<br/>
      Licenses <br/>
      Trademarks<br/>
      Ownership Rights<br/>
      </p>
      <h6 className='addpolicy'>PRIVACY POLICY</h6>
      <p className='addcon2'>Information we Collect<br/>
      Use of Information<br/>
      Information Sharing<br/>
      Links on Social Media<br/>
      Analytics</p>
      
      </div>

     <p className='addcopy'>&copy; 2023 Bee Smart.all rights reserved</p>
     
   
  </footer>
     
  </div>

  
  
  
  
  
  )
}

//<img className='kids' src='https://media.istockphoto.com/id/1248963146/vector/thirsty-crow.jpg?s=612x612&w=0&k=20&c=DNtPuu28A-I16KC-vTYicg-m8d7Wm7OaLCOUPcsNr4k='></img>
// <DashboardPage/>
export default AdminDash