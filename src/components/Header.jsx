"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import logo from "../../public/images/header-logo-one.webp";
import usa from "../../public/images/usa.svg";
import Link from "next/link";
import Image from "next/image";
import ModalForm from "./PopUpForms/GetQuoteForm";
import loc1 from "../../public/images/loc-1.svg";
import "font-awesome/css/font-awesome.min.css";
const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeService, setActiveService] = useState("");
  const [activeTabs, setActiveTabs] = useState({});
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const aboutDropdownRef = useRef(null);

  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isJoinusDropdownOpen, setIsJoinusDropdownOpen] = useState(false);
  const joinusDropdownRef = useRef(null);
  const resourcesDropdownRef = useRef(null);

  useEffect(() => {
    const handleMouseEnter = (setDropdown) => {
      if (window.innerWidth > 991) {
        setDropdown(true);
      }
    };

    const handleMouseLeave = (setDropdown) => {
      if (window.innerWidth > 991) {
        setDropdown(false);
      }
    };

    const resourcesDropdownElement = resourcesDropdownRef.current;
    const joinusDropdownElement = joinusDropdownRef.current;

    if (resourcesDropdownElement) {
      resourcesDropdownElement.addEventListener("mouseenter", () =>
        handleMouseEnter(setIsResourcesDropdownOpen)
      );
      resourcesDropdownElement.addEventListener("mouseleave", () =>
        handleMouseLeave(setIsResourcesDropdownOpen)
      );
    }

    if (joinusDropdownElement) {
      joinusDropdownElement.addEventListener("mouseenter", () =>
        handleMouseEnter(setIsJoinusDropdownOpen)
      );
      joinusDropdownElement.addEventListener("mouseleave", () =>
        handleMouseLeave(setIsJoinusDropdownOpen)
      );
    }

    return () => {
      if (resourcesDropdownElement) {
        resourcesDropdownElement.removeEventListener("mouseenter", () =>
          handleMouseEnter(setIsResourcesDropdownOpen)
        );
        resourcesDropdownElement.removeEventListener("mouseleave", () =>
          handleMouseLeave(setIsResourcesDropdownOpen)
        );
      } else if (joinusDropdownElement) {
        joinusDropdownElement.removeEventListener("mouseenter", () =>
          handleMouseEnter(setIsJoinusDropdownOpen)
        );
        joinusDropdownElement.removeEventListener("mouseleave", () =>
          handleMouseLeave(setIsJoinusDropdownOpen)
        );
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close all dropdowns when path changes
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    setIsAboutDropdownOpen(false);
    setIsResourcesDropdownOpen(false);
    setIsJoinusDropdownOpen(false);
    setActiveTabs({});
    if (pathname && pathname.includes("/services")) {
      setActiveService(pathname);
    } else if (pathname && pathname.includes("/blogs")) {
      setActiveService("/blogs");
    } else if (pathname && pathname.includes("/infographics")) {
      setActiveService("/infographics");
    } else {
      setActiveService("");
    }
  }, [pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    setIsAboutDropdownOpen(false);
    setIsResourcesDropdownOpen(false);
    setIsJoinusDropdownOpen(false);
    setActiveTabs({});
  };

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target)
      ) {
        setIsAboutDropdownOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  // Handle hover effect on desktop
  useEffect(() => {
    const handleMouseEnter = (setDropdown) => {
      if (window.innerWidth > 991) {
        setDropdown(true);
      }
    };

    const handleMouseLeave = (setDropdown) => {
      if (window.innerWidth > 991) {
        setDropdown(false);
      }
    };

    const dropdownElement = dropdownRef.current;
    const aboutDropdownElement = aboutDropdownRef.current;

    if (dropdownElement) {
      dropdownElement.addEventListener("mouseenter", () =>
        handleMouseEnter(setIsDropdownOpen)
      );
      dropdownElement.addEventListener("mouseleave", () =>
        handleMouseLeave(setIsDropdownOpen)
      );
    }

    if (aboutDropdownElement) {
      aboutDropdownElement.addEventListener("mouseenter", () =>
        handleMouseEnter(setIsAboutDropdownOpen)
      );
      aboutDropdownElement.addEventListener("mouseleave", () =>
        handleMouseLeave(setIsAboutDropdownOpen)
      );
    }

    return () => {
      if (dropdownElement) {
        dropdownElement.removeEventListener("mouseenter", () =>
          handleMouseEnter(setIsDropdownOpen)
        );
        dropdownElement.removeEventListener("mouseleave", () =>
          handleMouseLeave(setIsDropdownOpen)
        );
      }
      if (aboutDropdownElement) {
        aboutDropdownElement.removeEventListener("mouseenter", () =>
          handleMouseEnter(setIsAboutDropdownOpen)
        );
        aboutDropdownElement.removeEventListener("mouseleave", () =>
          handleMouseLeave(setIsAboutDropdownOpen)
        );
      }
    };
  }, []);

  const toggleTab = (tab) => {
    setActiveTabs((prevActiveTabs) => ({
      ...prevActiveTabs,
      [tab]: !prevActiveTabs[tab], // Toggle the current tab's submenu
    }));
  };

  const handleMenuClick = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dropdownContent = {
    "digital-marketing": [
      {
        name: "Content Management System",
        href: "/services/content-management-system",
      },
      {
        name: "Pay Per Click Management",
        href: "/services/pay-per-click-management",
      },
      {
        name: "Search Engine Optimization",
        href: "/services/search-engine-optimization",
      },
      { name: "Organic SEO", href: "/services/organic-seo" },
      { name: "Local SEO", href: "/services/local-seo" },
      { name: "Technical SEO", href: "/services/technical-seo" },
      { name: "SEO Packages", href: "/seo-packages" },
      {
        name: "Content Writing Services",
        href: "/services/seo-content-writing-services",
      },
      { name: "Mobile Seo", href: "/services/mobile-seo" },
      { name: "Ecommerce Seo", href: "/services/ecommerce-seo" },
      { name: "White Label Seo", href: "/services/white-label-seo" },
      { name: "Small Business Seo", href: "/services/small-business-seo" },
      {
        name: "Voice Search Optimization",
        href: "/services/voice-search-optimization",
      },
      { name: "International SEO", href: "/services/international-seo" },
      { name: "SEO Consulting & Strategy", href: "/services/seo-consulting" },
      {
        name: "Google Ads Optimization",
        href: "/services/google-ads-optimisation",
      },
      { name: "ECommerce PPC Management", href: "/services/ecommerce-ppc" },
      { name: "Remarketing Ads", href: "/services/remarketing-ads" },
      {
        name: "Amazon PPC Management",
        href: "/services/amazon-ppc-management",
      },
      { name: "Local PPC Management", href: "/services/local-ppc-management" },
      {
        name: "White Label PPC Management",
        href: "/services/white-label-ppc-management",
      },
      { name: "Youtube Ads", href: "/services/youtube-ads" },
    ],
    hubspot: [
      { name: "Hubspot Development", href: "/hubspot-development" },
      {
        name: "Hubspot Automation Services",
        href: "/hubspot-automation-services",
      },
      { name: "Hubspot Consulting", href: "/hubspot-consulting" },
      {
        name: "Hubspot Migration Services",
        href: "/hubspot-migration-services",
      },
      { name: "Hubspot CMS Migration", href: "/hubspot-cms-migration" },
      { name: "Hubspot CMS Development", href: "/hubspot-cms-development" },
      { name: "Hubspot Onboarding", href: "/hubspot-onboarding" },
      { name: "Hubspot CRM Migration", href: "/hubspot-crm-migration" },
      { name: "Hubspot Services", href: "/hubspot-services" },
      { name: "Hubspot Developer", href: "/hubspot-developer" },
      {
        name: "Hubspot Marketing Automation",
        href: "/hubspot-marketing-automation",
      },
      { name: "Hubspot CRM Automation", href: "/hubspot-crm-automation" },
      {
        name: "Hubspot Application Developer",
        href: "/hubspot-application-developer",
      },
      {
        name: "Revops Services",
        href: "/revenue-operations-services",
      },
    ],
    development: [
      { name: "Web Development", href: "/services/web-development" },
      {
        name: "Shopify Development Services",
        href: "/shopify-development-services",
      },
      {
        name: "Ecommerce Development Services",
        href: "/ecommerce-development-services",
      },
      {
        name: "Magento Development Services",
        href: "/magento-development-services",
      },
      {
        name: "WooCommerce Development Services",
        href: "/woocommerce-development-services",
      },
      {
        name: "Ecommerce Consulting Services",
        href: "/ecommerce-consulting-services",
      },
      {
        name: "Ecommerce Web Design Services",
        href: "/ecommerce-web-design-services",
      },
      {
        name: "Ecommerce Implementation Services",
        href: "/ecommerce-implementation-services",
      },
      {
        name: "ECommerce Website Support & Maintenance",
        href: "/ecommerce-maintenance-support",
      },
      {
        name: "BigCommerce Development Services",
        href: "/bigcommerce-development-services",
      },
      { name: "WHMCS Development Services", href: "/whmcs-development" },
      {
        name: "Wordpress Development",
        href: "/services/wordpress-development",
      },
      {
        name: "Drupal Development",
        href: "/services/drupal-development",
      },
      {
        name: "Joomla Development",
        href: "/services/joomla-development",
      },
      {
        name: "Webflow Development",
        href: "/services/webflow-development",
      },
      {
        name: "Wix Development",
        href: "/services/wix-development",
      },
      {
        name: "Squarespace Development",
        href: "/services/squarespace-development",
      },
      {
        name: "Keap Development",
        href: "/services/keap-development",
      },
    ],
    "IT Services": [
      { name: "Helpdesk Services", href: "/services/helpdesk-services" },
      {
        name: "Remote Monitoring Management",
        href: "/services/remote-monitoring-management",
      },
      {
        name: "Managed Service Provider",
        href: "/services/msp-managed-service-provider",
      },
    ],
    "Testing Services": [
      { name: "Software Testing", href: "/software-testing-company" },
      {
        name: "Manual Software Testing",
        href: "/manual-software-testing-services",
      },
      {
        name: "Automation Testing",
        href: "/automation-testing-services",
      },
      {
        name: "Load And Performance Testing",
        href: "/load-testing-consulting-company",
      },
    ],
    Solutions: [
      { name: "Zoho CRM Plus", href: "/zoho-crm-plus" },
      {
        name: "Zoho Implementation Partner",
        href: "/zoho-implementation-partner-india",
      },
      {
        name: "Monday.com Partners",
        href: "/monday-com-partner-india",
      },
      {
        name: "Monday.com Consulting Services",
        href: "/monday-com-consulting-services",
      },
    ],
    "Marketing Automation": [
      { name: "Why Marketing Automation", href: "/marketing-automation" },
      {
        name: "Marketing Automation Solutions",
        href: "/marketing-automation-solutions",
      },
      {
        name: "Salesforce Consulting",
        href: "/salesforce-consulting-services",
      },
      {
        name: "Pardot Consulting",
        href: "/pardot-consulting-services",
      },
      {
        name: "Marketo Consulting",
        href: "/marketo-consulting-services",
      },
      {
        name: "Employee Training & Development",
        href: "/employee-training-and-development-solutions",
      },
    ],
    "Content Marketing Services": [
      { name: "SEO Copywriting Services", href: "/seo-copywriting-services" },
      {
        name: "Content Marketing Services",
        href: "/content-marketing-services",
      },
      {
        name: "Social Media Management",
        href: "/social-media-management",
      },
      {
        name: "Infographics & Motion Graphics",
        href: "/infographics-and-motion-graphics",
      },
      // {
      //   name: "Marketo Consulting",
      //   href: "/marketo-consulting-services",
      // },
      // {
      //   name: "Employee Training & Development",
      //   href: "/employee-training-and-development-solutions",
      // },
    ],
  };

  return (
    <header className={`hdrtopsst ${isScrolled ? "onScroll" : ""}`}>
      <section className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-sm-2 col-xs-12"></div>
            <div className="col-sm-10 col-xs-12 contact-right">
              <ul>
                <li>
                  <span className="loc-icon">
                    <Image src={usa} alt="Usa-Icon" width={5} height={5} />
                  </span>
                  <Link href="tel:+1 (213) 715-5368">
                    +1 (213) 715-5368 (Sales)
                  </Link>
                </li>
                <li>
                  <Link href="tel:(+91) 708 723 3361">
                    <span className="loc-icon">
                      <Image src={loc1} alt="India-Icon" width={5} height={5} />
                    </span>
                    (+91) 708 723 3361 (Sales)
                  </Link>
                </li>
                <li>
                  <ModalForm />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <nav className="navbar navbar-expand-lg navigation-main" ref={menuRef}>
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarScroll"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse menu ${
              isMenuOpen ? "show" : ""
            }`}
            id="navbarScroll"
          >
            <ul className="navbar-nav me-0 ms-auto navbar-nav-scroll d-flex align-items-center">
              <li
                className="px-3 py-2 sub-menu"
                onClick={(e) => {
                  if (window.innerWidth <= 991) {
                    e.preventDefault();
                    setIsAboutDropdownOpen(!isAboutDropdownOpen);
                  }
                }}
                ref={aboutDropdownRef}
              >
                <Link href="#" onClick={(e) => e.preventDefault()}>
                  About
                </Link>
                {isAboutDropdownOpen && (
                  <ul className="dropdown-content">
                    <div className="row">
                      <div className="col">
                        {[
                          "/about",
                          "/how-we-work",
                          "/mvp-development",
                          "/awards-and-recognition",
                          "/agile-software-development",
                          "/leadership-team",
                          "/client-testimonials",
                          "/full-cycle-product-development",
                        ].map((aboutLink, index) => (
                          <li
                            key={index}
                            onClick={() => setIsAboutDropdownOpen(false)}
                            className={
                              pathname === aboutLink ? "active-service" : ""
                            }
                          >
                            <Link href={aboutLink} onClick={closeMenu}>
                              {aboutLink === "/about"
                                ? "Our Company"
                                : aboutLink === "/mvp-development"
                                ? "Startup and MVP"
                                : aboutLink
                                    .split("/")
                                    .pop()
                                    .replace(/-/g, " ")
                                    .replace(/\b\w/g, (char) =>
                                      char.toUpperCase()
                                    )}
                            </Link>
                          </li>
                        ))}
                      </div>
                    </div>
                  </ul>
                )}
              </li>
              <li
                className="px-3 py-2 sub-menu"
                onClick={(e) => {
                  if (window.innerWidth <= 991) {
                    e.preventDefault();
                    setIsDropdownOpen(!isDropdownOpen); // Toggle the "Services" dropdown
                  }
                }}
                ref={dropdownRef}
              >
                <Link href="#" onClick={(e) => e.preventDefault()}>
                  Services
                </Link>
                {isDropdownOpen && (
                  <ul className="dropdown-content">
                    <div className="row">
                      <div className="col">
                        {Object.keys(dropdownContent).map((key) => (
                          <li key={key}>
                            <div
                              className={`tab-title ${
                                activeTabs[key] ? "active-tab" : ""
                              }`}
                              onClick={(e) => {
                                e.stopPropagation(); // Prevent closing the "Services" tab
                                toggleTab(key);
                              }}
                            >
                              {key.replace("-", " ").toUpperCase()}{" "}
                              <i className="fa fa-angle-down"></i>
                            </div>
                            {activeTabs[key] && ( // Show submenu if the tab's submenu is active
                              <ul className="nested-dropdown">
                                {dropdownContent[key].map((item) => (
                                  <li key={item.href}>
                                    <Link
                                      href={item.href}
                                      onClick={handleMenuClick}
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </div>
                    </div>
                  </ul>
                )}
              </li>

              <li className="px-3 py-2">
                <Link href="/" onClick={closeMenu}>
                  Our Portfolio
                </Link>
              </li>
              <li
                className="resources-class px-3 py-2 sub-menu"
                onClick={(e) => {
                  if (window.innerWidth <= 991) {
                    e.preventDefault();
                    setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
                  }
                }}
                ref={resourcesDropdownRef}
              >
                <Link href="#" onClick={(e) => e.preventDefault()}>
                  Resources
                </Link>
                {isResourcesDropdownOpen && (
                  <ul className="dropdown-content">
                    <div className="row">
                      <div className="col">
                        {[
                          { path: "/blogs", label: "Blogs" },
                          { path: "/infographics", label: "Infographics" },
                        ].map(({ path, label }, index) => (
                          <li
                            key={index}
                            className={
                              activeService === path ? "active-service" : ""
                            }
                            onClick={() => setIsResourcesDropdownOpen(false)}
                          >
                            <Link href={path} onClick={closeMenu}>
                              {label}
                            </Link>
                          </li>
                        ))}
                      </div>
                    </div>
                  </ul>
                )}
              </li>

              <li
                className="resources-class px-3 py-2 sub-menu"
                onClick={(e) => {
                  if (window.innerWidth <= 991) {
                    e.preventDefault();
                    setIsJoinusDropdownOpen(!isJoinusDropdownOpen);
                  }
                }}
                ref={joinusDropdownRef}
              >
                <Link href="#" onClick={(e) => e.preventDefault()}>
                  Join Us
                </Link>
                {isJoinusDropdownOpen && (
                  <ul className="dropdown-content">
                    <div className="row">
                      <div className="col">
                        {[
                          { path: "/careers", label: "Careers" },
                          {
                            path: "/internship-program-in-mohali",
                            label: "Our Internship Program",
                          },
                          {
                            path: "/life-at-webguruz",
                            label: "Life@WebGuruz",
                          },
                        ].map(({ path, label }, index) => (
                          <li
                            key={index}
                            className={
                              activeService === path ? "active-service" : ""
                            }
                            onClick={() => setIsJoinusDropdownOpen(false)}
                          >
                            <Link href={path} onClick={closeMenu}>
                              {label}
                            </Link>
                          </li>
                        ))}
                      </div>
                    </div>
                  </ul>
                )}
              </li>

              <li className="contactMain px-2">
                <Link href="/contact-us" onClick={closeMenu}>
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
