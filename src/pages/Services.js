import React from 'react'
import './Services.css'
import Card from '../components/Card'
import Banner from '../components/Banner'

const Services = () => {
    return (
        <div className="services__container">
            <h1>SERVICES CATALOGUE</h1>
            <p>CMR Entertainment is proud to provide a level of high-tech and advanced level services that are sure to make your event memorable!</p>
            <Banner title="OUR SERVICES" details="CMR Entertainment is proud to provide a level of high-tech and advanced level services that are sure to make your event memorable!"/>
            <div className="services__container__catalogue">
                <Card title="DJ" subtitle="We provide the music and the energy all in one."/>
                <Card title="PHOTO BOOTH" subtitle="With snapshots for your guests and a digital photo album for yourself."/>
                <Card title="PHOTOGRAPHY" subtitle="Professional-grade cuts including a digital photo album."/>
                <Card title="VIDEOGRAPHY" subtitle="Professionally-edited video including after-effects and post processing."/>
                <Card title="LIGHTING" subtitle="Uplighting, stage-style lighting, dance-floor lighting and more."/>
                <Card title="LIVE VIDEO" subtitle="Stream your event live or exclusively to your virtual guests."/>
            </div>
        </div>
    )
}

export default Services
