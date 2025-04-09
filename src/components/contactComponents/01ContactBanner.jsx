import Link from "next/link";
import NewContactForm from "@/utils/formsHubspot/NewContactForm";

const ContactBanner = () => {
  return (
    <>
      <section className="contact-banner py-5 inner-page" id="wgz-cntct-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 content">
              <h1 className="color-wt">
              Let&apos;s <strong> Discuss</strong>
              </h1>
              <p className="color-wt">
              We respond to 90% emails within 24 hours!
              </p>
              <div className="btn-merge">
                <Link className="explore-btn me-3" href="/book-an-appointment">
                  For Business
                </Link>
                <Link className="explore-btn no-color" href="/careers">
                  For Career
                </Link>
              </div>
            </div>
            {/* <ContactClient /> */}
            <div className="col-sm-6 col-xs-12 new-contact-details mt-4 mt-md-0 ">
            <NewContactForm/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactBanner;
