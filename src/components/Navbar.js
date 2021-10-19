import logo from '../images/logo.svg'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Button from './Button'

const Navbar = () => {

    //Represents whether we are using the solid navbar state.
    const [navSolid, setNavSolid] = useState(false);

    //Toggles a background when we scroll past a certain amount.
    const toggleBackground = () => {
        if (window.scrollY >= 80) {
            setNavSolid(true);
        } else {
            setNavSolid(false);
        }
    }
    
    window.addEventListener('scroll', toggleBackground)

    return (
        <>
            <nav className={navSolid ? 'navbar active' : 'navbar'}>
                    <Link to="/" className="logo"><img src={logo} alt="Logo" /></Link>
                    <ul className="navMenu">
                        <Link to="/">Home</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Contact Us</Link>
                        <Button text='CLIENT LOGIN' />
                    </ul>
                    <button className="showMenuBtn"><i className="fa fa-bars"></i></button>
            </nav>
        </>
    )
}

export default Navbar
