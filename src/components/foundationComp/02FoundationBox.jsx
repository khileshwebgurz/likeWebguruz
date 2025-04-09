import React from "react";
import mission from "../../../public/images/foundationimages/mission.webp";
import key from "../../../public/images/foundationimages/key.webp";
import Image from "next/image";
const Foundationbox = () => {
  return (
    <div className="foundation-box py-5 py-md-0">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 mb-4 mb-md-0">
            <div className="foundation-box-1">
              <div className="mission-icon-text">
                <div className="mission-text">
                  <h4>
                    <a href="#">Mission</a>
                  </h4>
                </div>
                <div className="mission-img">
                  <Image src={mission} alt="mission-img" />
                </div>
              </div>
              <p>
                The Webguruz Foundation was founded to help those who are less
                fortunate in society, to provide opportunities, and to work for
                a more fair society.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 ">
            <div className="foundation-box-1">
              <div className="mission-icon-text">
                <div className="mission-text">
                  <h4>
                    <a href="#">Key initiatives</a>
                  </h4>
                </div>
                <div className="mission-img">
                  <Image src={key} alt="key-img" />
                </div>
              </div>
              <p>
                Webguruz Foundation has a dedicated staff that identifies
                initiatives in healthcare, education, arts and culture,
                destitute care, and rural development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foundationbox;
