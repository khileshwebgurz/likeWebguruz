import React from "react";
import YoutSlidesInner from "./YoutSlidesInner";

const YoutSlidesMain = () => {
  return (
    <section className="youtube-ads-slider py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9  mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Our YouTube <span>advertising Strategy</span>
            </h2>
            <p>
              Through our YouTube Ads Services, and with over a decade of
              experience in YouTube advertising, we&apos;ve developed a proven model
              to drive your business success.
            </p>
          </div>
          <div className="col-12">
            <YoutSlidesInner />
          </div>
        </div>
      </div>
    </section>
  );
};

export default YoutSlidesMain;
