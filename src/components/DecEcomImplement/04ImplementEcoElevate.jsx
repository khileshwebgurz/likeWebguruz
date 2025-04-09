import React from "react";

const ImplementEcoElevate = () => {
  const businessBoxes = [
    "Tailor eCommerce solutions to your business.",
    "Seamless integration with existing systems.",
    "Grow your business with ease and flexibility.",
    "Optimize processes and reduce operational costs.",
  ];

  return (
    <div className="Ecomonline-section py-5">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6 col-12 mt-3 mt-md-0">
            <div className="row bussines-row">
              {businessBoxes.map((text, index) => (
                <div className="col-sm-6 col-12 mb-4" key={index}>
                  <div className="business-box">
                    <h5>{text}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6 col-12 heading-main mb-4 mb-md-0">
            <h2 className="mb-3">
              Why eCommerce <span>Implementation Matters?</span>
            </h2>
            <p>
              Effective eCommerce implementation is crucial for any business
              looking to expand and succeed in the digital age. By streamlining
              operations, optimizing customer experiences, and integrating
              cutting-edge tools, we ensure your business is equipped to meet
              modern demands.
            </p>
            <p>
              Our services allow businesses to tap into new markets, improve
              efficiency, and provide enhanced customer service, all while
              ensuring seamless platform integration and setup.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementEcoElevate;
