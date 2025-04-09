import Image from "next/image";
import Icnbroad1 from "../../../public/images/hubspotimages/real-estate.webp";
import Icnbroad2 from "../../../public/images/hubspotimages/retail-ecoomerce.svg";
import Icnbroad3 from "../../../public/images/hubspotimages/healthcare.svg";
import Icnbroad4 from "../../../public/images/hubspotimages/educaate.svg";

function HubConsultSteps() {
  const industries = [
    
    {
      img: Icnbroad2,
      title: "E-commerce.",
      alt: "E-commerce Icon",
      description:
        "Optimize sales funnels and enhance customer retention.",
    },
    {
      img: Icnbroad3,
      title: "Healthcare.",
      alt: "Healthcare Icon",
      description:
        "Streamline patient communication and improve lead management.",
    },
    {
      img: Icnbroad4,
      title: "Education.",
      alt: "Education Icon",
      description:
        "Attract prospective students and manage admissions effectively.",
    },
    {
      img: Icnbroad1,
      title: "Real Estate.",
      alt: "Real Estate Icon",
      description:
        "Automate lead generation and nurture campaigns for better ROI.",
    },
    
  ];

  return (
    <section id="brdindstries" className="consult-steps py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-5 col-sm-12 col-12">
            <div className="heading-main">
              <h2>
              <span>Industries </span> We Cater To
              </h2>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12 col-12">
            <div className="brdighdtxt">
              <span>
              Our Hubspot solutions cater to a wide range of industries including, but not limited to:
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="indrngserv">
              {industries.map((industry, index) => (
                <div className="indrngservinnr" key={index}>
                  <div className="indrngservimg">
                    <Image
                      src={industry.img}
                      className="img-fluid"
                      alt={industry.alt}
                    />
                  </div>
                  <div className="indrngservcnnct">
                    <h3>{industry.title}</h3>
                    <p>{industry.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HubConsultSteps;
