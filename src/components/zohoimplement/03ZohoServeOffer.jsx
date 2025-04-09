import React from "react";
import Image from "next/image";
import zohoimg1 from "../../../public/images/zohoservicesimg/zoho-consult-1.jpg";
import zohoimg2 from "../../../public/images/zohoservicesimg/zoho-consult-2.jpg";
import zohoimg3 from "../../../public/images/zohoservicesimg/zoho-consult-3.jpg";
import zohoimg4 from "../../../public/images/zohoservicesimg/zoho-consult-4.jpg";
import zohoimg5 from "../../../public/images/zohoservicesimg/zoho-consult-5.jpg";
import zohoimg6 from "../../../public/images/zohoservicesimg/zoho-consult-6.jpg";
const ZohoServeOffer = () => {
  return (
    <div className="Zohooffer-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12 heading-main mb-4 mb-lg-0">
            <div className="services-offer-left">
              <h2>
                What Do <span> We Offer?</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-8 col-12">
            <div className="services-offer-right">
              <div className="offer-main">
                <div className="offer-img">
                  <Image src={zohoimg1} alt="zohoimg" />
                </div>
                <div className="offer-content">
                  <h3>Zoho CRM Implementation</h3>
                  <p>
                    Our comprehensive Zoho CRM implementation service covers
                    everything from initial setup to customization, data
                    migration, and integration with your existing systems. We
                    configure the CRM to match your sales processes, create
                    custom modules for your unique requirements, and develop
                    automation workflows that eliminate repetitive tasks. Our
                    team also provides thorough training to ensure your staff
                    can effectively use all features, maximizing your return on
                    investment and ensuring smooth adoption across your
                    organization.
                  </p>
                </div>
              </div>
              <div className="offer-main">
                <div className="offer-img">
                  <Image src={zohoimg2} alt="zohoimg" />
                </div>
                <div className="offer-content">
                  <h3>Zoho One Implementation</h3>
                  <p>
                    Leverage the full power of Zoho&apos;s integrated suite with our
                    Zoho One implementation service. We help you navigate and
                    implement the 40+ applications within Zoho One, tailoring
                    the perfect combination for your business needs. Our experts
                    will create a cohesive ecosystem where data flows seamlessly
                    between applications, eliminating silos and providing a
                    unified view of your operations. From CRM to finance, HR to
                    marketing, we ensure all components work together to provide
                    maximum business value.
                  </p>
                </div>
              </div>
              <div className="offer-main">
                <div className="offer-img">
                  <Image src={zohoimg3} alt="zohoimg" />
                </div>
                <div className="offer-content">
                  <h3>Zoho Integration Services</h3>
                  <p>
                    Connect Zoho with your existing business applications
                    through our expert integration services. Whether it&apos;s
                    linking your e-commerce platform, accounting software, ERP
                    system, or marketing tools, we build robust integrations
                    that ensure smooth data flow. Our team uses Zoho&apos;s API
                    capabilities, Zoho Flow, or custom integration solutions to
                    create connections that update in real time, eliminate
                    double data entry, and provide a single source of truth for
                    your business data across all platforms.
                  </p>
                </div>
              </div>
              <div className="offer-main">
                <div className="offer-img">
                  <Image src={zohoimg4} alt="zohoimg" />
                </div>
                <div className="offer-content">
                  <h3>Zoho Customization Services</h3>
                  <p>
                    Every business is unique, and we specialize in tailoring
                    Zoho applications to match your specific requirements. Our
                    customization services include creating custom fields,
                    modules, functions, buttons, and workflows that align
                    perfectly with your business processes. We develop custom
                    reports and dashboards that provide actionable insights,
                    design branded templates for customer communications, and
                    build custom pages that simplify complex tasks for your team
                    members.
                  </p>
                </div>
              </div>
              <div className="offer-main">
                <div className="offer-img">
                  <Image src={zohoimg5} alt="zohoimg" />
                </div>
                <div className="offer-content">
                  <h3>Zoho Consulting Services</h3>
                  <p>
                    Benefit from our strategic Zoho consulting services to
                    maximize the value of your Zoho investment. Our consultants
                    analyze your current business processes, identify
                    opportunities for improvement, and recommend the optimal
                    Zoho configuration. We provide roadmaps for implementation,
                    advise on best practices, help you avoid common pitfalls,
                    and ensure your Zoho setup supports your long-term business
                    objectives. Our consulting approach focuses on delivering
                    practical solutions that drive measurable business results.
                  </p>
                </div>
              </div>
              <div className="offer-main">
                <div className="offer-img">
                  <Image src={zohoimg6} alt="zohoimg" />
                </div>
                <div className="offer-content">
                  <h3>Zoho Support and Maintenance</h3>
                  <p>
                  Count on our ongoing support and maintenance services to keep your Zoho applications running smoothly. We offer various support packages that include regular system health checks, troubleshooting, bug fixes, user management, and assistance with new feature adoption. Our dedicated support team responds quickly to your queries, provides timely updates, helps with user training for new team members, and ensures your Zoho implementation continues to evolve alongside your growing business needs.
                  </p>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZohoServeOffer;
