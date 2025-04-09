import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const ContMarketForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice content-marketing-form py-5"
        id="contentmarket-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                What You Can Achieve{" "}
                <strong> with Our Content Marketing Services? </strong>
              </h2>
              <p className="color-wt">
                Imagine turning your website into a conversion machine. With our
                tailored content strategies, you can attract more visitors, keep
                them engaged, and inspire them to take action. Our services are
                built to boost your search engine rankings and create meaningful
                connections with your audience. We craft each piece with care,
                ensuring that your brand message is clear and persuasive. The
                impact is measurable- increased traffic, higher engagement, and
                better conversion rates. When you work with us, you invest in
                long-term growth. We take pride in delivering results that make
                your business shine. Call us today to start your journey to
                digital success.
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

export default ContMarketForm;
