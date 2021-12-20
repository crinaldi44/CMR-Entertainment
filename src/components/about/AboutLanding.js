import React from 'react'
import './AboutLanding.css'
import History from '../../images/about/history.png'
import BusinessModel from '../../images/about/business-model.png'
import Button from '../../components/Button'
import {Link} from 'react-router-dom'

/**
 * The AboutLanding component represents a simple alternating flex box component that contains a
 * set of two medium-sized thematic images as well as 2 leading paragraphs. The first paragraph
 * contains some static text regarding the history of the company, whereas the second contains
 * information about the business model.
 * @returns {JSX.Element}
 * @constructor
 */
const AboutLanding = () => {

    return(
        <div className='landing__container'>
            <section>
                <img src={History}/>
                <div className='landing__text'>
                    <h1>Since 1985.</h1>
                    <p>CMR Entertainment was created in 1985. Our DJs played in night clubs, private parties and local radio stations. Back then, we didn't have a website and our business was strictly by word of mouth, repeat customers and referrals with no advertising, except for a business card here and there. There also weren't many options or add on sevices available to our customers. Today, however, we have a website, still have business cards and our business still comes mostly from repeat customers and referrals. We have also added many services and add-ons.</p>
                </div>
            </section>
            <section>
                <img src={BusinessModel} className='last'/>
                <div className='landing__text'>
                    <h1>High-energy, highly engaging.</h1>
                    <p>We understand that months, even years of planning go into your special event. That’s why we ensure that we properly staff your event with our highest-energy event specialists. Our business model is centered around having fun and enjoying what we do. Our entertainment providers will engage with your guests to keep the beat going.</p>
                    <Link to='/contact'>
                        <Button text="Contact us" color='#3F4257'/>
                    </Link>
                </div>
            </section>
        </div>
    )

}

export default AboutLanding;