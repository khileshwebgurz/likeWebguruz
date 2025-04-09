import React from "react";
import Image from "next/image";
import marketo1 from "../../../public/images/marketoconsultimg/keto-bus-1.jpg";
import marketo2 from "../../../public/images/marketoconsultimg/keto-bus-2.jpg";
import marketo3 from "../../../public/images/marketoconsultimg/keto-bus-3.jpg";
const MarketoExperience = () => {
  return (
    <div className="marketo-experince py-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-12 text-center mb-4 mb-md-5 mx-auto heading-main">
            <h2 className="mb-2">
              Our Marketo <span>Implementation Experience </span>
            </h2>
            <p>
              WebGuruz Technologies brings unparalleled depth and breadth to
              Marketo implementation across diverse business landscapes. Our
              implementation experience spans multiple industry verticals, from
              nimble startups to complex enterprise environments, ensuring
              adaptive and robust marketing automation solutions. We combine
              technical expertise with strategic insights, transforming Marketo
              from a mere software platform into a powerful marketing
              intelligence engine that drives tangible business results.
            </p>
          </div>
          <div className="col-md-4 col-12 mb-4 mb-md-0">
            <div className="marketo-experince-card">
              <div className="card-img">
                <Image src={marketo1} alt="implement" />
              </div>
              <div className="card-description">
                <h4 className="text-center">Enterprise-Level Implementation</h4>
                <ul>
                  <li>Scalable solution design</li>
                  <li>Complex workflow management</li>
                  <li>Large-scale data integration</li>
                  <li>High-performance marketing ecosystems</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4 mb-md-0">
            <div className="marketo-experince-card">
              <div className="card-img">
                <Image src={marketo2} alt="implement" />
              </div>
              <div className="card-description">
                <h4 className="text-center">
                  Mid-Market Marketing Transformation
                </h4>
                <ul>
                  <li>Cost-effective automation strategies</li>
                  <li>Rapid implementation techniques</li>
                  <li>Customized marketing solutions</li>
                  <li>Agile marketing frameworks</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4 mb-md-0">
            <div className="marketo-experince-card">
              <div className="card-img">
                <Image src={marketo3} alt="implement" />
              </div>
              <div className="card-description">
                <h4 className="text-center">Startup Marketing Acceleration</h4>
                <ul>
                  <li>Growth-focused strategies</li>
                  <li>Lean marketing automation</li>
                  <li>Quick onboarding processes</li>
                  <li>Innovative marketing techniques</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketoExperience;
