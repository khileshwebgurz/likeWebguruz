import Image from "next/image";


import landingpage from "../../../../public/images/ppcimages/landing-page.svg"
import abtesting from "../../../../public/images/ppcimages/ab-testing.svg"
import competitor from "../../../../public/images/ppcimages/competitor-analysis.svg"
import digitalmarketing from "../../../../public/images/ppcimages/digital-marketing.svg"
import roi from "../../../../public/images/ppcimages/roi.svg"
import campaign from "../../../../public/images/ppcimages/campaign.svg"


const services = [
  {
    src: competitor,
    title: "Competitor Analysis",
    description:
      "We conduct an in-depth analysis of your competitors to identify their strategies and uncover opportunities for you to stand out in the market.",
      alt:'Competitor Analysis Icon'
  },
  {
    src: roi,
    title: "Periodic ROI Measurement & Reporting",
    description:
      "We provide transparent reporting on your ad performance, measuring key metrics to ensure your investment is paying off.",
       alt:'ROI Icon'
  },
  {
    src: abtesting,
    title: "Continual A/B Testing",
    description:
      "We implement rigorous A/B testing to identify the most effective ad variations, ensuring your campaigns are always performing at their best.",
       alt:'A/B Testing Icon'
  },
  {
    src: digitalmarketing,
    title: "Ad Creation & Optimization",
    description:
      "Our creative team crafts compelling ads that resonate with your target audience, continuously optimizing them for better performance.",
       alt:'Ad Creation & Optimization Icon'
  },
  {
    src: campaign,
    title: "Advanced Campaign Consulting",
    description:
      "Our experts offer strategic insights and recommendations to enhance your campaigns and drive better results.",
       alt:'Campaign Consulting Icon'
  },
  {
    src: landingpage,
    title: "Landing Page & CRO Recommendations",
    description:
      "We analyze your landing pages and provide Conversion Rate Optimization (CRO) strategies to boost your conversion rates.",
       alt:'Landing Page Icon'
  },
];

const PpcAdvertising = () => {
  return (
    <>
      <section className="ppcadvertising py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-5">
              <h2>
              What to Expect with Our <span>Paid Advertising Services?</span>
              </h2>
              <span className="mb-2 d-inline-block">Comprehensive PPC Management Services Tailored to Your Needs
              </span>
            </div>
          </div>
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-sm-4 col-xs-12 mb-4">
                <div className="adverticingcard text-center">
                  <Image src={service.src} alt={service.title} />
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

export default PpcAdvertising;
