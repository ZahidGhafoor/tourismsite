import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Video from '../build/videos/video-4.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src= {Video} type='video/mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>Explore GERMANY With ZAHID</p>
      <div className='hero-btns'>
        
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>

        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;