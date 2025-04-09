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
        <h3>Initial Assessment</h3>
  <p>We thoroughly analyze your Wix website to identify existing issues, security vulnerabilities, and opportunities for improvement. This gives us a complete picture of your website's current health.
We use specialized tools to check for broken links, slow-loading pages, mobile responsiveness issues, and potential security vulnerabilities. We document all findings and prioritize them based on their potential impact on your business, creating a solid foundation for our maintenance strategy.</p>`,
  },
  {
    eventKey: "Records",
    title: "Step 2",
    alt: "Step 2",
    content: `
        <h3>Customized Maintenance Plan</h3>
  <p>Based on our assessment, we create a tailored maintenance plan that addresses your specific needs, budget, and business goals. No generic solutions- just what your website needs.</p><p>
Every business has unique requirements, which is why we don't believe in one-size-fits-all maintenance packages. Instead, we work closely with you to understand your priorities, timeline, and budget constraints. This tailored approach ensures you're getting exactly the services you need without paying for unnecessary extras.
</p>`,
  },
  {
    eventKey: "Reviews",
    title: "Step 3",
    alt: "Step 3",
    content: `
        <h3>Regular Maintenance Implementation</h3>
  <p>Our team performs scheduled maintenance tasks including updates, backups, security checks, and performance optimization according to your maintenance plan. Once your maintenance plan is in place, our team of Wix experts begins implementing the scheduled tasks with precision and care. We perform essential maintenance activities during off-peak hours to minimize any impact on your website visitors. All work is thoroughly documented and tested to ensure your website remains stable and secure after each maintenance activity.</p>`,
  },
  {
    eventKey: "Technology",
    title: "Step 4",
    alt: "Step 4",
    content: `
        <h3>Ongoing Monitoring & Support</h3>
  <p>Website maintenance isn't just about scheduled tasks- it's about being vigilant and responsive to new challenges. Our monitoring systems keep watch over your website 24/7, alerting our team to any issues that require immediate attention. You'll receive regular reports detailing all maintenance activities performed, website performance metrics, and recommendations for further improvements. Our goal is to provide you with complete peace of mind, knowing that your website is constantly being monitored and maintained by experts who care about your business success.</p>`,
  },
];
const WixTabs = () => {
  return (
    <section className="maintainance-tabbing py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 heading-main text-center mb-5">
            <h2>
              How Does Our <span>Wix Maintenance Process Work?</span>
            </h2>
            <p className="text-center mt-2">
              Our maintenance process is the result of years of experience
              working with Wix websites across various industries. We&apos;ve
              refined our methodology to provide maximum value while minimizing
              disruption to your business operations. This systematic approach
              allows us to deliver consistent, high-quality results for every
              client while still addressing the unique requirements of each
              website we maintain.
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

export default WixTabs;
