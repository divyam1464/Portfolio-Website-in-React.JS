import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt=''></img>
      <h1><span>I'm Divyam Agarwal, Software Developer based in India.</span></h1>
      <p>I am a Frontend Developer based from India , with 2 years of experience in the Technology Development.</p>
      <div className='hero-action'>
        <div className='hero-connect'>Connect with me</div>
        <div className='hero-resume'>My Resume</div>
      </div>
    </div>
  )
}

export default Hero
