"use client";
import React, { useEffect, useState,useMemo } from "react";

const DevMagentoDetails = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = useMemo(
    () => [
      {
        id: "section-1",
        title: "AI-Powered Personalization",
        para: "Artificial Intelligence (AI) is redefining the way eCommerce stores interact with customers by enabling hyper-personalized shopping experiences. Magento’s AI-powered tools allow businesses to harness data and customer behaviors to deliver tailored product recommendations that meet the unique needs of each shopper. These tools dynamically adapt to individual preferences, ensuring that customers are presented with the most relevant products, promotions, and content. ",
        para2:
          "With AI, Magento stores can refine their marketing strategies by creating customized offers, personalized email campaigns, and targeted ads, significantly boosting customer engagement. This level of personalization not only enhances user experience but also drives higher conversion rates and repeat business. By utilizing AI in Magento, businesses can stay ahead of the competition and foster long-term customer loyalty.",
      },
      {
        id: "section-2",
        title: "PWA Integration",
        para: "Progressive Web Apps (PWAs) offer a native app-like experience directly through the web browser, providing a fast, responsive, and reliable solution for Magento stores. Integrating PWA technology with Magento enables businesses to offer users an optimized, seamless experience across all devices, including smartphones, tablets, and desktops. PWAs can load instantly, even with slower internet connections, which makes them perfect for reaching customers in areas with poor network coverage.",
        para2:
          "Additionally, PWAs allow for features like offline browsing and push notifications, further enhancing user engagement. This integration improves mobile site performance, reduces bounce rates, and significantly boosts mobile conversions. PWAs offer the best of both web and mobile apps, ensuring your customers have an uninterrupted, high-quality shopping experience no matter where they are.",
      },
      {
        id: "section-3",
        title: "Voice Search Optimization",
        para: "With the rise of voice-activated devices like smartphones, smart speakers, and virtual assistants, voice search has become a game-changer in how consumers shop online. Optimizing your Magento store for voice search is now a necessity to remain competitive. Voice search enables users to make inquiries hands-free, providing convenience and speed. By ensuring that your product listings, content, and search functionality are voice-search friendly, you enhance the user experience and improve your store’s visibility on voice-powered platforms.",
        para2:
          "Optimizing your site for voice search involves restructuring your content for more conversational keywords and improving your website’s speed and accessibility. This not only enhances search engine rankings but also taps into the growing trend of voice commerce, where consumers are increasingly using their voices to find, compare, and purchase products.",
      },
      {
        id: "section-4",
        title: "Augmented Reality Shopping Experiences",
        para: "Augmented Reality (AR) is changing how customers interact with products online by offering an immersive, interactive experience. With Magento’s AR integration, businesses can bring products to life, allowing customers to visualize them in their space before making a purchase. For instance, users can see how furniture looks in their living room or test makeup on their faces virtually. AR reduces uncertainty and enhances the online shopping experience by providing a more tactile and realistic feel of the product. ",
        para2:
          "Magento's AR features help businesses showcase their products in innovative ways, improving customer engagement, reducing returns, and boosting conversion rates. By incorporating AR, Magento stores offer a unique and dynamic shopping experience that sets your business apart from competitors, driving higher customer satisfaction and loyalty.",
      },
      {
        id: "section-5",
        title: "Omnichannel Commerce Solutions",
        para: "Customers now expect a seamless shopping experience across all touchpoints, whether they are browsing on a desktop, shopping on their mobile devices, or interacting with your brand through social media or physical stores. Omnichannel commerce integrates multiple channels to ensure a consistent and unified experience for customers, no matter how they engage with your brand. By implementing omnichannel strategies in your Magento store, you enable your customers to seamlessly switch between devices and platforms, ensuring they have a cohesive experience throughout their shopping journey. This could include features such as shared shopping carts across devices, easy store-to-door options, and synchronized inventory management. ",
        para2:
          "Integrating omnichannel solutions into your Magento store increases customer satisfaction, boosts brand loyalty, and enhances the customer journey, resulting in higher conversions and sales.",
      },
      {
        id: "section-6",
        title: "Blockchain for Secure Transactions",
        para: "Blockchain technology is revolutionizing how transactions are recorded and verified in eCommerce. By integrating blockchain into your Magento store, you can provide enhanced security for every transaction. Blockchain offers a transparent, tamper-proof ledger that ensures the authenticity of payments and protects sensitive customer data. This decentralized system eliminates the need for intermediaries, reducing the risk of fraud and chargebacks, and improving overall transaction efficiency.",
        para2:
          "Blockchain can also streamline supply chain management, verifying the authenticity of products and ensuring ethical sourcing. For industries where security, privacy, and transparency are critical, such as financial services, blockchain integration within Magento offers a robust solution that strengthens trust with customers, protects business transactions, and creates a more secure online shopping environment.",
      },
      {
        id: "section-7",
        title: "Sustainable eCommerce Practices",
        para: "As consumers become increasingly environmentally conscious, sustainability has become an essential factor in their purchasing decisions. Magento stores that adopt eco-friendly practices not only cater to this demand but also enhance their brand reputation and appeal to a broader customer base. Sustainable eCommerce practices include reducing carbon footprints by optimizing website performance, offering eco-conscious packaging options, and promoting products made from sustainable materials.",
        para2:
          "Magento enables businesses to integrate sustainability into their operations by providing tools for inventory management that reduce waste, offering digital product catalogs, and creating green marketing campaigns. Implementing these practices not only helps your business align with consumer expectations but also supports your long-term growth and environmental responsibility. This commitment to sustainability attracts like-minded customers, builds brand loyalty, and differentiates your business in a competitive marketplace.",
      },
    ],
    []
  );

  const handleScrollToSection = (id) => {
    // First, remove active section
    setActiveSection(null);

    // Then immediately set the new active section
    requestAnimationFrame(() => {
      setActiveSection(id);
    });

    const section = document.getElementById(id);
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollPosition =
        sectionTop - viewportHeight / 2 + sectionHeight / 2;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        let newActiveSection = null;
        const buffer = window.innerHeight * 0.3; // 30% of viewport height for better detection

        for (const { id } of sections) {
          const section = document.getElementById(id);
          if (section) {
            const rect = section.getBoundingClientRect();

            // Check if section is in viewport with some buffer
            if (
              rect.top <= buffer && // Section top is in the upper portion
              rect.bottom >= buffer // Section bottom is below the detection area
            ) {
              newActiveSection = id;
              break;
            }
          }
        }

        if (newActiveSection !== activeSection) {
          setActiveSection(newActiveSection);
        }
      }, 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [sections, activeSection]);

  return (
    <section className="magento-dev-details py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center heading-main mb-4">
            <h2>
              Latest Trends in <span>Magento Development</span>
            </h2>
          </div>
          <div className="col-md-4 col-12">
            <div className="mag-details-left">
              <h3 className="mag-sub-heading">Guided Topics</h3>
              <div className="clickable-heads">
                {sections.map(({ id, title }) => (
                  <h4
                    key={id}
                    className={activeSection === id ? "active" : ""}
                    onClick={() => handleScrollToSection(id)}
                  >
                    {title}
                  </h4>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-8 col-12">
            <div className="right-tabs" id="right-scroll">
              {sections.map(({ id, title, para, para2 }) => (
                <div key={id} id={id} className="tab-content">
                  <h4>{title}</h4>
                  <p>{para}</p>
                  <p>{para2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevMagentoDetails;
