import React from 'react'
import Img from "./hero-beer-bottles-3.png.png"
const Hero = () => {
  return (
    <>
        <div className="hero-section">
        <div className="container">
            <div className="hero-two-division">
                <div className="hero-contant">
                    <h5 className="pb-20">Biergut Premium Beer</h5>
                    <h1 className="pb-20">Introducing
                        New Premium
                        Flavors</h1>
                    <p className="pb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco.</p>
                    <a href="" className="button-black button">Host a Party</a>
                    <a href="" className="button-white button">Restock Your Pub</a>
                </div>
                <img src={Img} alt="hero-img" className="hero-img" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero