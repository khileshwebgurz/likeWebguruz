"use client";
import React, { useEffect, useState, useMemo } from "react";

const WordpressDetails = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = useMemo(
    () => [
      {
        id: "section-1",
        title: "Headless WordPress",
        para: `
        <p>Businesses demand greater flexibility, speed, and scalability in their websites and applications. Headless WordPress is a revolutionary approach that separates the frontend (website interface) from the backend (WordPress CMS), enabling developers to use modern JavaScript frameworks like React, Angular, and Vue.js while still leveraging WordPress for content management.</p>
        <p>By adopting a headless architecture, businesses can create highly customized, fast-loading, and dynamic web experiences across multiple platforms, including mobile apps, smart devices, and even IoT-based applications. The REST API and GraphQL integrations ensure seamless data exchange, allowing content to be delivered dynamically to different digital touchpoints.</p>
        <p>Headless WordPress is particularly advantageous for enterprises and developers who require:</p>
        <ul>
          <li>Lightning-fast performance with streamlined front-end rendering.</li>
          <li>Seamless omnichannel content distribution across websites, apps, and smart devices.</li>
          <li>Greater design flexibility with cutting-edge frameworks.</li>
          <li>Enhanced security as the backend remains separate from the user-facing frontend.</li>
          <li>Scalability to handle high-traffic loads without compromising performance.</li>
        </ul>
        <p>With Headless WordPress, businesses can future-proof their websites, ensuring they remain agile, adaptable, and optimized for next-generation web technologies.</p>
      `,
      },
      {
        id: "section-2",
        title: "AI-Powered Chatbots",
        para: `
        <p>The rise of artificial intelligence (AI) and machine learning (ML) has revolutionized customer service, enabling businesses to provide instant, 24/7 assistance through AI-powered chatbots. These smart virtual assistants automate conversations, answer queries, guide users, and enhance engagement without human intervention.</p>
        <p>By integrating AI-powered chatbots into WordPress websites, businesses can:</p>
        <ul>
          <li>Provide round-the-clock customer support, reducing response times and increasing efficiency.</li>
          <li>Automate lead generation and sales by guiding users through the conversion funnel.</li>
          <li>Offer personalized user experiences based on past interactions and behavioral data.</li>
          <li>Handle multilingual communication, expanding reach to a global audience.</li>
          <li>Reduce operational costs, minimizing the need for large customer support teams.</li>
        </ul>
        <p>With advancements in Natural Language Processing (NLP) and sentiment analysis, modern chatbots can understand human emotions, detect user intent, and provide accurate responses in real-time. Businesses that implement AI chatbots streamline their operations, improve user engagement, and boost customer satisfaction, leading to higher retention rates and increased conversions.</p>
      `,
      },
      {
        id: "section-3",
        title: "Voice Search Optimization",
        para: `
        <p>As smart assistants like Google Assistant, Amazon Alexa, and Apple Siri continue to gain popularity, voice search is rapidly transforming the way users interact with search engines. Instead of typing keywords, users now speak their queries, making it crucial for businesses to optimize their websites for voice-based search.</p>
        <p>To ensure your WordPress website ranks higher in voice search results, implementing the following strategies is essential:</p>
        <ul>
          <li>Use conversational and long-tail keywords that match natural speech patterns.</li>
          <li>Optimize content for featured snippets, as search engines prioritize quick answers.</li>
          <li>Improve page speed and mobile responsiveness for instant voice search results.</li>
          <li>Implement structured data markup (Schema.org) to help search engines understand content better.</li>
          <li>Enhance local SEO efforts, as a majority of voice searches are location-based.</li>
        </ul>
        <p>Voice search optimization is not just a trend; it’s a necessity for businesses looking to increase visibility, improve search rankings, and capture a broader audience in the digital age. By adopting voice-friendly SEO practices, businesses can stay ahead of competitors and enhance accessibility for users across multiple devices.</p>
      `,
      },
      {
        id: "section-4",
        title: "Progressive Web Apps (PWAs)",
        para: `
        <p>Progressive Web Apps (PWAs) offer the perfect blend of web and mobile app experiences, allowing users to access fast, secure, and offline-capable websites without the need to install a separate mobile application. PWAs leverage technologies like service workers, web app manifests, and push notifications to deliver an engaging and app-like experience on any device.</p>
        <p>By implementing PWAs on WordPress websites, businesses can benefit from:</p>
        <ul>
          <li>Faster loading times, reduced bounce rates, and improved user retention.</li>
          <li>Offline functionality, allowing users to browse even without an internet connection.</li>
          <li>Push notifications, keeping users engaged and informed with real-time updates.</li>
          <li>Lower development costs, as PWAs eliminate the need for separate native apps.</li>
          <li>SEO benefits, since PWAs are indexed by search engines and enhance discoverability.</li>
        </ul>
        <p>PWAs are ideal for eCommerce platforms, content-heavy websites, and service-based businesses looking to boost engagement, drive conversions, and improve customer retention. As more businesses shift towards mobile-first experiences, PWAs provide an innovative and cost-effective solution for delivering high-quality user experiences across all devices.</p>
      `,
      },
      {
        id: "section-5",
        title: "Enhanced Security Features",
        para: `
        <p>With the increasing prevalence of cyberattacks, data breaches, and malicious hacking attempts, website security has become a top priority for businesses operating online. WordPress websites, being widely used, are often targeted by brute force attacks, SQL injections, malware infections, and phishing scams.</p>
        <p>To strengthen website security, businesses should implement the following advanced security measures:</p>
        <ul>
          <li>SSL encryption and HTTPS protocol to protect user data and build trust.</li>
          <li>Multi-factor authentication (MFA) to prevent unauthorized access.</li>
          <li>Regular security audits and vulnerability scanning to identify potential threats.</li>
          <li>Automatic updates for WordPress core, themes, and plugins to patch security flaws.</li>
          <li>AI-driven threat detection to identify and neutralize attacks in real-time.</li>
        </ul>
        <p>By prioritizing WordPress security, businesses protect sensitive data, maintain customer trust, and prevent financial and reputational damage. A secure website not only enhances user confidence but also improves SEO rankings, as search engines favor sites with strong security protocols.</p>
      `,
      },
      {
        id: "section-6",
        title: "Blockchain Integration",
        para: `
        <p>Blockchain technology is making its way into WordPress, bringing unmatched security, transparency, and decentralization to digital transactions, content management, and data storage. By leveraging smart contracts and decentralized ledger systems, businesses can eliminate fraud, improve data integrity, and enhance user trust.</p>
        <p>Key benefits of integrating blockchain into WordPress include:</p>
        <ul>
          <li>Tamper-proof content verification, preventing unauthorized modifications.</li>
          <li>Cryptocurrency payments, enabling secure transactions for eCommerce websites.</li>
          <li>Decentralized authentication, eliminating password-based vulnerabilities.</li>
          <li>Transparent supply chain tracking, ideal for logistics and eCommerce industries.</li>
          <li>NFT integration for digital assets, empowering artists and content creators.</li>
        </ul>
        <p>With blockchain-powered WordPress solutions, businesses can create highly secure, transparent, and decentralized platforms, ensuring greater trust, efficiency, and innovation in the digital world.</p>
      `,
      },
      {
        id: "section-7",
        title: "Minimalist & Fast Loading Themes",
        para: `
        <p>Website speed and design play a crucial role in user engagement, SEO rankings, and overall performance. Minimalist WordPress themes focus on clean designs, lightweight code, and faster load times, ensuring a seamless and distraction-free browsing experience.</p>
        <p>Key advantages of fast-loading and minimalist WordPress themes include:</p>
        <ul>
          <li>Improved Core Web Vitals scores, leading to better search engine rankings.</li>
          <li>Reduced bounce rates, as users stay longer on faster websites.</li>
          <li>Optimized mobile performance, ensuring seamless experiences across devices.</li>
          <li>Simplified navigation, enhancing user engagement and conversions.</li>
          <li>Better compatibility with caching and CDN technologies for faster delivery.</li>
        </ul>
        <p>Minimalist themes are perfect for corporate websites, personal blogs, portfolios, and online stores that prioritize speed, readability, and effortless usability. By using optimized, well-coded, and lightweight WordPress themes, businesses can create visually appealing yet high-performance websites that drive engagement, conversions, and SEO success.</p>
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
    <section className="magento-dev-details wordpress-details py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center heading-main mb-4">
            <h2>
              Trends and Recent Developments in{" "}
              <span> WordPress Development</span>
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

export default WordpressDetails;
