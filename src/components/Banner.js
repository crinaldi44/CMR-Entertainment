import React from 'react'
import './Banner.css'

const Header = (props) => {
    return (
        <div className="banner__container">
            <h2>{props.title}</h2>
            <p>{props.details}</p>
        </div>
    )
}

export default Header
