import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const DrupalForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice drupal-form py-5"
        id="drupal-dev-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Custom Drupal Solutions{" "}
                <strong>to Drive Your Business Forward</strong>
              </h2>
              <p className="color-wt">
                Imagine a website that is not only visually appealing but also
                highly functional, secure, and optimized for performance. Our
                Drupal development services empower businesses by enhancing
                customer engagement through intuitive user experiences, seamless
                navigation, and fast loading times. We help boost conversions
                with data-driven design and functionality, ensuring higher lead
                generation. Managing content becomes effortless, allowing your
                team to edit and publish with ease. With Drupal’s built-in
                security features, your website remains protected against cyber
                threats. Plus, as your business grows, your website scales
                without performance issues. Ready to take your online presence
                to the next level? Contact us today for a free consultation!
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

export default DrupalForm;
