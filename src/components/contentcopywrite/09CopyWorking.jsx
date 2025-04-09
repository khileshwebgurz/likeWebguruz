import React from "react";
import Image from "next/image";
import seo5 from "../../../public/images/seocopywriteimg/copywrite-seo.svg";
const CopyWorking = () => {
  return (
    <div className="seocopywork-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 ">
            <div className="seo-work-left">
              <Image src={seo5} alt="seo-work" />
            </div>
          </div>
          <div className="col-md-6 col-12 heading-main text-center text-md-start mb-4 mb-md-0">
            <h2 className="mb-3">
              Breakthrough SEO <span>Copywriting Guaranteed</span>
            </h2>
            <div className="work-list">
              <ul>
                <li>
                  <p>
                    Experience our services with a no-obligation initial
                    consultation. Our experts will provide a preliminary
                    analysis of your current content strategy, identify
                    potential improvements, and give you a glimpse of the
                    transformative results we can achieve together.
                  </p>
                </li>
                <li>
                  <p>
                    Customized solutions to fit businesses of all sizes and
                    budgets. Our pricing models are designed to provide maximum
                    value and ROI, ensuring that high-quality SEO copywriting is
                    accessible to businesses at every stage of growth.
                  </p>
                </li>
                <li>
                  <p>
                    We stand behind our work with a solid performance guarantee
                    that sets us apart from other SEO copywriting services. Our
                    commitment includes measurable improvements in search
                    rankings, organic traffic, and user engagement, backed by
                    detailed analytics and transparent reporting.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyWorking;
