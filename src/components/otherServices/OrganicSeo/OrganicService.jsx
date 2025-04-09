"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("org-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition = jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
  }
};
const OrganicService = () => {
  return (
    <section className="organic-seo-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="organic-left-service-01 inner-page">
              <h1 className="organic-seo-title">
                <span>Organic search</span> results account for 45.1% of all
                clicks.
              </h1>
              <p>
                With over 45% of clicks going to organic search results, Organic
                SEO has become the most valuable strategy to boost visibility
                and drive consistent traffic to your website. At WebGuruz, our
                Organic SEO Services help businesses rank higher, generate more
                leads, and grow their online presence, all without relying on
                paid ads.
              </p>
              <button className="explore-btn" onClick={handleScrollToJobs}>
                Start Growing My Business Now! <FontAwesomeIcon
                  icon={faArrowRight}
                  role="img"
                  aria-label="Arrow Right"
                  height={"1rem"}
                />
              </button>
            </div>
          </div>

          <div className="col-md-6">
            <div className="appr_hero-stat">
              <div className="appr_hero-stat-buble _first default-bg">
                <div className="_body">
                  <div className="_front">
                    <div className="_value">91%</div>
                    <h5 className="_title">RETENTION RATE</h5>
                    <p className="_desc">Industry average: 50%</p>
                  </div>
                  <div className="_back">
                    <h5>WHY IS OUR RETENTION RATE SO HIGH?</h5>
                    <p>
                      Scalable solutions
                      <br />
                      Industry specialists
                      <br />
                      Proven results
                    </p>
                  </div>
                </div>
              </div>

              <div className="appr_hero-stat-buble _second default-bg">
                <div className="_body">
                  <div className="_front">
                    <div className="_value">93%</div>
                    <h5 className="_title">CLIENT SATISFACTION SCORE</h5>
                    <p className="_desc">Industry average: 72%</p>
                  </div>
                  <div className="_back">
                    <h5>WHY IS OUR SATISFACTION SCORE SO HIGH?</h5>
                    <p>
                      Project management
                      <br />
                      ROI tracking
                      <br />
                      Diverse skillsets
                    </p>
                  </div>
                </div>
              </div>

              <div className="appr_hero-stat-card without-rating">
                <div className="_rate">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <p className="_text">
                  “WebGuruz has been a game- changer for our web strategy.”
                </p>
                
              </div>

              <div className="appr_hero-stat-buble _third dark-blue-bg">
                <div className="_body">
                  <div className="_front">
                    <div className="_value">420%</div>
                    <h5 className="_title">NET PROMOTER SCORE</h5>
                    <p className="_desc">Industry average: 16</p>
                  </div>
                  <div className="_back">
                    <h5>WHY IS OUR NPS SO HIGH?</h5>
                    <p>
                      Turn-key solutions
                      <br />
                      Real business results
                      <br />
                      Consistent communication
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganicService;
