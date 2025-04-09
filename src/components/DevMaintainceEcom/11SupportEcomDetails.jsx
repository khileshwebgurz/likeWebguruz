"use client";
import React, { useEffect, useState, useMemo } from "react";

const SupportEcomDetails = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = useMemo(
    () => [
      {
        id: "section-1",
        title: "AI-Powered Monitoring",
        para: "AI-powered tools are transforming eCommerce website maintenance by automating critical processes such as performance monitoring and issue detection. These intelligent systems can analyze vast amounts of data in real time, identifying potential problems before they escalate. For instance, AI can detect unusual traffic spikes that may indicate security threats or predict server overloads during peak shopping times. ",
        para2:
          "With machine learning capabilities, these tools continue to improve, adapting to the unique needs of your eCommerce platform. By leveraging AI-powered monitoring, businesses can significantly reduce downtime, enhance user experience, and maintain a competitive edge in the fast-paced digital marketplace.",
      },
      {
        id: "section-2",
        title: "Proactive Issue Resolution with Predictive Analytics",
        para: "Predictive analytics is becoming a game-changer in eCommerce maintenance by enabling businesses to resolve issues proactively. By analyzing historical data and user behavior patterns, predictive tools can forecast potential system failures, performance bottlenecks, or customer dissatisfaction points. For example, they can identify trends that signal an impending server crash or predict which plugins may cause compatibility issues after an update. ",
        para2:
          "This allows businesses to take corrective actions in advance, minimizing disruptions and improving operational efficiency. Proactive issue resolution not only ensures a seamless shopping experience for customers but also reduces the long-term costs associated with reactive troubleshooting.",
      },
      {
        id: "section-3",
        title: "Advanced Cybersecurity Measures",
        para: "Cybersecurity continues to be a top priority for eCommerce businesses, and advanced measures are now being adopted to stay ahead of evolving threats. Tools like real-time threat detection, multi-factor authentication, and blockchain-based security protocols are gaining traction. Additionally, businesses are focusing on GDPR and CCPA compliance to ensure data privacy. AI-driven cybersecurity solutions are also being employed to identify and neutralize malicious activities automatically.",
        para2:
          "With cyberattacks becoming more sophisticated, these advanced measures are essential to protect sensitive customer information and maintain trust.",
      },
      {
        id: "section-4",
        title: "Enhanced Mobile Optimization",
        para: "As mobile shopping dominates the eCommerce landscape, optimizing websites for mobile devices is more critical than ever. The latest trends include progressive web apps (PWAs) that combine the best features of websites and mobile apps, ensuring fast load times and offline functionality. Additionally, businesses are implementing mobile-first designs with intuitive navigation, simplified checkout processes, and touch-friendly interfaces.",
        para2:
          "Enhanced mobile optimization ensures that customers enjoy a seamless shopping experience, regardless of the device they use, which can significantly boost conversions and customer loyalty.",
      },
      {
        id: "section-5",
        title: "Voice Commerce Integration",
        para: "Voice commerce is rapidly gaining popularity as smart speakers and voice assistants like Alexa and Google Assistant become household staples. eCommerce businesses are now integrating voice search capabilities and optimizing content to be voice-friendly. Features like voice-enabled product search, personalized recommendations, and voice-activated purchases are becoming more common.",
        para2:
          "This trend not only improves accessibility but also caters to the growing demand for convenience, making it a key differentiator for businesses looking to stay ahead in the market.",
      },
      {
        id: "section-6",
        title: "Green Hosting Initiatives",
        para: "Sustainability is becoming a significant focus in eCommerce, with businesses adopting green hosting solutions to minimize their environmental impact. Green hosting uses renewable energy sources and energy-efficient servers to reduce carbon footprints. Additionally, some hosting providers now plant trees or offset emissions as part of their services.",
        para2:
          "Beyond being eco-friendly, this trend resonates with environmentally conscious customers, enhancing brand reputation and loyalty. Green hosting initiatives align with broader corporate social responsibility goals, making them a win-win for businesses and the planet.",
      },
      {
        id: "section-7",
        title: "Omnichannel Customer Support Enhancements",
        para: "Customers now expect seamless support across all channels, including email, chat, social media, and phone. Omnichannel customer support strategies are evolving to provide unified and consistent experiences. Businesses are incorporating AI-powered chatbots, real-time messaging apps, and integration with CRM tools to streamline support.",
        para2:
          "Personalization is another key focus, with support teams leveraging customer data to offer tailored solutions. Enhanced omnichannel support ensures faster issue resolution and improved customer satisfaction, ultimately fostering stronger relationships and boosting retention rates.",
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
    <section className="magento-dev-details ecom-support-detail py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center heading-main mb-4">
            <h2>
              Latest Trends in <br />
              <span> eCommerce Website Support and Maintenance</span>
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

export default SupportEcomDetails;
