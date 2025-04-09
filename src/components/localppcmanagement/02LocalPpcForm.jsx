import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const LocalPpcForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice local-ppc-form py-5"
        id="localppc-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Drive Targeted Traffic &{" "}
                <strong> Boost Conversions with WebGuruz</strong>
              </h2>
              <p className="color-wt">
                Local PPC marketing is the key to unlocking immediate visibility
                and driving actionable leads to your business. At WebGuruz, our
                Local PPC Management Services offer cutting-edge strategies to
                maximize your business’s exposure in your local market. Whether
                you’re an experienced business or just starting out, our
                certified PPC consultants craft campaigns that convert, ensuring
                your business stands out amidst fierce competition.
              </p>
              <p className="color-wt">
                Call us today and let’s drive results together.
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

export default LocalPpcForm;
