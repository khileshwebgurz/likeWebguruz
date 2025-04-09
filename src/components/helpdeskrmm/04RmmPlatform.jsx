"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import vission from "../../../public/images/rmmimages/visson-arrow.svg";
import eye from "../../../public/images/rmmimages/eye.svg";
import base1 from "../../../public/images/rmmimages/backup-rmm-1.webp";
import base2 from "../../../public/images/rmmimages/backup-rmm-2.webp";
import base3 from "../../../public/images/rmmimages/backup-rmm-3.webp";
import base4 from "../../../public/images/rmmimages/backup-rmm-4.webp";
import mac1 from "../../../public/images/rmmimages/rmm-mac-1.webp";
import mac2 from "../../../public/images/rmmimages/rmm-mac-2.webp";
import mac3 from "../../../public/images/rmmimages/rmm-mac-3.webp";
import cloud1 from "../../../public/images/rmmimages/rmm-cloud-1.webp";
import cloud2 from "../../../public/images/rmmimages/rmm-cloud-2.webp";
import cloud3 from "../../../public/images/rmmimages/rmm-cloud-3.webp";
import cloud4 from "../../../public/images/rmmimages/rmm-cloud-4.webp";
const RmmPlatform = () => {
  const [activeTab, setActiveTab] = useState("RMM");
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1199);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const showContent = (tabName) => {
    return activeTab === tabName;
  };
  const benefitMainClass = mounted
    ? `row benifit-main ${isMobile ? "hide-desktop" : "show-desktop"}`
    : "row benifit-main";
  const benefitTabsClass = mounted
    ? `row benifit-tabs ${isMobile ? "show-mobile" : "hide-mobile"}`
    : "row benifit-tabs";
  return (
    <div className="rmm-benifit-section">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center">
            <h2 className="mb-3 mb-xl-5">
              Maximize Uptime | Strengthen Security <br />| Enhance IT
              Efficiency
            </h2>
          </div>
        </div>
        <div className={benefitMainClass}>
          <div className="col-md-6 col-12 left-main">
            <div className="left-one">
              <div
                className={`left-content ${
                  activeTab === "Manage" ? "active" : ""
                }`}
                onClick={() => handleTabClick("Manage")}
              >
                <div className="pulse__effect"></div>
                <div className="icon-text">
                  <Image src={base1} alt="Manage Icon" />
                  <p className="title">Manage</p>
                </div>
              </div>
              <div
                className={`left-content ${
                  activeTab === "Secure" ? "active" : ""
                }`}
                onClick={() => handleTabClick("Secure")}
              >
                <div className="pulse__effect"></div>
                <div className="icon-text">
                  <Image src={base2} alt="Security Icon" />
                  <p className="title">Secure</p>
                </div>
              </div>
            </div>
            <div
              className="left-one eyes-img"
              onClick={() => handleTabClick("RMM")}
            >
              <Image src={eye} alt="RMM Services" />
              <h3 className="title">RMM</h3>
            </div>
            <div className="left-one">
              <div
                className={`left-content ${
                  activeTab === "Backup" ? "active" : ""
                }`}
                onClick={() => handleTabClick("Backup")}
              >
                <div className="pulse__effect"></div>
                <div className="icon-text">
                  <Image src={base3} alt="Backup Icon" />
                  <p className="title">Backup</p>
                </div>
              </div>
              <div
                className={`left-content ${
                  activeTab === "Automate" ? "active" : ""
                }`}
                onClick={() => handleTabClick("Automate")}
              >
                <div className="pulse__effect"></div>
                <div className="icon-text">
                  <Image src={base4} alt="Automate Icon" />
                  <p className="title">Automate</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 col-12 right-bg">
            <Image src={vission} alt="Arrow Icon" />
          </div>
          <div className="col-md-6 col-12 right-benifit-content">
            {showContent("RMM") && (
              <div className="row">
                <div className="col-lg-6 col-12">
                  <h3 className="hybrid-title">Hybrid</h3>
                  <h3>Physical</h3>
                  <div className="right-icon">
                    <div className="right-icon-text">
                      <Image src={mac1} alt="PC Icon" />
                      <p>PC</p>
                    </div>
                    <div className="right-icon-text">
                      <Image src={mac2} alt="Servers Icon" />
                      <p>Servers </p>
                    </div>
                    <div className="right-icon-text">
                      <Image src={mac3} alt="IoTs Icon" />
                      <p>Other IoTs</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <h3>Cloud</h3>
                  <div className="right-icon">
                    <div className="right-icon-text">
                      <Image src={cloud1} alt="Infrastructure Icon" />
                      <p>Infrastructure</p>
                    </div>
                    <div className="right-icon-text">
                      <Image src={cloud2} alt="SAAS Applications Icon" />
                      <p>
                        SAAS <br /> Applications
                      </p>
                    </div>
                    <div className="right-icon-text">
                      <Image src={cloud3} alt="Users Icon" />
                      <p>Users</p>
                    </div>
                    <div className="right-icon-text">
                      <Image src={cloud4} alt="Data Icon" />
                      <p>Data</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showContent("Manage") && (
              <div className="row hide-show mange">
                <div className="col-lg-6 col-12 pe-5">
                  <h3 className="hybrid-title">Hybrid</h3>
                  <h3 className="mb-3">Physical</h3>
                  <ul>
                    <li>Seamless zero-touch enrollment for Apple devices</li>
                    <li>
                      Rapid OS and feature updates with incremental patching
                    </li>
                    <li>Efficient hybrid Azure infrastructure management</li>
                    <li>
                      Robust remote management for Windows, Apple, and Linux
                      devices
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-12 ps-5">
                  <h3 className="mb-3">Cloud</h3>
                  <ul>
                    <li>
                      Centralized policy and configuration management for Intune
                      and Apple Business Manager
                    </li>
                    <li>Optimized Azure resource management</li>
                    <li>Streamlined Microsoft 365 user administration</li>
                  </ul>
                </div>
              </div>
            )}
            {showContent("Secure") && (
              <div className="row hide-show secure">
                <div className="col-lg-6 col-12 pe-5">
                  <h3 className="hybrid-title">Hybrid</h3>
                  <h3 className="mb-3">Physical</h3>
                  <ul>
                    <li>
                      AI-driven behavioral detection engines for advanced
                      security
                    </li>
                    <li>
                      Detailed forensic incident reporting for in-depth analysis
                    </li>
                    <li>
                      Automated threat-hunting and remediation capabilities
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-12 ps-5">
                  <h3 className="mb-3">Cloud</h3>
                  <ul>
                    <li>
                      Web content filtering for endpoints across any location
                    </li>
                    <li>
                      Comprehensive global cloud threat intelligence repository
                    </li>
                    <li>
                      Cloud-based application management and restriction
                      capabilities
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {showContent("Backup") && (
              <div className="row hide-show backup">
                <div className="col-lg-6 col-12 pe-5">
                  <h3 className="hybrid-title">Hybrid</h3>
                  <h3 className="mb-3">Physical</h3>
                  <ul>
                    <li>
                      Incremental TrueDelta backup for optimized data storage
                    </li>
                    <li>
                      Full system image recovery with virtualization support
                    </li>
                    <li>
                      Automated recovery testing with standby image creation
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-12 ps-5">
                  <h3 className="mb-3">Cloud</h3>
                  <ul>
                    <li>
                      Secure backup for Microsoft 365 data, including Teams
                    </li>
                    <li>Customizable data storage location options</li>
                    <li>Seamless recovery to Azure virtual machines</li>
                  </ul>
                </div>
              </div>
            )}
            {showContent("Automate") && (
              <div className="row hide-show Automate">
                <div className="col-lg-6 col-12 pe-5">
                  <h3 className="hybrid-title">Hybrid</h3>
                  <h3 className="mb-3">Physical</h3>
                  <ul>
                    <li>
                      Global self-healing triggers down to individual devices
                    </li>
                    <li>
                      Extensive automation library with over 650 pre-built
                      scripts
                    </li>
                    <li>
                      Intuitive no-code automation and workflow design tool
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-12 ps-5">
                  <h3 className="mb-3">Cloud</h3>
                  <ul>
                    <li>
                      AI-powered script development for accelerated automation
                    </li>
                    <li>
                      Policy and compliance enforcement for Intune-managed
                      devices
                    </li>
                    <li>
                      Cross-platform automation and workflow creation within the
                      Microsoft ecosystem
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={benefitTabsClass}>
          <div className="col-12">
            <ul className="tabs">
              <li
                className={`tabs-items ${
                  activeTab === "Manage" ? "active" : ""
                }`}
              >
                <a
                  onClick={() => handleTabClick("Manage")}
                  style={{ cursor: "pointer" }}
                >
                  Manage
                </a>
              </li>
              <li
                className={`tabs-items ${
                  activeTab === "Secure" ? "active" : ""
                }`}
              >
                <a
                  onClick={() => handleTabClick("Secure")}
                  style={{ cursor: "pointer" }}
                >
                  Secure
                </a>
              </li>
              <li
                className={`tabs-items ${
                  activeTab === "Backup" ? "active" : ""
                }`}
              >
                <a
                  onClick={() => handleTabClick("Backup")}
                  style={{ cursor: "pointer" }}
                >
                  Backup
                </a>
              </li>
              <li
                className={`tabs-items ${
                  activeTab === "Automate" ? "active" : ""
                }`}
              >
                <a
                  onClick={() => handleTabClick("Automate")}
                  style={{ cursor: "pointer" }}
                >
                  Automate
                </a>
              </li>
            </ul>
          </div>
          <div className="row tabs-descriptions">
            {activeTab === "RMM" && (
              <>
                <div className="col-sm-6 tabs-main-box">
                  <div className="tabs-title">
                    <h3 className="text-center">Physical</h3>
                    <ul>
                      <li>Seamless zero-touch enrollment for Apple devices</li>
                      <li>
                        Rapid OS and feature updates with incremental patching
                      </li>
                      <li>Efficient hybrid Azure infrastructure management</li>
                      <li>
                        Robust remote management for Windows, Apple, and Linux
                        devices
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 tabs-main-box">
                  <div className="tabs-title tabs-box">
                    <h3 className="text-center">Cloud</h3>
                    <ul>
                      <li>
                        Centralized policy and configuration management for
                        Intune and Apple Business Manager
                      </li>
                      <li>Optimized Azure resource management</li>
                      <li>Streamlined Microsoft 365 user administration</li>
                    </ul>
                  </div>
                </div>
              </>
            )}
            {activeTab === "Manage" && (
              <>
                <div className="col-sm-6 tabs-main-box">
                  <div className="tabs-title">
                    <h3 className="text-center">Physical</h3>
                    <ul>
                      <li>Seamless zero-touch enrollment for Apple devices</li>
                      <li>
                        Rapid OS and feature updates with incremental patching
                      </li>
                      <li>Efficient hybrid Azure infrastructure management</li>
                      <li>
                        Robust remote management for Windows, Apple, and Linux
                        devices
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 tabs-main-box">
                  <div className="tabs-title tabs-box">
                    <h3 className="text-center">Cloud</h3>
                    <ul>
                      <li>
                        Centralized policy and configuration management for
                        Intune and Apple Business Manager
                      </li>
                      <li>Optimized Azure resource management</li>
                      <li>Streamlined Microsoft 365 user administration</li>
                    </ul>
                  </div>
                </div>
              </>
            )}
            {activeTab === "Secure" && (
              <>
                <div className="col-sm-6 tabs-main-box">
                  <div className="tabs-title">
                    <h3 className="text-center">Physical</h3>
                    <ul>
                      <li>
                        AI-driven behavioral detection engines for advanced
                        security
                      </li>
                      <li>
                        Detailed forensic incident reporting for in-depth
                        analysis
                      </li>
                      <li>
                        Automated threat-hunting and remediation capabilities
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 tabs-main-box">
                  <div className="tabs-title tabs-box">
                    <h3 className="text-center">Cloud</h3>
                    <ul>
                      <li>
                        Web content filtering for endpoints across any location
                      </li>
                      <li>
                        Comprehensive global cloud threat intelligence
                        repository
                      </li>
                      <li>
                        Cloud-based application management and restriction
                        capabilities
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}

            {activeTab === "Backup" && (
              <>
                <div className="col-sm-6 tabs-main-box">
                  <div className="tabs-title">
                    <h3 className="text-center">Physical</h3>
                    <ul>
                      <li>
                        Incremental TrueDelta backup for optimized data storage
                      </li>
                      <li>
                        Full system image recovery with virtualization support
                      </li>
                      <li>
                        Automated recovery testing with standby image creation
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 tabs-main-box">
                  <div className="tabs-title tabs-box">
                    <h3 className="text-center">Cloud</h3>
                    <ul>
                      <li>
                        Secure backup for Microsoft 365 data, including Teams
                      </li>
                      <li>Customizable data storage location options</li>
                      <li>Seamless recovery to Azure virtual machines</li>
                    </ul>
                  </div>
                </div>
              </>
            )}

            {activeTab === "Automate" && (
              <>
                <div className="col-sm-6 tabs-main-box">
                  <div className="tabs-title">
                    <h3 className="text-center">Physical</h3>
                    <ul>
                      <li>
                        Global self-healing triggers down to individual devices
                      </li>
                      <li>
                        Extensive automation library with over 650 pre-built
                        scripts
                      </li>
                      <li>
                        Intuitive no-code automation and workflow design tool
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 tabs-main-box">
                  <div className="tabs-title tabs-box">
                    <h3 className="text-center">Cloud</h3>
                    <ul>
                      <li>
                        AI-powered script development for accelerated automation
                      </li>
                      <li>
                        Policy and compliance enforcement for Intune-managed
                        devices
                      </li>
                      <li>
                        Cross-platform automation and workflow creation within
                        the Microsoft ecosystem
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RmmPlatform;
