import React from 'react'
import Img from './beer-dark-1.png.png'

const AboutThree = () => {
  return (
    <div>
        <div className="about-section">
        <div className="container">
            <div className="hero-two-division h-w-d">
                <div className="about-contant bg-2B2B2B0F">
                    <h5 className="pb-10 yellow">Biergut</h5>
                    <h2 className="pb-20">Premium Light</h2>
                    <p className="sub-heading pb-10 para">Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                        sem. Donec sollicitudin molestie malesuada. Curabitur arcu
                        erat, accumsan id imperdiet et, porttitor at sem. Donec
                        sollicitudin molestie malesuada.</p>
                        <div className="grid-4">
                            <div className="box">
                                <h6>Extract</h6>
                                <p>11%</p>
                            </div>
                            <div className="box">
                                <h6>Alcohol</h6>
                                <p>4%</p>
                            </div>
                            <div className="box">
                                <h6>Gentain</h6>
                                <p>20IBU</p>
                            </div>
                            <div className="box">
                                <h6>Serving Temp</h6>
                                <p>6-9 Degree Celsius</p>
                            </div>
                        </div>
                </div>
                <img src={Img} alt="" className="about-img about-img-2 mr-83" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutThree