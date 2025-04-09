"use client";
import React, { useEffect, useState, useMemo } from "react";

const WixDetails = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = useMemo(
    () => [
      {
        id: "section-1",
        title: "AI-Powered Website Design",
        para: `
        <p>Wix has transformed website creation with its Artificial Design Intelligence (ADI), an advanced tool that simplifies the entire web development process. Unlike traditional website builders that require users to manually select templates, arrange elements, and input content, Wix ADI streamlines the experience by using artificial intelligence to automatically design a fully functional website.</p>
        <p>The process begins by asking the user a series of questions about their business type, goals, and aesthetic preferences. Based on the responses, Wix ADI analyzes millions of design possibilities and generates a personalized website with the ideal layout, color scheme, fonts, and even relevant images and text. Users can then make further customizations to fine-tune the design, ensuring the website aligns with their brand identity.</p>
        <p>One of the key advantages of Wix ADI is its ability to eliminate technical barriers, making website creation accessible even to those with no coding or design experience. By reducing the time and effort required to build a website, Wix ADI allows businesses, freelancers, and entrepreneurs to launch their online presence quickly while maintaining a professional and polished look.</p>
       
      `,
      },
      {
        id: "section-2",
        title: "Advanced SEO Features",
        para: `
        <p>Wix has taken significant steps to enhance its search engine optimization (SEO) features, making it easier for businesses to improve their online visibility and rank higher in search results. In the past, Wix had a reputation for being less SEO-friendly, but with recent updates, it now offers a range of tools that meet industry standards and support the latest SEO best practices.</p>
        <p>One of the most powerful features is the Wix SEO Wiz, a guided tool that provides personalized SEO plans based on the user's business and target audience. It offers step-by-step recommendations for optimizing page titles, meta descriptions, alt text for images, and keyword placement, ensuring that every aspect of the website is fine-tuned for search engines.</p>
        <p>Additionally, Wix now supports structured data markup (schema), allowing websites to provide search engines with detailed information about their content. This improves the chances of appearing in rich snippets, which can boost click-through rates. Wix websites also generate automatic sitemaps, ensuring that search engines can easily crawl and index pages.</p>
        <p>With support for Google Core Web Vitals, Wix ensures that websites load quickly, maintain high interactivity, and provide a smooth user experience—factors that directly impact search rankings. Combined with its built-in SEO tools, Wix empowers businesses to drive more organic traffic and gain a competitive edge in their industry.</p>
      `,
      },
      {
        id: "section-3",
        title: "Mobile-First Design",
        para: `
        <p>As mobile devices account for the majority of internet traffic, Wix has made mobile-first design a top priority. Every website built on Wix is automatically optimized for mobile viewing, ensuring that pages load quickly and display properly across different screen sizes.</p>
        <p>One of the standout features of Wix’s mobile design is its custom mobile editor, which allows users to make separate adjustments to their mobile site without affecting the desktop version. This means users can fine-tune fonts, images, buttons, and navigation specifically for mobile visitors, creating a seamless experience across all devices.</p>
        <p>Wix also implements mobile-friendly navigation, such as collapsible menus, thumb-friendly buttons, and responsive design elements that adapt to different screen orientations. Additionally, Wix websites are built with accelerated mobile pages (AMP) technology, ensuring faster load times on smartphones and tablets.</p>
        <p>By focusing on mobile-first design, Wix helps businesses cater to the growing number of mobile users, improving user engagement, retention rates, and overall website performance.</p>
      `,
      },
      {
        id: "section-4",
        title: "Enhanced eCommerce Features",
        para: `
        <p>For businesses looking to sell products and services online, Wix has significantly improved its eCommerce capabilities, making it easier to manage online stores efficiently. The platform now offers advanced inventory management tools, allowing business owners to track stock levels, automate low-stock alerts, and organize products into categories for a smoother shopping experience.</p>
        <p>Wix also supports a wide range of payment gateways, including PayPal, Stripe, Square, and Buy Now, Pay Later (BNPL) options like Klarna and Afterpay. This flexibility enables businesses to provide customers with multiple payment choices, enhancing the checkout experience and boosting conversions.</p>
        <p>Additional eCommerce enhancements include multi-currency support, which allows businesses to cater to international customers, and automated tax calculations, which simplify compliance with different regional tax laws. Wix also provides abandoned cart recovery features, which send automated reminders to customers who leave items in their carts, helping businesses recapture lost sales.</p>
        <p>With these updates, Wix ensures that online store owners have access to powerful, user-friendly tools that help them scale their business and deliver an outstanding shopping experience to customers.</p>
      `,
      },
      {
        id: "section-5",
        title: "Third-Party App Integrations",
        para: `
        <p>To help businesses streamline their operations, Wix has expanded its third-party app integrations, enabling users to connect their website with popular marketing, analytics, and customer relationship management (CRM) tools. These integrations allow businesses to automate processes, track visitor behavior, and improve overall efficiency.</p>
        <p>For example, users can connect their Wix website to Google Analytics to monitor traffic patterns and visitor engagement. Integrations with HubSpot and Mailchimp allow businesses to manage email marketing campaigns, track leads, and nurture customer relationships effectively. Wix also supports Facebook Pixel, enabling businesses to retarget website visitors through Facebook and Instagram ads.</p>
        <p>Another major advantage is the Zapier integration, which allows Wix websites to connect with over 3,000 third-party applications, enabling seamless automation between different platforms. This makes it easier for businesses to sync data, manage bookings, and automate customer interactions without needing additional coding or technical expertise.</p>
        <p>By offering a wide range of third-party integrations, Wix helps businesses enhance functionality, improve marketing efforts, and optimize workflow, making it a highly versatile website-building platform.</p>
      `,
      },
      {
        id: "section-6",
        title: "Voice Search Optimization",
        para: `
        <p>As voice search continues to gain popularity, Wix has introduced features that allow businesses to optimize their websites for voice-based queries. With the rise of smart assistants like Google Assistant, Alexa, and Siri, more users are searching for information using conversational voice commands rather than typed keywords.</p>
        <p>To accommodate this trend, Wix websites now support structured data markup, which helps search engines understand website content better. This increases the likelihood of appearing in featured snippets and voice search results. Businesses can also incorporate long-tail, conversational keywords that align with the way people naturally speak when using voice search.</p>
       
        <p>Additionally, Wix enables voice-friendly navigation, making it easier for visitors to access content through voice commands. Websites can also include audio-based search capabilities, allowing users to find products, services, or information without typing.</p>
        <p>By optimizing for voice search, Wix websites become more accessible and future-proof, helping businesses stay ahead of evolving search trends and reach a broader audience.</p>
      `,
      },
      {
        id: "section-7",
        title: "AI Chatbots & Automation",
        para: `
        <p>To improve customer support and engagement, Wix has introduced AI-powered chatbots and automation tools that allow businesses to interact with visitors 24/7. AI chatbots can be programmed to answer frequently asked questions, provide product recommendations, and assist with bookings or purchases, reducing the need for manual customer service.</p>
        <p>These chatbots use machine learning and natural language processing (NLP) to deliver more personalized and context-aware responses, making interactions feel more human-like. Businesses can also set up automated workflows, such as sending welcome emails to new subscribers, triggering follow-up messages for abandoned carts, or notifying customers about special promotions.</p>
       
        <p>In addition to chatbots, Wix provides automation tools that help businesses streamline operations. For example, website owners can schedule posts, trigger email sequences, and integrate chatbot responses with CRM systems, ensuring a smooth customer experience.</p>
        <p>With AI chatbots and automation, Wix enables businesses to enhance customer engagement, boost conversions, and save time- all while providing a superior user experience.</p>`,
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
    <section className="magento-dev-details wix-details py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center heading-main mb-4">
            <h2>
              Trends & Recent Developments in <span> Wix Development</span>
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

export default WixDetails;
