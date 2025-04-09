import Link from 'next/link'
import React from 'react'

const WgzEnvironment = () => {
  return (
    <div className='Workenivorment-section py-5'>
      <div className="container">
        <div className="row col-lg-8 col-12">
            <div className="work-content">
            <span>Work Environment</span>
            <h2>Creativity</h2>
            <h2>Collaboration</h2>
            <h2>Commitment</h2>
            <p className='mb-0 mt-3'> At WebGuruz, our work environment is designed to foster creativity, collaboration, and growth. 
                We encourage open communication, respect for diversity, and a commitment to excellence. Teamwork is at the core of our culture, and we ensure that every voice is heard. We are dedicated to delivering the best results for our clients and colleagues alike.
            </p>
            <Link href={"/careers"} className='explore-btn' >Take the First Step Now!</Link>
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default WgzEnvironment
