"use client";
import React, { useEffect, useState,useMemo } from "react";

const DruaplDetails = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = useMemo(
    () => [
      {
        id: "section-1",
        title: "Drupal 10 Features & Enhancements",
        para: "Drupal 10 introduces significant improvements, making it more user-friendly, secure, and performance-driven. The new Claro admin theme offers an intuitive, modern UI, enhancing the user experience for content editors and administrators. Security has been further strengthened with automatic updates, Symfony 6 integration, and better dependency management, ensuring a more stable and secure environment. ",
        para2:
          "Performance enhancements, including optimized caching mechanisms and JavaScript modernization, contribute to faster page loading and smoother website interactions. With a cleaner codebase and improved front-end tools like Olivero, Drupal 10 delivers a seamless experience for both developers and end-users.",
      },
      {
        id: "section-2",
        title: "Headless Drupal & Decoupled CMS",
        para: "Headless Drupal, also known as Decoupled Drupal, enables businesses to use Drupal’s powerful backend while delivering content through modern front-end frameworks like React, Vue.js, and Angular. This approach separates content management from content presentation, allowing greater flexibility in designing highly dynamic and interactive user experiences. ",
        para2:
          "Decoupled architecture enhances site speed, improves scalability, and supports omnichannel content delivery across web applications, mobile apps, and IoT devices. By leveraging RESTful APIs, GraphQL, and JSON:API, Drupal ensures seamless data exchange between the back-end and various front-end frameworks, providing a future-proof digital solution.",
      },
      {
        id: "section-3",
        title: "AI & Machine Learning",
        para: "Integrating AI and machine learning into Drupal allows businesses to enhance user engagement through intelligent content recommendations, predictive analytics, and automated workflows. AI-powered chatbots and virtual assistants improve customer support, while machine learning algorithms analyze user behavior to deliver personalized content experiences.",
        para2:
          "Drupal integrates with AI tools like Acquia Lift, IBM Watson, and Google AI to provide sentiment analysis, auto-tagging, and smart search capabilities. These features help businesses create dynamic, data-driven websites that adapt to user preferences, increasing conversions and customer retention.",
      },
      {
        id: "section-4",
        title: "Voice Search Optimization",
        para: "With the growing popularity of voice search and smart assistants like Alexa, Siri, and Google Assistant, optimizing Drupal websites for voice search has become essential. Voice search requires structured data, natural language processing (NLP), and schema markup to ensure content is easily discoverable by search engines. Drupal supports voice search optimization through schema.org integrations, mobile-first indexing, and AI-driven search enhancements. ",
        para2:
          "Businesses can improve their SEO rankings and enhance user experience by implementing conversational content, featured snippets, and voice-friendly navigation, making their websites more accessible and engaging.",
      },
      {
        id: "section-5",
        title: "Cloud Hosting & Scalability",
        para: "Drupal’s cloud hosting capabilities provide businesses with enhanced scalability, flexibility, and security. Integration with leading cloud platforms such as AWS, Microsoft Azure, and Google Cloud allows websites to handle high traffic loads, maintain uptime, and optimize resource utilization. Cloud hosting solutions offer automatic scaling, load balancing, and robust security measures like DDoS protection and encryption.",
        para2:
          "Drupal also supports containerization with Docker and Kubernetes, ensuring seamless deployment across different environments. Whether hosting a small business website or an enterprise-level application, cloud-based Drupal hosting ensures consistent performance and reliability.",
      },
      {
        id: "section-6",
        title: "Blockchain & Security",
        para: "Blockchain technology is revolutionizing website security and data integrity, and Drupal can leverage it to provide tamper-proof transactions and decentralized authentication. By integrating blockchain with Drupal, businesses can ensure secure digital identities, prevent data breaches, and enable transparent record-keeping.",
        para2:
          "Blockchain-powered smart contracts can be used for secure eCommerce transactions, while decentralized content verification helps combat misinformation. Drupal’s flexible architecture allows seamless integration with blockchain APIs, making it an ideal choice for industries requiring high levels of security, such as finance, healthcare, and legal services.",
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
    <section className="magento-dev-details druapl-dev-details py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center heading-main mb-4">
            <h2>
            Latest Trends in <span> Drupal Development</span>
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

export default DruaplDetails;
