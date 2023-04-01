import './Training.css'
import { Link } from 'react-router-dom'
import Pod from '../assets/pod.jpg'
import Moon from '../assets/moon.jpg'

import React from 'react'

const Training = () => {
    return (
        <div className='training'>
            <div className="left">
                <h1>Képzés</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cumque optio nisi aliquid nam harum, illum omnis magnam quibusdam nulla, qui fugiat natus! Dolorum, autem obcaecati repudiandae inventore cum fuga.

                </p>
                <Link to="/contact" className='btn'>Kapcsolat</Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="image-stack top">
                        <img src={Moon} alt="moon" />
                    </div>
                    <div className="image-stack bottom">
                        <img src={Pod} alt="pod" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Training
