import Image from "next/image";
import React from "react";
import herarcy from "../../../public/images/fullcycleimage/herarcy.svg";
const CycleHierarchy = () => {
  return (
    <>
      <section className="web-hierarchy py-5">
        <div className="container">
          <div className="row">
            <div className=" col-lg-9 col-12 mx-auto">
              <Image
                src={herarcy}
                alt="Full Cycle Product Development"
                className="product-hierarchy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CycleHierarchy;
