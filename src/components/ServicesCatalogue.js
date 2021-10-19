import React from 'react'
import Card from '../components/Card'
import Photo from '../images/services/dj.jpeg'
import Photo1 from '../images/services/photo-booth.jpeg'
import Photo2 from '../images/services/photography.jpeg'
import Photo3 from '../images/services/videography.jpeg'
import Photo4 from '../images/services/lighting.jpeg'
import Photo5 from '../images/services/live-video.jpeg'
import './ServicesCatalogue.css'
import Button from './Button'

const ServicesCatalogue = () => {
    return (
        <div className="services__container__sub">
                <div className="services__container__sub__description">
                    <h2>Customize your event.</h2>
                    <p>We can accommodate any event! Mix and match services to make your event complete!</p>
                </div>
                <div className="services__container__catalogue">
                    <Card title="DISC JOCKEY" subtitle="We provide the music and the energy all in one. We are experienced in all genres of music and will tailor our selection to yourself and your guests." image={Photo}/>
                    <Card title="PHOTO BOOTH" subtitle="Receive snapshots for your guests and a digital photo album for yourself. You'll get the choice between boardwalk and open-style booths."image={Photo1}/>
                    <Card title="PHOTOGRAPHY" subtitle="Professional-grade cuts including a digital photo album. Each photo is processed before you receive proofs."image={Photo2}/>
                    <Card title="VIDEOGRAPHY" subtitle="Professionally-edited video including after-effects and post processing." image={Photo3}/>
                    <Card title="LIGHTING" subtitle="Set the mood and the tone for your event. Uplighting, stage-style lighting, dance-floor lighting and more." image={Photo4}/>
                    <Card title="LIVE VIDEO" subtitle="Stream your event live or exclusively to your virtual guests." image={Photo5}/>
                </div>
        </div>
    )
}

export default ServicesCatalogue
