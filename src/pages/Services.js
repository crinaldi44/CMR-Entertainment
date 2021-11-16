import React from 'react'
import './Services.css'
import Banner from '../components/Banner'
import ServicesCatalogue from '../components/services/ServicesCatalogue'
import ServicesBanner from '../images/banner/services.png'
import ServicesExpose from '../components/services/ServicesExpose'


const Services = () => {
    return (
        <div className="services__container">
            <Banner title="OUR SERVICES" details="CMR Entertainment is proud to provide a variety of professional services that are sure to make your event memorable!"
            image={ServicesBanner}/>
            <ServicesCatalogue />
            <ServicesExpose/>
        </div>
    )
}

export default Services
