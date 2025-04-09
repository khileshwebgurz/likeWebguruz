import React from "react";
import Image from "next/image";
import keyon1 from "../../../public/images/ecommerceconstimg/ecom-pros-1.webp";
import keyon2 from "../../../public/images/ecommerceconstimg/ecom-pros-2.webp";
import keyon3 from "../../../public/images/ecommerceconstimg/ecom-pros-3.webp";
import keyon4 from "../../../public/images/ecommerceconstimg/ecom-pros-4.webp";
import keyon5 from "../../../public/images/ecommerceconstimg/ecom-pros-5.webp";
import keyon6 from "../../../public/images/ecommerceconstimg/ecom-pros-6.webp";

const ecomConsultData = [
  {
    image: keyon1,
    alt:"Sales Strategy Icon",
    text: "If you’re experiencing stagnant or declining sales, it’s time to assess your strategy, website optimization, and customer acquisition tactics.",
  },
  {
    image: keyon2,
    alt:"eCommerce Strategy Icon",
    text: "Expanding into new geographies or verticals requires a solid eCommerce strategy, and consulting ensures your brand adapts quickly.",
  },
  {
    image: keyon3,
    alt:"Site Optimization Icon",
    text: "Identify key issues on your site, from user experience to checkout optimization, and turn potential sales into conversions.",
  },
  {
    image: keyon4,
    alt:"Scalable Growth Icon",
    text: "Identify scalable opportunities, ensuring you grow without compromising quality or customer experience.",
  },
  {
    image: keyon5,
    alt:"Platform Guidance Icon",
    text: "Having experts guide your platform and tools selection ensures a smooth, future-proof operation.",
  },
  {
    image: keyon6,
    alt:"eCommerce Trends Icon",
    text: "Stay competitive with advice on the latest eCommerce trends, and ensure your business leverages technology and strategies ahead of the curve.",
  },
];

const DevEcomConsultNeeds = () => {
  return (
    <div className="Econsultingservices py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-md-5 mb-4">
            <h2>
              When Do You Need <span>eCommerce Consulting?</span>
            </h2>
          </div>
          {ecomConsultData.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="services-one">
                <div className="eservices-main">
                  <div className="img-one">
                    <Image src={item.image} alt={item.alt} />
                  </div>
                  <div className="const-text">
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevEcomConsultNeeds;
