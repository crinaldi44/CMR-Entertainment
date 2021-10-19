import React from 'react'
import './Banner.css'
import Button from './Button'

const Header = (props) => {
    return (
        <div className="banner__container">
            <h2>{props.title}</h2>
            <p>{props.details}</p>
            <Button text="GET A QUOTE" />
        </div>
    )
}

export default Header
