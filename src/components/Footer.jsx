import dcma from "../../public/images/dmca.webp";
import dcma2 from "../../public/images/dmca-protected.webp";
import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faFacebook,
  faInstagram,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import AccordianFooter from "./AccordianFooter";
const Footer = () => {
  return (
    <footer className="footer-main pt-5">
      <div className="container">
        {/* <div className="row">
          <div className="col col-xs-12 footer-sub one">
            <h3 className="mb-4">About WGZ</h3>
            <ul>
              <li>
                <Link href="/about">Our Company</Link>
              </li>
              <li>
                <Link href="/how-we-work">How We Work</Link>
              </li>
              <li>
                <Link href="/mvp-development">MVP Development</Link>
              </li>
              <li>
                <Link href="/awards-and-recognition">Awards & Recognition</Link>
              </li>
              <li>
                <Link href="/agile-software-development">
                  Agile Software Development
                </Link>
              </li>
              <li>
                <Link href="/client-testimonials">Client Testimonials</Link>
              </li>
              <li>
                <Link href="/leadership-team">Leadership Team</Link>
              </li>
              <li>
                <Link href="/life-at-webguruz">Life at Webguruz</Link>
              </li>
              <li>
                <Link href="/what-employees-speaks-about-us">
                  Employees Words
                </Link>
              </li>
            </ul>
          </div>
          <div className="col col-xs-12 footer-sub two">
            <h3 className="mb-4">Hubspot Development</h3>
            <ul>
              <li>
                <Link href="/hubspot-development">Hubspot Development</Link>
              </li>
              <li>
                <Link href="/hubspot-automation-services">
                  Hubspot Automation Services
                </Link>
              </li>
              <li>
                <Link href="/hubspot-consulting">Hubspot Consulting</Link>
              </li>
              <li>
                <Link href="/hubspot-migration-services">
                  Hubspot Migration Services
                </Link>
              </li>
              <li>
                <Link href="/hubspot-cms-migration">Hubspot CMS Migration</Link>
              </li>
              <li>
                <Link href="/hubspot-cms-development">
                  Hubspot CMS Development
                </Link>
              </li>
              <li>
                <Link href="/hubspot-crm-migration">Hubspot CRM Migration</Link>
              </li>
              <li>
                <Link href="/hubspot-onboarding">Hubspot Onboarding</Link>
              </li>
              <li>
                <Link href="/hubspot-services">Hubspot Services</Link>
              </li>
              <li>
                <Link href="/hubspot-developer">Hubspot Developer</Link>
              </li>
              <li>
                <Link href="/hubspot-marketing-automation">
                  Hubspot Marketing Automation
                </Link>
              </li>
              <li>
                <Link href="/hubspot-crm-automation">
                  Hubspot CRM Automation
                </Link>
              </li>
              <li>
                <Link href="/hubspot-application-developer">
                  Hubspot Application Developer
                </Link>
              </li>
            </ul>
          </div>
          <div className="col col-xs-12 footer-sub">
            <h3 className="mb-4">Digital Marketing</h3>
            <ul>
              <li>
                <Link href="/services/digital-marketing">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/content-management-system">
                  Content Management System
                </Link>
              </li>
              <li>
                <Link href="/services/pay-per-click-management">
                  Pay Per Click Management
                </Link>
              </li>
              <li>
                <Link href="/services/search-engine-optimization">
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/organic-seo">Organic SEO</Link>
              </li>
              <li>
                <Link href="/services/local-seo">Local SEO</Link>
              </li>
              <li>
                <Link href="/services/technical-seo">Technical SEO</Link>
              </li>
              <li>
                <Link href="/seo-packages">Seo Packages</Link>
              </li>
              <li>
                <Link href="/services/seo-content-writing-services">
                  Content Writing Services
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-seo">Mobile Seo</Link>
              </li>
              <li>
                <Link href="/services/ecommerce-seo">Ecommerce Seo</Link>
              </li>
              <li>
                <Link href="/services/white-label-seo">White Label Seo</Link>
              </li>
              <li>
                <Link href="/services/small-business-seo">
                  Small Business Seo
                </Link>
              </li>
              <li>
                <Link href="/services/voice-search-optimization">
                  Voice Search Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/international-seo">
                  International SEO
                </Link>
              </li>
              <li>
                <Link href="/services/seo-consulting">
                  SEO Consulting & Strategy
                </Link>
              </li>
              <li>
                <Link href="/services/google-ads-optimisation">
                  Google Ads Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce-ppc">
                  Ecommerce PPC Management
                </Link>
              </li>
              <li>
                <Link href="/services/remarketing-ads">Remarketing Ads</Link>
              </li>
              <li>
                <Link href="/services/amazon-ppc-management">
                  Amazon PPC Management
                </Link>
              </li>
              <li>
                <Link href="/services/local-ppc-management">
                  Local PPC Management
                </Link>
              </li>
              <li>
                <Link href="/services/white-label-ppc-management">
                  White Label PPC Management
                </Link>
              </li>
              <li>
                <Link href="/services/youtube-ads">Youtube Ads</Link>
              </li>
            </ul>
          </div>

          <div className="col col-xs-12 footer-sub">
            <h3 className="mb-4">Development</h3>
            <ul>
              <li>
                <Link href="/services/web-development">Web Development</Link>
              </li>
              <li>
                <Link href="/shopify-development-services">
                  Shopify Development Services
                </Link>
              </li>
              <li>
                <Link href="/ecommerce-development-services">
                  Ecommerce Development Services
                </Link>
              </li>
              <li>
                <Link href="/magento-development-services">
                  Magento Development Services
                </Link>
              </li>
              <li>
                <Link href="/woocommerce-development-services">
                  WooCommerce Development Services
                </Link>
              </li>
              <li>
                <Link href="/ecommerce-consulting-services">
                  Ecommerce Consulting Services
                </Link>
              </li>
              <li>
                <Link href="/ecommerce-web-design-services">
                  Ecommerce Web Design Services
                </Link>
              </li>
              <li>
                <Link href="/ecommerce-implementation-services">
                  Ecommerce Implementation Services
                </Link>
              </li>
              <li>
                <Link href="/ecommerce-maintenance-support">
                  ECommerce Website Support & Maintenance
                </Link>
              </li>
              <li>
                <Link href="/whmcs-development">
                  WHMCS Development Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-2 col-xs-12 footer-sub">
            <h3 className="mb-4">Resources</h3>
            <ul>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/infographics">Infographics</Link>
              </li>

            </ul>
          </div>
        </div> */}
        <div className="row py-4 border-botm d-flex align-items-center">
          <div className="col-sm-12 col-xs-12 right-privacy">
            <ul className="d-flex align-items-center text-center">
              <li>
                <Link href="/blogs">Top Blogs By Our Experts</Link>
              </li>
              <li>
                <Link href="/webguruz-foundation">Webguruz Foundation</Link>
              </li>
              <li>
                <Link href="/internship-program-in-mohali">
                  Internship Program
                </Link>
              </li>
              <li>
                <Link href="/terms-and-condition">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/refund-policy">Refund Policy</Link>
              </li>
              <li>
                <Link href="/sitemap">SiteMap</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 google-review">
            {/* <p className="web-review">
              Rated <span>4.1/5</span> for Webguruz based on <span>239</span>{" "}
              reviews at Google.{" "}
              <a
                href="https://search.google.com/local/reviews?placeid=ChIJY3-ALPXsDzkRouONr_Yn4QY"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google review"
              >
                Our Reviews on Google
              </a>
            </p> */}
          </div>
          <div className="col-sm-12 col-xs-12 footer-bottom social-icons d-flex justify-content-center">
            <ul className="d-flex align-items-center justify-content-start">
              <li className="px-2">
                <a
                  href="https://www.facebook.com/webguruztechnologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    height={20}
                    role="image"
                    aria-label="Facebook"
                  />
                </a>
              </li>
              <li className="px-2">
                <a
                  href="https://twitter.com/Webguruz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Twitter profile"
                >
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    height={20}
                    role="image"
                    aria-label="Twitter"
                  />
                </a>
              </li>
              <li className="px-2">
                <a
                  href="https://www.linkedin.com/company/webguru-technologies-pvt.-ltd./"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our LinkedIn page"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    height={20}
                    role="image"
                    aria-label="LinkedIn"
                  />
                </a>
              </li>
              <li className="px-2">
                <a
                  href="https://www.instagram.com/webguruz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Instagram page"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    height={20}
                    role="image"
                    aria-label="Instagram"
                  />
                </a>
              </li>
              <li className="px-2">
                <a
                  href="https://www.youtube.com/channel/UC-xaX1FJWj40ED-cTm2Lq6w"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Youtube channel"
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    height={20}
                    role="image"
                    aria-label="Youtube"
                  />
                </a>
              </li>
              <li className="px-2">
                <a
                  href="https://in.pinterest.com/webguruz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Pinterest page"
                >
                  <FontAwesomeIcon
                    icon={faPinterest}
                    height={20}
                    role="image"
                    aria-label="Pinterest"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-xs-12 footer-bottom right ">
            <div className="bottom-right-img d-flex align-items-center justify-content-center">
              <a
                href="https://www.dmca.com/site-report/webguruz.in"
                target="_blank"
                // rel="noopener noreferrer"
                aria-label="DMCA Protected"
              >
                <Image src={dcma2} alt="dcma" />
              </a>
              <p className="px-2 mb-0 text-center">
                Digital Marketing & Web Development Company
              </p>
            </div>
          </div>
          <div className="row copyright-btm py-2">
            <div className="col-sm-12 col-xs-12 copyright text-center">
              <p className="text-center">
                Copyright @ 2025 WebGuruz Technologies Private Limited. | All
                Rights Reserved
              </p>
            </div>
          </div>
          <AccordianFooter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
