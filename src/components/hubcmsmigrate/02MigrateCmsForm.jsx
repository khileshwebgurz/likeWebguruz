import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const MigrateCmsForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice migrate-cms-form py-5"
        id="cmsmigrt-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              {/* <h2 className="color-wt">
                {heading} <span>{subHeading}</span>
              </h2> */}

              <h2 className="color-wt">
                <strong>Expert HubSpot CMS Migration Services </strong> Tailored
                for Success
              </h2>
              <p className="color-wt">
                At WebGuruz, we bring years of expertise and an in-depth
                understanding of HubSpot’s robust ecosystem to deliver
                exceptional migration services. As a trusted partner, we’ve
                helped businesses worldwide unlock the true potential of HubSpot
                CMS. Our certified team is committed to transforming your
                website without data loss, downtime, or disruption to your
                business.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 formppc hub-ranking">
              {/* <HubspotForm /> */}
              <WebdevForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MigrateCmsForm;
