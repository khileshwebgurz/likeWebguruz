import React from "react";
import Image from "next/image";
import test from "../../../public/images/softwereimages/quality-test.webp";
const SoftTestExperience = () => {
  return (
    <div className="softwere-testing py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 heading-main mb-3 mb-lg-0 ">
          <h2 className="mb-2">
              Delivering Bug-Free Software <br />
              <span>to Drive Your Business Forward</span>
            </h2>
            <div className="testing-content">
              <p>
                At WebGuruz Technologies, we&apos;re passionate about helping
                businesses succeed through quality software. We&apos;ve seen
                firsthand how poor software quality can damage a company&apos;s
                reputation and bottom line. That&apos;s why we&apos;ve dedicated ourselves
                to providing top-notch testing services that help businesses
                deliver reliable, user-friendly applications.
              </p>
              <p>
                Our mission is to ensure that every piece of software we test
                meets the highest standards of quality, reliability, and
                performance. We believe that thorough testing is not just about
                finding bugs; it&apos;s about helping businesses build products that
                their customers can depend on.
              </p>
              <p>
                By partnering with WebGuruz, you&apos;re not just getting a testing
                service- you&apos;re getting a team that truly cares about your
                success.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="testing-img">
              <Image src={test} alt="testing" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftTestExperience;
