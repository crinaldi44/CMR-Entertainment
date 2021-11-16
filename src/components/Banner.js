import React from 'react'
import './Banner.css'
import Background from '../images/djs.jpeg';

const Header = (props) => {

    const backgroundStyle = {
        backgroundImage: `url(${props.image ? props.image : Background})`
    }

    return (
        <div className="banner__container" style={backgroundStyle}>
            <h2>{props.title}</h2>
            <p>{props.details}</p>
        </div>
    )
}

export default Header
