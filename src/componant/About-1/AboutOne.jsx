import React from 'react'
import Img from './brand-history.png.png'

const AboutOne = () => {
  return (
    <>
        <div className="about-section">
        <div className="container">
            <div className="hero-two-division">
                <img src={Img} alt="" className="about-img" />
                <div className="about-contant">
                    <h1 className="pb-10">Leading Beer
                        Brewery,
                        Since 1974!</h1>
                    <p className="pb-10">Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                        Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat.
                        Mauris blandit aliquet elit, eget tincidunt nibh.</p>
                    <p className="pb-10">Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus.
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper
                        sit amet ligula. Proin eget tortor.</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default AboutOne