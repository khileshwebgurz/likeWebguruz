import React from "react";
import Image from "next/image";
import talk from "../../../public/images/revoppsimage/rev-talk.webp";
const RevoTalk = () => {
  return (
    <div className="revotalk-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 heading-main mb-4 mb-md-0">
            <h2 className="mb-3">
              <span>Ready to Scale?</span> <br />
              Let’s Talk RevOps!
            </h2>
            <p>
              Your revenue strategy needs more than just marketing and sales, it
              needs alignment, automation, and optimization.
            </p>
            <p>
              WebGuruz Technologies brings expertise, experience, and proven
              strategies to help you achieve revenue excellence. Let’s build a
              revenue machine that delivers consistent growth.
            </p>
          </div>
          <div className="col-md-6 col-12">
            <div className="talk-img">
              <Image src={talk} alt="talk" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevoTalk;
