import React from 'react'
import './Services.css'
import Banner from '../components/Banner'
import ServicesCatalogue from '../components/ServicesCatalogue'


const Services = () => {
    return (
        <div className="services__container">
            <Banner title="OUR SERVICES" details="CMR Entertainment is proud to provide a level of high-tech and advanced level services that are sure to make your event memorable!"/>
            <ServicesCatalogue />
        </div>
    )
}

export default Services
