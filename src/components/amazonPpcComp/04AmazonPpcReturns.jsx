const AmazonPpcReturn = () => {
  const processSteps = [
    {
      step: "01",
      title: "Targeted Keyword Selection",
      description:
        "We use advanced tools to identify high-performing keywords that connect your products with potential buyers. These keywords are meticulously chosen based on search trends, competition, and buyer intent to ensure maximum visibility. Our approach guarantees that your ads reach the most relevant audience, driving higher click-through rates and conversions.",
    },
    {
      step: "02",
      title: "Sponsored Product Ads",
      description:
        "Increase visibility with well-designed Sponsored Product Ads that appear directly in search results and product pages. These ads are tailored to highlight your product's unique features and benefits, making them stand out to shoppers. With strategic placements and continuous optimization, we help you capture more sales opportunities effortlessly.",
    },
    {
      step: "03",
      title: "Sponsored Brand Ads",
      description:
        "Boost brand recognition with banner-style ads to showcase your range of products effectively. These ads are designed to create a lasting impression by emphasizing your brand identity while driving traffic to your Amazon storefront. With Sponsored Brand Ads, we help position your business as a market leader and improve overall brand loyalty.",
    },
    {
      step: "04",
      title: "Product Display Ads",
      description:
        "Target competitors and specific audiences with compelling Product Display Ads. These ads strategically appear on competitor listings, customer reviews, and other relevant locations to capture attention. With visually appealing creatives and precise targeting, Product Display Ads ensure your products stay top-of-mind for potential buyers.",
    },
    {
      step: "05",
      title: "Dynamic Bidding",
      description:
        "Leverage Amazon’s real-time bidding to stay competitive and maximize profitability. Our experts fine-tune your bids to adjust for changing market conditions and buyer behavior. By optimizing for placement and budget efficiency, we ensure that your ads consistently deliver superior returns without overspending.",
    },
    {
      step: "06",
      title: "Performance Analysis",
      description:
        "Monitor, analyze, and adjust campaigns to keep them aligned with your goals and market trends. Through comprehensive data tracking and performance metrics, we identify areas for improvement and implement actionable strategies. This ensures your campaigns remain competitive and yield steady growth over time.",
    },
  ];

  return (
    <div className="webguruprocess-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-12 heading-main text-left mb-4 mb-md-5">
            <div className="webprocess-content">
              <h2>
                Our <span>Amazon Advertising Strategies</span>
              </h2>
        
              <p>
                Success on Amazon requires more than just running ads; it
                demands a thoughtful strategy. At WebGuruz, we implement
                tailored advertising strategies to give your business a
                competitive edge.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row box-process">
              {processSteps.map((step, index) => (
                <div key={index} className="col-12 mb-4">
                  <div className="webprocess-box">
                    <h4>
                      <span>{step.step}</span>
                      {step.title}
                    </h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazonPpcReturn;
