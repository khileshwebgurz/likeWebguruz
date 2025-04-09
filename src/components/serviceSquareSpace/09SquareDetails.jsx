"use client";
import React, { useEffect, useState, useMemo } from "react";

const SquareDetails = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = useMemo(
    () => [
      {
        id: "section-1",
        title: "AI-Powered Website Builders",
        para: `
        <p>Artificial intelligence (AI) is transforming how websites are built, and Squarespace has begun integrating AI-driven website-building tools to make the process faster and more intuitive. These tools offer automated design suggestions, layout recommendations, and content generation capabilities based on a business's industry and objectives. For instance, users can now get AI-generated headings, descriptions, and even image placement guidance to create a visually appealing and well-structured site. </p>
        <p>As AI technology advances, we can expect even more automation in content creation, SEO optimization, and performance enhancements, making web development more accessible to beginners and professionals alike.</p>
       `,
      },
      {
        id: "section-2",
        title: "Mobile-First Design",
        para: `
        <p>With over 60% of global internet traffic coming from mobile devices, Squarespace has shifted its focus to mobile-first design principles. Recent updates ensure that all templates are fully responsive, meaning websites will automatically adjust to different screen sizes, from smartphones to tablets and desktops. The platform now prioritizes touch-friendly navigation, optimized font sizes, fast-loading mobile images, and streamlined layouts to provide a seamless experience across devices. </p>
       
        <p>Additionally, Google ranks mobile-friendly websites higher in search results, making these enhancements crucial for businesses looking to improve their SEO rankings and user engagement.</p>
      `,
      },
      {
        id: "section-3",
        title: "Enhanced SEO Features",
        para: `
        <p>SEO is essential for driving organic traffic, and Squarespace has introduced advanced SEO tools to help website owners improve their visibility on search engines. The platform now includes built-in performance tracking, real-time keyword suggestions, automated sitemap updates, and structured data markup to help search engines better understand site content. Another major improvement is AI-powered content analysis, which provides recommendations for optimizing headings, metadata, and internal linking strategies. </p>
        <p>These features make it easier for businesses to enhance their on-page SEO, increase their rankings, and attract more potential customers without requiring extensive technical knowledge.</p>
      `,
      },
      {
        id: "section-4",
        title: "Advanced eCommerce Integrations",
        para: `
        <p>For businesses selling products or services online, Squarespace has significantly upgraded its eCommerce capabilities by introducing seamless integrations with third-party applications. New integrations allow users to connect with payment processors, inventory management tools, customer relationship management (CRM) software, and marketing automation platforms like Mailchimp and HubSpot. </p>
      
        <p>Additionally, enhanced checkout customization, one-click upsells, abandoned cart recovery features, and flexible subscription-based models have been introduced to help merchants increase sales. These updates ensure that online stores built with Squarespace are both scalable and conversion-optimized, providing a smoother shopping experience for customers.</p>
      `,
      },
      {
        id: "section-5",
        title: "Improved User Experience Features",
        para: `
        <p>A great user experience (UX) keeps visitors engaged and encourages them to take action on a website. Squarespace has implemented AI-powered customer support tools, interactive UI elements, and dynamic content features to improve engagement. For instance, users can now incorporate live chat, AI-driven chatbots, personalized content recommendations, interactive sliders, and animations to make their websites more engaging. </p>
        <p>These enhancements allow businesses to provide a more personalized and interactive browsing experience, leading to higher retention rates and increased customer satisfaction.</p>
      `,
      },
      {
        id: "section-6",
        title: "Faster Page Speeds",
        para: `
        <p>Website speed plays a vital role in both SEO rankings and user engagement, and Squarespace has made significant backend improvements to ensure faster load times. The platform has introduced automatic image compression, optimized JavaScript and CSS delivery, server-side caching, and enhanced CDN (Content Delivery Network) distribution. These updates help reduce loading times, which is critical because a one-second delay in page speed can lower conversions by up to 7%. </p>
        <p>With these optimizations, Squarespace websites can now deliver a seamless and lightning-fast user experience without compromising design quality or functionality.</p>
      `,
      },
      {
        id: "section-7",
        title: "More Customization Options",
        para: `
        <p>Squarespace has traditionally been known for its easy-to-use templates, but recent updates have introduced more customization options for developers and designers. Squarespace now offers deeper access to CSS, JavaScript, and custom code injections, allowing for more advanced design modifications. </p>
        <p>Additionally, new developer-friendly APIs enable businesses to integrate external applications, customize database structures, and build unique website functionalities. These updates empower developers to create highly personalized websites while still benefiting from Squarespace’s user-friendly interface and secure hosting environment.</p>
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
    <section className="magento-dev-details squarespace-details py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center heading-main mb-4">
            <h2>
            Trends and Recent Developments in <span> Squarespace Development</span>
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

export default SquareDetails;
