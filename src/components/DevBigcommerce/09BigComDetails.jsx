"use client";
import React, { useEffect, useState, useMemo } from "react";

const BigComDetails = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = useMemo(
    () => [
      {
        id: "section-1",
        title: "AI-Powered Personalization",
        para: `
        <p>Artificial Intelligence (AI) is revolutionizing how eCommerce businesses interact with customers. BigCommerce now integrates AI-driven tools that analyze user behavior, past purchases, and browsing habits to deliver personalized product recommendations, dynamic pricing, and tailored marketing messages.</p>
        <p>AI-powered personalization helps retailers:</p>
       <ul>
  <li>Show relevant products to customers based on their interests and past actions.</li>
  <li>Optimize email campaigns by predicting what a user is most likely to buy next.</li>
  <li>Implement AI-driven chatbots for real-time customer support and product suggestions.</li>
  <li>Enhance the checkout experience by offering preferred payment methods and personalized discounts.</li>
</ul>
        <p>By leveraging AI, BigCommerce merchants can boost customer engagement, increase conversions, and improve retention rates, making shopping more intuitive and rewarding.</p>
      `,
      },
      {
        id: "section-2",
        title: "Voice Commerce Optimization",
        para: `
        <p>With the increasing popularity of voice assistants like Amazon Alexa, Google Assistant, and Apple Siri, voice commerce is rapidly becoming a key trend in eCommerce. BigCommerce merchants are optimizing their stores to cater to customers who prefer shopping through voice commands.</p>
        <p>Key voice commerce optimizations include:</p>
        <ul>
  <li>Implementing natural language processing (NLP) to understand spoken queries.</li>
  <li>Structuring product descriptions with conversational and voice-friendly keywords.</li>
  <li>Enhancing voice search SEO by using long-tail keywords and question-based search terms.</li>
  <li>Creating voice-enabled shopping experiences for hands-free navigation and purchasing.</li>
</ul>
        <p>As consumers become more comfortable using voice search, BigCommerce stores that optimize for voice commerce will gain a significant competitive advantage, ensuring a frictionless and convenient shopping experience.</p>
      `,
      },
      {
        id: "section-3",
        title: "Headless Commerce Adoption",
        para: `
        <p>Headless commerce is a game-changer in eCommerce development, offering businesses unmatched flexibility by decoupling the front-end (user interface) from the back-end (eCommerce functionalities). With BigCommerce’s headless commerce capabilities, businesses can create custom storefronts that align with their unique branding and user experience goals.</p>
        <p>Benefits of headless commerce in BigCommerce include:</p>
       <ul>
  <li>Seamlessly integrating with CMS platforms like WordPress, Drupal, and React-based front-ends.</li>
  <li>Faster page load speeds and improved performance due to lightweight front-end architectures.</li>
  <li>Customizing user experiences without limitations imposed by traditional themes.</li>
  <li>Enabling omnichannel selling by using the same back-end for multiple digital touchpoints (web, mobile apps, kiosks, IoT devices).</li>
</ul>
        <p>More businesses are adopting headless BigCommerce solutions to stand out in the competitive eCommerce market, offering high-performance, immersive, and customized online shopping experiences.</p>
      `,
      },
      {
        id: "section-4",
        title: "Augmented Reality (AR) Shopping",
        para: `
        <p>One of the biggest challenges in online shopping is the inability to physically see, touch, or try products before purchasing. Augmented Reality (AR) technology is changing this by allowing customers to visualize products in real-world settings before making a purchase decision.</p>
        <p>BigCommerce now supports AR integrations that enable:</p>
       <ul>
  <li>Virtual try-ons for fashion and beauty products.</li>
  <li>3D previews of furniture, electronics, and home decor items in real spaces.</li>
  <li>Interactive product demonstrations that enhance customer confidence and reduce return rates.</li>
</ul>
        <p>Retailers using AR-powered BigCommerce stores report higher conversion rates, increased customer engagement, and lower product return rates, as buyers can make more informed purchasing decisions.</p>
      `,
      },
      {
        id: "section-5",
        title: "Multi-Channel Selling",
        para: `
        <p>Consumers today shop across multiple platforms, from marketplaces like Amazon and eBay to social media platforms like Facebook, Instagram, TikTok, and Pinterest. BigCommerce’s multi-channel selling capabilities allow businesses to seamlessly integrate their store with multiple platforms, ensuring their products are available where customers are already shopping.</p>
        <p>With BigCommerce’s built-in multi-channel selling features, you can:</p>
        <ul>
  <li>List and manage products on Amazon, eBay, and Walmart from a single dashboard.</li>
  <li>Sync inventory across different channels to avoid overselling or stock shortages.</li>
  <li>Run social commerce campaigns and enable direct checkout on Facebook and Instagram.</li>
  <li>Gain insights into customer behavior across multiple platforms for better marketing strategies.</li>
</ul>
        <p>By leveraging multi-channel eCommerce, businesses can reach more customers, increase brand visibility, and drive higher sales across different digital touchpoints.</p>
      `,
      },
      {
        id: "section-6",
        title: "Subscription-Based eCommerce Models",
        para: `
        <p>Subscription-based shopping has become a preferred model for many consumers, offering convenience and cost savings while ensuring businesses maintain steady, predictable revenue. BigCommerce supports subscription-based eCommerce, allowing businesses to create flexible, recurring payment plans for their customers.</p>
        <p>Common use cases include:</p>
        <ul>
  <li>Subscription boxes for beauty, health, and gourmet products.</li>
  <li>Auto-renewing memberships for exclusive discounts, premium content, or VIP perks.</li>
  <li>Recurring billing for digital services, SaaS products, or online courses.</li>
  <li>Automated replenishment programs for essential goods like pet food, supplements, and groceries.</li>
</ul>
        <p>By integrating subscription-based business models into their BigCommerce stores, brands can increase customer lifetime value, improve retention rates, and generate predictable revenue streams.</p>
      `,
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
    <section className="magento-dev-details bigcommerce-details py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center heading-main mb-4">
            <h2>
            Trends & Recent Developments in {" "}
              <span> BigCommerce Development</span>
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
                  <div dangerouslySetInnerHTML={{ __html: para }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigComDetails;
