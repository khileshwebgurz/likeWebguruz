import Link from "next/link";
import React from "react";

const SitemapContent = () => {
  return (
    <section className="sitemap-wgz py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12">
            <div className="sitemap-main-links">
              <ul className="main-lists">
                <li>
                  <h2>
                    <Link href={"/"}>HOME</Link>
                  </h2>
                </li>
                <li>
                  <h2>
                    <Link href={"/about"}>ABOUT</Link>
                  </h2>
                </li>
                <li>
                  <h2>
                    <Link href={"#"}>CASE STUDIES</Link>
                  </h2>
                </li>
                <li>
                  <h2>
                    <Link href={"/blogs"}>BLOGS</Link>
                  </h2>
                </li>
                <li>
                  <h2>
                    <Link href={"/careers"}>CAREERS</Link>
                  </h2>
                </li>
                <li>
                  <h2>
                    <Link href={"/contact-us"}>CONTACT</Link>
                  </h2>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="linking-pages">
              <ul className="main-list-sub">
                <li>
                  <Link href="/services/digital-marketing">
                    Digital Marketing
                  </Link>
                  <ul>
                    <li>
                      <Link
                        href="/services/search-engine-optimization"
                        className="list-setting"
                      >
                        Search Engine Optimization
                      </Link>
                      <ul className="inner-listings">
                        <li>
                          <Link href="/services/organic-seo">
                            <span>Organic SEO</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/local-seo">
                            <span>Local SEO</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/technical-seo">
                            <span>Technical SEO</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/seo-packages">
                            <span> Seo Packages</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/seo-content-writing-services">
                            <span> Content Writing Services</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/mobile-seo">
                            <span>Mobile SEO</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/ecommerce-seo">
                            <span>E-Commerce SEO</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/white-label-seo">
                            <span> White Label SEO</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/small-business-seo">
                            <span>Small Business SEO</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/voice-search-optimization">
                            <span> Voice Search Optimization</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/international-seo">
                            <span> International SEO</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/seo-consulting">
                            <span> SEO Consulting & Strategy</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        href="/services/pay-per-click-management"
                        className="list-setting"
                      >
                        Pay Per Click Management
                      </Link>
                      <ul className="inner-listings">
                        <li>
                          <Link href="/services/google-ads-optimisation">
                            <span>Google Ads Optimization</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/ecommerce-ppc">
                            <span>E-Commerce PPC Management</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/remarketing-ads">
                            <span>Remarketing Ads</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/amazon-ppc-management">
                            <span>Amazon PPC Management</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/local-ppc-management">
                            <span>Local PPC Management</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/white-label-ppc-management">
                            <span>White Label PPC Management</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/youtube-ads">
                            <span>Youtube Ads</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="main-list-sub it-services">
                <li>
                  <Link href="#" className="it-links">
                    IT Services
                  </Link>
                  <ul>
                    <li>
                      <ul className="inner-listings">
                        <li>
                          <Link href="/services/helpdesk-services">
                            <span className="serve-icon">
                              Helpdesk Services
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/msp-managed-service-provider">
                            <span className="serve-icon">
                              Managed Service Provider
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/remote-monitoring-management">
                            <span className="serve-icon">
                              Remote Monitoring Management
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="linking-pages">
              <ul className="main-list-sub">
                <li>
                  <Link href="#">Development</Link>
                  <ul>
                    <li>
                      <Link
                        href="/services/web-development"
                        className="list-setting"
                      >
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ecommerce-development-services"
                        className="list-setting"
                      >
                        E-Commerce Development Services
                      </Link>
                      <ul className="inner-listings manage-content">
                        <li>
                          <Link href="/magento-development-services">
                            <span>Magento Development Services</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/woocommerce-development-services">
                            <span>WooCommerce Development Services</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/ecommerce-consulting-services">
                            <span>E-Commerce Consulting Services</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/ecommerce-web-design-services">
                            <span>E-Commerce Web Design Services</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/ecommerce-implementation-services">
                            <span>E-Commerce Implementation Services</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/ecommerce-maintenance-support">
                            <span>
                              E-Commerce Website Support & Maintenance
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shopify-development-services">
                            <span>Shopify Development Services</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/whmcs-development">
                            <span>WHMCS Development Services</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        href="/services/content-management-system"
                        className="list-setting"
                      >
                        Content Management System
                      </Link>

                      <ul className="inner-listings manage-content">
                        <li>
                          <Link href="/services/wordpress-development">
                            <span className="serve-icon">
                              Wordpress Development
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/drupal-development">
                            <span className="serve-icon">
                              Drupal Development
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/joomla-development">
                            <span className="serve-icon">
                              Joomla Development
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/webflow-development">
                            <span className="serve-icon">
                              Webflow Development
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/wix-development">
                            <span className="serve-icon">Wix Development</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/squarespace-development">
                            <span className="serve-icon">
                              Squarespace Development
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/keap-development">
                            <span className="serve-icon">Keap Development</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="main-list-sub">
                <li>
                  <Link href="#" className="imp-link-heading">
                    Important Links
                  </Link>
                  <ul>
                    <li>
                      <ul className="inner-listings">
                        <li>
                          <Link href="/webguruz-foundation">
                            <span>Webguruz Foundation</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/internship-program-in-mohali">
                            <span>Internship Program</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/digital-marketing-training-in-chandigarh-mohali">
                            <span>Digital Marketing Training</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/website-development-training-in-chandigarh-mohali">
                            <span>Website Development Training</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/hubspot-development-training-in-chandigarh-mohali">
                            <span>HubSpot Development Training</span>
                          </Link>
                        </li>

                        <li>
                          <Link href="/internship-program-in-mohali/parichay-application-process">
                            <span>Parichay</span>
                          </Link>
                        </li>

                        <li>
                          <Link href={"/what-employees-speaks-about-us"}>
                            <span>What Employees speak about us</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="linking-pages">
              <ul className="main-list-sub about-gap">
                <li>
                  <Link href="/hubspot-development">Hubspot Development</Link>
                  <ul>
                    <li>
                      <ul className="inner-listings">
                        <li>
                          <Link href="/hubspot-automation-services">
                            <span> Hubspot Automation Services</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/hubspot-consulting">
                            <span>Hubspot Consulting</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/hubspot-migration-services">
                            <span> Hubspot Migration Services</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/hubspot-cms-migration">
                            <span> Hubspot CMS Migration</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/hubspot-cms-development">
                            <span> Hubspot CMS Development</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/hubspot-onboarding">
                            <span>Hubspot Onboarding</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/hubspot-crm-migration">
                            <span> Hubspot CRM Migration</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/hubspot-services">
                            <span>Hubspot Services</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/hubspot-developer">
                            <span>Hubspot Developer</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/hubspot-marketing-automation">
                            <span>Hubspot Marketing Automation</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/hubspot-crm-automation">
                            <span> Hubspot CRM Automation</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/hubspot-application-developer">
                            <span> Hubspot Application Developer</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="main-list-sub ">
                <li>
                  <Link href="#" className="about-links">
                    About WebGuruz
                  </Link>
                  <ul className="inner-listings">
                    <li>
                      <ul className="wgz-sitemap">
                        <li>
                          <Link href="/about">
                            <span>Our Company</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/how-we-work">
                            <span>How We Work</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/mvp-development">
                            <span>Startup and MVP</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/awards-and-recognition">
                            <span>Awards & Recognition</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/agile-software-development">
                            <span>Agile Software Development</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/client-testimonials">
                            <span>Client Testimonials</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/leadership-team">
                            <span>Leadership Team</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/full-cycle-product-development">
                            <span>Full Cycle Product Development</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="main-list-sub testing-services">
                <li>
                  <Link
                    href="#"
                    className="testing-links"
                    style={{ paddingBottom: "20px" }}
                  >
                    Testing Services
                  </Link>
                  <ul className="inner-listings">
                    <li>
                      <Link
                        href="/software-testing-company"
                        className="list-setting"
                      >
                        Software Testing
                      </Link>
                      <ul className="inner-listings manage-content">
                        <li>
                          <Link href="/manual-software-testing-services">
                            <span className="serve-icon">
                              Manual Software Testing
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/automation-testing-services">
                            <span className="serve-icon">
                              Automation Testing
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/load-testing-consulting-company">
                            <span className="serve-icon">
                              Load And Performance Testing
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SitemapContent;
