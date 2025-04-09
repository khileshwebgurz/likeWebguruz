import Image from "next/image";
import drplleft from "../../../public/images/hubspotimages/empower.jpg";

// Array to store Drupal services data
const drupalServices = [
  {
    title: "Custom HubSpot app development",
    description:
      "Our custom HubSpot apps are designed to enhance your CRM capabilities and streamline your operations, providing tailored solutions that drive business growth.",
  },
  {
    title: "Data migration and sync",
    description:
      "Ensure seamless data migration and synchronization while maintaining accuracy and security, so your business can operate without disruptions.",
  },
  {
    title: "CRM integration and configuration",
    description:
      "Seamlessly integrate HubSpot with your existing tools and platforms to streamline operations, improve data flow, and maximize efficiency across your business processes.",
  },
  {
    title: "Reporting and analytics tools",
    description:
      "Gain actionable insights with advanced reporting and analytics tools that help you track performance, identify trends, and make data-driven decisions to drive your business forward.",
  },
  {
    title: "Automation workflows",
    description:
      "Save time and improve efficiency with custom automation workflows that simplify repetitive tasks and ensure smooth business operations.",
  },
  {
    title: "Custom module creation",
    description:
      "Address specific business challenges with custom modules tailored to your unique requirements, ensuring enhanced functionality and optimized workflows within HubSpot.",
  },
  {
    title: "API development and integration",
    description:
      "Custom APIs enable seamless communication between HubSpot and other software, ensuring your systems work efficiently and effectively.",
  },
  {
    title: "Ongoing support and maintenance",
    description:
      "Receive comprehensive support, including troubleshooting, updates, and enhancements, to ensure your applications run smoothly and stay up-to-date with the latest features.",
  },
];

const AppDevServices = () => {
  return (
    <>
      <section className="dvlpsrvc app-dev-services new-app-services py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 col-12">
              <div className="lftbg"></div>
              <div className="heading-main">
                <h2 className="text-white pb-4">
                Empower Your Business 
                <br />
                  <strong>with Custom Solutions</strong>
                </h2>
                <div className="drplimg">
                  <Image
                    src={drplleft}
                    className="img-fluid"
                    alt="HubSpot App Developers"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 col-12">
              <div className="drplcmsct">
                {drupalServices.map((service, index) => (
                  <div className={`drplcmsctinnr dr${index + 1}`} key={index}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppDevServices;
