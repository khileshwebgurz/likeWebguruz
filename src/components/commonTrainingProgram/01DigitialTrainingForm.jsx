import HubSpotFormV2 from "@/utils/formsHubspot/hubform";

const DigitialTrainingForm = () => {
  return (
    <>
      <section className="training-entry-form py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 heading-main">
              <div className="training-form-contents">
                <span className="dot highlight-course">
                  Learn, Grow, and Succeed
                </span>
                <h1>
                  <span>3-Months Digital Marketing Training</span> in Mohali
                  & Chandigarh
                </h1>
                <p>
                  Gain the skills needed to excel in SEO, social media, Google
                  Ads, content creation, marketing, and more. Join us and access
                  a world of opportunities in one of the fastest-growing
                  industries.
                </p>
              </div>
              {/* <div className="course-enroll-btn">
                <button className="explore-btn">Start Today!</button>
              </div> */}
            </div>
            <div className="col-md-6 col-12">
              <div className="training-manual-form">
                <HubSpotFormV2 />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitialTrainingForm;
