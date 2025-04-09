import Link from "next/link";

const KeapWhyChoose = () => {
  return (
    <div className="keap-whychoose-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12 heading-main mb-4">
            <div className="choose-left">
              <h2 className="mb-2">
                Our Commitment<span> to Excellence</span>
              </h2>
              <p>
                At WebGuruz Technologies, we bring together technical expertise,
                business acumen, and a passion for client success. Our team of
                Keap specialists is dedicated to delivering solutions that not
                only meet but exceed your expectations. We believe in building
                long-term relationships with our clients, serving as trusted
                technology partners who are invested in your success. When you
                choose WebGuruz for your Keap development needs, you&apos;re not
                just hiring a service provider- you&apos;re gaining a committed
                ally in your business growth journey.
              </p>
            </div>
          </div>
          <div className="col-lg-8 col-12 heading-main">
            <div className="row choose-right">
              <div className="col-12 heading-main mb-3 mb-md-4">
                <h3>Why Work with WebGuruz Developers?</h3>
              </div>
              <div className="col-md-6 col-12 mb-3 mb-md-4">
                <div className="choose-right-content">
                  <h4>Deep Keap Platform Knowledge</h4>
                  <p>
                    Our developers have extensive experience with all aspects of
                    the Keap platform, ensuring that your solution leverages its
                    full potential.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-12 mb-3 mb-md-4">
                <div className="choose-right-content">
                  <h4>Quick Turnaround Time</h4>
                  <p>
                    Our efficient development processes and experienced team
                    enable us to deliver high-quality solutions within your
                    timeline.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-12 mb-3 mb-md-4">
                <div className="choose-right-content">
                  <h4>Collaborative Approach</h4>
                  <p>
                    We work as an extension of your team, maintaining open
                    communication and incorporating your feedback throughout the
                    development process.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-12 mb-3 mb-md-4">
                <div className="choose-right-content">
                  <h4>Competitive Pricing</h4>
                  <p>
                    We offer exceptional value for your investment, with
                    transparent pricing and no hidden costs.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-12 mb-3 mb-md-4">
                <div className="choose-right-content">
                  <h4>Ongoing Technical Support</h4>
                  <p>
                    Our support doesn&apos;t end at project delivery- we provide
                    continued assistance to ensure your Keap solution continues
                    to deliver value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row our-btn-group">
          <div className=" benifit-cta ">
            <Link href="/contact-us" className="explore-btn partner-btn">
              Partner With Us
            </Link>
            <Link href="/services/keap-development/keap-maintenance-package" className="explore-btn">
              Maintenance Packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeapWhyChoose;
