import React from 'react'
import './About.css'
import Banner from '../components/Banner'

const About = () => {
    return (
        <div className="about__container">
            <Banner title="ABOUT US" details="Over 20 years in the entertainment industry."/>
            <h1>WHO WE ARE</h1>
            <p>CMR Entertainment was created in 1985. Our DJs played in night clubs, private parties and local radio stations. Back then, we didn't have a website and our business was strictly by word of mouth, repeat customers and referrals with no advertising, except for a business card here and there. There also weren't many options or add on sevices available to our customers. Today, however, we have a website, still have business cards and our business still comes mostly from repeat customers and referrals. We have also added many services and add-ons.</p>
        </div>
    )
}

export default About
