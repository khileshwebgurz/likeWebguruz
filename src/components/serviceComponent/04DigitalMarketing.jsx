import Image from "next/image";
import optimized from "../../../public/images/serviceImages/seo.webp";
import socialmarketing from "../../../public/images/serviceImages/Social-Media-Marketing.webp";
import automation from "../../../public/images/serviceImages/Marketing-Automation.webp";
import paid from "../../../public/images/serviceImages/paid-markeitng.webp";
import emailmarket from "../../../public/images/serviceImages/email-marketing.webp";
import contentmarkt from "../../../public/images/serviceImages/content-marketing.webp";
import Link from "next/link";
const DigitalMarketing = () => {
  return (
    <>
      <section className="digital-marketing py-5 vector-digital">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h2>
                <span>Digital Marketing</span> Services We Offer
              </h2>
            </div>
          </div>
          <div className="row py-5">
          <div className="card-content d-flex align-items-center ">
            <div className="col-sm-6 col-xs-12 content">
              <h3 className="mb-3">SEO (Search Engine Optimization Services)</h3>
              <p>
              Our search engine optimization consultants optimize your website to improve its ranking on search engines like Google. We focus on keyword research, on-page optimization, link building, technical SEO, and more to ensure maximum visibility.
              </p>
              <Link className="explore-btn" href="/services/search-engine-optimization" aria-label="Read More">
               Read more
              </Link>
            
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={optimized} alt="Search Engine Optimization Services" width={640} height={640}/>
            </div>
            </div>
          </div>
          <div className="row d-flex align-items-center  py-5">
          <div className="card-content reverse d-flex align-items-center ">
            <div className="col-sm-6 col-xs-12 content">
              <h3 className="mb-3">SMM (Social Media Marketing Services)</h3>
              <p>
              We create and manage engaging social media campaigns to build brand awareness and connect with your target audience. Our SMM services include content creation, community management, advertising, and analytics.
              </p>
              <Link className="explore-btn" href="#" aria-label="Read More">
               Read more
              </Link>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={socialmarketing} alt="Social Media Marketing Services" width={640} height={640}/>
            </div>
            </div>
          </div>
          <div className="row  py-5">
            <div className="card-content d-flex align-items-center">
                <div className="col-sm-6 col-xs-12 content">
                  <h3 className="mb-3">Content Marketing Services</h3>
                  <p>High-quality content is essential for attracting and retaining customers. Our content marketing services include blog writing, article creation, infographics, and video production.
                  </p>
                  <Link className="explore-btn" href="/services/content-management-system" aria-label="Read More">
               Read more
              </Link>
                </div>
                <div className="col-sm-6 col-xs-12 image">
                  <Image src={contentmarkt} alt="Content Marketing Services" width={640} height={640}/>
                </div>
              </div>
          </div>
          <div className="row   py-5">
          <div className="card-content reverse d-flex align-items-center">
            <div className="col-sm-6 col-xs-12 content">
              <h3 className="mb-3">Marketing Automation</h3>
              <p>
              Streamline your marketing processes and improve efficiency with our marketing automation solutions. As a leading digital marketing agency, we help you automate tasks like email marketing, lead nurturing, and social media management.
              </p>
              <Link className="explore-btn" href="#" aria-label="Read More">
               Read more
              </Link>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={automation} alt="Marketing Automation" width={640} height={640}/>
            </div>
            </div>
          </div>
          <div className="row  py-5">
          <div className="card-content d-flex align-items-center">
            <div className="col-sm-6 col-xs-12 content">
              <h3 className="mb-3">PPC Management Services</h3>
              <p>
              Reach a wider audience with targeted paid advertising campaigns. Our paid marketing services include Google Ads, social media advertising, and display advertising.
              </p>
              <Link className="explore-btn" href="/services/pay-per-click-management" aria-label="Read More">
               Read more
              </Link>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={paid} alt="PPC Management Service" width={640} height={640}/>
            </div>
            </div>
          </div>
          <div className="row pt-5">
          <div className="card-content reverse d-flex align-items-center">
            <div className="col-sm-6 col-xs-12 content">
              <h3 className="mb-3">Email Marketing Services</h3>
              <p>Build relationships with your customers and drive conversions with a leading email marketing company. We create personalized email content and optimize your email campaigns for maximum results.
              </p>
              <Link className="explore-btn" href="#" aria-label="Read More">
               Read more
              </Link>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={emailmarket} alt="Email Marketing Services" width={640} height={640}/>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketing;
