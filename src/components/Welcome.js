import React from 'react'
import './Welcome.css'
import Wedding from '../videos/wedding-front.mp4'

const Welcome = () => {
    return (
        <div className="welcome__container">
            <div className="welcome__subsection">
                <div className="welcome__text">
                    <h3>Entertainment for all</h3>            
                    <h2>One of South Jersey's top-rated entertainment providers.</h2>
                    <p>CMREntertainment.com. We are a full service entertainment company serving the Tri-State area and beyond. As owner and president of of CMR Entertainment, together with our staff of very experienced and talented entertainers we bring with us many years of experience in the entertainment industry.</p>
                </div>
                <video className="welcome__video" src={Wedding} autoPlay loop muted />
            </div>
        </div>
    )
}

export default Welcome
