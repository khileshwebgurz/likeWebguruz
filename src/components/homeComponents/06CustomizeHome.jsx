import {
  ecom1,
  Healthy1,
  education1,
  finance1,
  techno1,
  RealEstate,
  Retail,
  Hospitality,
  NonProfit,
  ConsultMe,
  Legal,
  Automotive,
} from "../../utils/SVGIcons";

const customizeContent = [
  { Icon: ecom1, title: "E-Commerce", alt:"Ecommerce Icon"  },
  { Icon: Healthy1, title: "Healthcare", alt: "Healthcare Icon" },
  { Icon: education1, title: "Education", alt: "Education Icon" },
  { Icon: finance1, title: "Finance", alt: "Finance Icon" },
  { Icon: techno1, title: "Technology", alt: "Technology Icon " },
  { Icon: RealEstate, title: "Real Estate", alt: "Real Estate Icon" },
  { Icon: Retail, title: "Retail", alt: "Retail Icon" },
  { Icon: Hospitality, title: "Hospitality", alt: "Hospitality Icon" },
  { Icon: NonProfit, title: "Non-profit", alt: "Non-Profit Icon" },
  { Icon: ConsultMe, title: "Consulting", alt: "Consulting Icon" },
  { Icon: Legal, title: "Legal", alt: "Legal Icon" },
  { Icon: Automotive, title: "Automotive", alt: "Automotive Icon" },
];

const CustomizeHome = ({heading,paragraph,subheading}) => {
  return (
    <section className="customized-approach py-5 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center mb-2">
            <h2>
            {heading} <span>{subheading}</span>
            </h2>
            <p>{paragraph}</p>
          </div>
        </div>

        <div className="row diverse-main px-2">
          {customizeContent.map(({ Icon, title,alt }, index) => (
            <div className="col col-xs-12" key={index}>
              <div className="icon-content text-center">
              <Icon alt={alt} />
                <p className="text-center">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomizeHome;
