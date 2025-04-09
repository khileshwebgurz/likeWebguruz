import Image from "next/image";
import React from "react";
import full from "../../../public/images/fullcycleimage/full-cycle.webp";

const CycleFocus = () => {
  return (
    <>
      <section className="cycle-focus ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-12">
              <div className="focus-left">
                <div className="focus-left-heading">
                  <h2>
                    <strong>
                      We focus on Bringing together the right product
                    </strong>
                  </h2>
                </div>
                <div className="focus-left-para">
                  <p>
                    Product management is at the heart of our full-cycle
                    development process. With a strong emphasis on innovation,
                    we create distinctive products that blend advanced
                    technology with exceptional design.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="focus-right-img">
                <Image
                  src={full}
                  alt="Full Cycle Mobile App Development Services"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CycleFocus;
