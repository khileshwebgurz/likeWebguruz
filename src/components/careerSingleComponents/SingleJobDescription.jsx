import React from "react";
import Image from "next/image";

import job from "../../../public/images/careerimages/job.gif";

const SingleJobDescription = ({ data }) => {
  return (
    <div>
      <section className="job-description py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main left ">
              <h2>
                Job <strong>Description</strong>
              </h2>
              {/* dynamic data */}
              <div
                dangerouslySetInnerHTML={{
                  __html: data[0].content.rendered,
                }}
              />
            </div>
            <div className="col-sm-6 col-xs-12 right-image">
              <Image src={job} alt="Hello3" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleJobDescription;
