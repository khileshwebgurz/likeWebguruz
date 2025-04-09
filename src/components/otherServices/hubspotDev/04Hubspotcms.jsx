import Image from "next/image";
import Arrwcheck from "../../../../public/images/hubspotimages/arrow-check.webp";
import Hbstcntr from "../../../../public/images/hubspotimages/hubdev.svg";

function Hubspotcms() {
  return (
    <section id="hubsptcms">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="heading-main text-center">
              <h2>
                What&apos;s <span>More?</span>
              </h2>
              <span className="d-inline-block mb-3 mt-2">
                Our HubSpot Developers ensure that the solutions they deliver
                are on par with the industry standards.
              </span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="hbstexprts">
              <div className="hbstexprtsinr left">
                <div className="hbperfrm right">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" alt="Image" />
                  </div>
                  <h3>Scalability</h3>
                  <p>
                    Our HubSpot solutions are designed to grow with your
                    business. As your needs evolve, we can easily scale your
                    HubSpot implementation to accommodate your expanding
                    operations.
                  </p>
                </div>
                <div className="hbperfrm right">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" alt="Image" />
                  </div>
                  <h3>Cost-effective</h3>
                  <p>
                    We offer competitive pricing for our HubSpot development
                    services, ensuring you get the best value for your
                    investment. Our goal is to provide high-quality solutions
                    without breaking the bank.
                  </p>
                </div>
                <div className="hbperfrm right lst">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" alt="Image" />
                  </div>
                  <h3>Integration with other tools</h3>
                  <p>
                    We understand that your business may already have existing
                    systems in place. Our team can seamlessly integrate HubSpot
                    with your current tools, creating a cohesive and efficient
                    workflow.
                  </p>
                </div>
              </div>
              <div className="hbstexprtsinr center">
                <div className="hbbtmgs">
                  <Image
                    src={Hbstcntr}
                    className="img-fluid"
                    alt="HubSpot Developers"
                  />
                </div>
              </div>
              <div className="hbstexprtsinr right">
                <div className="hbperfrm left">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" alt="Image" />
                  </div>
                  <h3>Data security</h3>
                  <p>
                    Data security is a top priority at WebGuruz. We implement
                    robust security measures to protect your sensitive data and
                    ensure compliance with industry regulations.
                  </p>
                </div>
                <div className="hbperfrm left">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" alt="Image" />
                  </div>
                  <h3>Continuous improvement</h3>
                  <p>
                    We are dedicated to staying up-to-date with the latest
                    HubSpot advancements and industry trends. We strive to
                    improve our services and processes to deliver the best
                    possible value to our clients.
                  </p>
                </div>
                <div className="hbperfrm left lst">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" alt="Image" />
                  </div>
                  <h3>Dedicated project manager</h3>
                  <p>
                    We assign a dedicated project manager to oversee your
                    HubSpot development project. This ensures that your project
                    stays on track, and your needs are met throughout the
                    process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hubspotcms;
