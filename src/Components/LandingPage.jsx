import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Footer from './Footer';
import './LandingPage.css';

const LandingPage = () => {
  const cardsData = [
    {
      title: 'Sona Luxury Hotel',
      description: 'Experience sona luxury with our premium rooms.',
      imageUrl: 'https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=',
    },
    {
      title: 'Suite Room',
      description: 'Enjoy the extra space and comfort of our suites.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRTc72J6M65xCBTfHpqQ4B6gBlo4X0gVAfpg&s',
    },
    {
      title: 'Family Room',
      description: 'Perfect for families looking for a comfortable stay.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMN8ZZ9Ffw6A1rs-tDQObrUHp5TF5qP9JLYw&s',
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} imageUrl={card.imageUrl} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;