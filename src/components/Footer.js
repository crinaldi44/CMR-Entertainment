import React from 'react'
import './Footer.css'
import {Link} from 'react-router'

const Footer = () => {
    return (
            <div className="footer__container">
                <div className="footer__menu">
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
                    <ul>
                        <li><b>CONTACT</b></li>
                        <li>Phone: (609) 209-3027</li>
                        <li>Email: chrisr@cmrentertainment.com</li>
                    </ul>
                    <ul>
                        <li><b>LEGAL</b></li>
                        <li>PRIVACY POLICY</li>
                        <li>TERMS & CONDITIONS</li>
                        <li>LICENSE</li>
                    </ul>
                </div>
                <p>Designed and built exclusively for CMR Entertainment ©2021</p>
            </div>
    )
}

export default Footer
