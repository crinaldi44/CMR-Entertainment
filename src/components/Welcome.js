import React from 'react'
import './Welcome.css'
import Photo1 from '../images/welcome/photo1.png'
import Photo2 from '../images/welcome/photo2.png'
import Photo3 from '../images/welcome/photo3.png'

const Welcome = () => {
    return (
        <div className="welcome__container">
            <div className="welcome__subsection">
                <div className="welcome__text">
                    <h3>Entertainment for all</h3>            
                    <h2>One of South Jersey's top-rated entertainment providers.</h2>
                    <p>We are a full service entertainment company serving the Tri-State area and beyond. As owner and president of of CMR Entertainment, together with our staff of very experienced and talented entertainers we bring with us many years of experience in the entertainment industry.</p>
                </div>
                <img src={Photo1} className="welcome__image"/>
            </div>
            <div className="welcome__subsection">
            <img src={Photo2} className="welcome__image"/>
                <div className="welcome__text">
                    <h3>Any event. Any time.</h3>
                    <h2>Weddings, parties, ceremonies and more.</h2>
                    <p>Our Staff's experience includes working in Philadelphia radio, DJing in the area's hottest night clubs, as well as countless numbers of Weddings, Socials, Corporate Events, Bar and Bat Mitzvahs, Sweet 16's, Graduation parties, etc. We pride ourselves at delivering the highest level of quality entertainment, videography, photo booths and other services available.</p>
                </div>
            </div>
            <div className="welcome__subsection">
                <div className="welcome__text">
                    <h3>Entertainment. And beyond.</h3>            
                    <h2>One-stop shop for all entertainment needs</h2>
                    <p>We provide a wide range of services including wedding planning, DJ, photography, green screen, and more! If there is a missing piece to your event that you'd like for us to fulfill, additional services are available upon request and we will provide or connect you with the right vendor.</p>
                </div>
                <img src={Photo3} className="welcome__image"/>
            </div>
        </div>
    )
}

export default Welcome
