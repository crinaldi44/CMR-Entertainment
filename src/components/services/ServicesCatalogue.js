import React from 'react'
import Card from '../Card'
import Photo from '../../images/services/dj.png'
import Photo1 from '../../images/services/photo-booth.png'
import Photo2 from '../../images/services/photography.png'
import Photo3 from '../../images/services/videography.png'
import Photo4 from '../../images/services/lighting.png'
import Photo5 from '../../images/services/media-montage.png'
import Photo6 from '../../images/services/karaoke.png'
import Photo7 from '../../images/services/event-planning.png'
import './ServicesCatalogue.css'

const ServicesCatalogue = () => {

    const imgStyle = {
        width: `60%`,
        height: '300px',
    }
    
    return (
        <div id="container" className="services__container__sub">
                <div className="services__container__catalogue">
                    <Card title="DISC JOCKEY" subtitle="We provide the music and the energy all in one. We are experienced in all genres of music and will tailor our selection to yourself and your guests." image={Photo}/>
                    <Card title="PHOTO BOOTH" subtitle="Receive snapshots for your guests and a digital photo album for yourself. You'll get the choice between boardwalk and open-style booths."image={Photo1}/>
                    <Card title="PHOTOGRAPHY" subtitle="Professional-grade cuts including a digital photo album. Each photo is processed before you receive proofs."image={Photo2}/>
                    <Card title="VIDEOGRAPHY" subtitle="Professionally-edited video including after-effects and post processing." image={Photo3}/>
                    <Card title="LIGHTING" subtitle="Set the mood and the tone for your event. Uplighting, stage-style lighting, dance-floor lighting and more." image={Photo4}/>
                    <Card title="MEDIA MONTAGE" subtitle="Receive a custom directed and edited short video for your event consisting of professionally shot photo or video." image={Photo5}/>
                    <Card title="KARAOKE" subtitle="Lyrics to your favorite songs will be displayed on a plasma screen TV. Makes for a great sing-along event!" image={Photo6}/>
                    <Card title="EVENT PLANNING" subtitle="Professionally-curated events make the cut! We will architect the moment of your lifetime." image={Photo7}/>
                </div>
        </div>
    )
}

export default ServicesCatalogue
