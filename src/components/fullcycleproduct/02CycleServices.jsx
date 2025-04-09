import Image from "next/image";
import React from "react";
import appdev1 from "../../../public/images/fullcycleimage/appdev1.webp";
import appdev2 from "../../../public/images/fullcycleimage/appdev2.webp";
import appdev3 from "../../../public/images/fullcycleimage/appdev3.webp";
import appdev4 from "../../../public/images/fullcycleimage/appdev4.webp";
import appdev5 from "../../../public/images/fullcycleimage/appdev5.webp";
const CycleServices = () => {
  return (
    <>
      <section className="full-cycle-development py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="cycle-development-heading col-lg-9 mx-auto col-12 mb-5">
                <div className="cycle-sub-heading mb-4">
                  <h2>
                    {" "}
                    <strong>
                      {" "}
                      Our Team Assists You Through Full Cycle Mobile App
                      Development Services
                    </strong>
                  </h2>
                </div>
                <div className="cycle-sub-para">
                  <p className="mb-4">
                    From concept to launch, our team provides end-to-end mobile
                    app development solutions tailored to your business needs.
                    We focus on innovation, functionality, and user experience
                    to create high-performing mobile applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 icon-heading-content ">
              <div className="card-heading-content">
                <div className="cycle-full-icon icon-color-1">
                  <Image src={appdev1} alt="Requirement Gathering Icon" />
                </div>
                <div className="cycle-dev-box">
                  <h5>Requirement Gathering</h5>
                  <p>
                    We analyze your business goals and user needs to define the
                    app’s core functionalities, ensuring a solid foundation for
                    development.
                  </p>
                </div>
              </div>
              <div className="card-heading-content content-two">
                <div className="cycle-full-icon icon-color-2">
                  <Image src={appdev2} alt="Design Icon" />
                </div>
                <div className="cycle-dev-box">
                  <h5>Design</h5>
                  <p>
                    Our UI/UX experts craft intuitive, visually appealing, and
                    engaging designs that enhance user experience and brand
                    identity.
                  </p>
                </div>
              </div>
              <div className="card-heading-content">
                <div className="cycle-full-icon icon-color-3">
                  <Image src={appdev3} alt="Development Icon" />
                </div>
                <div className="cycle-dev-box">
                  <h5>Development</h5>
                  <p>
                    Using the latest technologies, our developers build a
                    robust, scalable, and high-performing mobile application
                    tailored to your requirements.
                  </p>
                </div>
              </div>
              <div className="card-heading-content content-two">
                <div className="cycle-full-icon icon-color-4">
                  <Image src={appdev4} alt="Testing Icon" />
                </div>
                <div className="cycle-dev-box">
                  <h5>Testing</h5>
                  <p>
                    We conduct rigorous testing to ensure your app is bug-free
                    and secure and delivers a seamless experience across
                    devices.
                  </p>
                </div>
              </div>
              <div className="card-heading-content">
                <div className="cycle-full-icon icon-color-5">
                  <Image src={appdev5} alt="Launch Icon" />
                </div>
                <div className="cycle-dev-box">
                  <h5>Launch</h5>
                  <p>
                    After final optimizations, we deploy your app to app stores
                    and ensure a smooth rollout, providing post-launch support
                    for ongoing success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CycleServices;
