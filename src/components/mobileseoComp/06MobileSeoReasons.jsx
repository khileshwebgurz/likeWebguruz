import React from "react";
import checkimg from "../../../public/images/mobileseoimg/Checked.svg";
import Image from "next/image";
const MobileSeoReasons = () => {
  return (
    <div className="Whymobileseo py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Why Work with <span> Webguruz?</span>
            </h2>
            <p>
              Webguruz is a trusted name in Mobile SEO Services. Our experienced
              team delivers measurable results, ensuring your business stays
              ahead in the competitive digital landscape.
            </p>
          </div>
          <div className="col-md-6 col-12">
            <div className="whymobile-seo-card">
              <div className="mobile-img-text">
                <div className="why-img">
                  <Image src={checkimg} alt="check-img" />
                </div>
                <div className="why-content">
                  <h5>Proven Expertise</h5>
                  <p>
                    With over a decade of hands-on experience in the dynamic
                    world of SEO, we’ve fine-tuned our skills to help businesses
                    succeed in the ever-evolving digital landscape. Our team has
                    successfully worked with companies across various
                    industries, delivering consistent results and staying ahead
                    of SEO trends to ensure long-term growth for our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="whymobile-seo-card">
              <div className="mobile-img-text">
                <div className="why-img">
                  <Image src={checkimg} alt="check-img" />
                </div>
                <div className="why-content">
                  <h5>Customized Solutions</h5>
                  <p>
                    We understand that every business is unique, and a
                    one-size-fits-all approach simply doesn’t work. That’s why
                    we create tailored strategies that align with your specific
                    goals, audience, and industry requirements. By analyzing
                    your business needs and market competition, we craft
                    personalized solutions that deliver measurable outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-12">
            <div className="whymobile-seo-card">
              <div className="mobile-img-text">
                <div className="why-img">
                  <Image src={checkimg} alt="check-img" />
                </div>
                <div className="why-content">
                  <h5>Transparent Reporting</h5>
                  <p>
                    We believe in fostering trust through open communication.
                    Our team provides regular updates on your SEO progress with
                    detailed, easy-to-understand reports. From rankings and
                    traffic to campaign insights, we ensure you’re always
                    informed about the results we’re achieving for your
                    business. Transparency is at the heart of our approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSeoReasons;
