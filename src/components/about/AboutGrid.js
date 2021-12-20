import React from 'react';
import './AboutGrid.css'
import Mobile from '../../images/about/mobile.png'
import Commerce from '../../images/about/commerce.png'
import Analytics from '../../images/about/analytics.png'
import GridImage from '../../images/about/grid-image.png'

/**
 * The AboutGrid exposes a few bits of miscellaneous information regarding customer satisfaction,
 * service-provider insurance, etc.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function AboutGrid(props) {
    return (
        <div className='aboutg__container'>
            <div className='aboutgrid__wrapper'>
                <h1>Guests have fun at good events. But they'll <i>remember</i> great events.</h1>
                <div className='grid__container'>
                    <div className='grid__cell'>
                        <img className='grid__image' src={Mobile}/>
                        <p><strong>Customer Satisfaction Statement</strong></p>
                        <p className='grid__description'>At CMR Entertainment, we are continually monitoring our growth and customer satisfaction through our customer's evaluations and always welcome any of your suggestions. We especially appreciate our repeat customers who continue to utilize our services.</p>
                    </div>
                    <div className='grid__cell'>
                        <img className='grid__image' src={Commerce}/>
                        <p><strong>We're insured. For your safety.</strong></p>
                        <p className='grid__description'>Because our company uses state-of-the-art equipment and we continually maintain our inventory to provide reliable services, our company is fully insured to meet all catering hall requirements.</p>
                    </div>
                    <div className='grid__cell'>
                        <img className='grid__image' src={Analytics}/>
                        <p><strong>Quality assurance, ensured.</strong></p>
                        <p className='grid__description'>We are always looking to improve! Following your event, we will send out an event experience survey which will allow you to let us know how we did! If you have any special requests or shoutouts, you are free to include those in your review.</p>
                    </div>
                    <div className='grid__cell'>
                        <img className='grid__image2' src={GridImage}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutGrid;