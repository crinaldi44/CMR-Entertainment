import {React, useEffect, useState} from 'react';
import Stars from './reviews/Stars'
import './ReviewCard.css'

/**
 * A ReviewCard is a component that interfaces with Google's business developer API.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function ReviewCard(props) {

    const [stars, setStars] = useState(4);

    useEffect(() => {
        fetch('https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/tMKiJ8dWtL1xsx1cA/reviews')
            .then(response => response.json())
            .then(data => console.log(data))
    })

    return (
        <div className='reviewCardContainer'>
            <div className='imageWrapper' data-name={props.name}>
                <img className='topReviewsImage' src={props.image}/>
            </div>
            <Stars rate={4}/>
        </div>
    );
}

export default ReviewCard;