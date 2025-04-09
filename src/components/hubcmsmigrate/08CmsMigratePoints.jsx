import Image from "next/image";
import Arrwcheck from "../../../public/images/hubspotimages/arrow-check.webp";
import Hbstcntr from "../../../public/images/Hubspotcmsimages/sms-migr-reason.webp";

function CmsMigratePoints() {
  return (
    <section id="hubsptcms" className="migrate-cms-points">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="heading-main text-center">
              <h2>
                <span>Why Choose WebGuruz</span> for HubSpot Migration?
              </h2>
              <span className="d-inline-block mb-3 mt-2">
                We deliver expertise, reliability, and excellence. Here’s why
                businesses worldwide choose us for their HubSpot CMS migrations:
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
                  <h3>Certified HubSpot Partner</h3>
                  <p>
                    Our partnership with HubSpot ensures you receive expert
                    service.
                  </p>
                </div>
                <div className="hbperfrm right">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" alt="Image" />
                  </div>
                  <h3>Proven Track Record</h3>
                  <p>
                    With 500+ successful migrations, we bring unmatched
                    experience to the table.
                  </p>
                </div>
                <div className="hbperfrm right lst">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" alt="Image" />
                  </div>
                  <h3>Customized Solutions</h3>
                  <p>
                    We tailor our services to meet your specific needs and
                    goals.
                  </p>
                </div>
              </div>
              <div className="hbstexprtsinr center">
                <div className="hbbtmgs">
                  <Image
                    src={Hbstcntr}
                    className="img-fluid"
                    alt="HubSpot CMS Migration"
                  />
                </div>
              </div>
              <div className="hbstexprtsinr right">
                <div className="hbperfrm left">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" alt="Image" />
                  </div>
                  <h3>SEO-First Approach</h3>
                  <p>
                    Our migration strategy prioritizes maintaining and improving
                    your search rankings.
                  </p>
                </div>
                <div className="hbperfrm left">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" alt="Image" />
                  </div>
                  <h3>24/7 Support</h3>
                  <p>
                    Our dedicated support team is available around the clock to
                    assist you.
                  </p>
                </div>
                <div className="hbperfrm left lst">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" alt="Image" />
                  </div>
                  <h3>Transparent Pricing</h3>
                  <p>
                    We offer competitive, transparent pricing with no hidden
                    fees.
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

export default CmsMigratePoints;
