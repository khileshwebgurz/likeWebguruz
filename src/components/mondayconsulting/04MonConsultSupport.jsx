import React from "react";
import Image from "next/image";
import laptop from "../../../public/images/mondayconsimages/web-consult-choose.webp";
const MondayConSupport = () => {
  return (
    <div className="mondaycons-service py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className=" col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              We Turn Monday.com Chaos into <br />
              <span> Monday.com Clarity</span>
            </h2>
          </div>
          <div className="col-md-6 col-12">
            <div className="monday-cons-left">
              <p>
                At WebGuruz, we know that implementing a new work management
                platform can be overwhelming. Many of our clients come to us
                after struggling to implement Monday.com on their own, feeling
                frustrated by its complexity or unsure how to customize it for
                their specific needs.
              </p>
              <p>
                Our team of certified Monday.com experts specializes in
                simplifying the complex. We take the time to understand your
                business processes, pain points, and goals before designing a
                Monday.com workspace that feels like it was built specifically
                for your organization. Unlike generic setup services, we provide
                ongoing support to ensure your team fully adopts the platform
                and continues to optimize it as your business evolves.
              </p>
              <p>
                The result? A Monday.com implementation that delivers on the
                promise of increased productivity, better collaboration, and
                improved business outcomes.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 heading-main mb-4 mb-md-0">
            <div className="monday-cons-right">
              <Image src={laptop} alt="laptop" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MondayConSupport;
