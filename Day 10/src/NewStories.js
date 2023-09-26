import React, { useState } from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';
import Image1 from './Image1/word.png'
import Image2 from './Image2/bee.png'
import Image3 from './Image3/smart.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Terms from './Terms'
import  Policy from './Policy'
import Image4 from './Image4/growd.png'
import './NewStories.css';


const stories = [
  {
    id: 1,
    title: 'The Magical Forest',
    description: 'Join us on an adventure in the enchanted forest with talking animals.',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1477773381i/32807094.jpg', 
    audioUrl: 'forest-story.mp3', 
  },
  {
    id: 2,
    title: 'Pirate Adventure',
    description: 'Ahoy, matey! Sail the high seas and find hidden treasure with Captain Jack.',
    imageUrl: 'https://m.media-amazon.com/images/I/61524ji4C-L._AC_UF1000,1000_QL80_.jpg', 
    audioUrl: 'pirate-story.mp3', 
  },
  {
    id: 3,
    title: 'Pirates of the Caribbean',
    description: 'Pirates of the Caribbean is an American fantasy film with fun.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7FSXfzG8YTkrruojixklJi8te2NbxWABP8Q&usqp=CAU', 
    audioUrl: 'pirate-story.mp3', 
  },
  {
    id: 4,
    title: 'Cinderella',
    description: 'After the death of her father,Ella is troubled by her stepmother.',
    imageUrl: 'https://www.sekolahbahasainggris.co.id/wp-content/uploads/2016/12/soi.jpg', 
    audioUrl: 'pirate-story.mp3', 
  },
  {
    id: 5,
    title: 'Heidi',
    description: 'An orphan named Heidi moves to the Swiss to live with her grandfather.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0QbHrYPs2D6ubKt9lD3H-0V2jaL4ypohlmuy3EjWR9_QXKJEaVCPzFX3Nr8CUZkZYexw&usqp=CAU', 
    audioUrl: 'pirate-story.mp3', 
  },
  {
    id: 5,
    title: 'Stuart Little',
    description: 'Stuart Little is a 1999 American live-action-animated comedy film.',
    imageUrl: 'https://m.media-amazon.com/images/S/pv-target-images/31926d18fcff390ad7e08736adca22b0c65f7e39af0629a1b413c313087a9bab.jpg', 
    audioUrl: 'pirate-story.mp3', 
  },
  {
    id: 6,
    title: 'Honey bee',
    description: 'Bee loves freedom,unlike other bees who live in the hive.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiDWNasQBc8dbh1Lse5io5tmB_h-ODKGaIug&usqp=CAU', 
    audioUrl: 'pirate-story.mp3', 
  },
  {
    id: 7,
    title: 'Mary Queen of Scots',
    description: 'Mary Stuart returns to Scotland in order to claim her rightful throne.',
    imageUrl: 'https://digitalfilms.files.wordpress.com/2018/10/df1825_mqos_02.jpg', 
    audioUrl: 'pirate-story.mp3', 
  },
  {
    id: 8,
    title: 'Narnia',
    description: 'While playing,Lucy and her siblings went to a place called Narnia.',
    imageUrl: 'https://cdn.britannica.com/90/103190-050-296352C2/movie-poster-protagonists-CS-Wardrobe-left-Lewis.jpg', 
    audioUrl: 'pirate-story.mp3', 
  },
  {
    id: 9,
    title: 'Pirate Adventure',
    description: 'Ahoy, matey! Sail the high seas and find hidden treasure with Captain Jack.',
    imageUrl: 'https://m.media-amazon.com/images/I/61524ji4C-L._AC_UF1000,1000_QL80_.jpg', 
    audioUrl: 'pirate-story.mp3', 
  },
];


const Story = ({ title, description, imageUrl, audioUrl }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    
      
<div className="story">
      <div className="favorite-icon" onClick={toggleFavorite}>
        {isFavorite ? <StarRateIcon color="error" /> : <StarRateIcon />}
      </div>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <audio controls>
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
   

  );
};

function NewStories() {
  return (
    <>
    <header>
      <nav>
      <ul>
      <div className='storyul'>
<a href="/home">Home</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="/">Logout</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</div>
</ul>
</nav>
<img className='storyword' src={Image1} alt='img'></img>
<img className='storylogo' src={Image2} alt='img'></img>
<img className='storysmart' src={Image3} alt='img'></img>
</header>
    <div className='bc'>
   
    <div className="new-stories">
      <h1 className='fs' >New Stories for Kids</h1>
      <div className="story-container">
        {stories.map((story) => (
          <Story
            key={story.id}
            title={story.title}
            description={story.description}
            imageUrl={story.imageUrl}
            audioUrl={story.audioUrl}
          />
        ))}
      </div>
    </div>
    <footer className="storyfooter">
      <div className="storyfooter-content">
      <img  className="storyimg8" src={Image4} alt='img'></img>
      <img  className="storyimg9" src={Image4} alt='img'></img>
      <img  className="storyimg10" src={Image4} alt='img'></img>
      
      <img className='storydash1' src={Image1} alt='img'></img>
      <img className='storydash2' src={Image2} alt='img'></img>
      <img className='storydash3' src={Image3} alt='img'></img>
      <div className='storyicon'>
      <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'><FacebookIcon/></a>
       <a href='https://web.whatsapp.com/' target='_blank' rel='noreferrer'> <WhatsAppIcon/></a>
       <a href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D' target='_blank' rel='noreferrer'> <TwitterIcon/></a>
       <a href='https://in.pinterest.com/login/' target='_blank' rel='noreferres'> <PinterestIcon/></a></div>
        <h6 className='storyterms'><Terms/></h6>
        <p className='storycon'> User Generated<br/>
        Submission<br/>
        Licenses <br/>
        Trademarks<br/>
        Ownership Rights<br/>
        </p>
        <h6 className='storypolicy'><Policy/></h6>
        <p className='storycon2'>Information we Collect<br/>
        Use of Information<br/>
        Information Sharing<br/>
        Links on Social Media<br/>
        Analytics</p>
        
        </div>

       <p className='storycopy'>&copy; 2023 Bee Smart.all rights reserved</p>
       
     
    </footer>
    </div>
   
    </>
  );
}

export default NewStories;