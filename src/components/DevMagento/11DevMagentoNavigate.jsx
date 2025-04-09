import Image from "next/image";
import list1 from "../../../public/images/magentoimg/magento-agile-1.webp";
import list2 from "../../../public/images/magentoimg/magento-agile-2.webp";
import list3 from "../../../public/images/magentoimg/magento-agile-3.webp";
import list4 from "../../../public/images/magentoimg/magento-agile-4.webp";
import list5 from "../../../public/images/magentoimg/magento-agile-5.webp";
import list6 from "../../../public/images/magentoimg/magento-agile-6.webp";

const DevMagentoNavigate = () => {
  const navigateData = [
    {
      image: list1,
      title: "Certified Magento expertise with proven results",
      alt:"Certified Magento Expertise Icon",
      description:
        "Our team of certified Magento developers possesses years of experience in delivering customized eCommerce solutions. We leverage our deep knowledge of Magento to create highly efficient, scalable, and secure online stores that meet your specific business needs. Our proven track record speaks for itself, with numerous successful projects completed for clients across various industries.",
    },
    {
      image: list2,
      title: "Personalized solutions tailored to your goals",
      alt:"Personalized Solutions Icon",
      description:
        "At WebGuruz, we understand that every business is unique. We take the time to learn about your goals, challenges, and vision, allowing us to craft bespoke Magento solutions that are fully aligned with your objectives. Our personalized approach ensures that your platform not only meets but exceeds your expectations.",
    },
    {
      image: list3,
      title: "Comprehensive support throughout the project lifecycle",
      alt:"Project Lifecycle Icon",
      description:
        "From concept to execution and beyond, we offer end-to-end support to ensure your Magento project runs smoothly. Our team provides guidance and assistance at every stage, from initial consultation and design to development, testing, deployment, and ongoing maintenance. With us, you have a dedicated partner for the entire journey.",
    },
    {
      image: list4,
      title: "Competitive pricing for world-class services",
      alt:"Competitive Pricing Icon",
      description:
        "At WebGuruz, we offer competitive pricing without sacrificing quality. We believe in providing cost-effective Magento solutions that deliver great value for your investment. Our transparent pricing structure ensures no hidden costs, allowing you to plan your budget with confidence.",
    },
    {
      image: list5,
      title: "Agile methodology for faster delivery",
      alt:"Faster Delivery Icon",
      description:
        "We use agile methodologies to ensure quicker, more flexible project delivery. By breaking down the project into smaller, manageable phases, we can rapidly adapt to any changes in requirements, ensuring timely delivery without compromising quality. This approach allows us to meet deadlines and provide regular updates, keeping you in the loop throughout.",
    },
    {
      image: list6,
      title: "Global clientele with a 100% satisfaction rate",
      alt:"100% Satisfaction Icon",
      description:
        "Our client base spans across the globe, from small startups to large enterprises. We have earned the trust of our clients by consistently delivering high-quality Magento solutions that drive results. With a 100% satisfaction rate, our clients rely on us for ongoing support and to meet their evolving business needs.",
    },
  ];

  return (
    <div className="Navigatesucess-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-5">
            <h2>
              Why work with <span>WebGuruz? </span>
            </h2>
          </div>
          {navigateData.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="Navigatesucess-box">
                <div className="navigate-icon">
                  <Image src={item.image} alt={item.alt} />
                </div>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevMagentoNavigate;
