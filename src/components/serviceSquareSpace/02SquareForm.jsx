import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const SquareForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice squarespace-form py-5"
        id="squarespace-dev-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Build Stunning,{" "}
                <strong>High-Performance Websites with WebGuruz</strong>
              </h2>
              <p className="color-wt">
                Are you looking to establish a powerful online presence? Our
                Squarespace Web Development Services empower businesses to
                create an impactful and engaging digital footprint. We focus on
                user-friendly designs, SEO optimization, and mobile
                responsiveness, ensuring your website attracts and retains
                visitors. Our custom solutions help businesses increase
                conversions, generate leads, and improve brand visibility.
                Whether you are a startup, an established company, or a creative
                professional, we ensure your website reflects your brand
                identity and business goals. Contact us today and let’s bring
                your vision to life!
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

export default SquareForm;
