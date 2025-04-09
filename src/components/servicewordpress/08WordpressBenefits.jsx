import React from "react";
import dev1 from "../../../public/images/wordpressdevimages/word-plug-1.webp";
import dev2 from "../../../public/images/wordpressdevimages/word-plug-2.webp";
import dev3 from "../../../public/images/wordpressdevimages/word-plug-3.webp";
import dev4 from "../../../public/images/wordpressdevimages/word-plug-4.webp";
import dev5 from "../../../public/images/wordpressdevimages/word-plug-5.webp";
import dev6 from "../../../public/images/wordpressdevimages/word-plug-6.webp";
import Image from "next/image";
import Link from "next/link";

const designServices = [
  {
    imgSrc: dev1,
    title: "User-Friendly Interface",
    alt: "Customer Icon",
    description:
      "WordPress is designed with simplicity and ease of use in mind, making it the perfect choice for businesses, bloggers, and eCommerce store owners alike. With its intuitive dashboard and user-friendly interface, even those with no coding experience can effortlessly manage and update their website’s content. The drag-and-drop editors and visual builders make website customization seamless, ensuring that your website always looks and functions exactly how you want it.",
  },
  {
    imgSrc: dev2,
    title: "SEO-Friendly Structure",
    alt: "Customer Icon",
    description:
      "With clean code, proper HTML markup, and structured data, WordPress helps search engines crawl and index your site efficiently. Additionally, it supports popular SEO plugins like Yoast SEO and Rank Math, allowing you to optimize metadata, create sitemaps, and improve keyword targeting effortlessly. Faster page load times, mobile responsiveness, and SEO-friendly permalinks further contribute to higher search engine rankings, driving more organic traffic to your website.",
  },
  {
    imgSrc: dev3,
    title: "Highly Scalable",
    alt: "Data Icon",
    description:
      "WordPress offers unmatched scalability, allowing your website to evolve alongside your business. Whether you’re starting with a small blog, a corporate website, or an online store, WordPress can handle everything from traffic surges to extensive content growth. With the ability to add unlimited pages, integrate new features, and scale up server resources, WordPress ensures that your website remains fast, efficient, and high-performing, even as your audience and content grow.",
  },
  {
    imgSrc: dev4,
    title: "Secure & Reliable",
    alt: "Users Icon",
    description:
      "With frequent core updates, theme and plugin patches, and advanced security measures, WordPress minimizes vulnerabilities. Additionally, security plugins like Wordfence and Sucuri add an extra layer of protection against malware, DDoS attacks, and brute-force login attempts. Features like SSL encryption, user role management, and automated backups further enhance reliability, ensuring maximum uptime and data protection for your business.",
  },
  {
    imgSrc: dev5,
    title: "Affordable Development",
    alt: "Security Icon",
    description:
      "Unlike custom-built websites that require extensive coding and high development costs, WordPress offers a cost-effective solution without compromising on quality or performance. The open-source nature of WordPress eliminates expensive licensing fees, while the vast availability of free and premium themes and plugins reduces development time and costs. Businesses can achieve a fully functional, professionally designed website at a fraction of the price compared to proprietary CMS platforms.",
  },
  {
    imgSrc: dev6,
    title: "Vast Plugin Ecosystem",
    alt: "Setting Icon",
    description:
      "WordPress boasts an extensive plugin ecosystem, offering over 59,000 free and premium plugins to enhance website functionality effortlessly. Whether you need to integrate SEO tools, contact forms, analytics, eCommerce solutions, social media sharing, or security enhancements, there’s a plugin for virtually everything. This flexibility allows businesses to customize their websites without complex coding, enabling quick adaptations to changing market trends and user demands. ",
  },
];

const WordpressBenefits = () => {
  return (
    <div className="wordpress-benifit-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2 className="mb-2">
              Why WordPress <span> CMS Development? </span>
            </h2>
            <p>
              Get a powerful, flexible, and scalable platform that supports your
              business’s growth and online success!
            </p>
          </div>
          {designServices.map((service, index) => (
            <div className="col-lg-4 col-md-6 col-12 mb-4" key={index}>
              <div className="benifit-card">
                <div className="img-title">
                <div className="benifit-img">
                  <Image src={service.imgSrc} alt={service.alt} />
                </div>
                <h5>{service.title}</h5>
                </div>
                <div className="benifit-description">
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row our-btn-group">
          <div className=" benifit-cta ">
            <Link href="/contact-us" className="explore-btn partner-btn">
              Partner With Us
            </Link>
            <Link href="/services/wordpress-development/wordpress-maintenance-package" className="explore-btn">
              Maintenance Packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordpressBenefits;
