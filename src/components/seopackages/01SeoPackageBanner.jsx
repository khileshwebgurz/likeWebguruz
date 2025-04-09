import React from "react";
import Seo from "../../../public/images/Seo-PackageImages/seo-1.webp";
import Image from "next/image";
const SeoPackageBanner = () => {
  return (
    <div className="service-banner py-5 d-flex align-items-center inner-page Seo-package">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-12 heading-main">
            <span>Comprehensive SEO Packages</span>
            <h1 className="mb-3">
              <span>Tailored SEO Plans </span> for Every Business Size
            </h1>
            <p>
              With a mix of technical expertise, data-driven strategies, and a
              keen understanding of search algorithms, our packages deliver
              real, measurable results. Our commitment to transparent, long-term
              growth for our clients means your investment in SEO with WebGuruz
              is not only affordable but also impactful.
            </p>
            <p>
              Whether you&apos;re new to SEO or looking to enhance your current
              strategy, WebGuruz has a package that aligns perfectly with your
              business vision and goals.
            </p>
            {/* <div className="two-btn">
              <button
                className="explore-btn btn-first"
                aria-label="Explore More"
              >
                Request a Quote
              </button>
              <button className="explore-btn" aria-label="Explore More">
                Get In Touch
              </button>
            </div> */}
          </div>
          <div className="col-md-6 col-12">
            <Image src={Seo} alt="SEO Packages Plans" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoPackageBanner;
