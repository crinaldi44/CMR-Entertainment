import React from 'react';
import './ReviewEntry.css'
import Stars from './Stars'

/**
 * A ReviewEntry is a customizable component that contains the name of a person,
 * a review title, a review description, and a star rating (from 1 to 5). The
 * recommended use case for this component is to have an AJAX request made
 * in a useEffect hook from the parent component and pass in JSON data
 * as components for the first n review entries, however the content may
 * also remain static.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function ReviewEntry(props) {

    /**
     * Represents the maximum number of characters allotted in the comment section of a given ReviewEntry.
     * @type {number}
     */
    const MAX_CHAR_LENGTH = 450;

    /**
     * If the length of the comment passed via props is greater than the max character length,
     * a reduced version of the review comment is returned with ellipses (...), otherwise, the
     * function will simply return the comment passed via props.
     * @returns {string|*}
     */
    const comment = () => {
        return props.comment.length > MAX_CHAR_LENGTH ? (props.comment.substring(0, MAX_CHAR_LENGTH) + '...') : props.comment;
    }

    return (
        <div className='review__entry__container'>
            <div className='review__top__section'>
                <h3 className='initials'>{props.name[0]}</h3>
                <div className='review__name__rate'>
                    <p className='name'>{props.name}</p>
                    <Stars rate={props.rate} />
                </div>
            </div>
            <div className='review__content'>
                <p className='review__content__title'><strong>{props.title}</strong></p>
                <p className='review__content__paragraph'>{comment()}</p>
            </div>
        </div>
    );
}

export default ReviewEntry;