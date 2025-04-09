import React from "react";
import Android from "../../../public/images/magentoimg/ecom-tech-arrow.svg";
import Image from "next/image";
const SupportEcomTechy = () => {
  return (
    <div className="Technologystack-section ecom-supoport-tech py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-5">
            <h2>
              Our eCommerce <span> Support Strategies </span>
            </h2>
            <p>
              Effective support and maintenance strategies are the backbone of
              our services. Here are a few we follow:
            </p>
          </div>
          <div className="col-md-6 col-12 mb-4">
            <div className="techmolgy-box">
              <div className="tech-box-one">
                <h4>Security Enhancement Strategies</h4>
                <ul className="tech-list">
                  <li>
                    <Image src={Android} alt="android" />
                    <a href="#">Regular vulnerability scans</a>
                  </li>
                  <li>
                    <Image src={Android} alt="android" />
                    <a href="#">SSL certificate management</a>
                  </li>
                  <li>
                    <Image src={Android} alt="android" />
                    <a href="#">DDoS protection and mitigation</a>
                  </li>
                  <li>
                    <Image src={Android} alt="android" />
                    <a href="#">Two-factor authentication</a>
                  </li>
                  <li>
                    <Image src={Android} alt="android" />
                    <a href="#">Firewall configuration and management</a>
                  </li>
                  <li>
                    <Image src={Android} alt="android" />
                    <a href="#">Regular software and plugin updates</a>
                  </li>
                  <li>
                    <Image src={Android} alt="android" />
                    <a href="#">Malware detection and removal</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4">
            <div className="techmolgy-box">
              <div className="tech-box-one">
                <h4>Customer Experience Strategies</h4>
                <ul className="tech-list">
                  <li>
                    <Image src={Android} alt="android" />
                    <a href="#">Intuitive navigation improvements</a>
                  </li>
                  <li>
                    <Image src={Android} alt="android" />
                    <a href="#">Bug-free checkout processes</a>
                  </li>
                  <li>
                    <Image src={Android} alt="android" />
                    <a href="#">Multilingual and multi-currency support</a>
                  </li>
                  <li>
                    <Image src={Android} alt="android" />
                    <a href="#">Personalized product recommendations</a>
                  </li>
                  <li>
                    <Image src={Android} alt="android" />
                    <a href="#">Advanced search functionality</a>
                  </li>
                  <li>
                    <Image src={Android} alt="android" />
                    <a href="#">Responsive design for all devices</a>
                  </li>
                  <li>
                    <Image src={Android} alt="android" />
                    <a href="#">
                      Accessible design for inclusive user experience
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-12 mb-4">
            <div className="techmolgy-box">
              <div className="tech-box-one">
                <h4>Performance Optimization Strategies</h4>
                <ul className="tech-list">
                  <li>
                    <Image src={Android} alt="android" />
                    <a href="#">Cache management</a>
                  </li>
                  <li>
                    <Image src={Android} alt="android" />
                    <a href="#">Image compression</a>
                  </li>
                  <li>
                    <Image src={Android} alt="android" />
                    <a href="#">Server optimization</a>
                  </li>
                  <li>
                    <Image src={Android} alt="android" />
                    <a href="#">Content Delivery Network (CDN) integration</a>
                  </li>
                  <li>
                    <Image src={Android} alt="android" />
                    <a href="#">
                      Minification of CSS, JavaScript, and HTML files
                    </a>
                  </li>
                  <li>
                    <Image src={Android} alt="android" />
                    <a href="#">Database optimization</a>
                  </li>
                  <li>
                    <Image src={Android} alt="android" />
                    <a href="#">Mobile responsiveness enhancements</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4">
            <div className="techmolgy-box">
              <div className="tech-box-one">
                <h4>Data-Driven Insights Strategies</h4>
                <ul className="tech-list">
                  <li>
                    <Image src={Android} alt="android" />
                    <a href="#">Advanced analytics setup</a>
                  </li>
                  <li>
                    <Image src={Android} alt="android" />
                    <a href="#">Conversion rate optimization</a>
                  </li>
                  <li>
                    <Image src={Android} alt="android" />
                    <a href="#">Customer behavior tracking</a>
                  </li>
                  <li>
                    <Image src={Android} alt="android" />
                    <a href="#">A/B testing for design and features</a>
                  </li>
                  <li>
                    <Image src={Android} alt="android" />
                    <a href="#">Sales trend analysis</a>
                  </li>
                  <li>
                    <Image src={Android} alt="android" />
                    <a href="#">Real-time reporting dashboards</a>
                  </li>
                  <li>
                    <Image src={Android} alt="android" />
                    <a href="#">Cohort analysis for customer retention</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportEcomTechy;
