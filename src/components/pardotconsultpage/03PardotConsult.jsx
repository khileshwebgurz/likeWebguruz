import React from "react";
import Image from "next/image";
import pardot1 from "../../../public/images/pardotimg/pardot-comprehen.webp";
const PardotConsult = () => {
  return (
    <div className="pardot-consulting py-5">
      <div className="container">
        <div className="row text-md-start text-center">
          <div className="col-md-8 heading-main mb-4 mb-md-0">
            <h2 className="mb-2">
              <span>Comprehensive Pardot </span> Consulting Services
            </h2>
            <p className="mb-0">
              WebGuruz Technologies offers end-to-end Pardot consulting services
              designed to maximize your marketing potential. We provide
              strategic implementation, custom configuration, and ongoing
              support to ensure your Pardot platform becomes a powerful
              revenue-generation engine.
            </p>
          </div>
          <div className="col-md-4 col-12">
            <div className="pardot-services-right">
              <Image src={pardot1} alt="Pardot Consulting" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PardotConsult;
