import React from 'react';
import './TestimonialsTopReviews.css'
import ReviewCard from './ReviewCard'
import Photo1 from '../../images/testimonials/review1-1x.png'
import Photo2 from '../../images/testimonials/review2-1x.png'


/**
 * The TestimonialsTopReviews component will render a small card view containing
 * top reviews via the Google Maps and business ratings API. Prior to render,
 * the component will fetch the data and store it in a JSON object. Then, for each of the
 * two components, data from the top reviews will be injected.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function TestimonialsTopReviews(props) {
    return (
        <div className='topReviewsContainer'>
            <h2 className='topReviewsHeader'>Top Reviews</h2>
            <div className='topReviewsFlex'>
                <ReviewCard name='Paul T.' image={Photo1}/>
                <ReviewCard name='Erik G.' image={Photo2}/>
            </div>
        </div>
    );
}

export default TestimonialsTopReviews;