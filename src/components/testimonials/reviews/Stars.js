import React from 'react';
import './Stars.css'

/**
 * The Stars component is intended to represent a reusable component for displayed ratings.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function Stars(props) {

    return (
        <div className='starRatings'>
            <i className="fa fa-star" style={{opacity: props.rate >= 1 ? 1 : 0.5}}></i>
            <i className="fa fa-star" style={{opacity: props.rate >= 2 ? 1 : 0.5}}></i>
            <i className="fa fa-star" style={{opacity: props.rate >= 3 ? 1 : 0.5}}></i>
            <i className="fa fa-star" style={{opacity: props.rate >= 4 ? 1 : 0.5}}></i>
            <i className="fa fa-star" style={{opacity: props.rate >= 5 ? 1 : 0.5}}></i>
        </div>
    );
}

export default Stars;