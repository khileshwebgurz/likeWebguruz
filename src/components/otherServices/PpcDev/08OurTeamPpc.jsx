import Image from "next/image";
import ppcteam from "../../../../public/images/ppcimages/ppcads.svg";

function OurTeamPpc() {
  return (
    <section id="ourTeamhbspt">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="heading-main text-center">
              <h2>
                Why Opt for <span>Paid Advertising?</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="hbstsct">
              <div className="hbstm">
                <Image
                  src={ppcteam}
                  className="img-fluid"
                  alt="Paid Advertising"
                />
              </div>
              <div className="svypmng">
                <div className="svypmnginr">
                  <h3>Quick Visibility</h3>
                  <p>
                    Get your brand in front of potential customers almost
                    immediately.
                  </p>
                </div>
                <div className="svypmnginr">
                  <h3>Cost-Effective</h3>
                  <p>
                    Only pay for clicks, ensuring your budget is used
                    efficiently.
                  </p>
                </div>
                <div className="svypmnginr">
                  <h3>Enhanced Brand Awareness</h3>
                  <p>
                    Build brand recognition through strategic ad placements.
                  </p>
                </div>
                <div className="svypmnginr">
                  <h3>Scalability</h3>
                  <p>
                    Easily adjust your campaigns to scale with your business
                    needs.
                  </p>
                </div>
                <div className="svypmnginr">
                  <h3>Targeted Reach</h3>
                  <p>
                    Focus your efforts on the audience most likely to convert.
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

export default OurTeamPpc;
