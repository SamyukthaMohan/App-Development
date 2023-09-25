import React ,{useState} from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
// import './Settings.css'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
//import Typography from '@mui/material/Typography';
import { selectUser } from './Redux/UserSlice';
import { useSelector } from 'react-redux';






const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


function Wishlist({ username, emailid, password, phoneNumber }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const user = useSelector(selectUser);
  const email = user ? user.email:"Guest";
  const stories = [
  {
    id: 1,
    title: 'The Magical Forest',
    description: 'Join us on an adventure in the enchanted forest with talking animals.',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1477773381i/32807094.jpg', 
    audioUrl: 'forest-story.mp3', 
  }]

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
  
  return (
    
    <div>
    <h4 variant="outlined" onClick={handleClickOpen}>
    Favourites
  </h4>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Favourites
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        
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
        
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  )
}

export default Wishlist