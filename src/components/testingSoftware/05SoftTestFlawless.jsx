import React from "react";
import Image from "next/image";
import test2 from "../../../public/images/softwereimages/bug-free.webp";
const SoftTestFlawless = () => {
  return (
    <div className="softwere-testing py-5">
      <div className="container">
        <div className="row">
          <div className="  col-12 heading-main text-center mb-0 mb-lg-4 ">
            <h2 className="mb-2">
              Testing Excellence <br />
              <span>for Business Success</span>
            </h2>
            <p>
              {" "}
              As enterprises look to software as a source of competitive
              advantage, they demand quality—at speed and scale.
            </p>
          </div>
          <div className="col-lg-6 col-12 mb-3 mb-lg-0">
            <div className="testing-content">
              <p>
                At WebGuruz Technologies, we believe that excellent software
                testing is the foundation of business success in the digital
                world. Our thorough testing processes help you identify and
                resolve issues before they impact your customers, saving you
                time, money, and reputation.
              </p>
              <p>
                We stay updated with the latest testing tools and methodologies
                to provide you with cutting-edge services.
              </p>
              <p>
                Our team of experienced testers works as an extension of your
                team, understanding your business goals and helping you achieve
                them through high-quality software.
              </p>
              <p>
                By choosing WebGuruz for your testing needs, you&apos;re choosing a
                partner committed to your success. We don&apos;t just test software;
                we help you deliver products that exceed your customers&apos;
                expectations and give your business a competitive advantage.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="testing-img">
              <Image src={test2} alt="testing" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftTestFlawless;
