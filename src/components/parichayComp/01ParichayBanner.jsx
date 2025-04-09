"use client";
import Image from "next/image";
import Hbstptimg from "../../../public/images/parichayimgs/parichay-banner.webp";

function ParichayBanner() {
  return (
    <section className="hubsptbanner service-banner parichay-banner py-5 inner-page" id="parichay-processing">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="heading-main">
             
              <h1>
              Parichay<br/>
                <span>Internship Program</span>
                
             </h1>
              <p>
                Realize your potential with Parichay, a leading internship
                program by WebGuruz. Whether you dream of mastering Digital
                Marketing, Website Development and Design, or Mobile Application
                Development, our program is designed to give you hands-on
                experience and expert guidance from industry leaders. Take the
                first step toward a promising career with WebGuruz.
              </p>
              {/* <div className="gtintchbtn">
                <button className="explore-btn" aria-label="Get in Touch">
                  Get Started!
                </button>
              </div> */}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="banner-image-right">
              <Image
                src={Hbstptimg}
                className="img-fluid"
                alt="Parichay Internship Program"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ParichayBanner;
