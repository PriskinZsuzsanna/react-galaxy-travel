import React from 'react'
import './Video.css'
import SpaceVideo from '../assets/space.mp4'
import {Link} from 'react-router-dom'

const Video = () => {
  return (
    <div className='hero'>
      <video autoPlay loop muted id="video">
        <source src={SpaceVideo} type="video/mp4"/>
      </video>
      <div className="content">
        <h1>Galaxy Travel</h1>
        <p>A világ első civil űrutazás szervezője</p>
        <div>
            <Link className='btn' to="/training">Képzés</Link>
            <Link className='btn btn-light' to="/kapcsolat">Kilövés</Link>
            
        </div>
      </div>
    </div>
  )
}

export default Video
