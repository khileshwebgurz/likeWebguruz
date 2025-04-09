import React from "react";
import Image from "next/image";
import medical from "../../../public/images/foundationimages/doctor.webp";
import Link from "next/link";
const FoundatioMedical = () => {
  return (
    <div className="foundation-sports foundation-medical ">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6 col-12">
            <div className="medical-img">
              <Image src={medical} alt="medical-img" />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="container sports py-5 py-md-0 px-4">
              <div className="education-content">
                <h2 className="fw-bold mb-3 mb-md-4">
                  Covid Vaccination camp:
                </h2>
                <p className="m-0">Covid vaccination drive for the team.</p>
                <Link
                  href="/webguruz-foundation/foundation-initiatives/"
                  className="explore-btn found-btn mt-3 mt-md-4 "
                >
                  read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundatioMedical;
