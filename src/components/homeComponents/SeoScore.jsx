import SeoScoreForm from "@/utils/formsHubspot/SeoScoreForm";
import React from "react";

const SeoScore = () => {
  return (
    <>
      <section className="seo-score-check">
        <div className="container">
          <div className="row score-banner ">
            <div className="score-content">
              <div className="score-headings">
                <div className="col-12 text-center">
                  <h3 className="sub-score-heading">
                    Check Your Website&apos;s Seo
                  </h3>
                </div>
                <div className="col-12 text-center">
                  <h2 className="main-score-heading">
                    What is your <span>SEO score?</span>
                  </h2>
                </div>
              </div>
              <div className="col-12">
                <SeoScoreForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SeoScore;
