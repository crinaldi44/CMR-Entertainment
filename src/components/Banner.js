import React from 'react'
import './Banner.css'
import Background from '../images/wedding-photo.png';

const Header = (props) => {

    const backgroundStyle = {
        backgroundImage: `url(${props.image ? props.image : Background})`,
        height: `${props.height ? props.height : '100%'}`
    }

    return (
        <div className="banner__container" style={backgroundStyle}>
            <div className='banner__effects'>
                <h2>{props.title}</h2>
                <p>{props.details}</p>
            </div>
        </div>
    )
}

export default Header
