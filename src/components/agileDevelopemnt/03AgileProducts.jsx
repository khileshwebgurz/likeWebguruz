import React from 'react'
import Image from 'next/image'
import agility from '../../../public/images/agileimg/agile-dev.svg'
const AgileProducts = () => {
  return (
    <>
      <section className="agile-product-main py-5">
        <div className="container">
            <div className="row align-items-center">
                <div className='col-sm-6 col-xs-12 agile-image-left mb-3'>
                   <Image src={agility} alt='Agile Software Development Services'/>
                </div>
                <div className='col-sm-6 col-xs-12 agile-content-right'>
                <h2 className='mb-4'>We agile your products to success</h2>
                <p>After a definite period of time, through the agile way, you don’t just get one, but multiple functionalities of your product. To achieve this, Developers, Designers, and Testers work simultaneously and co-dependently.</p>
                <p>Every subtask is divided by us into sprints of two weeks, within which we cross out elements one after another. To ensure that everything is aligned with the project expectation, we have daily scrum meetings with the team, where the tasks are clearly assigned.</p>
                <p>We believe Agile is a mindset. Our cross-functional teams evolve through collaborative effort to build the desired product. Design and Implementation go hand in hand, we welcome feedback and quickly adapt to change.</p>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default AgileProducts
