import React from "react";
import Image from "next/image";
import drupal1 from "../../../public/images/drupaldevimages/drupal-code-1.webp";
import drupal2 from "../../../public/images/drupaldevimages/drupal-code-2.webp";
import drupal3 from "../../../public/images/drupaldevimages/drupal-code-3.webp";
import drupal4 from "../../../public/images/drupaldevimages/drupal-code-4.webp";
import drupal5 from "../../../public/images/drupaldevimages/drupal-code-5.webp";
import drupal6 from "../../../public/images/drupaldevimages/drupal-code-6.webp";
import drupal7 from "../../../public/images/drupaldevimages/drupal-code-7.webp";
import drupal8 from "../../../public/images/drupaldevimages/drupal-code-8.webp";
import drupal9 from "../../../public/images/drupaldevimages/drupal-code-9.webp";
import Link from "next/link";
const DrupalServices = () => {
  return (
    <div className="drupalservices-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4">
            <h2>
              Our <span>Drupal Development Services</span>
            </h2>
            <p>
              We are committed to delivering high-performance, innovative, and
              future-proof Drupal solutions tailored to your business needs.
            </p>
          </div>
          <div className="col-lg-4  col-md-6 col-12 mb-4">
            <div className="drupal-card">
              <div className="drupal-icon">
                <Image src={drupal1} alt="Drupal Development" />
              </div>
              <div className="drupal-card-content">
                <h4>Custom Drupal Website Development</h4>
                <p>
                  We build dynamic, scalable, and fully customized Drupal
                  websites that meet your business’s unique requirements. From
                  corporate portals to enterprise solutions, we ensure your site
                  is tailored to deliver exceptional performance.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4  col-md-6 col-12 mb-4">
            <div className="drupal-card">
              <div className="drupal-icon">
                <Image src={drupal2} alt="Drupal Development Company" />
              </div>
              <div className="drupal-card-content">
                <h4>Drupal Migration & Upgrades</h4>
                <p>
                  Stay ahead by migrating to the latest version of Drupal. Our
                  team ensures seamless transitions, preserving your data, SEO
                  rankings, and website functionality.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4  col-md-6 col-12 mb-4">
            <div className="drupal-card">
              <div className="drupal-icon">
                <Image src={drupal3} alt="Drupal Development Company in India" />
              </div>
              <div className="drupal-card-content">
                <h4>Drupal Theme Development & Customization</h4>
                <p>
                  We create and customize Drupal themes that enhance user
                  engagement. Our themes are mobile-responsive, SEO-friendly,
                  and optimized for speed, ensuring a flawless experience across
                  all devices.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4  col-md-6 col-12 mb-4">
            <div className="drupal-card">
              <div className="drupal-icon">
                <Image src={drupal4} alt="Drupal Developers" />
              </div>
              <div className="drupal-card-content">
                <h4>Drupal API Development & Integration</h4>
                <p>
                  Integrate third-party applications such as CRMs, ERPs, and
                  payment gateways to enhance your Drupal website&apos;s
                  capabilities. Our developers ensure smooth and efficient API
                  integration for better functionality.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4  col-md-6 col-12 mb-4">
            <div className="drupal-card">
              <div className="drupal-icon">
                <Image src={drupal5} alt="Business Continuity Icon" />
              </div>
              <div className="drupal-card-content">
                <h4>Drupal Module Development</h4>
                <p>
                  Need specific functionality? We build custom Drupal modules to
                  enhance your website’s features, such as eCommerce
                  integrations, API connectivity, and user role management.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4  col-md-6 col-12 mb-4">
            <div className="drupal-card">
              <div className="drupal-icon">
                <Image src={drupal6} alt="Setting Icon" />
              </div>
              <div className="drupal-card-content">
                <h4>Drupal Support & Maintenance</h4>
                <p>
                  Our 24/7 Drupal maintenance and support services ensure your
                  website remains updated, secure, and optimized for
                  performance.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4  col-md-6 col-12 mb-4">
            <div className="drupal-card">
              <div className="drupal-icon">
                <Image src={drupal7} alt="Shopping Icon" />
              </div>
              <div className="drupal-card-content">
                <h4>Drupal eCommerce Development</h4>
                <p>
                  Transform your online store with Drupal Commerce solutions. We
                  develop scalable and secure eCommerce platforms with payment
                  gateway integration, order management, and personalized
                  shopping experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4  col-md-6 col-12 mb-4">
            <div className="drupal-card">
              <div className="drupal-icon">
                <Image src={drupal8} alt="Gear Icon" />
              </div>
              <div className="drupal-card-content">
                <h4>Drupal Performance Optimization</h4>
                <p>
                  A slow website leads to high bounce rates. We optimize your
                  Drupal site’s speed, caching, and database performance to
                  ensure a seamless user experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4  col-md-6 col-12 mb-4">
            <div className="drupal-card">
              <div className="drupal-icon">
                <Image src={drupal9} alt="Rating Icon" />
              </div>
              <div className="drupal-card-content">
                <h4>Enterprise Drupal Solutions</h4>
                <p>
                  Our enterprise Drupal solutions include multi-site management,
                  content workflow automation, and scalable hosting
                  infrastructure to support business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrupalServices;
