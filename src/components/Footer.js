import React from 'react'
import './Footer.css'
import {Link} from 'react-router'

const Footer = () => {
    return (
            <div className="footer__container">
                <div className="footer__menu">
                    <ul>
                        <b>SOCIAL</b>
                        <br/>Follow us on social media!
                        <div className='footer__menu social'>
                            <li><i className='fa fa-instagram'/></li>
                            <li><i className='fa fa-facebook'/></li>
                            <li><i className='fa fa-twitter'/></li>
                            <li><i className='fa fa-linkedin'/></li>
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
                <p>CMR Entertainment ©2021</p>
            </div>
    )
}

export default Footer
