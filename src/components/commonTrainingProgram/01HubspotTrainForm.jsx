import HubSpotFormV2 from "@/utils/formsHubspot/hubform";

const HubspotTrainForm = () => {
  return (
    <>
      <section className="training-entry-form py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 heading-main">
              <div className="training-form-contents">
                <span className="dot highlight-course">
                  Your first step towards a rewarding career
                </span>
                <h1>
                  <span>3-Months HubSpot Development Training </span> in Mohali &
                  Chandigarh
                </h1>
                <p>
                  At WebGuruz Technologies Pvt Ltd, we offer an
                  industry-oriented HubSpot Development Training Course designed
                  to equip students in Mohali and Chandigarh with cutting-edge
                  skills. Whether you’re a tech enthusiast or a budding
                  marketer, this course blends practical learning with
                  real-world applications, ensuring you’re ready to thrive in
                  today’s competitive landscape.
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

export default HubspotTrainForm;
