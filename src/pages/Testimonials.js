import React from 'react'
import TestimonialsHeader from '../components/testimonials/TestimonialsHeader'
import Reviews from '../components/testimonials/reviews/Reviews'
import './Testimonials.css'


/**
 * The Testimonials page will display a live set of top Google reviews as well as a header
 * explaining the background.
 * @returns {*}
 * @constructor
 */
const Testimonials = () => {

    return(
        <div className='testimonial__page__container'>
            <Reviews/>
        </div>
    )
}

export default Testimonials