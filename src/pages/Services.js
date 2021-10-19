import React from 'react'
import './Services.css'
import Card from '../components/Card'
import Banner from '../components/Banner'
import Photo from '../images/djs.jpeg'
import Photo1 from '../images/icon-speaker.png'

const Services = () => {
    return (
        <div className="services__container">
            <Banner title="OUR SERVICES" details="CMR Entertainment is proud to provide a level of high-tech and advanced level services that are sure to make your event memorable!"/>
            <div className="services__container__sub">
                <div className="services__container__sub__description">
                    <h2>Customize your event.</h2>
                    <p>We can accommodate any event! Mix and match services to make your event complete!</p>
                </div>
                <div className="services__container__catalogue">
                    <Card title="DJ" subtitle="We provide the music and the energy all in one. We are experienced in all genres of music and will tailor our selection to yourself and your guests." image={Photo}/>
                    <Card title="PHOTO BOOTH" subtitle="Receive snapshots for your guests and a digital photo album for yourself. You'll get the choice between boardwalk and open-style booths."/>
                    <Card title="PHOTOGRAPHY" subtitle="Professional-grade cuts including a digital photo album. Each photo is processed before you receive proofs."/>
                    <Card title="VIDEOGRAPHY" subtitle="Professionally-edited video including after-effects and post processing."/>
                    <Card title="LIGHTING" subtitle="Set the mood and the tone for your event. Uplighting, stage-style lighting, dance-floor lighting and more."/>
                    <Card title="LIVE VIDEO" subtitle="Stream your event live or exclusively to your virtual guests."/>
                </div>
            </div>
        </div>
    )
}

export default Services
