import Image from "next/image";
import Link from "next/link";
import Careeropp1 from "../../../public/images/internproimg/training-digit-1.webp";
import Careeropp2 from "../../../public/images/internproimg/training-digit-2.webp";
import Careeropp3 from "../../../public/images/internproimg/training-digit-3.webp";

const NewInternshipData = () => {
  return (
    <>
      <section className="webguruz-internship-program py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center heading-main mb-4">
              <h2 className="intern-heading">
                Advance your future with our 3 Months Industrial
                <br />
                <span>Training Programs</span>
              </h2>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="web-training-menu">
                <div className="image-linking">
                  <Link
                    href={"/digital-marketing-training-in-chandigarh-mohali"}
                  >
                    <Image
                      src={Careeropp1}
                      alt="Digital Marketing Training Program Image"
                    />
                  </Link>
                </div>
                <div className="webguruz-help-points">
                  <Link
                    href={"/digital-marketing-training-in-chandigarh-mohali"}
                  >
                    <h3>
                      3 Months <span>Digital Marketing</span> Training program
                    </h3>
                  </Link>
                  <ul className="wgz-confined-list">
                    <li>SEO Fundamentals & Advanced Techniques</li>
                    <li>Google Ads and PPC Campaigns</li>
                    <li>Social Media Marketing & Automation</li>
                    <li>Campaign Analytics & Reporting</li>
                  </ul>
                  <div className="training-buttons">
                    <Link
                      href={"/digital-marketing-training-in-chandigarh-mohali"}
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="web-training-menu">
                <div className="image-linking">
                  <Link
                    href={"/website-development-training-in-chandigarh-mohali"}
                  >
                    <Image
                      src={Careeropp2}
                      alt="Website Development Training Program Image"
                    />
                  </Link>
                </div>
                <div className="webguruz-help-points">
                  <Link
                    href={"/website-development-training-in-chandigarh-mohali"}
                  >
                    <h3>
                      3 Months <span>Website Development</span> Training program
                    </h3>
                  </Link>
                  <ul className="wgz-confined-list">
                    <li>HTML, CSS, and JavaScript Basics</li>
                    <li>Responsive Web Design</li>
                    <li>Backend Development</li>
                    <li>Content Management Systems (CMS)</li>
                  </ul>
                  <div className="training-buttons">
                    <Link href="/website-development-training-in-chandigarh-mohali">
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="web-training-menu">
                <div className="image-linking">
                  <Link
                    href={"/hubspot-development-training-in-chandigarh-mohali"}
                  >
                    <Image
                      src={Careeropp3}
                      alt="HubSpot Development Training Program Image"
                    />
                  </Link>
                </div>
                <div className="webguruz-help-points">
                  <Link
                    href={"/hubspot-development-training-in-chandigarh-mohali"}
                  >
                    <h3>
                      3 Months <span>HubSpot Development</span> Training program
                    </h3>
                  </Link>
                  <ul className="wgz-confined-list">
                    <li>Introduction to HubSpot CRM</li>
                    <li>Custom Module Development</li>
                    <li>Workflows and Marketing Automation</li>
                    <li>Reporting and Analytics</li>
                  </ul>
                  <div className="training-buttons">
                    <Link
                      href={
                        "/hubspot-development-training-in-chandigarh-mohali"
                      }
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 text-center call-now-btn">
              <a href="tel:+917087233363" className="explore-btn">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewInternshipData;
