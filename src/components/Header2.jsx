"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./style.css";
import imgs from "../../public/images/header-logo-one.webp";
import awards from "../../public/images/awards.webp";
import agile from "../../public/images/agile.webp";
import startup from "../../public/images/startup.webp";
import testimonial from "../../public/images/testimonial.webp";
import fullproduct from "../../public/images/full-product.webp";
import info from "../../public/info.webp";
import blog from "../../public/blog.webp";
import career1 from "../../public/images/headerimages/header-intern-1.webp";
import career2 from "../../public/images/headerimages/header-intern-2.webp";
import career3 from "../../public/images/careerimages/carrerimg6.webp";

import ourco1 from "../../public/images/headerimages/leader-1.webp";
import ourco2 from "../../public/images/headerimages/leader-2.webp";
import ourco3 from "../../public/images/headerimages/leader-3.webp";
import ourco from "../../public/images/headerimages/head-abt-1.webp";
import HowWe from "../../public/images/headerimages/head-abt-2.webp";
import startmvp from "../../public/images/headerimages/startmvp.webp";
import MVP from "../../public/images/headerimages/head-abt-3.webp";
import Awards from "../../public/images/headerimages/head-abt-4.webp";
import Agile from "../../public/images/headerimages/head-abt-5.webp";
import Team from "../../public/images/headerimages/head-abt-6.webp";
import Client from "../../public/images/headerimages/head-abt-7.webp";
import Image from "next/image";
import Link from "next/link";
import serve1 from "../../public/images/headerimages/head-serve-1.webp";
import serve2 from "../../public/images/headerimages/head-serve-2.webp";
import serve3 from "../../public/images/headerimages/head-serve-3.webp";
import serve4 from "../../public/images/headerimages/head-serve-4.webp";
import serve5 from "../../public/images/headerimages/head-serve-5.webp";
import serve6 from "../../public/images/headerimages/head-serve-6.webp";
import serve7 from "../../public/images/headerimages/head-serve-7.webp";
import serve8 from "../../public/images/headerimages/head-serve-8.webp";
import serve9 from "../../public/images/headerimages/head-serve-9.webp";
import serve10 from "../../public/images/headerimages/head-serve-10.webp";
import serve11 from "../../public/images/headerimages/head-serve-11.webp";
import serve12 from "../../public/images/headerimages/head-serve-12.webp";

import gads1 from "../../public/images/headerimages/serve-ad-1.webp";
import gads2 from "../../public/images/headerimages/serve-ad-2.webp";
import gads3 from "../../public/images/headerimages/serve-ad-3.webp";
import gads4 from "../../public/images/headerimages/serve-ad-4.webp";
import gads5 from "../../public/images/headerimages/serve-ad-5.webp";
import gads6 from "../../public/images/headerimages/serve-ad-6.webp";
import gads7 from "../../public/images/headerimages/serve-ad-7.webp";
import helpdesk1 from "../../public/images/headerimages/help-call-1.webp";
import helpdesk2 from "../../public/images/headerimages/help-call-2.webp";
import helpdesk3 from "../../public/images/headerimages/help-call-3.webp";
import magento1 from "../../public/images/headerimages/head-mag-1.svg";
import magento2 from "../../public/images/headerimages/head-mag-2.webp";
import magento3 from "../../public/images/headerimages/head-mag-3.webp";
import magento4 from "../../public/images/headerimages/head-mag-4.webp";
import magento5 from "../../public/images/headerimages/head-mag-5.webp";
import magento6 from "../../public/images/headerimages/head-mag-6.webp";
import magento7 from "../../public/images/headerimages/head-mag-7.webp";
import magento8 from "../../public/images/headerimages/head-mag-8.svg";
import magento9 from "../../public/images/headerimages/bigcommerce-icon.svg";

import cms1 from "../../public/images/headerimages/cms-deve-01.webp";
import cms2 from "../../public/images/headerimages/cms-deve-2.webp";
import cms3 from "../../public/images/headerimages/joomla.png";
import cms4 from "../../public/images/headerimages/webflow-icon.svg";
import cms5 from "../../public/images/headerimages/wix-ixon.svg";
import cms6 from "../../public/images/headerimages/squarespace.webp";
import cms7 from "../../public/images/headerimages/cms-7.webp";

import test1 from "../../public/images/headerimages/test-icon-1.webp";
import test2 from "../../public/images/headerimages/test-icon-2.webp";
import test3 from "../../public/images/headerimages/test-icon-3.webp";
import test4 from "../../public/images/headerimages/test-icon-4.webp";

import hubs1 from "../../public/images/headerimages/hubs-1.webp";
import hubs2 from "../../public/images/headerimages/hubs-2.webp";
import hubs3 from "../../public/images/headerimages/hubs-3.webp";
import hubs4 from "../../public/images/headerimages/hubs-4.webp";
import hubs5 from "../../public/images/headerimages/hubs-5.webp";
import hubs6 from "../../public/images/headerimages/hubs-6.webp";
import hubs7 from "../../public/images/headerimages/hubs-7.webp";
import hubs8 from "../../public/images/headerimages/hubs-8.webp";
// import hubs9 from '../../public/images/headerimages/hubs9.webp'
import hubs10 from "../../public/images/headerimages/hubs-10.webp";
import hubs11 from "../../public/images/headerimages/hubs-11.webp";
import hubs12 from "../../public/images/headerimages/hubs-12.webp";
import { usePathname } from "next/navigation";
const Header2 = () => {
  const myPath = usePathname();
  const [hoverState, setHoverState] = useState("blogs");
  const [careerState, setCareerState] = useState("careers");
  const [aboutState, setAboutState] = useState("our-company");
  const [hoverNavState, setHoverNavState] = useState("");

  const [activeService, setActiveService] = useState("digital");

  const handleMouseEnter = (type) => {
    setHoverState(type);
  };
  const handleAboutEnter = (type) => {
    setAboutState(type);
  };
  const handleCareerEnter = (type) => {
    setCareerState(type);
  };

  const handleMouseLeave = () => {
    setHoverState("blogs");
    setCareerState("careers");
    setAboutState("our-company");
    setActiveService("digital");
  };

  const handleMouseHoverBtn = (type) => {
    setHoverNavState(type);
  };

  const handleMouseLeaveBtn = () => {
    setHoverNavState("");
  };
  useEffect(() => {
    setHoverNavState("");
  }, [myPath]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`header ${isScrolled ? "onScroll" : ""}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-3">
            <div className="brand-logo">
              <Link href="/">
                <Image src={imgs} alt="Header Logo" />
              </Link>
            </div>
          </div>
          <div className="col-sm-9 col-12">
            <ul className="exo-menu">
              <li className="mega-drop-down about-mega-down">
                <Link
                  href="/about"
                  onMouseEnter={() => handleMouseHoverBtn("about")}
                  onMouseLeave={handleMouseLeave}
                >
                  About <i className="fa fa-angle-down"></i>
                </Link>
                {hoverNavState === "about" && (
                  <div className="animated fadeIn mega-menu">
                    <div className="mega-menu-wrap">
                      <div className="row">
                        <div
                          className="col-12 new-abt-us"
                          onMouseLeave={handleMouseLeave}
                        >
                          <ul className="stander about-mega-menu-icon">
                            <li
                              onMouseEnter={() =>
                                handleAboutEnter("our-company")
                              }
                              // onMouseLeave={handleMouseLeave}
                            >
                              <Link href="/about">
                                <div className="about-icon">
                                  <Image src={ourco} alt="our-company" />
                                </div>
                                Our Company
                              </Link>
                            </li>
                            <li
                              onMouseEnter={() => handleAboutEnter("how-work")}
                            >
                              <Link href="/how-we-work">
                                <div className="about-icon">
                                  <Image src={HowWe} alt="HowWework" />
                                </div>
                                How We Work
                              </Link>
                            </li>
                            <li onMouseEnter={() => handleAboutEnter("mvp")}>
                              <Link href="/mvp-development">
                                <div className="about-icon">
                                  <Image src={startmvp} alt="MVP" />
                                </div>
                                Startup and MVP{" "}
                              </Link>
                            </li>
                            <li
                              onMouseEnter={() => handleAboutEnter("awarded")}
                            >
                              <Link href="/awards-and-recognition">
                                <div className="about-icon">
                                  <Image src={Awards} alt="Awards" />
                                </div>
                                Awards & Recognition
                              </Link>
                            </li>
                            <li
                              onMouseEnter={() => handleAboutEnter("agility")}
                            >
                              <Link href="/agile-software-development">
                                <div className="about-icon">
                                  <Image src={Agile} alt="Agile" />
                                </div>
                                Agile Software Development
                              </Link>
                            </li>
                            <li
                              onMouseEnter={() => handleAboutEnter("leaders")}
                            >
                              <Link href="/leadership-team">
                                <div className="about-icon">
                                  <Image src={Team} alt="Team" />
                                </div>
                                Leadership Team
                              </Link>
                            </li>
                            <li
                              onMouseEnter={() =>
                                handleAboutEnter("client-test")
                              }
                            >
                              <Link href="/client-testimonials">
                                <div className="about-icon">
                                  <Image src={MVP} alt="Client" />
                                </div>
                                Client Testimonials
                              </Link>
                            </li>
                            <li
                              onMouseEnter={() =>
                                handleAboutEnter("product-dev")
                              }
                            >
                              <Link href="/full-cycle-product-development">
                                <div className="about-icon">
                                  <Image src={Client} alt="Client" />
                                </div>
                                Full Cycle Product Development
                              </Link>
                            </li>
                          </ul>
                          <div className="dropdown-right-content">
                            {aboutState === "our-company" && (
                              <div className="dropdown-item-content">
                                <Link href="/about">
                                  <h3>Our Company</h3>
                                  <Image src={ourco1} alt="our company" />
                                </Link>
                              </div>
                            )}
                            {aboutState === "how-work" && (
                              <div className="dropdown-item-content">
                                <Link href="/how-we-work">
                                  <h3>How We Work</h3>
                                  <Image src={ourco2} alt="how we work" />
                                </Link>
                              </div>
                            )}
                            {aboutState === "mvp" && (
                              <div className="dropdown-item-content">
                                <Link href="/mvp-development">
                                  <h3>Startup and MVP</h3>
                                  <Image src={startup} alt="startup" />
                                </Link>
                              </div>
                            )}
                            {aboutState === "awarded" && (
                              <div className="dropdown-item-content">
                                <Link href="/awards-and-recognition">
                                  <h3> Awards & Recognition</h3>
                                  <Image src={awards} alt="awards" />
                                </Link>
                              </div>
                            )}
                            {aboutState === "agility" && (
                              <div className="dropdown-item-content">
                                <Link href="/agile-software-development">
                                  <h3>agile software development</h3>
                                  <Image src={agile} alt="agile" />
                                </Link>
                              </div>
                            )}
                            {aboutState === "leaders" && (
                              <div className="dropdown-item-content">
                                <Link href="/leadership-team">
                                  <h3>leadership team</h3>
                                  <Image src={ourco3} alt="leadership" />
                                </Link>
                              </div>
                            )}
                            {aboutState === "client-test" && (
                              <div className="dropdown-item-content">
                                <Link href="/client-testimonials">
                                  <h3>Client Testimonials</h3>
                                  <Image src={testimonial} alt="testimonial" />
                                </Link>
                              </div>
                            )}
                            {aboutState === "product-dev" && (
                              <div className="dropdown-item-content">
                                <Link href="/full-cycle-product-development">
                                  <h3>Full Cycle Product Development</h3>
                                  <Image src={fullproduct} alt="testimonial" />
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li className="mega-drop-down dropdown-two Services-dropdown">
                <Link
                  href="#"
                  onMouseEnter={() => handleMouseHoverBtn("services")}
                >
                  Services <i className="fa fa-angle-down"></i>
                </Link>
                {hoverNavState === "services" && (
                  <div className="animated fadeIn mega-menu new-mega-menus">
                    <div className="mega-menu-wrap digital-hubspot-main">
                      <ul
                        className="new-mega-menu-dropdown"
                        onMouseLeave={handleMouseLeave}
                      >
                        <li className="new-sub-list">
                          <ul className="service-main-headings">
                            <li
                              onMouseEnter={() => setActiveService("digital")}
                              className={`digital-service hvr-bounce-to-top ${
                                activeService === "digital" ? "active" : ""
                              }`}
                            >
                              <span>
                                <Link href="/services/digital-marketing">
                                  Digital Marketing
                                </Link>
                              </span>
                              <i className="fa fa-angle-right"></i>
                            </li>
                            <li
                              onMouseEnter={() => setActiveService("hubspot")}
                              className={`digital-service hvr-bounce-to-top ${
                                activeService === "hubspot" ? "active" : ""
                              }`}
                            >
                              <span>
                                <Link href="/services/web-development">
                                  Web Development
                                </Link>{" "}
                              </span>
                              <i className="fa fa-angle-right"></i>
                            </li>
                            <li
                              onMouseEnter={() =>
                                setActiveService("development")
                              }
                              className={`digital-service  hvr-bounce-to-top ${
                                activeService === "development" ? "active" : ""
                              }`}
                            >
                              <span>
                                {" "}
                                <Link href="/hubspot-development">
                                  Hubspot Development
                                </Link>
                              </span>
                              <i className="fa fa-angle-right"></i>
                            </li>
                            <li
                              onMouseEnter={() => setActiveService("itbenefit")}
                              className={`digital-service  hvr-bounce-to-top ${
                                activeService === "itbenefit" ? "active" : ""
                              }`}
                            >
                              <span>
                                {" "}
                                <Link href="#">IT Services</Link>
                              </span>
                              <i className="fa fa-angle-right"></i>
                            </li>
                            <li
                              onMouseEnter={() =>
                                setActiveService("testingpage")
                              }
                              className={`digital-service  hvr-bounce-to-top ${
                                activeService === "testingpage" ? "active" : ""
                              }`}
                            >
                              <span>
                                {" "}
                                <Link href="#">Testing Services</Link>
                              </span>
                              <i className="fa fa-angle-right"></i>
                            </li>
                            <li
                              onMouseEnter={() =>
                                setActiveService("solutionszoho")
                              }
                              className={`digital-service  hvr-bounce-to-top ${
                                activeService === "solutionszoho"
                                  ? "active"
                                  : ""
                              }`}
                            >
                              <span>
                                <Link href="#">Solutions</Link>
                              </span>
                              <i className="fa fa-angle-right"></i>
                            </li>
                            <li
                              onMouseEnter={() =>
                                setActiveService("automarket")
                              }
                              className={`digital-service  hvr-bounce-to-top ${
                                activeService === "automarket" ? "active" : ""
                              }`}
                            >
                              <span>
                                <Link href="#">Marketing Automation</Link>
                              </span>
                              <i className="fa fa-angle-right"></i>
                            </li>
                            <li
                              onMouseEnter={() =>
                                setActiveService("contentseomarket")
                              }
                              className={`digital-service  hvr-bounce-to-top ${
                                activeService === "contentseomarket" ? "active" : ""
                              }`}
                            >
                              <span>
                                <Link href="#">Content Marketing Services</Link>
                              </span>
                              <i className="fa fa-angle-right"></i>
                            </li>
                          </ul>
                        </li>
                        <li className="new-sub-list-sec">
                          <div className="service-submenus">
                            {activeService === "digital" && (
                              <>
                                <ul className="mega-menu-list heading-styles">
                                  <li>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/services/search-engine-optimization">
                                          Search Engine Optimization
                                        </Link>
                                      </h5>
                                      <ul className="submenu-list organic-list">
                                        <li>
                                          <Link href="/services/organic-seo">
                                            <span className="serve-icon">
                                              <Image
                                                src={serve1}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            Organic SEO
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/services/local-seo">
                                            <span className="serve-icon">
                                              <Image
                                                src={serve2}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            Local SEO
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/services/technical-seo">
                                            <span className="serve-icon">
                                              <Image
                                                src={serve3}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            Technical SEO
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/services/mobile-seo">
                                            <span className="serve-icon">
                                              <Image
                                                src={serve4}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            Mobile SEO
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/services/ecommerce-seo">
                                            <span className="serve-icon">
                                              <Image
                                                src={serve5}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            E-commerce SEO
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/services/white-label-seo">
                                            <span className="serve-icon">
                                              <Image
                                                src={serve6}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            White Label SEO
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/services/small-business-seo">
                                            <span className="serve-icon">
                                              <Image
                                                src={serve7}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            Small Business SEO
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/services/voice-search-optimization">
                                            <span className="serve-icon">
                                              <Image
                                                src={serve8}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            Voice Search Optimization
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/services/international-seo">
                                            <span className="serve-icon">
                                              <Image
                                                src={serve9}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            International SEO
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/services/seo-consulting">
                                            <span className="serve-icon">
                                              <Image
                                                src={serve10}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            SEO Consulting & Strategy
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/seo-packages">
                                            <span className="serve-icon">
                                              <Image
                                                src={serve11}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            SEO Packages
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/services/seo-content-writing-services">
                                            <span className="serve-icon">
                                              <Image
                                                src={serve12}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            Content Writing Services
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="service-first">
                                      <h5>
                                        {" "}
                                        <Link href="/services/pay-per-click-management">
                                          Pay Per Click Management
                                        </Link>
                                      </h5>
                                      <ul className="submenu-list">
                                        <li>
                                          <Link href="/services/google-ads-optimisation">
                                            <span className="serve-icon">
                                              <Image
                                                src={gads1}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            Google Ads Optimization
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/services/ecommerce-ppc">
                                            <span className="serve-icon">
                                              <Image
                                                src={gads2}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            E-commerce PPC Management
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/services/remarketing-ads">
                                            <span className="serve-icon">
                                              <Image
                                                src={gads3}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            Remarketing Ads
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/services/amazon-ppc-management">
                                            <span className="serve-icon">
                                              <Image
                                                src={gads4}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            Amazon PPC Management
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/services/local-ppc-management">
                                            <span className="serve-icon">
                                              <Image
                                                src={gads5}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            Local PPC Management
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/services/white-label-ppc-management">
                                            <span className="serve-icon">
                                              <Image
                                                src={gads6}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            White Label PPC Management
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/services/youtube-ads">
                                            <span className="serve-icon">
                                              <Image
                                                src={gads7}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            Youtube Ads
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                              </>
                            )}

                            {activeService === "hubspot" && (
                              <>
                                <ul className="mega-menu-list heading-styles">
                                  <li>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/ecommerce-development-services">
                                          E-commerce Development Services
                                        </Link>
                                      </h5>
                                      <ul className="submenu-list">
                                        <li>
                                          <Link href="/magento-development-services">
                                            <span className="serve-icon">
                                              <Image
                                                src={magento1}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            Magento Development Services
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/woocommerce-development-services">
                                            <span className="serve-icon">
                                              <Image
                                                src={magento2}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            WooCommerce Development Services
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/ecommerce-consulting-services">
                                            <span className="serve-icon">
                                              <Image
                                                src={magento3}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            E-commerce Consulting Services
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/ecommerce-web-design-services">
                                            <span className="serve-icon">
                                              <Image
                                                src={magento4}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            E-commerce Web Design Services
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/ecommerce-implementation-services">
                                            <span className="serve-icon">
                                              <Image
                                                src={magento5}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            E-commerce Implementation Services
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/ecommerce-maintenance-support">
                                            <span className="serve-icon">
                                              <Image
                                                src={magento6}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            E-commerce Website Support &
                                            Maintenance
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/shopify-development-services">
                                            <span className="serve-icon">
                                              <Image
                                                src={magento7}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            Shopify Development Services
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/whmcs-development">
                                            <span className="serve-icon">
                                              <Image
                                                src={magento8}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            WHMCS Development Services
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/bigcommerce-development-services">
                                            <span className="serve-icon">
                                              <Image
                                                src={magento9}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            BigCommerce Development Services
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/services/content-management-system">
                                          Content Management System
                                        </Link>
                                      </h5>
                                      <ul className="submenu-list">
                                        <li>
                                          <Link href="/services/wordpress-development">
                                            <span className="serve-icon">
                                              <Image
                                                src={cms1}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            Wordpress Development
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/services/drupal-development">
                                            <span className="serve-icon">
                                              <Image
                                                src={cms2}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            Drupal Development
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/services/joomla-development">
                                            <span className="serve-icon">
                                              <Image
                                                src={cms3}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            Joomla Development
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/services/webflow-development">
                                            <span className="serve-icon">
                                              <Image
                                                src={cms4}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            Webflow Development
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/services/wix-development">
                                            <span className="serve-icon">
                                              <Image
                                                src={cms5}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            Wix Development
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/services/squarespace-development">
                                            <span className="serve-icon">
                                              <Image
                                                src={cms6}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            Squarespace Development
                                          </Link>
                                        </li>
                                        <li>
                                          <Link href="/services/keap-development">
                                            <span className="serve-icon">
                                              <Image
                                                src={cms7}
                                                alt="organic seo icon"
                                              />
                                            </span>
                                            Keap Development
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/services/web-development">
                                          Web Development
                                        </Link>
                                      </h5>
                                    </div>
                                  </li>
                                </ul>
                              </>
                            )}

                            {activeService === "development" && (
                              <>
                                <ul className="mega-menu-list hubspot-new-list-menu">
                                  <li>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/hubspot-automation-services">
                                          <span className="serve-icon">
                                            <Image
                                              src={hubs1}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Hubspot Automation Services
                                        </Link>
                                      </h5>
                                    </div>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/hubspot-consulting">
                                          <span className="serve-icon">
                                            <Image
                                              src={hubs2}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Hubspot Consulting
                                        </Link>
                                      </h5>
                                    </div>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/hubspot-migration-services">
                                          <span className="serve-icon">
                                            <Image
                                              src={hubs3}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Hubspot Migration Services
                                        </Link>
                                      </h5>
                                    </div>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/hubspot-application-developer">
                                          <span className="serve-icon">
                                            <Image
                                              src={hubs4}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Hubspot Application Developer
                                        </Link>
                                      </h5>
                                    </div>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/revenue-operations-services">
                                          <span className="serve-icon">
                                            <Image
                                              src={hubs12}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Revops Services
                                        </Link>
                                      </h5>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/hubspot-cms-migration">
                                          <span className="serve-icon">
                                            <Image
                                              src={hubs5}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Hubspot CMS Migration
                                        </Link>
                                      </h5>
                                    </div>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/hubspot-cms-development">
                                          <span className="serve-icon">
                                            <Image
                                              src={hubs6}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Hubspot CMS Development
                                        </Link>
                                      </h5>
                                    </div>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/hubspot-onboarding">
                                          <span className="serve-icon">
                                            <Image
                                              src={hubs7}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Hubspot Onboarding
                                        </Link>
                                      </h5>
                                    </div>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/hubspot-crm-migration">
                                          <span className="serve-icon">
                                            <Image
                                              src={hubs8}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Hubspot CRM Migration
                                        </Link>
                                      </h5>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/hubspot-services">
                                          <span className="serve-icon">
                                            <Image
                                              src={hubs4}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Hubspot Services
                                        </Link>
                                      </h5>
                                    </div>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/hubspot-developer">
                                          <span className="serve-icon">
                                            <Image
                                              src={hubs10}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Hubspot Developer
                                        </Link>
                                      </h5>
                                    </div>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/hubspot-marketing-automation">
                                          <span className="serve-icon">
                                            <Image
                                              src={hubs11}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Hubspot Marketing Automation
                                        </Link>
                                      </h5>
                                    </div>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/hubspot-crm-automation">
                                          <span className="serve-icon">
                                            <Image
                                              src={hubs12}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Hubspot CRM Automation
                                        </Link>
                                      </h5>
                                    </div>
                                  </li>
                                </ul>
                              </>
                            )}
                            {activeService === "itbenefit" && (
                              <>
                                <ul className="mega-menu-list hubspot-new-list-menu it-services">
                                  <li>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/services/helpdesk-services">
                                          <span className="serve-icon">
                                            <Image
                                              src={helpdesk1}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Helpdesk Services
                                        </Link>
                                      </h5>
                                    </div>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/services/msp-managed-service-provider">
                                          <span className="serve-icon">
                                            <Image
                                              src={helpdesk3}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Managed Service Provider
                                        </Link>
                                      </h5>
                                    </div>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/services/remote-monitoring-management">
                                          <span className="serve-icon">
                                            <Image
                                              src={helpdesk2}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Remote Monitoring Management
                                        </Link>
                                      </h5>
                                    </div>
                                  </li>

                                  <li>
                                    {/* <div className="service-first">
                                      <h5>
                                        <Link href="/services/remote-monitoring-management">
                                          <span className="serve-icon">
                                            <Image
                                              src={helpdesk2}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Remote Monitoring Management
                                        </Link>
                                      </h5>
                                    </div> */}
                                  </li>

                                  <li>
                                    {/* <div className="service-first">
                                      <h5>
                                        <Link href="/services/msp-managed-service-provider">
                                          <span className="serve-icon">
                                            <Image
                                              src={helpdesk3}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Managed Service Provider
                                        </Link>
                                      </h5>
                                    </div> */}
                                  </li>
                                </ul>
                              </>
                            )}
                            {activeService === "testingpage" && (
                              <>
                                <ul className="mega-menu-list hubspot-new-list-menu it-services">
                                  <li>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/software-testing-company">
                                          <span className="serve-icon">
                                            <Image
                                              src={test1}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Software Testing
                                        </Link>
                                      </h5>
                                    </div>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/manual-software-testing-services">
                                          <span className="serve-icon">
                                            <Image
                                              src={test2}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Manual Software Testing
                                        </Link>
                                      </h5>
                                    </div>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/automation-testing-services">
                                          <span className="serve-icon">
                                            <Image
                                              src={test3}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Automation Testing
                                        </Link>
                                      </h5>
                                    </div>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/load-testing-consulting-company">
                                          <span className="serve-icon">
                                            <Image
                                              src={test4}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Load And Performance Testing
                                        </Link>
                                      </h5>
                                    </div>
                                  </li>

                                  <li>
                                    {/* <div className="service-first">
                                      <h5>
                                        <Link href="/services/remote-monitoring-management">
                                          <span className="serve-icon">
                                            <Image
                                              src={helpdesk2}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Remote Monitoring Management
                                        </Link>
                                      </h5>
                                    </div> */}
                                  </li>

                                  <li>
                                    {/* <div className="service-first">
                                      <h5>
                                        <Link href="/services/msp-managed-service-provider">
                                          <span className="serve-icon">
                                            <Image
                                              src={helpdesk3}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Managed Service Provider
                                        </Link>
                                      </h5>
                                    </div> */}
                                  </li>
                                </ul>
                              </>
                            )}
                            {activeService === "solutionszoho" && (
                              <>
                                <ul className="mega-menu-list hubspot-new-list-menu it-services">
                                  <li>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/zoho-crm-plus">
                                          <span className="serve-icon">
                                            <Image
                                              src={test1}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Zoho CRM Plus
                                        </Link>
                                      </h5>
                                    </div>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/zoho-implementation-partner-india">
                                          <span className="serve-icon">
                                            <Image
                                              src={test2}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Zoho Implementation Partner
                                        </Link>
                                      </h5>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/monday-com-partner-india">
                                          <span className="serve-icon">
                                            <Image
                                              src={helpdesk2}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Monday.com Partners
                                        </Link>
                                      </h5>
                                    </div>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/monday-com-consulting-services">
                                          <span className="serve-icon">
                                            <Image
                                              src={helpdesk2}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Monday.com Consulting Services
                                        </Link>
                                      </h5>
                                    </div>
                                  </li>

                                  <li>
                                    {/* <div className="service-first">
                                      <h5>
                                        <Link href="/employee-training-and-development-solutions">
                                          <span className="serve-icon">
                                            <Image
                                              src={helpdesk3}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Employee Training & Development
                                        </Link>
                                      </h5>
                                    </div> */}
                                  </li>
                                </ul>
                              </>
                            )}
                            {activeService === "automarket" && (
                              <>
                                <ul className="mega-menu-list hubspot-new-list-menu it-services">
                                  <li>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/marketing-automation">
                                          <span className="serve-icon">
                                            <Image
                                              src={test1}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Why Marketing Automation
                                        </Link>
                                      </h5>
                                    </div>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/marketing-automation-solutions">
                                          <span className="serve-icon">
                                            <Image
                                              src={test2}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Marketing Automation Solutions
                                        </Link>
                                      </h5>
                                    </div>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/salesforce-consulting-services">
                                          <span className="serve-icon">
                                            <Image
                                              src={test2}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Salesforce Consulting
                                        </Link>
                                      </h5>
                                    </div>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/pardot-consulting-services">
                                          <span className="serve-icon">
                                            <Image
                                              src={test2}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Pardot Consulting
                                        </Link>
                                      </h5>
                                    </div>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/marketo-consulting-services">
                                          <span className="serve-icon">
                                            <Image
                                              src={test2}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Marketo Consulting
                                        </Link>
                                      </h5>
                                    </div>
                                  </li>

                                  <li>
                                  <div className="service-first">
                                      <h5>
                                        <Link href="/employee-training-and-development-solutions">
                                          <span className="serve-icon">
                                            <Image
                                              src={helpdesk3}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Employee Training & Development
                                        </Link>
                                      </h5>
                                    </div>
                                  </li>

                                  <li>
                                    {/* <div className="service-first">
                                      <h5>
                                        <Link href="/services/msp-managed-service-provider">
                                          <span className="serve-icon">
                                            <Image
                                              src={helpdesk3}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Managed Service Provider
                                        </Link>
                                      </h5>
                                    </div> */}
                                  </li>
                                </ul>
                              </>
                            )}
                            {activeService === "contentseomarket" && (
                              <>
                                <ul className="mega-menu-list hubspot-new-list-menu it-services">
                                  <li>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/seo-copywriting-services">
                                          <span className="serve-icon">
                                            <Image
                                              src={test1}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          SEO Copywriting Services
                                        </Link>
                                      </h5>
                                    </div>
                                    <div className="service-first">
                                      <h5>
                                        <Link href="/content-marketing-services">
                                          <span className="serve-icon">
                                            <Image
                                              src={test2}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Content Marketing Services
                                        </Link>
                                      </h5>
                                    </div>
                                     <div className="service-first">
                                      <h5>
                                        <Link href="/social-media-management">
                                          <span className="serve-icon">
                                            <Image
                                              src={test2}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Social Media Management
                                        </Link>
                                      </h5>
                                    </div>
                                   <div className="service-first">
                                      <h5>
                                        <Link href="/infographics-and-motion-graphics">
                                          <span className="serve-icon">
                                            <Image
                                              src={test2}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Infographics & Motion Graphics
                                        </Link>
                                      </h5>
                                    </div>
                                   {/*  <div className="service-first">
                                      <h5>
                                        <Link href="/marketo-consulting-services">
                                          <span className="serve-icon">
                                            <Image
                                              src={test2}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Marketo Consulting
                                        </Link>
                                      </h5>
                                    </div> */}
                                  </li>

                                  <li>
                                  {/* <div className="service-first">
                                      <h5>
                                        <Link href="/employee-training-and-development-solutions">
                                          <span className="serve-icon">
                                            <Image
                                              src={helpdesk3}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Employee Training & Development
                                        </Link>
                                      </h5>
                                    </div> */}
                                  </li>

                                  <li>
                                    {/* <div className="service-first">
                                      <h5>
                                        <Link href="/services/msp-managed-service-provider">
                                          <span className="serve-icon">
                                            <Image
                                              src={helpdesk3}
                                              alt="organic seo icon"
                                            />
                                          </span>
                                          Managed Service Provider
                                        </Link>
                                      </h5>
                                    </div> */}
                                  </li>
                                </ul>
                              </>
                            )}
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <Link href="/">Portfolio</Link>
              </li>
              <li className="mega-drop-down dropdown-two Resources">
                <Link
                  href="#"
                  onMouseEnter={() => handleMouseHoverBtn("resources")}
                >
                  Resources <i className="fa fa-angle-down"></i>
                </Link>
                {hoverNavState === "resources" && (
                  <div className="animated fadeIn mega-menu resources-mega-menu">
                    <ul className="description">
                      <div
                        className="dropdown-one"
                        onMouseEnter={() => handleMouseEnter(hoverState)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="dropdown-list-one">
                          <div className="dropdown-list-child-1">
                            <li
                              className={`blog-text-icon blog-show-first ${
                                hoverState === "blogs" ? "result_hover" : ""
                              }`}
                              onMouseEnter={() => handleMouseEnter("blogs")}
                            >
                              <Link href="/blogs" className="resources-icon">
                                Blogs{" "}
                              </Link>
                              <i className="fa fa-angle-down"></i>
                            </li>
                            <li
                              className={`blog-text-icon blog-show-hide ${
                                hoverState === "infographics"
                                  ? "result_hover"
                                  : ""
                              }`}
                              onMouseEnter={() =>
                                handleMouseEnter("infographics")
                              }
                            >
                              <Link
                                href="/infographics"
                                className="resources-icon"
                              >
                                Infographics{" "}
                              </Link>
                              <i className="fa fa-angle-down"></i>
                            </li>
                          </div>
                        </div>
                        <li className="blog-list-one active">
                          {hoverState === "blogs" && (
                            <div className="dropdown-list-show dropdown-list-two-img result_hover">
                              <Link href="/blogs">
                                <h3>Our Blogs</h3>

                                <Image
                                  src={blog}
                                  className="img-responsive"
                                  alt="Our Blogs"
                                />
                              </Link>
                            </div>
                          )}
                          {hoverState === "infographics" && (
                            <div className="dropdown-list-hide dropdown-list-two-img result_hover">
                              <Link href="/infographics">
                                <h3>Infographics</h3>

                                <Image
                                  src={info}
                                  className="img-responsive"
                                  alt="Infographics"
                                />
                              </Link>
                            </div>
                          )}
                        </li>
                      </div>
                    </ul>
                  </div>
                )}
              </li>
              {/* <li>
                <Link href="/careers">join us</Link>
              </li> */}
              <li className="mega-drop-down dropdown-two Resources join-career">
                <Link
                  href="#"
                  onMouseEnter={() => handleMouseHoverBtn("joinus")}
                >
                  Join Us <i className="fa fa-angle-down"></i>
                </Link>
                {hoverNavState === "joinus" && (
                  <div className="animated fadeIn mega-menu resources-mega-menu">
                    <ul className="description">
                      <div
                        className="dropdown-one"
                        onMouseEnter={() => handleMouseEnter(hoverState)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="dropdown-list-one">
                          <div className="dropdown-list-child-1">
                            <li
                              className={`blog-text-icon blog-show-first ${
                                careerState === "careers" ? "result_hover" : ""
                              }`}
                              onMouseEnter={() => handleCareerEnter("careers")}
                            >
                              <Link href="/careers" className="resources-icon">
                                Careers{" "}
                              </Link>
                              <i className="fa fa-angle-down"></i>
                            </li>
                            <li
                              className={`blog-text-icon blog-show-hide ${
                                careerState === "internprogram"
                                  ? "result_hover"
                                  : ""
                              }`}
                              onMouseEnter={() =>
                                handleCareerEnter("internprogram")
                              }
                            >
                              <Link
                                href="/internship-program-in-mohali"
                                className="resources-icon"
                              >
                                Internship Program{" "}
                              </Link>
                              <i className="fa fa-angle-down"></i>
                            </li>
                            <li
                              className={`blog-text-icon blog-show-hide ${
                                careerState === "lifeatwebg"
                                  ? "result_hover"
                                  : ""
                              }`}
                              onMouseEnter={() =>
                                handleCareerEnter("lifeatwebg")
                              }
                            >
                              <Link
                                href="/life-at-webguruz"
                                className="resources-icon"
                              >
                                Life@WebGuruz
                              </Link>
                              <i className="fa fa-angle-down"></i>
                            </li>
                          </div>
                        </div>
                        <li className="blog-list-one active">
                          {careerState === "careers" && (
                            <div className="dropdown-list-show dropdown-list-two-img result_hover">
                              <Link href="/careers">
                                <h3>Careers</h3>

                                <Image
                                  src={career1}
                                  className="img-responsive"
                                  alt="Our Blogs"
                                />
                              </Link>
                            </div>
                          )}
                          {careerState === "internprogram" && (
                            <div className="dropdown-list-hide dropdown-list-two-img result_hover">
                              <Link href="/internship-program-in-mohali">
                                <h3>Internship Program</h3>

                                <Image
                                  src={career2}
                                  className="img-responsive"
                                  alt="Infographics"
                                />
                              </Link>
                            </div>
                          )}
                          {careerState === "lifeatwebg" && (
                            <div className="dropdown-list-hide dropdown-list-two-img result_hover">
                              <Link href="/life-at-webguruz">
                                <h3>Life@WebGuruz</h3>

                                <Image
                                  src={career3}
                                  className="img-responsive"
                                  alt="Infographics"
                                />
                              </Link>
                            </div>
                          )}
                        </li>
                      </div>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <Link className="contact-us" href="/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;
