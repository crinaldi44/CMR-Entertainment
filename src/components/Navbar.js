import logo from '../images/logo.svg'
import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Button from './Button'

const Navbar = () => {
    return (
        <>
            <nav>
                    <Link to="/" className="logo"><img src={logo} alt="Logo" /></Link>
                    <ul className="navMenu">
                        <Link to="/">Home</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/about">Services</Link>
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
