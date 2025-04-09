"use client";
import React, { useEffect, useState, useMemo } from "react";

const DesignEcomDetails = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = useMemo(
    () => [
      {
        id: "section-1",
        title: "AI-Powered Personalization",
        para: "AI-powered personalization transforms the eCommerce experience by delivering tailored content and product recommendations to users based on their behavior, preferences, and purchase history. This technology uses advanced algorithms to analyze data, including browsing habits, demographics, and past interactions, to predict what customers are likely to purchase next. By offering personalized shopping experiences, businesses can boost engagement, increase customer satisfaction, and drive higher conversion rates.",
        para2:
          "For instance, AI can display dynamic product suggestions, personalized discounts, or curated collections, ensuring each user feels uniquely catered to. Additionally, AI-powered chatbots enhance customer support by providing instant, relevant responses, making interactions more efficient.",
        para3:
          " Businesses that leverage AI personalization also gain valuable insights into customer trends, enabling them to refine marketing strategies and inventory management.",
        para4:
          "AI’s ability to continuously learn and adapt ensures that personalization remains effective as customer behaviors evolve. By integrating AI-powered personalization into your eCommerce platform, you not only improve user engagement but also foster customer loyalty, creating a significant competitive advantage in a crowded market.",
      },
      {
        id: "section-2",
        title: "Voice Search Optimization",
        para: "Voice search is revolutionizing how users interact with eCommerce platforms, offering a hands-free, conversational approach to finding products and information. As smart speakers and voice assistants like Alexa, Google Assistant, and Siri become more prevalent, optimizing your website for voice search is no longer optional- it's essential.",
        para2:
          "Voice search queries differ significantly from text searches, often being longer and more conversational. To accommodate this, businesses need to implement natural language processing (NLP) and optimize content for question-based searches. Features like voice-activated navigation and voice-friendly FAQs ensure a seamless user experience.",
        para3:
          "Additionally, focusing on local SEO and long-tail keywords improves your chances of appearing in voice search results. For example, phrases like “Where can I buy organic coffee near me?” are common voice queries that businesses can target to attract local customers. ",
        para4:
          "By embracing voice search optimization, you make your eCommerce platform more accessible and future-ready, catering to tech-savvy audiences and providing a smoother path to purchase.",
      },
      {
        id: "section-3",
        title: "AR Integration",
        para: "Augmented Reality (AR) is revolutionizing eCommerce by bridging the gap between physical and digital shopping experiences. AR allows customers to visualize products in their real-world environments before purchasing, reducing uncertainty and boosting confidence.",
        para2:
          "For example, a furniture store can enable users to place virtual chairs or tables in their living room to see how they fit with the existing decor. Similarly, fashion retailers can offer virtual try-ons for clothing, eyewear, or cosmetics, giving customers a more interactive and personalized shopping experience.",
        para3:
          "AR integration not only enhances the user experience but also reduces returns, as customers are more likely to be satisfied with their purchases. It also creates a unique selling point, differentiating your brand from competitors. ",
        para4:
          "With the growing accessibility of AR technology, incorporating it into your eCommerce platform can drive engagement and conversions, creating a memorable shopping journey.",
      },
      {
        id: "section-4",
        title: "Minimalist Design",
        para: "Minimalist design focuses on simplicity and clarity, emphasizing only the most essential elements of a website. By removing unnecessary clutter, minimalist eCommerce websites provide a clean, intuitive experience that directs users’ attention to key features such as product showcases, navigation menus, and call-to-action buttons.",
        para2:
          "This design approach enhances usability, as customers can easily find what they’re looking for without being overwhelmed by distractions. Ample white space, sharp typography, and high-quality visuals are hallmarks of minimalist design, creating an elegant and professional aesthetic that resonates with modern consumers.",
        para3:
          "Moreover, minimalist designs are faster to load, improving site performance and contributing to higher search engine rankings. They also adapt well to mobile-first designs, ensuring seamless functionality across all devices. ",
        para4:
          "A minimalist approach not only boosts user engagement but also reflects a brand’s sophistication and focus, helping build trust and credibility with the audience.",
      },
      {
        id: "section-5",
        title: "Micro-Animations",
        para: "Micro-animations are small, subtle movements or transitions on a website that guide user interactions and enhance visual appeal. These elements, though often understated, play a significant role in creating a dynamic and engaging browsing experience.",
        para2:
          "For instance, hover effects on buttons, subtle transitions when switching between tabs, or animated feedback during form submissions make interactions intuitive and rewarding. Micro-animations also help draw attention to specific elements, such as new products or promotional banners, subtly encouraging users to take action.",
        para3:
          "Beyond aesthetics, micro-animations provide functional value by improving usability. Animated progress bars or scroll indicators give users a sense of control, while visual cues during the checkout process reassure them about successful actions. ",
        para4:
          "When thoughtfully integrated, micro-animations enhance the user experience without overwhelming the design, creating a polished and memorable platform that encourages users to return.",
      },
      {
        id: "section-6",
        title: "Mobile-First Design",
        para: "A mobile-first design prioritizes the mobile user experience, ensuring that websites are optimized for smaller screens before adapting to larger ones. With the majority of eCommerce traffic coming from mobile devices, this approach is essential for meeting the expectations of today’s shoppers.",
        para2:
          "Mobile-first designs focus on responsive layouts, simplified navigation, and touch-friendly interfaces, making it easy for users to browse, search, and shop on their phones. Features like quick-loading pages, accessible menus, and mobile-friendly checkout processes ensure a seamless and enjoyable experience",
        para3:
          "Additionally, mobile-first designs often incorporate tools like click-to-call buttons, GPS-enabled store locators, and mobile payment options to cater to on-the-go users. Prioritizing mobile functionality not only enhances user satisfaction but also improves your site’s SEO, as search engines like Google favor mobile-optimized websites.",
        para4:
          " By adopting a mobile-first approach, businesses can tap into a broader audience, drive more conversions, and stay competitive in a mobile-driven market.",
      },
      {
        id: "section-7",
        title: "Dark Mode Aesthetics",
        para: "Dark mode aesthetics have gained popularity for their sleek, modern look and practical benefits. This design trend features light text and elements on a dark background, creating a visually striking contrast that enhances readability and reduces eye strain, especially in low-light conditions.",
        para2:
          "Dark mode designs are particularly appealing to younger, tech-savvy audiences, giving your website a contemporary, high-tech vibe. They also offer energy-saving benefits on OLED and AMOLED screens, making them eco-friendly and efficient.",
        para3:
          "In eCommerce, dark mode can highlight vibrant product images and promotional banners, making them stand out. It also creates a premium feel, ideal for luxury brands or tech-oriented businesses. However, implementing dark mode requires careful attention to contrast and accessibility to ensure all elements remain legible and functional.",
        para4:
          "By offering dark mode as an option or default design, businesses can cater to user preferences while enhancing the overall user experience, setting themselves apart in a competitive digital landscape.",
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
    <section className="magento-dev-details ecom-design-details py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center heading-main mb-4">
            <h2>
              Latest Trends in <span>eCommerce Web Design</span>
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
              {sections.map(({ id, title, para, para2,para3,para4 }) => (
                <div key={id} id={id} className="tab-content">
                  <h4>{title}</h4>
                  <p>{para}</p>
                  <p>{para2}</p>
                  <p>{para3}</p>
                  <p>{para4}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignEcomDetails;
