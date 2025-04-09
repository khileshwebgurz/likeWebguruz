import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const ZohoServeForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice zoho-service-form  py-5"
        id="zohoserve-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Supercharge Your Business{" "}
                <strong>with Our Zoho Implementation Services</strong>
              </h2>
              <p className="color-wt">
                Working with WebGuruz means gaining access to India&apos;s most
                experienced Zoho implementation specialists who understand the
                local business environment and global best practices. Our proven
                approach has helped hundreds of businesses across India
                transform their operations through proper CRM implementation. We
                don&apos;t just set up software - we build solutions that align
                perfectly with your workflow, eliminate bottlenecks, and provide
                meaningful insights for better decision-making. The return on
                investment is clear: reduced operational costs, improved team
                productivity, and increased customer satisfaction.
              </p>
              <p className="color-wt">
                Why struggle with complex software implementation when our
                experts are just a call away? Contact us today to discover how
                we can revolutionize your business with Zoho.
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

export default ZohoServeForm;
