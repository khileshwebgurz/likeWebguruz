import React from "react";
import Image from "next/image";
import capebility from "../../../public/images/loadtestingimg/load-engage.webp";
const LoadCapable = () => {
  return (
    <div className="loadbenifit-services-section loadhelp-sectpon">
      <div className="container-fluid">
        <div className="row row-benfit row-one">
          <div className="col-md-6 col-12">
            <div className="services-benifit-left">
              <div className="services-img">
                <Image src={capebility} alt="capebility" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="services-benifit-left benifit-right loadhelp-right">
              <div className="benifit-content left-content">
                <h2>Our Engagement Models</h2>
                <p>
                  We offer different project engagement models to match your
                  project requirements.
                </p>
                <ul>
                  <li>
                    <span> Project-Based Engagement </span>
                    <p>
                      Perfect for one-time testing needs with a defined scope
                      and timeline. We deliver comprehensive testing and a
                      detailed report with actionable recommendations.
                    </p>
                  </li>
                  <li>
                    <span>Retainer Model </span>
                    <p>
                      Ideal for ongoing testing needs, providing regular
                      performance testing as part of your development cycle or
                      during specific high-traffic periods.
                    </p>
                  </li>
                  <li>
                    <span>Dedicated Team </span>
                    <p>
                      For organizations with complex, continuous testing
                      requirements, we provide a dedicated team that works as an
                      extension of your development team.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadCapable;
