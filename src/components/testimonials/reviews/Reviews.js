import React from 'react';
import Header from '../../../images/testimonials/header-reviews-1x.png'
import TitleBreak from '../../../images/title-break.png'
import './Reviews.css'

/**
 * The Reviews component is a container that holds ReviewEntry items.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function Reviews(props) {
    return (
        <div className='review__container'>
            <div className='reviews__header'>
                <h3 className='reviews__header__title'>WHAT OUR CLIENTS SAY</h3>
                <img className='title__break' src={TitleBreak}/>
            </div>
        </div>
    );
}

export default Reviews;