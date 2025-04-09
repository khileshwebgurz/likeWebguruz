import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const WixMaintainForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice wordpress-maintain-form  py-5"
        id="wixmain-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Expert Wix Maintenance &{" "}
                <strong>Support That Keeps Your Business Growing</strong>
              </h2>
              <p className="color-wt">
                Is your Wix website giving you headaches? Slow loading times,
                broken links, and outdated content can drive potential customers
                away for good. Studies show that visitors abandon websites that
                take more than 3 seconds to load, and 88% of online consumers
                are less likely to return after a bad website experience. With
                WebGuruz Technologies handling your Wix maintenance, you&apos;ll
                never have to worry about losing customers due to website
                problems again. Our expert team quickly identifies and resolves
                issues before they impact your business.
              </p>
              <p className="color-wt">
                We&apos;ll keep your site running smoothly, securely, and effectively
                so you can maintain a professional online presence that converts
                visitors into customers. Don&apos;t wait until small problems become
                big ones - call us today for a free website assessment!
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

export default WixMaintainForm;
