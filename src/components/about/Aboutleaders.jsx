import React from 'react';
import Image from 'next/image';
import ceo1 from '../../../public/images/aboutimages/gagandeep-singh.webp'
import ceo2 from '../../../public/images/aboutimages/ceo2.webp'
import Link from 'next/link';
const Aboutleaders = () => {
  return (
    <div>
      <section className="about-leader py-5">
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-sm-4 col-xs-12 heading-main">
                    <h2>Meet The <span>Leaders</span></h2>
                    <p>Combining recent technologies, ideas, and skills, our leaders at Webguruz Technologies help businesses meet the requirements of today and unlock the opportunities of tomorrow.</p>
                    <p>Let’s meet our distinguished members and inspiring role models.</p>
                    <Link className='explore-btn' href={'/leadership-team'}>View All</Link>
                </div>
                <div className="col-sm-8 col-xs-12">
                <div className="row">
                        <div className="col-sm-6 col-xs-12 image-content">
                            <Image src={ceo2} alt='Jaswinder Singh' style={{height:"auto", width:"auto"}}/>
                            <div className="content">
                                <h3>Jaswinder Singh</h3>
                                <p>CEO</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xs-12 image-content">
                          <Image src={ceo1} alt='Gagandeep Singh'/>
                          <div className="content">
                              <h3>Gagandeep Singh</h3>
                              <p>Co-Founder and Investor (UK office)</p>
                          </div>
                        </div>
                      </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutleaders;
