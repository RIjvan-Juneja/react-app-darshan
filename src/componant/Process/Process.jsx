import React from 'react'
import Img from "./Link.png"

const Process = () => {
    return (
        <>
            <div className="video-conatnt">
                <h1 className='mb'>Discover The <br />
                    Brewing Process</h1>
                <p className='mb'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br />
                    ullamcorper mattis, pulvinar dapibus leo.</p>
                <img src={Img} alt="" />
            </div>
        </>
    )
}

export default Process