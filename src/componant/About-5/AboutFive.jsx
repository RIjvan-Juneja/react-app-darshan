import React from 'react'
import Img from './choose-flavor.png.png'

const AboutFive = () => {
  return (
    <div>
        <div className="about-section">
        <div className="container">
            <div className="hero-two-division d-2">
                <img src={Img} alt="" className="about-img about-img-4" />
                <div className="about-contant">
                    <h1 className="pb-10">Choose Your
                        Flavour</h1>
                    <p className="pb-10 d-2-p">Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo
                        eget malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                    <p className="pb-10 mb">Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Cras
                        ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta.
                        Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Nulla
                        quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor
                        volutpat.</p>
                        <a href="" className="button-black button bb">Choose For Yourself</a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutFive