import Image from "next/image";
import drplleft from "../../../../public/images/drupalimg/drupal1.webp";

// Array to store Drupal services data
const drupalServices = [
  {
    title: "Custom Built CMS Development",
    description:
      "Tailored solutions crafted from the ground up to meet your specific requirements and business objectives.",
  },
  {
    title: "OpenSource CMS Development",
    description:
      "Leverage the flexibility and community support of open-source platforms for a cost-effective and customizable content management solution.",
  },
  {
    title: "Theme/Extension Development",
    description:
      "Enhance the functionality and appearance of your CMS with custom themes and extensions tailored to your brand.",
  },
  {
    title: "CMS Migration & Upgradation",
    description:
      "Seamlessly transition your existing content to a new CMS or upgrade your current system to keep up with evolving technologies.",
  },
  {
    title: "Enterprise CMS Solutions",
    description:
      "Scalable solutions designed for large organizations, ensuring secure and efficient content management across multiple departments.",
  },
  {
    title: "CMS Support & Maintenance",
    description:
      "Ongoing support and maintenance to ensure your CMS runs smoothly and stays up to date with the latest features.",
  },
  {
    title: "CMS Integration",
    description:
      "Integrate your CMS with other tools and platforms to streamline workflows and improve productivity.",
  },
  {
    title: "CMS Module Development",
    description:
      "Custom modules that enhance the functionality of your CMS to better serve your specific needs.",
  },
];

const CmsWebServices = () => {
  return (
    <>
      <section className="dvlpsrvc py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 col-12">
              <div className="lftbg"></div>
              <div className="heading-main">
                <h2 className="text-white pb-4">
                  Our CMS Web <br />
                  <strong>Development Services</strong>
                </h2>
                <div className="drplimg">
                  <Image
                    src={drplleft}
                    className="img-fluid"
                    alt="CMS Development Company"
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

export default CmsWebServices;
