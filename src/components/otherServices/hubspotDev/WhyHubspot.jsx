import Image from "next/image";
import reason1 from "../../../../public/images/hubspotimages/hubreason1.svg";
import reason2 from "../../../../public/images/hubspotimages/hubreason2.svg";
import reason3 from "../../../../public/images/hubspotimages/hubreason3.svg";
import reason4 from "../../../../public/images/hubspotimages/hubreason4.svg";
import Link from "next/link";
const WhyHubspot = () => {
  return (
    <>
      <section className=" digital-marketing py-5 vector-digital-hubs">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h2>
                Reasons to Choose{" "}
                <span> WebGuruz as Your HubSpot Development Partner</span>
              </h2>
            </div>
          </div>
          <div className="row d-flex align-items-center py-4">
            <div className="card-content d-flex align-items-center">
              <div className="col-sm-6 col-xs-12 content">
                <h3 className="mb-3">Proven track record of success</h3>
                <p>
                  We have a history of delivering successful HubSpot projects
                  across various industries, demonstrating our expertise and
                  ability to drive results.
                </p>
                <Link className="explore-btn" href="#" aria-label="Read More">
                  Read more
                </Link>
              </div>
              <div className="col-sm-6 col-xs-12 image">
                <Image src={reason1} alt="Proven track record" />
              </div>
            </div>
          </div>
          <div className="row py-4">
            <div className="card-content reverse d-flex align-items-center">
              <div className="col-sm-6 col-xs-12 content">
                <h3 className="mb-3">Experienced and skilled team</h3>
                <p>
                  Our team consists of highly skilled developers and marketers
                  with in-depth knowledge of HubSpot&apos;s features and best
                  practices. They are dedicated to providing exceptional service
                  and delivering tailored solutions.
                </p>
                <Link
                  className="explore-btn"
                  href="/leadership-team"
                  aria-label="Read More"
                >
                  Read more
                </Link>
              </div>
              <div className="col-sm-6 col-xs-12 image">
                <Image src={reason2} alt="Experienced and skilled team" />
              </div>
            </div>
          </div>
          <div className="row py-4">
            <div className="card-content d-flex align-items-center">
              <div className="col-sm-6 col-xs-12 content">
                <h3 className="mb-3">Customized solutions</h3>
                <p>
                  We work closely with our clients to understand their specific
                  requirements and tailor our services accordingly, ensuring
                  that our solutions align perfectly with their goals.
                </p>
                <Link className="explore-btn" href="#" aria-label="Read More">
                  Read more
                </Link>
              </div>
              <div className="col-sm-6 col-xs-12 image">
                <Image src={reason3} alt="Customized solutions" />
              </div>
            </div>
          </div>
          <div className="row py-4">
            <div className="card-content reverse d-flex align-items-center">
              <div className="col-sm-6 col-xs-12 content">
                <h3 className="mb-3">Excellent customer support</h3>
                <p>
                  Our dedicated team is always available to assist you with any
                  questions or issues that may arise, ensuring a smooth and
                  hassle-free experience.
                </p>
                <Link
                  className="explore-btn"
                  href="/contact-us"
                  aria-label="Read More"
                >
                  Read more
                </Link>
              </div>
              <div className="col-sm-6 col-xs-12 image">
                <Image src={reason4} alt="Excellent customer support" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyHubspot;
