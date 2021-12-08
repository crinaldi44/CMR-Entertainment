import React from 'react';
import Header from '../../../images/testimonials/header-reviews-1x.png'
import TitleBreak from '../../../images/title-break.png'
import ReviewEntry from '../reviews/ReviewEntry'
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
            <div className='reviews__grid'>
                <ReviewEntry
                    name={'June'}
                    rate={4}
                    title={'Fantastic services!'}
                    comment={'My feet are just now hitting the ground. You did an amazing job and we could not have been more pleased! Your efforts and talent with the video presentation was truly above and beyond!!! We were so surprised and so was Sasha! seeing her on the screen during the cocktail hour with swimming sharks completely set the mood!!!! And man what a remarkable montage!!!!! Really you are talented beyond belief! You really went the extra mile for us and we so appreciated it!\n' +
                    '\n' +
                    '\n' +
                    'Also the kids had a ball and are still talking about all the none stop fun they had! The perfect balance between a party for the kids and the adults!\n' +
                    '\n' +
                    'You are a very special caring and talented person Chris and it shines through every thing you do. Again,thank you from the bottom of our hearts for making this one of the most amazing days of our lives. You and your team are the best!'}
                />
                <ReviewEntry
                    name={'Gene T.'}
                    rate={5}
                    title={'Fantastic Wedding!'}
                    comment={'You were absolutely fabulous for my wife\'s surprise 40th birthday! The music video and karaoke options were awasome! Everyone had such a great time singing karaoke! The music videos added a nice touch to the party as well. We were especially impressed with the selection of music that you played. Our guests danced poolside all night long. Once again, thank you!'}
                />
                <ReviewEntry
                    name={'John & Terry'}
                    rate={5}
                    title={'Amazing!'}
                    comment={'John and I can\'t thank you enough! Chris and Joe were absolutely great and made our son\'s graduation party a huge success! The music that they played was perfect from start to finish! Our guests all commented on how much fun they had and how professional Chris and Joe were. We also had a great time singing Karaoke with our family and friends. They are memories that our son will have forever. See you at our next party.'}
                />
                <ReviewEntry
                    name={'Diane & Steve'}
                    rate={4}
                    title={'Best DJ ever.'}
                    comment={'We can\'t thank you enough for your services; we could not have asked for anything better. Right from the first meeting, Chris was extremely attentive to our wishes and ideas. He helped us organize many details that go along with the big day. You allowed us to personalize our music and were extremely helpful during the planning stages of our big day. You were great to work with both before and during the wedding. I have already passed your name onto a few friends who were very impressed at the wedding. Thanks again!'}
                />
            </div>
        </div>
    );
}

export default Reviews;