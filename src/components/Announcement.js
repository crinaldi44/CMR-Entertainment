import React, { useState } from 'react'
import './Announcement.css'

//This components allows us to display an announcement of our choosing to the user.
const Announcement = (props) => {
    const [isActive, setActive] = useState(true);

    const handleClose = () => {
        setActive(!isActive)
    }

    return (
        <div className="announcement__container" style={isActive ? {display: 'block'} : {display: 'none'}}>
            {props.content}
            <button className="announcement__close_btn"
            onClick={handleClose}><i className="fa fa-close "></i></button>
        </div>
    )
}

export default Announcement
