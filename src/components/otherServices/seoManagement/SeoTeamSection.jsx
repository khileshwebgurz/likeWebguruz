import Image from "next/image";
import Hbteam from "../../../../public/images/seoimages/seo-benefit.svg";

function SeoTeamSection() {
  return (
    <section id="ourTeamhbspt">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="heading-main text-center">
              <h2>
              The One-Stop Solution for All <span>Your SEO Needs</span>
              </h2>
              <p>When it comes to SEO, WebGuruz is your ultimate partner. Here’s how we provide comprehensive solutions:</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="hbstsct">
              <div className="hbstm">
                <Image
                  src={Hbteam}
                  className="img-fluid"
                  alt="SEO Solutions"
                />
              </div>
              <div className="svypmng">
                <div className="svypmnginr">
                  <h3>All-Inclusive SEO Services</h3>
                  <p>
                  From on-page to technical SEO, we handle it all.
                  </p>
                </div>
                <div className="svypmnginr">
                  <h3>Custom Strategies</h3>
                  <p>We create unique SEO plans tailored to your business needs.</p>
                </div>
                <div className="svypmnginr">
                  <h3>Expert Team</h3>
                  <p>Our team comprises SEO veterans with years of experience.</p>
                </div>
                <div className="svypmnginr">
                  <h3>Cutting-Edge Tools</h3>
                  <p>We leverage the latest SEO tools to ensure maximum efficiency.</p>
                </div>
                <div className="svypmnginr">
                  <h3>Continuous Support</h3>
                  <p>Our team is always available to answer your questions and provide ongoing SEO assistance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeoTeamSection;
