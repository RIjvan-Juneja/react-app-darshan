import React from 'react'
import Img from './beer-features-1.png.png'
import Img1 from './Figure ⏵ ICON-FINDER-1-5.png.png'
import Img2 from './Figure ⏵ ICON-FINDER-1-3.png.png'
import Img3 from './Figure ⏵ iconfinder_Seed_7609583.png.png'

const AboutFour = () => {
  return (
    <div>
        <div class="about-section">
        <div class="container">
            <div class="hero-two-division h-w-d">
                <img src={Img} alt="" class="about-img about-img-2 about-img-3" />

                <div class="about-contant">
                    <div class="grid-2 mb">
                       <img src={Img1} alt="" />

                       <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                        dui. Proin eget tortor risus. Nulla quis lorem ut libero malesuada
                        feugiat. Mauris blandit aliquet elit.</p>
                    </div>

                    <div class="grid-2 mb">
                       <img src={Img2} alt="" />

                        <p>Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum
                            id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula
                            elementum sed sit amet dui.</p>
                     </div>

                     <div class="grid-2 mb">
                        <img src={Img3} alt="" />
                        <p>Donec sollicitudin molestie malesuada. Donec sollicitudin molestie
                            malesuada. Nulla quis lorem ut libero malesuada feugiat. Vivamus
                            suscipit tortor eget felis porttitor volutpat.</p>
                     </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutFour