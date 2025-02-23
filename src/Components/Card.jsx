import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, description, imageUrl }) => {

    const navigate = useNavigate();

    const handleSignupClick = ()=>{
        navigate('./signup')
    }


  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Button onClick={handleSignupClick} variant='contained' color="error">Book Now</Button>
    </div>
  );
};

export default Card;