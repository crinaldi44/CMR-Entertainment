import React from 'react'
import Video from '../videos/dj.mp4'
import './ServicesVideos.css'

const ServicesVideos = () => {
    return (
        <div>
            <video className="services__video" src={Video} autoPlay={true} loop/>
        </div>
    )
}

export default ServicesVideos
