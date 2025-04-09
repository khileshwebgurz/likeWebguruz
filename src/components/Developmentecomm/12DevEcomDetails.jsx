"use client";
import React, { useEffect, useState, useMemo } from "react";

const DevEcomDetails = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = useMemo(
    () => [
      {
        id: "section-1",
        title: "Artificial Intelligence & Chatbots",
        para: "Enhance customer engagement with AI-driven support systems. AI-powered chatbots act as intelligent assistants that can handle a variety of tasks, from answering frequently asked questions to providing personalized product recommendations. By incorporating natural language processing (NLP), these chatbots can understand and engage with customers in a conversational manner, ensuring 24/7 support and a seamless experience. With the ability to learn and adapt, AI chatbots can improve over time, offering more accurate and tailored responses, which in turn drives higher customer satisfaction and retention. ",
        para2:
          "Furthermore, integrating AI tools for customer service can help businesses manage high volumes of inquiries efficiently, reduce operational costs, and maintain a high level of customer service. ",
      },
      {
        id: "section-2",
        title: "Voice Search Optimization",
        para: "Prepare your site for the rise of voice-assisted shopping. As voice-activated devices such as Amazon Alexa, Google Assistant, and Apple's Siri gain popularity, optimizing your eCommerce site for voice search is becoming essential. Voice search queries tend to be more conversational and longer than traditional text-based searches, which means your site’s content needs to be structured to match these types of questions. Optimizing for voice search involves using natural language, answering direct questions, and focusing on long-tail keywords that reflect how customers speak. ",
        para2:
          "Additionally, voice search can be especially useful in mobile shopping scenarios, allowing users to search for products while on-the-go, making it easier for them to interact with your website hands-free and increasing the likelihood of purchases.",
      },
      {
        id: "section-3",
        title: "Augmented Reality",
        para: "Provide virtual shopping experiences with AR. Augmented reality (AR) offers customers the ability to interact with and visualize products in their own environment before making a purchase decision, enhancing their online shopping experience. For example, in fashion, AR allows customers to virtually try on clothing or accessories, while in furniture and home decor, they can place products in their living rooms to see how they fit with the space. This immersive, interactive feature bridges the gap between in-store and online shopping by giving customers a better sense of the product’s look, feel, and fit. ",
        para2:
          "By incorporating AR into your eCommerce platform, you provide a highly engaging and personalized experience that can drive higher conversion rates, reduce return rates, and improve customer satisfaction. Additionally, AR features create excitement around your brand, leading to increased social media buzz and word-of-mouth marketing.",
      },
      {
        id: "section-4",
        title: "Personalization Engines",
        para: "Deliver customized shopping experiences with data-driven insights. Personalization engines leverage customer data to provide tailored recommendations, content, and promotions based on browsing behavior, past purchases, and even preferences such as color, style, or size. With machine learning algorithms, these engines continuously learn from customer interactions to improve the relevance and accuracy of the recommendations they make. Personalization can extend to various aspects of the shopping experience, such as dynamic pricing, targeted email campaigns, and personalized product pages. ",
        para2:
          "By delivering a more customized and engaging experience, businesses can significantly increase customer satisfaction, boost conversion rates, and drive customer loyalty. Furthermore, personalized experiences lead to more meaningful connections with customers, making them more likely to return for repeat purchases and recommend the site to others.",
      },
      {
        id: "section-5",
        title: "Progressive Web Apps (PWAs)",
        para: "Combine the benefits of a website and app with PWAs. Progressive Web Apps (PWAs) are a powerful combination of the best aspects of both websites and mobile apps, offering users an app-like experience directly through their web browser. PWAs are fast, reliable, and responsive, meaning they load quickly and work seamlessly even on low-quality networks or when the user is offline.",
        para2:
          "By utilizing features such as push notifications, home screen installation, and background sync, PWAs deliver a highly engaging and interactive user experience without the need for customers to download or install anything from an app store. This makes PWAs a more accessible and cost-effective alternative to traditional mobile apps, especially for businesses looking to reach a larger audience without the expense and complexity of maintaining separate apps for different platforms. PWAs not only improve user engagement and retention but also increase conversion rates by reducing friction in the user journey, especially for mobile users.",
      },
      {
        id: "section-6",
        title: "Multi-Channel Retailing",
        para: "Reach customers on multiple platforms like social media and mobile apps. Multi-channel retailing allows businesses to meet their customers wherever they are, providing a consistent and seamless experience across multiple touchpoints. In today’s digital age, consumers interact with brands on a variety of platforms- from social media sites like Facebook and Instagram to mobile apps, marketplaces like Amazon, and even traditional brick-and-mortar stores. By integrating all these channels into a cohesive strategy, businesses can increase brand visibility, reach new audiences, and ensure that customers can shop wherever and however they prefer. ",
        para2:
          "Multi-channel retailing also allows businesses to personalize messaging, offer targeted promotions, and track customer behavior across platforms, creating a more unified and streamlined shopping experience. This approach leads to higher customer retention, improved sales, and the ability to capitalize on trends and behaviors that emerge across different platforms.",
      },
      {
        id: "section-7",
        title: "One-Click Checkout",
        para: "Simplify the purchasing process to increase conversions. One-click checkout allows customers to complete their purchases in a single step, eliminating the need to manually enter payment information, shipping addresses, or payment details each time they make a purchase. By securely storing customer data, businesses can offer a faster and more convenient checkout process, reducing friction and encouraging customers to make quicker decisions. ",
        para2:
          "The convenience of one-click checkout has been proven to increase conversion rates by reducing cart abandonment, especially in mobile shopping scenarios where users often abandon purchases due to lengthy checkout processes. Additionally, offering a seamless and fast payment experience can enhance customer satisfaction, foster repeat purchases, and build long-term loyalty, as customers are more likely to return to sites where they can make quick and easy transactions.",
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
    <section className="ecommerce-details-page magento-dev-details py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center heading-main mb-4">
            <h2>
              Latest Trends in <span>eCommerce Website Development</span>
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

export default DevEcomDetails;
