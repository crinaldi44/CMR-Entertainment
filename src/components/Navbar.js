import logo from '../images/logo.svg'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Button from './Button'

const Navbar = () => {

    //Represents whether we are using the solid navbar state.
    const [navSolid, setNavSolid] = useState(false);

    //In responsive mode, represents whether the navmenu is shown or hidden.
    const [showNav, setShowNav] = useState(false);

    //Toggles a background when we scroll past a certain amount.
    const toggleBackground = () => {
        if (window.scrollY >= 80) {
            setNavSolid(true);
        } else {
            setNavSolid(false);
        }
    }

    //In responsive mode, toggles the state of the navmenu from shown to hidden.
    const toggleShowNavMenu = () => {
        setShowNav(!showNav)
        if (showNav === false && window.scrollX < 80) {
            setNavSolid(true);
        }
        console.log(`Nav: ${showNav}`)
    }

    window.addEventListener('scroll', toggleBackground)

    return (
        <>
            <nav className={navSolid ? 'navbar active' : 'navbar'}>
                    <Link to="/" className="logo"><img src={logo} alt="Logo" /></Link>
                    <ul className={!showNav ? 'navMenu' : 'navMenu responsive'} onClick={toggleShowNavMenu}>
                        <Link to="/">Home</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Contact Us</Link>
                        <a href='http://www.cmrentertainmentplanning.com/'><Button text='CLIENT LOGIN'/></a>
                    </ul>
                    <button className="showMenuBtn" onClick={toggleShowNavMenu}><i className={showNav ? "fa fa-close" : "fa fa-bars"}></i></button>
            </nav>
        </>
    )
}

export default Navbar
