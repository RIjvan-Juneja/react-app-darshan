import React from 'react'
import img1 from './Figure1 ⏵ ICON-FINDER-1-4.png.png'
import img2 from './Figure2 ⏵ ICON-FINDER-1-2.png.png'
import img3 from './Figure3 ⏵ ICON-FINDER-1-1.png.png'

const Flavour = () => {
  return (
    <div>
        <div className="container">
        <div className="grid-3-section">
            <div className="grid-2 grid-23 mb">
                <img src={img1} alt="" />

                <p>Vestibulum ac diam sit
                    amet quam vehicula
                    elementum .</p>
             </div>

             <div className="grid-2 grid-23 mb">
                <img src={img2} alt="" />

                <p>Vestibulum ac diam sit
                    amet quam vehicula
                    elementum .</p>
             </div>

             <div className="grid-2 grid-23 mb">
                <img src={img3} alt="" />

                <p>Vestibulum ac diam sit
                    amet quam vehicula
                    elementum .</p>
             </div>
        </div>
    </div>
    </div>
  )
}

export default Flavour