"use client";
import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import { Nav } from "react-bootstrap";
import Image from "next/image";
import note1 from "../../../public/images/whmcsimages/whmc-head-1.webp";
import note2 from "../../../public/images/whmcsimages/whmc-head-2.webp";
import note3 from "../../../public/images/whmcsimages/whmc-head-3.webp";
import note4 from "../../../public/images/whmcsimages/whmc-head-4.webp";
const newtabs = [
  {
    eventKey: "experts",
    title: "Web Frameworks",
    image:note1,
    alt: "Web Frameworks Icon",
    content: `<ul className="web">
    <li><img src="/images/whmcsimages/whmmc-laravel.svg" alt="Laravel Logo"/> Laravel</li>
    <li><img src="/images/whmcsimages/whmc-symfony.svg" alt="Symfony Logo"/> Symfony</li>
    <li><img src="/images/whmcsimages/whmc-zend.svg" alt="Zend Framework Logo"/> Zend Framework</li>
    <li><img src="/images/whmcsimages/whmc-codeignor.svg" alt="CodeIgniter Logo"/> CodeIgniter</li>
    <li><img src="/images/whmcsimages/whmc-yii.svg" alt="Yii Logo"/> Yii</li>
    <li><img src="/images/whmcsimages/whmc-php.svg" alt="CakePHP Logo"/> CakePHP</li>
    <li><img src="/images/whmcsimages/whmc-phalcon.svg" alt="Phalcon Logo"/> Phalcon</li>
    <li><img src="/images/whmcsimages/whmc-slim.svg" alt="Slim Logo"/> Slim</li>
    </ul>`,
  },

  {
    eventKey: "Reviews",
    title: "Designing",
    image:note2,
    alt: "Designing Icon ",
    content: `<ul className="web">
    <li><img src="/images/whmcsimages/whmc-adobe.svg" alt="Adobe XD Logo"/>Adobe XD</li>
    <li><img src="/images/whmcsimages/whmc-figma.svg" alt="Figma Logo"/> Figma</li>
    <li><img src="/images/whmcsimages/whmc-design-3.svg" alt="Sketch Logo"/> Sketch</li>
    <li><img src="/images/whmcsimages/whmc-design-4.svg" alt="InVision Logo"/> InVision</li>
    <li><img src="/images/whmcsimages/whmc-design-5.svg" alt="Bootstrap Logo"/> Bootstrap</li>
    <li><img src="/images/whmcsimages/whmc-design-6.svg" alt="Material Design Logo"/> Material Design</li>
    <li><img src="/images/whmcsimages/whmc-design-7.svg" alt="CSS3 Logo"/> CSS3</li>
    <li><img src="/images/whmcsimages/whmc-design-8.svg" alt="SASS/LESS Logo"/> SASS/LESS</li>
    </ul>`,
  },
  {
    eventKey: "Technical SEO",
    title: "Databases",
    image:note3,
    alt: "Databases Icon",
    content: `<ul className="web">
    <li><img src="/images/whmcsimages/whmc-db-1.svg" alt="MySQL Logo"/> MySQL</li>
    <li><img src="/images/whmcsimages/whmc-db-2.svg" alt="PostgreSQL Logo"/> PostgreSQL</li>
    <li><img src="/images/whmcsimages/whmc-db-3.svg" alt="MongoDB Logo"/> MongoDB</li>
    <li><img src="/images/whmcsimages/whmc-db-4.svg" alt="MariaDB Logo"/> MariaDB</li>
    <li><img src="/images/whmcsimages/whmc-db-5.svg" alt="Oracle DB Logo"/> Oracle DB</li>
    <li><img src="/images/whmcsimages/whmc-db-6.svg" alt="SQLite Logo"/> SQLite</li>
    <li><img src="/images/whmcsimages/whmc-db-7.svg" alt="Amazon Redshift Logo"/> Amazon Redshift</li>
    <li><img src="/images/whmcsimages/whmc-db-8.svg" alt="Amazon DynamoDB Logo"/> Amazon DynamoDB</li>
    </ul>`,
  },
  {
    eventKey: "Technology",
    title: "Platforms",
    image:note4,
    alt: "Platforms Icon",
    content: `<ul className="web">
    <li><img src="/images/whmcsimages/whmc-platform-1.svg" alt="WHMCS Logo"/> WHMCS</li>
    <li><img src="/images/whmcsimages/whmc-platform-2.svg" alt="WordPress Logo"/> WordPress</li>
    <li><img src="/images/whmcsimages/whmc-platform-3.svg" alt="Magento Logo"/> Magento</li>
    <li><img src="/images/whmcsimages/whmc-platform-4.svg" alt="Shopify Logo"/> Shopify</li>
    <li><img src="/images/whmcsimages/whmc-platform-5.svg" alt="Joomla Logo"/> Joomla</li>
    <li><img src="/images/whmcsimages/whmc-platform-6.svg" alt="OpenCart Logo"/> OpenCart</li>
    <li><img src="/images/whmcsimages/whmc-platform-7.svg" alt="Drupal Logo"/> Drupal</li>
    <li><img src="/images/whmcsimages/whmc-platform-8.svg" alt="BigCommerce Logo"/> BigCommerce</li>
    </ul>`,
  },
];

const WhmcTechTab = () => {
  const [activeKey, setActiveKey] = useState("experts");

  return (
    <section className="whmcs-techno py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-12 mx-auto mb-4 text-center heading-main">
            <h2 className="whmcs-tech-heading">
              Technologies We Use for <span> WHMCS Development </span>
            </h2>
            <p>
              Our development process is powered by cutting-edge technologies to
              ensure the highest quality and reliability.
            </p>
          </div>
          <div className="col-md-12">
            <Tab.Container
              defaultActiveKey="experts"
              id="uncontrolled-example"
              className="techno-tabbing"
              onSelect={(key) => setActiveKey(key)}
            >
              <div className="row">
                <div className="col-lg-3 col-md-4 whmcs-columns">
                  <Nav variant="pills" className="flex-column">
                    {newtabs.map((tab) => (
                      <Nav.Item key={tab.eventKey} className={tab.eventKey === activeKey ? 'active' : ''}>
                        <Nav.Link eventKey={tab.eventKey}>{tab.title}</Nav.Link>
                         <div className="tabs-icon">
                         <Image src={tab.image} alt={tab.alt} />
                         </div>
                      </Nav.Item>
                    ))}
                  </Nav>
                </div>

                <div className="col-lg-9 col-md-8 package-phases whmcs-phases">
                  <Tab.Content>
                    {newtabs.map((tab) => (
                      <Tab.Pane key={tab.eventKey} eventKey={tab.eventKey}>
                        <div
                          className="whmcs-fields"
                          dangerouslySetInnerHTML={{ __html: tab.content }}
                        />
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </div>
              </div>
            </Tab.Container>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhmcTechTab;
