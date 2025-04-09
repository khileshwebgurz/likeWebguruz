import Image from "next/image";
import React from "react";
import helps from '../../../public/images/helpdeskimg/helping-banner.webp'
import Link from "next/link";
const HelpDeskBanner = () => {
  return (
    <div className="helpdesk-banner py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <span>Helpdesk Services</span>
            <h1>Seamless IT Support, Anytime & Anywhere!</h1>
            <p>
              Providing prompt, reliable, and expert IT assistance to ensure
              your business operations run without disruption.
            </p>
            <div className="banner-btn">
              <Link href="/contact-us" className="expolar-btn">
                Get in touch today!
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-12 mt-4 mt-md-0">
            <div className="banner-img">
              <Image src={helps} alt="IT Support Services"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpDeskBanner;
