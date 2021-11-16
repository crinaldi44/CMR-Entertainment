import React from 'react'
import Card from '../Card'
import Photo from '../../images/services/dj.png'
import Photo1 from '../../images/services/photo-booth.png'
import Photo2 from '../../images/services/photography.png'
import Photo3 from '../../images/services/videography.png'
import Photo4 from '../../images/services/lighting.png'
import Photo5 from '../../images/services/live-video.png'
import './ServicesCatalogue.css'
import Button from '../Button'
import { Link } from 'react-router-dom'

const ServicesCatalogue = () => {

    return (
        <div id="container" className="services__container__sub">
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
