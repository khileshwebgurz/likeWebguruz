import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const WhmcForm = () => {
  return (
    <>
      <section className="ppcbannerservice whmcs-form  py-5" id="whmcdev-form">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Empower Your Business with{" "}
                <strong>Certified WHMCS Development Solutions</strong>
              </h2>
              <p className="color-wt">
                WHMCS is an all-in-one solution that provides seamless billing
                and automation, making it easier for you to manage your business
                operations. With our certified team of developers at WebGuruz,
                we leverage WHMCS&apos;s powerful features to streamline your
                workflow and offer exceptional results. Whether you are managing
                billing, invoices, payments, or customer support, our WHMCS
                development services will enable you to optimize your business
                processes with greater efficiency, saving you both time and
                money. Don&apos;t wait to elevate your business operations- contact
                us today for personalized support and solutions!
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

export default WhmcForm;
