import Link from "next/link";
import React from "react";

const FoundationServices = () => {
  return (
    <div className="foundation-servicses education py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="education-img"></div>
          </div>
          <div className="col-md-6 col-12">
            <div className="education-content">
              <h1 className="fw-bold mb-4">Education donations:</h1>
              <p className="m-0">
                To empower underprivileged children and we are going to sponsor
                their education not only at the elementary level but competitor
                level as well.
              </p>
              <Link href="/webguruz-foundation/foundation-initiatives/" className="explore-btn  found-btn mt-4">
                read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundationServices;
