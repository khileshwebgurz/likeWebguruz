import React from "react";
import Image from "next/image";
import dollar1 from "../../../public/images/revoppsimage/rev-inc-1.webp";
import dollar2 from "../../../public/images/revoppsimage/rev-inc-2.webp";
import dollar3 from "../../../public/images/revoppsimage/rev-inc-3.webp";
import dollar4 from "../../../public/images/revoppsimage/rev-inc-4.webp";
import dollar5 from "../../../public/images/revoppsimage/rev-inc-5.webp";
const RevoppsBussines = () => {
  return (
    <div className="Revopps-bussiness-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2 className="mb-2">
              The Importance of <span>Revenue Operations</span>
            </h2>
            <p>
              RevOps isn’t just a trend, it’s a necessity for businesses aiming
              to scale and thrive. By aligning processes and eliminating
              inefficiencies, RevOps ensures consistent revenue growth and
              operational agility.
            </p>
          </div>
          <div className="col-md col-12">
            <div className="bussines-circle">
              <div className="bussiness-circle-border">
                <div className="buusiness-img">
                  <Image src={dollar1} alt="dollar" />
                </div>
              </div>
              <p>Improves revenue predictability and stability.</p>
            </div>
          </div>
          <div className="col-md col-12">
            <div className="bussines-circle">
              <div className="bussiness-circle-border">
                <div className="buusiness-img">
                  <Image src={dollar2} alt="dollar" />
                </div>
              </div>
              <p>Enhances cross-team collaboration and communication.</p>
            </div>
          </div>
          <div className="col-md col-12">
            <div className="bussines-circle">
              <div className="bussiness-circle-border">
                <div className="buusiness-img">
                  <Image src={dollar3} alt="dollar" />
                </div>
              </div>
              <p>Reduces operational inefficiencies and manual errors.</p>
            </div>
          </div>
          <div className="col-md col-12">
            <div className="bussines-circle">
              <div className="bussiness-circle-border">
                <div className="buusiness-img">
                  <Image src={dollar4} alt="dollar" />
                </div>
              </div>
              <p>Strengthens customer relationships and retention rates.</p>
            </div>
          </div>
          <div className="col-md col-12">
            <div className="bussines-circle">
              <div className="bussiness-circle-border">
                <div className="buusiness-img">
                  <Image src={dollar5} alt="dollar" />
                </div>
              </div>
              <p>Drives scalable and sustainable business growth.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevoppsBussines;
