import React from 'react'
import './Services.css'
import Banner from '../components/Banner'
import ServicesCatalogue from '../components/ServicesCatalogue'


const Services = () => {
    return (
        <div className="services__container">
            <Banner title="OUR SERVICES" details="CMR Entertainment is proud to provide a variety of professional services that are sure to make your event memorable!"/>
            <ServicesCatalogue />
        </div>
    )
}

export default Services
