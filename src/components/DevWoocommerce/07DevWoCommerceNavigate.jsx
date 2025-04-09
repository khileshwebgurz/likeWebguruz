import list1 from "../../../public/images/wocommercesimg/woo-update-1.webp";
import list2 from "../../../public/images/wocommercesimg/woo-update-2.webp";
import list3 from "../../../public/images/wocommercesimg/woo-update-3.webp";
import list4 from "../../../public/images/wocommercesimg/woo-update-4.webp";
import list5 from "../../../public/images/wocommercesimg/woo-update-5.webp";
import list6 from "../../../public/images/wocommercesimg/woo-update-6.webp";
import Image from "next/image";

const DevWoCommerceNavigate = () => {
  const navigateItems = [
    {
      img: list1,
      title: "Managing Store Complexity",
      alt:"Store Complexity Icon",
      description:
        "As your WooCommerce store grows, managing complex features like product variations, custom shipping options, and large inventories can become overwhelming. To tackle this, use organized product categories, custom attributes, and automation tools. Leveraging WooCommerce extensions like advanced product filters and order management systems can streamline store management, making it easier to scale without losing control.",
    },
    {
      img: list2,
      title: "Ensuring Website Security",
      alt:"Website Security Icon",
      description:
        "Security is one of the most critical challenges for WooCommerce store owners, with frequent threats such as data breaches, hacking, and fraud. To overcome these challenges, implement SSL certificates, enable two-factor authentication, and use firewalls to protect sensitive data. Regularly update WooCommerce, WordPress, and plugins to close security vulnerabilities, and conduct frequent security audits to stay ahead of potential threats.",
    },
    {
      img: list3,
      title: "Handling High Traffic and Scalability",
      alt:"Traffic and Scalability Icon",
      description:
        "WooCommerce stores can face performance issues during high-traffic periods, such as flash sales or seasonal promotions. To address this, utilize scalable hosting solutions that support increased traffic, like VPS or cloud hosting. Optimize your store’s performance by implementing caching, content delivery networks (CDN), and optimizing the codebase to ensure fast loading speeds even during peak traffic times.",
    },
    {
      img: list4,
      title: "Optimizing Checkout Experience",
      alt:"Checkout Experience Icon",
      description:
        "A complicated or lengthy checkout process can lead to cart abandonment and lost sales. Simplifying the checkout process is essential to keeping your customers happy. You can achieve this by offering guest checkout, reducing the number of form fields, providing multiple payment options, and displaying trust badges. Ensuring a smooth and user-friendly checkout experience reduces friction and increases conversion rates.",
    },
    {
      img: list5,
      title: "Managing Multiple Integrations",
      alt:"Multiple Integrations Icon",
      description:
        "Integrating third-party tools such as CRM, email marketing, accounting software, and payment gateways can create compatibility issues and affect store functionality. To handle this, choose reliable, well-supported plugins that offer seamless integration with WooCommerce. Regularly test these integrations to ensure they are working correctly, and leverage WooCommerce’s extensive API support for custom integrations when needed.",
    },
    {
      img: list6,
      title: "Adapting to Regular Updates",
      alt:"Regular Updates Icon",
      description:
        "WooCommerce and WordPress regularly release updates to enhance functionality, fix bugs, and patch security vulnerabilities. However, these updates can sometimes disrupt the store’s performance or compatibility with existing plugins. To tackle this, schedule regular maintenance windows for updates, back up your website before making any changes, and test updates on a staging environment before applying them to the live store. This ensures smooth updates without jeopardizing your store’s operations.",
    },
  ];

  return (
    <div className="Navigatesucess-section woocommerce-navigate py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-5">
            <h2>
              <span>Tackle WooCommerce Development </span> <br />
              Challenges with Ease
            </h2>
          </div>

          {navigateItems.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="Navigatesucess-box">
                <div className="navigate-icon">
                  <Image src={item.img} alt={item.alt} />
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

export default DevWoCommerceNavigate;
