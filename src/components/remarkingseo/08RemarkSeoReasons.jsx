import Image from "next/image";
import Arrwcheck from "../../../public/images/hubspotimages/arrow-check.webp";
import Hbstcntr from "../../../public/images/remarketingimg/remarket-agency.webp";

function RemarkSeoReasons() {
  return (
    <section id="hubsptcms" className="remarking-ads-reason">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="heading-main text-center">
              <h2>
                Why <span>WebGuruz?</span>
              </h2>
              <span className="d-inline-block mb-3 mt-2">
                Partner with the experts in Google Ads Remarketing.
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
                  <h3>Certified Professionals</h3>
                  <p>
                    Our team is trained and certified in Google Ads, ensuring
                    top-tier expertise.
                  </p>
                </div>
                <div className="hbperfrm right">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" alt="Image" />
                  </div>
                  <h3>Customized Strategies</h3>
                  <p>
                    Every campaign is tailored to your unique business goals.
                  </p>
                </div>
                <div className="hbperfrm right lst">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" alt="Image" />
                  </div>
                  <h3>Proven Results</h3>
                  <p>
                    With over 15 years of experience, we deliver measurable
                    outcomes.
                  </p>
                </div>
              </div>
              <div className="hbstexprtsinr center">
                <div className="hbbtmgs">
                  <Image
                    src={Hbstcntr}
                    className="img-fluid"
                    alt="Google Ads Remarketing Agency"
                  />
                </div>
              </div>
              <div className="hbstexprtsinr right">
                <div className="hbperfrm left">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" alt="Image" />
                  </div>
                  <h3>Transparent Reporting</h3>
                  <p>
                    Stay informed with detailed reports on your campaign’s
                    performance.
                  </p>
                </div>
                <div className="hbperfrm left">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" alt="Image" />
                  </div>
                  <h3>Dedicated Support</h3>
                  <p>Our team is here to guide you every step of the way.</p>
                </div>
                <div className="hbperfrm left lst">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" alt="Image" />
                  </div>
                  <h3>Comprehensive Services</h3>
                  <p>From setup to optimization, we handle it all.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RemarkSeoReasons;
