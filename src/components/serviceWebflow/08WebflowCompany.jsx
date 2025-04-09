import React from "react";
import check from "../../../public/images/EcommerceImplementimg/c1.svg";
import cart from "../../../public/images/webflowwimages/webflow-chart.svg";
import Image from "next/image";
import Link from "next/link";

const WebflowCompany = () => {
  const processSteps = [
    {
      title: "No-Code & Low-Code Flexibility",
      description:
        "Webflow empowers businesses by eliminating the need for extensive coding while offering the flexibility to customize websites as needed. Whether you're a startup or an enterprise, Webflow enables rapid development without compromising quality, making it an ideal choice for businesses looking for efficiency and scalability.",
    },
    {
      title: "Fully Responsive & Mobile-Optimized Designs",
      description:
        "With Webflow, every website is built to be mobile-friendly right from the start. The platform ensures seamless responsiveness across all screen sizes, delivering a consistent user experience whether visitors access your site from a desktop, tablet, or smartphone.",
    },
    {
      title: "SEO-Friendly Infrastructure",
      description:
        "Webflow provides built-in SEO tools, including clean code, customizable meta tags, structured data, and automatic sitemap generation. These features help businesses rank higher in search engines, increasing online visibility and driving organic traffic to their website.",
    },
    {
      title: "Lightning-Fast Performance & Hosting",
      description:
        "Webflow’s hosting is powered by AWS and Fastly, ensuring high-speed performance, secure encryption, and 99.99% uptime. This eliminates the need for third-party hosting providers while guaranteeing a fast-loading, reliable website experience for users worldwide.",
    },
    {
      title: "Intuitive CMS & Content Editing",
      description:
        "Unlike traditional website builders, Webflow’s CMS allows businesses to easily update content, create dynamic pages, and manage blogs without technical expertise. The intuitive editor lets teams collaborate and make real-time changes without disrupting the site's structure.",
    },
  ];

  return (
    <div className="webflow-dev-company py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              <span>Webflow Web Development:</span> Core Features
            </h2>
          </div>
        </div>
        <div className="row row-our-process align-items-center">
          <div className="col-lg-6 col-12">
            {processSteps.map((step, index) => (
              <div className="process-box" key={index}>
                <Image src={check} alt="process" />
                <div className="process-decription">
                  <h5>{step.title}</h5>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-6 col-12 mt-4 mt-md-0">
            <div className="process-img">
              <Image src={cart} alt="Service Icon" />
            </div>
          </div>
        </div>
        <div className="row our-btn-group">
          <div className=" benifit-cta ">
            <Link href="/contact-us" className="explore-btn partner-btn">
              Partner With Us
            </Link>
            <Link
              href="/services/webflow-development/webflow-maintenance-package"
              className="explore-btn"
            >
              Maintenance Packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebflowCompany;
