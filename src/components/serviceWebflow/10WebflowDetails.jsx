"use client";
import React, { useEffect, useState, useMemo } from "react";

const WebflowDetails = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = useMemo(
    () => [
      {
        id: "section-1",
        title: "AI-Powered Web Design",
        para: `
        <p>Artificial Intelligence (AI) is revolutionizing web design, and Webflow is embracing AI-driven automation to make the design process more intuitive and efficient. With AI-powered features, designers can now receive smart layout suggestions, automated element adjustments, and optimized color palettes based on industry trends and user preferences. </p>
        <p>AI also helps in generating website mockups quickly, reducing the time required for manual design iterations. Additionally, AI-driven analytics in Webflow can assess user behavior in real-time, making automatic recommendations to enhance website performance. This includes optimizing loading speeds, adjusting element placements for better engagement, and providing insights into content effectiveness. As AI tools become more sophisticated, Webflow is expected to integrate deeper automation capabilities, making web design smarter and more data-driven than ever.</p>      `,
      },
      {
        id: "section-2",
        title: "No-Code App Development",
        para: `
        <p>Webflow is no longer just a website builder- it has evolved into a powerful platform for creating fully functional web applications without needing extensive coding knowledge. By integrating with third-party tools like Memberstack, Zapier, Airtable, and Jetboost, businesses can now develop membership portals, e-commerce applications, interactive dashboards, and more—all within Webflow’s no-code framework.</p>
        <p>For instance, Memberstack enables businesses to create gated content and user authentication systems, allowing for the development of subscription-based applications. Zapier facilitates automation between Webflow and other apps, enabling real-time data updates and interactions. Webflow Logic, the platform’s built-in workflow automation tool, further simplifies complex business processes, reducing the need for external plugins.</p>
       
        <p>This no-code approach is particularly beneficial for startups and entrepreneurs who want to launch web applications quickly without investing heavily in traditional development teams. It allows for faster prototyping, iterative testing, and seamless scalability as business needs grow.</p>
      `,
      },
      {
        id: "section-3",
        title: "Advanced Interactions & Animations",
        para: `
        <p>Modern web users expect interactive and engaging experiences, and Webflow’s advanced animation and interaction capabilities make this easier than ever. With Webflow’s built-in animation tools, businesses can create visually compelling experiences without needing custom JavaScript or complex code.</p>
        <p>Some of the most popular interactive features in Webflow include:</p>
        <ul>
  <li><strong>Parallax scrolling</strong> – Elements move at different speeds as users scroll, creating depth and engagement.</li>
  <li><strong>Hover effects</strong> – Buttons, images, and text elements change appearance when hovered over, adding a dynamic touch.</li>
  <li><strong>Lottie animations</strong> – Businesses can integrate lightweight, high-quality animations that load quickly and improve UX.</li>
  <li><strong>Multi-step interactions</strong> – Complex animations and transitions can be easily applied to different sections of a website.</li>
</ul>
        <p>With Webflow’s intuitive interface, designers can fine-tune motion effects and interactions with pixel-perfect precision, ensuring a smooth and immersive user experience. This is especially valuable for creative agencies, SaaS companies, and e-commerce businesses that want to stand out with visually stunning web designs.</p>
      `,
      },
      {
        id: "section-4",
        title: "Headless CMS Integrations",
        para: `
        <p>Headless CMS architecture is gaining popularity as businesses require more flexibility in managing content across multiple digital channels. Webflow now integrates seamlessly with popular headless CMS platforms like Contentful, Sanity, Strapi, and Prismic, allowing businesses to separate content management from front-end presentation.</p>
        <p>With a headless CMS, businesses can:</p>
       <ul>
  <li>Distribute content across various platforms (websites, mobile apps, IoT devices) without needing separate content updates.</li>
  <li>Improve site performance by reducing dependencies on monolithic CMS systems.</li>
  <li>Enable cross-team collaboration by allowing developers to work on the back-end while designers focus on the front-end in Webflow.</li>
</ul>
        <p>This integration is particularly beneficial for large-scale enterprises that need a scalable, API-driven approach to content management. It also simplifies website updates, as businesses can make changes in their CMS while Webflow automatically reflects those updates without requiring manual edits.</p>
      `,
      },
      {
        id: "section-5",
        title: "Webflow for Enterprise Solutions",
        para: `
        <p>Webflow has traditionally been associated with startups and small businesses, but it is now being widely adopted by enterprises looking for scalable, high-performance, and low-maintenance web solutions. With the launch of Webflow Enterprise, the platform offers tailored solutions for large organizations, including:</p>
        <ul>
  <li>Custom Service-Level Agreements (SLAs) for guaranteed uptime and performance.</li>
  <li>Dedicated account managers for enterprise-level support and consultation.</li>
  <li>SSO (Single Sign-On) integration for enhanced security and employee access control.</li>
  <li>Advanced security features, including custom permissions and SOC 2 compliance.</li>
</ul>
        <p>Enterprises are choosing Webflow because it allows their marketing teams to make website updates and deploy new pages without relying on developers, reducing costs and increasing agility. Webflow’s ability to integrate with enterprise software like Salesforce, HubSpot, and Marketo also makes it a seamless solution for large-scale businesses with complex digital marketing needs.</p>
      `,
      },
      {
        id: "section-6",
        title: "Improved SEO Capabilities",
        para: `
        <p>SEO is a critical component of digital success, and Webflow continues to enhance its SEO capabilities to help businesses rank higher in search results. Recent updates in Webflow’s SEO toolkit include:</p>
    <ul>
  <li>Automatic sitemap generation to ensure all pages are indexed by search engines.</li>
  <li>Customizable URL structures for improved keyword targeting.</li>
  <li>Enhanced schema markup support to enable better rich results on Google.</li>
  <li>AI-driven content recommendations for optimizing meta descriptions and headings.</li>
  <li>Faster loading speeds to improve Core Web Vitals, a key ranking factor for Google.</li>
</ul>
        <p>Unlike traditional CMS platforms that require multiple plugins for SEO, Webflow offers a built-in, streamlined approach that allows businesses to optimize their websites without relying on third-party tools. This makes it easier for businesses to maintain SEO best practices and improve their search engine visibility.</p>
      `,
      },
      {
        id: "section-7",
        title: "Faster Hosting & Security Enhancements",
        para: `
        <p>Webflow’s cloud hosting infrastructure is becoming more robust, ensuring faster performance and stronger security for all hosted websites. Webflow’s hosting is powered by Amazon Web Services (AWS) and Fastly’s global Content Delivery Network (CDN), providing:</p>
        <ul>
  <li>99.99% uptime for high-reliability performance.</li>
  <li>Global CDN optimization to deliver content faster across different regions.</li>
  <li>Automatic SSL encryption for data security and user trust.</li>
  <li>DDoS protection and firewall security to prevent cyber threats.</li>
  <li>Daily automated backups to restore website data in case of an issue.</li>
</ul>
        <p>These advancements mean that businesses no longer need to worry about third-party hosting providers, server management, or security vulnerabilities- Webflow takes care of it all. This is especially beneficial for companies with high-traffic websites, e-commerce platforms, and SaaS applications that require maximum uptime and security.</p>
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
    <section className="magento-dev-details webflow-details py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center heading-main mb-4">
            <h2>
              Trends and Recent Developments in{" "}
              <span> WebFlow Development</span>
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

export default WebflowDetails;
