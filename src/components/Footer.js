import React from 'react'
import './Footer.css'
import {Link} from 'react-router'
import logo from '../images/logo.png'

const Footer = () => {
    return (
            <div className="footer__container">
                <div className="footer__menu">
                    <ul>
                        <li><b>CONTACT</b></li>
                        <li>Phone: (609) 209-3027</li>
                        <li>Email: <a href='mailto: chrisr@cmrentertainment.com'>chrisr@cmrentertainment.com</a></li>
                    </ul>
                    <ul>
                        <b>SOCIAL</b>
                        <br/>Stay connected on social media!
                        <div className='footer__menu social'>
                            <li><a href="#"><i className='fa fa-instagram'/></a></li>
                            <li><a href="https://www.facebook.com/cmrdjs"><i className='fa fa-facebook'/></a></li>
                            <li><a href="#"><i className='fa fa-twitter'/></a></li>
                            <li><a href="#"><i className='fa fa-linkedin'/></a></li>
                        </div>
                    </ul>
                    <ul className='footer__section3'>
                        <li><b>LEGAL</b></li>
                        <li>PRIVACY POLICY</li>
                        <li>TERMS & CONDITIONS</li>
                        <li>LICENSE</li>
                    </ul>
                </div>
                <p className='footer__watermark'>
                    <img src={logo} style={{maxWidth: "175px", marginBottom: '20px'}}/>
                    <br/>
                    CMR Entertainment ©2021 | Designed by <a className='footer__link' href='http://rinaldi.netlify.app/'>Chris R</a>
                </p>
            </div>
    )
}

export default Footer
