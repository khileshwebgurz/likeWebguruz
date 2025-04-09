import React from "react";
import culturimg from "../../../public/images/lifewebguruzimages/cultur.webp";
import Image from "next/image";
const WgzCulture = () => {
  return (
    <div className="Trulycultur py-5">
      <div className="container">
        <div className="row truly align-items-center ">
          <div className="col-md-6 col-12">
            <Image src={culturimg} alt="Inclusive Culture" />
          </div>
          <div className="col-md-6 col-12 mb-4 mt-md-0">
            <div className="col-12 mb-4 heading-main">
              <h2>
                A Truly <span> Inclusive Culture</span>
              </h2>
            </div>

            <h3>Diverse Perspectives</h3>
            <p className="mb-4">
              Our team comes from a wide range of backgrounds, and we embrace
              the ideas and perspectives that diversity brings.
            </p>
            <h3>Equal Opportunity</h3>
            <p>
              We provide equal opportunities for all, ensuring that everyone has
              a chance to thrive and succeed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WgzCulture;
