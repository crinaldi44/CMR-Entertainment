import React from 'react'
import './Services.css'
import DJ from '../images/djs.jpeg'
import Photographers from '../images/photographers.jpeg'
import Videographers from '../images/videographers.jpeg'

const Services = () => {
    return (
        <div className="services__container">
            <h1>OUR SERVICES</h1>
            <div className="service__info">
                <div className="service__info__description">
                    <h3>Disc Jockeys</h3>
                    <p>The music makes the moment - and with over 20 years of experience, you can expect the tone to be just right throughout the duration of your event.</p>
                </div>
                <img src={DJ} alt="DJ"/>
            </div>
            <div className="service__info">
                <img src={Photographers} alt="Photographers"/>
                <div className="service__info__description">
                    <h3>Photographers</h3>
                    <p>Every special event someday will be looked back upon. We capture these special days for your viewing and reminescing pleasure and turn moments into memories!</p>
                </div>
            </div>
            <div className="service__info">
                <div className="service__info__description">
                    <h3>Videographers</h3>
                    <p>The music makes the moment - and with over 20 years of experience, you can expect the tone to be just right throughout the duration of your event.</p>
                </div>
                <img src={Videographers} alt="Videographers"/>
            </div>
        </div>
    )
}

export default Services
