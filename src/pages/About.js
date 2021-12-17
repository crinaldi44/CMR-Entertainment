import React from 'react'
import './About.css'
import Banner from '../components/Banner'
import AboutBanner from '../images/banner/about.png'

const About = () => {
    return (
        <div className="about__container">
            <Banner title="ABOUT US" details="Established in 1985. With over 20 years in the entertainment industry, we bring a modern twist on old school entertainment."
            image={AboutBanner}/>
        </div>
    )
}

export default About
