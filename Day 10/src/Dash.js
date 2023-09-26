import React from 'react'
import './Dash.css'
import Image1 from './Image1/word.png'
import Image2 from './Image2/bee.png'
import Image3 from './Image3/smart.png'
import DashBoardPage from './DashboardPage'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
//import Image5 from './Image5/group.png'
import Terms from './Terms'
import Policy from './Policy'


function Dash() {

  
  return (
    <div>
    <div className='dashheader'>
    <Link to="/home"><h6 className='dashbutton'>Home</h6></Link>
    <Link to="/"><h6 className='dashbutton1'>Logout</h6></Link>
    <img className='dashword' src={Image1} alt='img'></img>
        <img className='dashlogo' src={Image2} alt='img'></img>
        <img className='dashsmart' src={Image3} alt='img'></img></div>
        <img className='dashimg2' src='https://images.unsplash.com/photo-1629196911514-cfd8d628ba26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60' alt='img'></img>
        <img className='dashimg1' src='https://media.istockphoto.com/id/1420807222/photo/senior-woman-podcasting-together-with-grandson-via-internet.jpg?s=612x612&w=0&k=20&c=gc4o8B9n_Nb274EFt5LLzefcGbDeCkJxNCC-iydY_cI=' alt='img'></img>
    <h2 className='dashh2'>Let's Listening to Audio</h2>
    <p className='dashpara'>Listen to audiobooks,<br/> podcasts,
     Audible Originals <br/>and more.</p>

     <div>
     <DashBoardPage className="dashbox"/>
     </div>
     <footer className="dashfooter">
     <div className="dashfooter-content">
        <img className='dash1' src={Image1} alt='img'></img>
        <img className='dash2' src={Image2} alt='img'></img>
        <img className='dash3' src={Image3} alt='img'></img></div>
        <div className='dashicon'>
        <Link to='https://www.facebook.com/' target='_blank' rel='noreferrer'><FacebookIcon/></Link>
       <Link to='https://web.whatsapp.com/' target='_blank' rel='noreferrer'> <WhatsAppIcon/></Link>
       <Link to='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D' target='_blank' rel='noreferrer'> <TwitterIcon/></Link>
       <Link to='https://in.pinterest.com/login/' target='_blank' rel='noreferres'> <PinterestIcon/></Link>
        <h6 className='dashterms'><Terms/><br/><br/></h6>
        <p className='dashcon'> Acceptance of Terms<br/><br/>
        User Registration<br/><br/>
        User Conduct<br/><br/>
        Modifications<br/><br/>
        Limitation of Liability<br/><br/>
        </p>
        <h6 className='dashpolicy'><Policy/><br/><br/></h6>
        <p className='dashcon2'>Information we Collect<br/><br/>
        Use of Information<br/><br/>
        Information Sharing<br/><br/>
        Links on Social Media<br/><br/>
        Analytics</p>
        <h5 className='dashfaq'><Link to={"/home/#what"}>About us<br/><br/></Link>
        <Link to={"/contact"}>Contact<br/><br/></Link>
        <Link to={"/faq"}>FAQ</Link></h5>
        <h6 className='dashdia'>I started this site because I love the web and the dialogue it sparks.</h6>
        </div>
        
        <p className='dashcopy'>&copy; 2023 Bee Smart.all rights reserved</p>
        
        </footer>
    </div>
  
  
    )
  }
  
  //<img className='dashgroup' src={Image5} alt='img'></img>
//<img className='kids' src='https://media.istockphoto.com/id/1248963146/vector/thirsty-crow.jpg?s=612x612&w=0&k=20&c=DNtPuu28A-I16KC-vTYicg-m8d7Wm7OaLCOUPcsNr4k='></img>
export default Dash