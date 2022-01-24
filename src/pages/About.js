import React from 'react'
import './About.css'
import Banner from '../components/Banner'
import AboutBanner from '../images/banner/about.png'
import AboutLanding from '../components/about/AboutLanding'
import AboutGrid from '../components/about/AboutGrid'

const About = () => {
    return (
        <div className="about__container">
            <Banner title="ABOUT US" details="Established in 1985. With over 30 years in the entertainment industry, we bring a modern twist on old school entertainment."
            image={AboutBanner} height='615px'/>
            <AboutLanding/>
            <AboutGrid/>
        </div>
    )
}

export default About
