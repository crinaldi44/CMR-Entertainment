import React from 'react';
import './TestimonialsHeader.css'
import Button from '../Button'
import TestimonialsTopReviews from './TestimonialsTopReviews'
import {Link} from 'react-router-dom'

function TestimonialsHeader(props) {
    return (
        <div className='testimonials_header_container'>
            <div className='testimonials_header_flex'>
                <div className='testimonials_header_text'>
                    <h1 className='testimonial_header_title'>Client</h1>
                    <h1 className='testimonial_header_title2'>Feedback</h1>
                    <p className='testimonial_header_text'>CMR Entertainment has been in the business for over 30 years. While the times have changed, our business mantra has remained the same customer first since the ‘90s!</p>
                    <Link to='/testimonials'><Button text="READ MORE"/></Link>
                </div>
                <TestimonialsTopReviews/>
            </div>
        </div>
    );
}

export default TestimonialsHeader;