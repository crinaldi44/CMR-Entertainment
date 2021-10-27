import React from 'react'
import './Hero.css'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

//Represents a hero. Includes two state props that will represent the hero image as well as the background image.
const Hero = () => {

    return (
        <div className="hero-container">
            <div className="hero-text">
                <h1>World class events. Over 20 years of experience.</h1>
                <h2>Complete your event with DJs, photo-booths, photographers and more.</h2>
                <Link to="/services">
                    <Button text='Learn More' large={true}/>
                </Link>
            </div>
        </div>
    )
}

export default Hero
