import Image from "next/image";

import ppcserviceone from "../../../../public/images/ppcimages/ppc-service-1.svg";
import ppcservicetwo from "../../../../public/images/ppcimages/ppc-service-2.svg";
import ppcservicethree from "../../../../public/images/ppcimages/ppc-service-3.svg";
import ppcservicefour from "../../../../public/images/ppcimages/ppc-service-4.svg";
import ppcservicefive from "../../../../public/images/ppcimages/ppc-service-5.svg";
import ppcservicesix from "../../../../public/images/ppcimages/ppc-service-6.svg";

const services = [
  {
    src: ppcservicetwo,
    title: " Data-Driven Strategies",
    description:
      "Every decision is based on in-depth analysis and data, ensuring your SEO campaign is on the right track.",
  },
  {
    src: ppcservicethree,
    title: "Constant Optimization",
    description:
      "SEO is an ongoing process, and we continually refine your strategy to stay ahead of algorithm updates and competitors.",
  },
  {
    src: ppcservicefour,
    title: "Ethical SEO Practices",
    description:
      "We adhere to white-hat SEO methods, ensuring that your website stays in good standing with search engines.",
  },
  {
    src: ppcservicefive,
    title: "User-Centric Design",
    description:
      "We optimize websites not just for search engines but for real users, ensuring a seamless experience that boosts engagement.",
  },
  {
    src: ppcservicesix,
    title: "Content Excellence",
    description:
      "We focus on creating high-quality, engaging content that resonates with your audience and alignswith search engine best practices.",
  },
  {
    src: ppcserviceone,
    title: "Local & Global Focus",
    description:
      "Whether you need local SEO or a global campaign, we have the expertise to deliver top-notch results.",
  },
];

const SeoAdvertising = () => {
  return (
    <>
      <section className="ppcadvertising py-5 seoadvertising">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-5">
              <h2>
                {/* <span>PPC Advertising</span>  */}
                SEO Approach
              </h2>
              <span className="mb-2 d-inline-block">At WebGuruz, our approach to SEO is built on these core principles:
              </span>
            </div>
          </div>
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-sm-4 col-xs-12 mb-4">
                <div className="adverticingcard text-center">
                  <Image src={service.src} alt={`${service.title} Icon`} />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SeoAdvertising;
