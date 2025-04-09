"use client";
import React, { useEffect, useState, useMemo } from "react";

const DevWoComDetails = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = useMemo(
    () => [
      {
        id: "section-1",
        title: "Mobile-First Design",
        para: "Mobile-first design is no longer optional- it's a must. With the majority of users browsing and shopping on mobile devices, creating a mobile-optimized WooCommerce store ensures that your customers have a smooth, engaging experience on smartphones and tablets. This trend emphasizes responsive design that adjusts layouts and images to fit various screen sizes while reducing loading times and enhancing performance.",
        para2:
          "Mobile-first also prioritizes easy navigation, streamlined checkout processes, and mobile-friendly features such as click-to-call buttons and geolocation-based offers, ultimately improving conversion rates and customer satisfaction.",
      },
      {
        id: "section-2",
        title: "Progressive Web Apps (PWA) Integration",
        para: "Progressive Web Apps (PWAs) combine the best of web and mobile apps, providing a fast, app-like experience directly from a browser. PWAs are becoming a major trend in WooCommerce development because they offer several advantages over traditional mobile apps. They load quickly, even in low-connectivity environments, and can work offline, allowing customers to browse products, make purchases, and complete transactions without interruption.",
        para2:
          "PWAs also offer push notifications, which help re-engage users with personalized updates, promotions, or abandoned cart reminders. Integrating a PWA into your WooCommerce store enhances user experience and improves retention without the expense of developing and maintaining a separate mobile app.",
      },
      {
        id: "section-3",
        title: "AI and Chatbot Integration",
        para: "Artificial Intelligence (AI) and chatbots are revolutionizing how businesses interact with customers online. WooCommerce stores that integrate AI-driven chatbots can offer instant, 24/7 customer support, providing users with immediate responses to questions, assisting in product selection, and guiding them through the purchasing process. Chatbots are also capable of learning from past interactions to offer more personalized recommendations, mimicking the experience of shopping with a knowledgeable sales associate.",
        para2:
          "The ability to handle routine queries, collect feedback, and provide personalized product suggestions improves customer satisfaction and drives more sales while reducing the strain on human resources.",
      },
      {
        id: "section-4",
        title: "Voice Search Optimization",
        para: "With the rise of voice-activated assistants like Amazon’s Alexa, Google Assistant, and Apple’s Siri, voice search has become an essential trend in WooCommerce development. Optimizing your store for voice search requires a shift toward natural language processing and conversational keywords. Customers now use voice search to ask questions in full sentences, making it important to focus on long-tail keywords and structured data. By optimizing product descriptions, titles, and metadata to reflect common voice queries, you can ensure that your store appears in relevant voice searches. ",
        para2:
          "Voice-optimized WooCommerce stores improve accessibility and provide customers with an intuitive and convenient shopping experience, driving higher traffic and conversions.",
      },
      {
        id: "section-5",
        title: "Augmented Reality (AR) for Product Visualization",
        para: "Augmented Reality (AR) is transforming the way customers shop online by allowing them to visualize products in real time through their device’s camera. This is especially useful for industries like fashion, home decor, and furniture, where seeing how a product will look in context is key to the purchasing decision. WooCommerce integration of AR lets customers virtually try on clothes, see how furniture fits in their homes, or explore product features in 3D. ",
        para2:
          "The immersive experience increases customer confidence, reduces hesitation, and minimizes returns by giving them a better sense of how products will look or fit in their environment. Implementing AR can set your store apart by providing a cutting-edge shopping experience that resonates with tech-savvy consumers.",
      },
      {
        id: "section-6",
        title: "Subscription Models & Memberships",
        para: "Subscription services and membership programs are becoming increasingly popular in WooCommerce stores, as they provide businesses with steady, predictable income streams. Whether it’s a monthly subscription box, access to exclusive content, or regular product deliveries, subscription-based models create an ongoing relationship with customers. WooCommerce can be customized to offer subscription products, automatic billing, discount tiers, and customized member-only offers. ",
        para2:
          "For businesses, this model increases customer retention, boosts lifetime value, and enhances loyalty. Additionally, customers enjoy the convenience of having products delivered regularly and can benefit from exclusive content or early access to new products.",
      },
      {
        id: "section-7",
        title: "Advanced Personalization & AI-Driven Recommendations",
        para: "Personalization continues to be a major trend as businesses aim to provide customers with more tailored shopping experiences. With AI-driven recommendation engines, WooCommerce stores can dynamically suggest products based on browsing history, past purchases, demographic data, and real-time behavior. This personalized approach helps increase engagement, as customers feel that their needs and preferences are being directly addressed. Additionally, personalized product recommendations help boost average order value (AOV) by introducing customers to products they may not have found on their own, ultimately improving conversions. ",
        para2:
          "Using advanced analytics, WooCommerce stores can offer targeted promotions, email campaigns, and loyalty rewards that further enhance the shopping experience and build customer loyalty.",
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
        const buffer = window.innerHeight * 0.3;

        for (const { id } of sections) {
          const section = document.getElementById(id);
          if (section) {
            const rect = section.getBoundingClientRect();

            if (rect.top <= buffer && rect.bottom >= buffer) {
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
    <section className="magento-dev-details woocomerce-deatiling py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center heading-main mb-4">
            <h2>
              Latest Trends in <span>WooCommerce Development</span>
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

export default DevWoComDetails;
