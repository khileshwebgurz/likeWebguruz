"use client";
import React, { useEffect, useState, useMemo } from "react";

const DevEcomConsultDetails = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = useMemo(
    () => [
      {
        id: "section-1",
        title: "Personalization",
        para1:
          "Personalization is rapidly becoming the cornerstone of eCommerce, transforming how businesses engage with their customers. It extends far beyond just addressing a customer by name- it is about creating unique, tailored shopping experiences that reflect individual preferences, behaviors, and past interactions. ",
        para2:
          "From personalized product recommendations that suggest items based on browsing history to dynamic pricing that adjusts according to demand and customer loyalty, personalization is integral to fostering customer satisfaction. Using powerful technologies like machine learning and predictive analytics, businesses can analyze vast amounts of customer data to understand behavior patterns, preferences, and purchase intent. This allows companies to send the right message at the right time, improving the customer experience and driving conversions. ",
        para3:
          "A personalized approach also enhances customer loyalty, increasing lifetime value, as customers feel more understood and valued by the brand. The ability to anticipate customer needs through personalized marketing and product offerings is quickly becoming an essential part of every successful eCommerce strategy, making personalization a key driver of growth in the online retail world.",
      },
      {
        id: "section-2",
        title: "Artificial Intelligence (AI) Integration",
        para1:
          "Artificial Intelligence (AI) is reshaping the eCommerce landscape by offering advanced solutions that automate and optimize critical operations. AI-driven tools such as chatbots are providing customers with 24/7 support, answering queries and solving issues in real-time, improving customer satisfaction and engagement. ",
        para2:
          "AI is also revolutionizing inventory management by predicting demand patterns, automating stock replenishment, and reducing the chances of stockouts or overstocking. Additionally, AI enhances marketing efforts by analyzing vast datasets, recognizing consumer behavior patterns, and predicting future trends. This enables businesses to create highly targeted marketing campaigns, customize product recommendations, and improve overall user experience. ",
        para3:
          "With AI, businesses can increase operational efficiency by automating routine tasks, reducing costs associated with manual labor, and staying ahead of competitors by continually adapting to consumer preferences. As AI technology continues to evolve, it offers even more opportunities to enhance personalization, optimize logistics, and predict trends, making it an indispensable tool for any modern eCommerce business aiming for long-term success.",
      },
      {
        id: "section-3",
        title: "Voice Search Optimization",
        para1:
          "As voice-activated assistants such as Alexa, Siri, and Google Assistant become increasingly popular, businesses must adapt their eCommerce strategies to ensure they’re optimized for voice search. Unlike traditional typed searches, voice queries tend to be more conversational, longer, and often more specific. This requires businesses to rethink their SEO strategies and incorporate natural language processing (NLP) to understand and respond to these spoken queries effectively. Focusing on long-tail keywords that reflect how customers naturally speak and ask questions can help capture this growing audience. ",
        para2:
          "Voice search optimization isn’t just about improving SEO; it’s also about enhancing the overall customer experience by making it easier for users to find products quickly, even when they are on the go. The integration of voice search into an eCommerce site also opens up new opportunities for businesses to engage with customers innovatively. It allows businesses to improve accessibility, serve on-the-go consumers, and increase the likelihood of being found by customers who prefer using voice assistants. ",
        para3:
          "Optimizing for voice search is becoming essential for staying competitive in the ever-evolving digital space, and businesses that do it well will benefit from increased visibility and customer loyalty.",
      },
      {
        id: "section-4",
        title: "Augmented Reality (AR)",
        para1:
          "Augmented Reality (AR) is revolutionizing how customers interact with products online, providing an immersive shopping experience that bridges the gap between in-store and online shopping. Through AR, customers can visualize how products will look in their environment before making a purchase, such as seeing how a piece of furniture fits into their living room or how makeup products look on their skin.",
        para2:
          "This virtual interaction enhances the online shopping experience by adding a layer of realism that traditional product images or videos simply cannot offer. AR not only builds customer confidence by allowing them to interact with products virtually but also helps reduce return rates, as customers have a better understanding of what they are purchasing. ",
        para3:
          "The ability to visualize products in real-time also creates a memorable shopping experience, which can set a brand apart in a crowded eCommerce market. By integrating AR, businesses can meet customer expectations for convenience, customization, and interactivity, which is essential in creating a competitive edge in the modern digital retail space. As AR technology continues to improve, it will likely become a standard feature for eCommerce websites, providing both brands and customers with exciting new opportunities.",
      },
      {
        id: "section-5",
        title: "Subscription Models",
        para1:
          "Subscription-based revenue models are gaining significant popularity in the eCommerce sector as businesses look for ways to build stable, predictable income streams. From curated product boxes to auto-replenishment services, subscriptions offer customers the convenience of receiving regular deliveries of products they use and love.  ",
        para2:
          "These models work particularly well for consumable goods, niche products, or services that customers regularly need. Businesses that adopt subscription models benefit from improved customer retention, as subscribers are more likely to make repeat purchases due to the convenience and personalized nature of the service.",
        para3:
          "In addition, businesses enjoy the advantage of more accurate revenue forecasting, as recurring payments allow them to better predict cash flow and plan for growth. For customers, subscription services eliminate the hassle of having to remember to reorder products and often offer discounts or exclusive items, enhancing their overall shopping experience. Whether through a subscription box, digital service, or replenishment service, this model allows businesses to foster stronger customer relationships and build long-term value by offering convenience and personalized experiences.",
      },
      {
        id: "section-6",
        title: "Sustainability in eCommerce",
        para1:
          "As environmental concerns grow, sustainability is becoming a key priority for consumers, with more shoppers demanding eco-friendly products and ethical business practices. In the eCommerce space, sustainability can take many forms, such as reducing packaging waste, sourcing products from ethical suppliers, or offering carbon-neutral shipping options.",
        para2:
          "For businesses, adopting sustainable practices is no longer just about appealing to a niche group of eco-conscious consumers; it is becoming a mainstream demand. Companies that prioritize sustainability benefit from enhanced brand image, increased customer loyalty, and a competitive edge, as consumers are increasingly aligning their purchasing decisions with their environmental values. ",
        para3:
          "Sustainable eCommerce practices can also have long-term financial benefits, such as reducing waste and energy consumption, optimizing supply chains, and lowering overall operational costs. Highlighting sustainability efforts, such as using recyclable materials, promoting energy-efficient operations, or reducing the carbon footprint of deliveries, can significantly boost a brand’s reputation and attract environmentally conscious shoppers. As more consumers prioritize sustainability, eCommerce businesses that embrace these practices will position themselves as leaders in a market that values ethical responsibility.",
      },
      {
        id: "section-7",
        title: "Mobile-First Experience",
        para1:
          "Providing a seamless mobile experience is no longer optional- it’s a necessity. With the rapid growth of mobile commerce, mobile devices now account for a significant portion of online sales. Therefore, businesses must prioritize mobile-first design strategies to ensure their websites are optimized for smartphones and tablets. This includes improving site speed, ensuring that all content is easily accessible, and implementing mobile-specific features like click-to-call, mobile-friendly checkout, and location-based services.",
        para2:
          "A mobile-first approach focuses on streamlining the user experience, minimizing load times, and ensuring navigation is intuitive, so customers can easily browse and shop from any device. This approach also caters to the growing number of consumers who prefer shopping on mobile devices for convenience and speed. ",
        para3:
          "Businesses that invest in a mobile-first experience not only meet consumer expectations but also enhance engagement, increase conversions, and boost customer satisfaction. By focusing on mobile optimization, businesses can stay ahead of competitors and build lasting relationships with mobile-savvy shoppers who expect convenience, personalization, and speed.",
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
    <section className="magento-dev-details ecommerce-consulting-details py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center heading-main mb-4">
            <h2>
              Latest Trends in <span>eCommerce </span>
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
              {sections.map(({ id, title, para1, para2, para3 }) => (
                <div key={id} id={id} className="tab-content">
                  <h4>{title}</h4>
                  <p>{para1}</p>
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

export default DevEcomConsultDetails;
