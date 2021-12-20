import React from 'react'
import './ServicesExpose.css'
import { Link } from 'react-router-dom'
import Button from '../Button'
import Image1 from '../../images/services/expose-image1.png'


//Represents a component that will expose some of the finer details of each service.
const ServicesExpose = () => {
    return (
        <div className='expose__container'>
            <section className='expose__section1'>
                <div className="expose__section1__description">
                        <h1>Customize Your Event.</h1>
                        <p>We provide a host of professional entertainment services and can accommodate any event! Mix and match services to make your event complete!</p>
                        <Link to='/contact'><Button text="GET A QUOTE"/></Link>
                </div>
                <img src={Image1}/>
            </section>
            <section className='expose__section2'>
                
            </section>
        </div>
    )
}

export default ServicesExpose
