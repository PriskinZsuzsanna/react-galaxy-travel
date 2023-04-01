import React from 'react'
import './Footer.css'
import { FaFacebook, FaTwitter, FaLinkedin, FaMailBulk, FaSearchLocation, FaPhone } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaSearchLocation size={20} style={{ color: "#fff", marginRight: '2rem' }}></FaSearchLocation>
                        <div>
                            <p>Űr utca 1.</p>
                            <h4>1094 Budapest</h4>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "#fff", marginRight: '2rem' }}></FaPhone>
                            06-80-123-1278
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: '2rem' }}></FaMailBulk>
                            urutazas@galaxytravel.hu
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>Rólunk</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam et necessitatibus qui, velit ex tenetur rem laboriosam incidunt error at accusantium dignissimos blanditiis! Voluptatibus quia recusandae eum nemo esse nostrum earum placeat, facilis, ad aliquid sint, nesciunt modi. Omnis veritatis rerum temporibus voluptatibus hic eius at quae quos officia fugit.</p>
                    <div className="social">
                        <FaFacebook size={30} style={{ color: "#fff", marginRight: '1rem' }}></FaFacebook>
                        <FaTwitter size={30} style={{ color: "#fff", marginRight: '1rem' }}></FaTwitter>
                        <FaLinkedin size={30} style={{ color: "#fff", marginRight: '1rem' }}></FaLinkedin>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
