import WebdevForm from "@/utils/formsHubspot/Webdeveform";
const HubConsultForm = () => {
  return (
    <>
      <section
        className="scrfrm hub-ranking consulting-form py-5"
        id="hubrank-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 content-left heading-main">
              <h2 className="text-white">
                <strong>
                  Transform Your HubSpot Strategy into Measurable Success{" "}
                </strong>{" "}
                with WebGuruz
              </h2>
              <p className="mt-3 mb-4 text-white">
                We provide actionable strategies, seamless implementation, and
                ongoing support to ensure your business goals are met
                effectively. With a customer-centric approach and a commitment
                to excellence, WebGuruz is a global leader in HubSpot consulting
                services, delivering results that matter.
              </p>
              <div className="py-4 hub-icons">
                <ul>
                  <li>
                    <span className="number-hub">1</span>
                    <p>Trusted and Recognized for our HubSpot Expertise.</p>
                  </li>
                  <li>
                    <span className="number-hub">2</span>
                    <p>Experience & Expertise across Varied Industries.</p>
                  </li>
                  <li>
                    <span className="number-hub">3</span>
                    <p>
                      Tailored Solutions to meet your Unique Business Needs.
                    </p>
                  </li>
                  <li>
                    <span className="number-hub">4</span>
                    <p>Proven Track Record of Success.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              {/* <HubspotForm /> */}
              <WebdevForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HubConsultForm;
