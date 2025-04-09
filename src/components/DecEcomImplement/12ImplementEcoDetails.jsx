"use client";
import React, { useEffect, useState, useMemo } from "react";

const ImplementEcoDtails = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = useMemo(
    () => [
      {
        id: "section-1",
        title: "AI Integration",
        para: "Artificial intelligence (AI) is revolutionizing eCommerce by creating personalized customer experiences and streamlining operations. By leveraging AI, businesses can analyze vast amounts of customer data to predict buying patterns, recommend products, and customize interactions. AI-powered chatbots provide instant customer support, answering queries and resolving issues efficiently, even outside business hours. Automated workflows, powered by machine learning algorithms, optimize inventory management, pricing strategies, and supply chain logistics, reducing operational costs and improving accuracy. ",
        para2:
          "Moreover, AI helps identify fraudulent activities and strengthens security measures, ensuring a safe shopping environment. The integration of AI into your eCommerce platform enhances customer satisfaction and loyalty, while also driving higher conversion rates. ",
        para3:
          "As technology continues to evolve, AI's potential for innovation and efficiency remains limitless, making it an indispensable tool for businesses aiming to stay competitive in the digital marketplace.",
      },
      {
        id: "section-2",
        title: "Mobile-First Design",
        para: "With more than half of online shopping now happening on mobile devices, a mobile-first design approach is essential for eCommerce success. The mobile-first design prioritizes creating responsive, user-friendly websites that perform seamlessly across smartphones and tablets. This approach not only enhances the user experience but also improves search engine rankings, as search engines like Google prioritize mobile-optimized sites.",
        para2:
          "Features such as simplified navigation, touch-friendly interfaces, and fast-loading pages ensure that on-the-go customers can easily browse and complete purchases. The mobile-first design also integrates mobile-specific functionalities like click-to-call buttons, GPS-enabled store locators, and mobile payment options such as Apple Pay and Google Pay, further streamlining the shopping process.",
        para3:
          "By focusing on mobile-first design, businesses can capture the growing audience of mobile shoppers, boost engagement, and increase conversion rates. As mobile commerce continues to expand, a well-executed mobile-first strategy positions your business to thrive in this fast-paced, tech-savvy environment.",
      },
      {
        id: "section-3",
        title: "Voice Commerce",
        para: "Voice commerce is rapidly transforming the eCommerce landscape by offering customers a hands-free, seamless shopping experience. By integrating voice search capabilities and voice assistants like Amazon Alexa, Google Assistant, and Apple Siri, businesses can simplify the purchasing journey for their customers. Voice commerce enables users to search for products, check availability, place orders, and even track deliveries using simple voice commands. ",
        para2:
          "This convenience is particularly valuable for multitasking customers or those who prefer conversational interactions over traditional methods. Businesses adopting voice commerce benefit from increased accessibility and engagement, as this technology caters to diverse demographics, including those less familiar with traditional online shopping.",
        para3:
          "Additionally, voice commerce offers opportunities for personalized marketing by leveraging user preferences and previous interactions to make tailored recommendations. As voice technology becomes more sophisticated, incorporating it into your eCommerce platform ensures your business stays ahead of the curve and meets the evolving demands of tech-savvy consumers.",
      },
      {
        id: "section-4",
        title: "Augmented Reality (AR)",
        para: "Augmented Reality (AR) is redefining the online shopping experience by bridging the gap between physical and digital retail. With AR, customers can visualize products in real-time, allowing them to make more confident purchasing decisions. For example, furniture retailers use AR to let customers see how a sofa or table will look in their home, while fashion brands enable users to virtually try on clothing, accessories, or makeup.",
        para2:
          "This interactive experience significantly reduces the likelihood of returns, as customers gain a clearer understanding of the product before buying. AR also enhances customer engagement by making the shopping experience more immersive and enjoyable. Businesses integrating AR into their eCommerce strategy not only boost customer satisfaction but also differentiate themselves from competitors.",
        para3:
          "As AR technology continues to advance, its potential to transform the way consumers shop online becomes increasingly evident, making it an essential tool for innovative and customer-focused businesses.",
      },
      {
        id: "section-5",
        title: "Sustainability Focus",
        para: "As environmental consciousness grows, adopting sustainable practices in eCommerce is no longer optional- it’s a necessity. Businesses that prioritize eco-friendly operations and packaging appeal to environmentally aware consumers, building trust and loyalty. Sustainable initiatives include using recyclable or biodegradable packaging, optimizing supply chains to reduce carbon footprints, and sourcing products from ethical suppliers.",
        para2:
          "Offering digital receipts, encouraging bulk shipping to minimize packaging waste, and partnering with carbon offset programs are additional ways eCommerce businesses can embrace sustainability. These practices not only benefit the planet but also enhance brand reputation, as consumers increasingly support businesses that align with their values.",
        para3:
          "Moreover, governments and regulatory bodies are introducing stricter environmental standards, making sustainability a forward-thinking and practical investment. By focusing on sustainability, businesses can position themselves as leaders in responsible commerce, attracting like-minded customers and contributing to a healthier planet.",
      },
      {
        id: "section-6",
        title: "Social Commerce",
        para: "Social commerce allows businesses to sell products directly through social media platforms, engaging customers where they spend much of their time. Platforms like Instagram, Facebook, TikTok, and Pinterest offer built-in shopping features that enable users to discover, browse, and purchase products without leaving the app. ",
        para2:
          "Social commerce combines the convenience of online shopping with the interactive nature of social media, fostering brand loyalty and boosting sales. Influencer partnerships, user-generated content, and social ads further enhance visibility and credibility, driving traffic and conversions. Businesses can also leverage real-time feedback and analytics provided by these platforms to refine their strategies and cater to their audience’s preferences. ",
        para3:
          "As social media continues to dominate the digital landscape, adopting a robust social commerce strategy ensures your business remains accessible, relevant, and competitive in the evolving marketplace.",
      },
      {
        id: "section-7",
        title: "Subscription-Based Models",
        para: "Subscription-based eCommerce models are transforming customer retention by providing convenience and value through recurring billing and services. Whether it’s monthly deliveries of beauty products, meal kits, or streaming services, subscriptions offer customers a hassle-free experience with predictable costs.",
        para2:
          "For businesses, subscription models generate steady revenue streams and build long-term customer relationships. These models also provide opportunities to upsell or offer personalized recommendations based on subscriber preferences, further enhancing customer loyalty.",
        para3:
          "Additionally, the data collected from subscription services helps businesses gain valuable insights into customer behavior, enabling them to tailor offerings and marketing strategies effectively. With the rise of subscription box services and digital memberships, incorporating a subscription-based model into your eCommerce platform can set your business apart, offering customers both value and convenience while ensuring consistent growth for your brand.",
      },
    ],
    []
  );

  const handleScrollToSection = (id) => {
    setActiveSection(null);

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
    <section className="magento-dev-details implement-ecom-details py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center heading-main mb-4">
            <h2>
              Latest Trends in <span> eCommerce Implementation</span>
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
              {sections.map(({ id, title, para, para2,para3 }) => (
                <div key={id} id={id} className="tab-content">
                  <h4>{title}</h4>
                  <p>{para}</p>
                  <p>{para2}</p>
                  <p>{para3}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementEcoDtails;
