import Image from "next/image";
import Arrwcheck from "../../../public/images/hubspotimages/arrow-check.webp";
import Hbstcntr from "../../../public/images/careerimages/career-centeric.svg";

function CareerAdvantages() {
  return (
    <section id="hubsptcms" className='career-advantage'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="heading-main text-center">
              <h2 className="together-heading">
              Respect For <strong>Individual</strong>
              </h2>
              <span className="d-inline-block mb-3 mt-2">
              A company is made up of individual, a respected company is made up of respected individuals.
              </span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="hbstexprts career-points">
              <div className="hbstexprtsinr career-left left">
                <div className="hbperfrm right">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid"  alt="Image" />
                  </div>
                  <h3>Transparency</h3>
                  <p>
                  Our HubSpot solutions are designed to grow with your business. As your needs evolve, we can easily scale your HubSpot implementation to accommodate your expanding operations.
                  </p>
                </div>
                <div className="hbperfrm right">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid"  alt="Image" />
                  </div>
                  <h3>Integrity</h3>
                  <p>
                  We offer competitive pricing for our HubSpot development services, ensuring you get the best value for your investment. Our goal is to provide high-quality solutions without breaking the bank.
                  </p>
                </div>
              </div>
              <div className="hbstexprtsinr center career-center">
                <div className="hbbtmgs">
                  <Image src={Hbstcntr} className="img-fluid"  alt="Image" />
                </div>
              </div>
              <div className="hbstexprtsinr right career-right">
                <div className="hbperfrm left">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid"  alt="Image" />
                  </div>
                  <h3>Learning & Sharing</h3>
                  <p>
                  Data security is a top priority at WebGuruz. We implement robust security measures to protect your sensitive data and ensure compliance with industry regulations.
                  </p>
                </div>
                <div className="hbperfrm left">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid"  alt="Image" />
                  </div>
                  <h3>Excellence</h3>
                  <p>
                  We are dedicated to staying up-to-date with the latest HubSpot advancements and industry trends. We strive to improve our services and processes to deliver the best possible value to our clients.
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

export default CareerAdvantages;
