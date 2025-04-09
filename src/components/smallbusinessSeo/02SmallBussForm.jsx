import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const SmallBussForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice small-business-form  py-5"
        id="small-buss-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Achieve Online Success with our{" "}
                <strong>Small Business SEO Services</strong>
              </h2>
              <p className="color-wt">
                With Small Business SEO, you can enhance your website’s search
                engine ranking, attract more organic traffic, and grow your
                customer base. Our SEO services help small businesses increase
                their online visibility, build credibility, and stay ahead of
                local competitors. By optimizing your website for search
                engines, you’ll increase the chances of potential customers
                finding you when they search for products or services related to
                your business. Let us help you boost your digital marketing
                efforts and take your business to new heights!
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

export default SmallBussForm;
