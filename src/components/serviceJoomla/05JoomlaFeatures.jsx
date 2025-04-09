import React from "react";
import Image from "next/image";
import joomla1 from "../../../public/images/joomlaimages/joomla-mobile-1.webp";
import joomla2 from "../../../public/images/joomlaimages/joomla-mobile-2.webp";
import joomla3 from "../../../public/images/joomlaimages/joomla-mobile-3.webp";
import joomla4 from "../../../public/images/joomlaimages/joomla-mobile-4.webp";
import joomla5 from "../../../public/images/joomlaimages/joomla-mobile-5.webp";
const JoomlaFeatures = () => {
  return (
    <div className="joomlacore-section pt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-9 mx-auto heading-main text-center mb-4 mb-md-5">
            <h2>
              <span>Joomla Web Development: </span> <br /> Core Features
            </h2>
            <p>
              Joomla is a powerful CMS that offers unparalleled flexibility and
              scalability. Here’s why businesses love Joomla:
            </p>
          </div>
          <div className="row joomla-core">
            <div className="col-12 features-joomla-sec">
              <div className="joomlaCore core-card one ">
                <span className="joomla-coreFeature-img">
                  <Image src={joomla1} alt="Search Icon" />
                </span>
                <h5>
                  SEO-Friendly <br />
                  Architecture
                </h5>
                <p>
                  Joomla websites rank better with built-in SEO optimization
                  features.
                </p>
              </div>
              <div className="joomlaCore core-card">
                <span className="joomla-coreFeature-img">
                  <Image src={joomla2} alt="Setting Icon" />
                </span>
                <h5>
                  Advanced <br />
                  Security Features
                </h5>
                <p>
                  Built-in security tools to protect against threats and
                  vulnerabilities.
                </p>
              </div>
              <div className="joomlaCore core-card three">
                <div className="mobile core">
                  <span className="joomla-coreFeature-img">
                    <Image src={joomla3} alt="Setting Icon" />
                  </span>
                  <h5>
                    User-Friendly <br />
                    Content Management
                  </h5>
                  <p>
                    Easy to manage, update, and scale without technical
                    expertise.
                  </p>
                </div>
              </div>
              <div className="joomlaCore core-card">
                <span className="joomla-coreFeature-img">
                  <Image src={joomla4} alt="HTML Icon" />
                </span>
                <h5>
                  Extensive <br />
                  Extension Library
                </h5>
                <p>Thousands of plugins to enhance website functionality.</p>
              </div>
              <div className="joomlaCore core-card one ">
                <span className="joomla-coreFeature-img">
                  <Image src={joomla5} alt="Study Icon" />
                </span>
                <h5>
                  Multilingual <br />
                  Capabilities
                </h5>
                <p>
                  Joomla supports 70+ languages, perfect for global businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoomlaFeatures;
