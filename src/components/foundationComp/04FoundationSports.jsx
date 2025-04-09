import React from "react";
import sports from "../../../public/images/foundationimages/sport.webp";
import Image from "next/image";
import Link from "next/link";
const FoundationSports = () => {
  return (
    <div className="foundation-sports">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6 col-12">
            <div className="container sports py-5 py-md-0 px-4">
              <div className="education-content">
                <h2 className="fw-bold mb-3 mb-md-4">Sponsoring the sports:</h2>
                <p className="m-0">
                We have become the co-sponsors of a Club-cricket team called panther’s 11.
                </p>
                <Link href="/webguruz-foundation/foundation-initiatives/" className="explore-btn found-btn mt-4 ">
                  read more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="sports-img">
              <Image src={sports} alt="sports-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundationSports;
