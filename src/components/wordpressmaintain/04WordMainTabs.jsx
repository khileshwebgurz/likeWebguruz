"use client";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
const whiteseophase = [
  {
    eventKey: "experts",
    title: "Step 1",
    alt: "Step 1",
    content: `
        <h3>Regular Updates & Security Patches</h3>
  <p>Keeping your WordPress core, plugins, and themes updated is crucial for security and functionality. We perform regular updates to eliminate vulnerabilities that hackers could exploit, ensuring your website remains safe from malware, cyber threats, and outdated software risks. Our team also applies necessary security patches as soon as they are released, minimizing the chances of data breaches or website failures.</p>`,
  },
  {
    eventKey: "Records",
    title: "Step 2",
    alt: "Step 2",
    content: `
        <h3>Performance Optimization</h3>
  <p>A slow-loading website can hurt user experience and SEO rankings. We enhance your website’s speed and responsiveness by optimizing images, minifying CSS and JavaScript files, cleaning up databases, and implementing advanced caching techniques. This ensures that your visitors enjoy a smooth browsing experience while search engines rank your website higher for faster performance.</p>`,
  },
  {
    eventKey: "Reviews",
    title: "Step 3",
    alt: "Step 3",
    content: `
        <h3>Daily Backups & Recovery Plan</h3>
  <p>Data loss can happen due to cyberattacks, server failures, or accidental deletions. To safeguard your website, we take automated daily backups and store them securely on cloud servers. In case of any issue, our rapid recovery plan allows us to restore your website quickly, ensuring minimal downtime and preventing any loss of important data, customer information, or business content.</p>`,
  },
  {
    eventKey: "Technology",
    title: "Step 4",
    alt: "Step 4",
    content: `
        <h3>Continuous Monitoring & Support</h3>
  <p>Website issues can arise at any time, and a delayed response can lead to lost customers and revenue. Our team provides 24/7 website monitoring to detect and fix potential issues before they escalate. We monitor uptime, performance, broken links, and security vulnerabilities, ensuring your website stays online and fully functional. Plus, with our dedicated support team, you can reach out anytime for quick fixes, troubleshooting, or expert guidance.</p>`,
  },
];
const WordMainTabs = () => {
  return (
    <section className="maintainance-tabbing py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 heading-main text-center mb-5">
            <h2>
              Our <span>WordPress Maintenance Process</span>
            </h2>
            <p className="text-center mt-2">
              We follow a structured approach to ensure your website remains in
              perfect shape, secure, and high-performing at all times. Our team
              of WordPress experts proactively monitors, updates, and optimizes
              your site to prevent downtime, security breaches, and performance
              issues. With our hands-on approach, you can focus on growing your
              business while we handle the technical complexities of your
              website.
            </p>
          </div>
          <div className="col-md-12">
            <Tabs
              defaultActiveKey="experts"
              id="uncontrolled-example"
              className="maintain-click-tab pb-5"
            >
              {whiteseophase.map((tab) => (
                <Tab
                  eventKey={tab.eventKey}
                  title={tab.title}
                  key={tab.eventKey}
                >
                  <div
                    className="maintainance-content"
                    dangerouslySetInnerHTML={{ __html: tab.content }}
                  />
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordMainTabs;
