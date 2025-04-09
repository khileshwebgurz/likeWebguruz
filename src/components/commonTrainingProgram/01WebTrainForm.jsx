import HubSpotFormV2 from "@/utils/formsHubspot/hubform";

const WebTrainForm = () => {
  return (
    <>
      <section className="training-entry-form py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 heading-main">
              <div className="training-form-contents">
                <span className="dot highlight-course">
                  Become a Pro Web Developer
                </span>
                <h1>
                  <span>3-Months Website Development Training </span> in
                  Mohali & Chandigarh
                </h1>
                <p>
                  Get ready to launch your career as a professional web
                  developer with our expert guidance and real-world projects.
                  Whether you&apos;re a beginner or looking to upgrade your existing
                  skills, our hands-on training program ensures you&apos;ll gain
                  practical expertise in HTML, CSS, JavaScript, and other
                  essential web technologies.
                </p>
              </div>
              
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

export default WebTrainForm;
