import React from 'react';
import Image from 'next/image';
import upworklogo from '../../../public/images/aboutimages/upwork-logo.webp'
import clutch from '../../../public/images/aboutimages/clutch-logo.webp'
import goodfirm from '../../../public/images/aboutimages/good-firms-logo.webp'
import googlebusiness from '../../../public/images/aboutimages/google-business-logo.webp'
import gyf from '../../../public/images/aboutimages/abt-gif.gif'
const AboutWhoweare = () => {
  return (
    <div>
        <section className="about-we-are py-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-xs-12 about-left heading-main">
                        <h2>Who <span>We Are</span></h2>
                        <p>With over decades of experience, WebGuruz Technologies help individuals and corporations navigate through their digital transformation journey by crafting custom applications in accordance to their requirements.</p>
                        <Image src={gyf} alt='Best Digital Marketing Services Gif' unoptimized/>
                    </div>
                    <div className="col-sm-6 col-xs-12 icon-content">
                        <div className="card-icon-content">
                            <Image src={upworklogo} alt='Upwork Logo'/>
                            <p>Earned 99% of job success & “Top Rated” Badge on Upwork.</p>
                        </div>
                        <div className="card-icon-content">
                            <Image src={clutch} alt='Clutch Logo'/>
                            <p>Recognized as Top App Developers by Clutch.</p>
                        </div>
                        <div className="card-icon-content">
                            <Image src={goodfirm} alt='Good Firms Logo'/>
                            <p>Recognized as One of the Best Firms to Work At on Goodfirms.</p>
                            
                        </div>
                        <div className="card-icon-content">
                            <Image src={googlebusiness} alt='Google My Business Logo'/>
                            <p>Top Searched For Businesses on GMB.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default AboutWhoweare;
