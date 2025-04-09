import WebdevForm from "@/utils/formsHubspot/Webdeveform";
const CmsDevForm = () => {
  return (
    <>
      <section
        className="scrfrm hub-ranking cms-dev-form py-5"
        id="cms-dev-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 content-left heading-main">
              <h2 className="text-white">
                <strong>
                Benefit from a Flexible, Scalable, & User-Friendly 
                </strong>{" "}
                CMS built on HubSpot
              </h2>
              <p className="mt-3 mb-4 text-white">
              Whether you&apos;re looking to boost lead generation, enhance content management, or streamline website performance, our HubSpot CMS development solutions enable you to achieve it all. Our proven track record and deep understanding of the HubSpot ecosystem ensure we deliver exceptional results for every client.
              </p>
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

export default CmsDevForm;
