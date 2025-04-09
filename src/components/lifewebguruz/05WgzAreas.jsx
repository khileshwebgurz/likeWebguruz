import React from 'react'
import areaimg from '../../../public/images/lifewebguruzimages/imported-image.webp'
import Image from 'next/image'
const WgzAreas = () => {
  return (
    <div className='WebguruArea-section pt-3 pb-5'> 
      <div className="container">
        <div className="row">
            <div className="col-12 heading-main text-center pb-4">
                <h2>Areas <span>We Serve</span></h2>
            </div>
            <div className="col-12">
                <div className="areaimg">
                  <Image src={areaimg} alt='Areas We Serve'/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WgzAreas
