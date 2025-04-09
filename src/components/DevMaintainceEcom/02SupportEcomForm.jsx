import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const SupportEcomForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice ecommmerce-support-form py-5"
        id="maintain-support-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Experience Unmatched eCommerce{" "}
                <strong> Website Support and Maintenance </strong>
              </h2>
              <p className="color-wt">
              Keeping your eCommerce website up-to-date, functional, and secure is not just an option- it’s a necessity. Our all-encompassing support and maintenance services offer peace of mind and ensure your website performs flawlessly. From handling technical glitches to updating content and monitoring performance, we’ve got you covered. With our 24/7 support and a dedicated team of professionals, you can focus on growing your business while we handle the rest. Don’t let downtime or inefficiency affect your bottom line- contact WebGuruz today to experience the difference!
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 formppc hub-ranking">
              <WebdevForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportEcomForm;
