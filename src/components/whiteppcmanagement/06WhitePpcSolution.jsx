import Image from "next/image";
import Hbteam from "../../../public/images/whitelabelppcimage/work-banner.webp";

function WhitePpcSolution() {
  return (
    <section id="ourTeamhbspt" className="white-label-ppc-solution">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="heading-main text-center">
              <h2>
                Why Work with <span>WebGuruz?</span>
              </h2>
              <p>
                Maximize ROI Without the Extra Effort and Scale Your Business
                with our PPC Experts
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="hbstsct">
              <div className="hbstm">
                <Image src={Hbteam} className="img-fluid" alt="White Label PPC Experts" />
              </div>
              <div className="svypmng">
                <div className="svypmnginr">
                  <h3>Expert Campaign Management</h3>
                  <p>
                    Access certified experts to handle complex PPC campaigns
                    with precision.
                  </p>
                </div>
                <div className="svypmnginr">
                  <h3>Scalable Solutions</h3>
                  <p>Grow your offerings without increasing overhead costs.</p>
                </div>
                <div className="svypmnginr">
                  <h3>Brand-Centric Approach</h3>
                  <p>
                    Deliver campaigns under your brand, maintaining client trust
                    and loyalty.
                  </p>
                </div>
                <div className="svypmnginr">
                  <h3>Enhanced ROI</h3>
                  <p>
                    Benefit from well-optimized campaigns that drive maximum
                    results.
                  </p>
                </div>
                <div className="svypmnginr">
                  <h3>Time Efficiency</h3>
                  <p>
                    Free up your team to focus on core activities while we
                    handle the rest.
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

export default WhitePpcSolution;
