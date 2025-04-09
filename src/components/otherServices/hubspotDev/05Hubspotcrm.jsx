function Hubspotcrm() {
  const challenges = [
    {
      title: "Inefficient Lead Generation",
      description:
        "HubSpot's marketing automation tools can help you streamline your lead generation efforts and nurture leads more effectively. By automating tasks like email marketing, social media campaigns, and content distribution, you can focus on creating valuable content and building relationships with potential customers.",
    },
    {
      title: "Poor Customer Engagement",
      description:
        "HubSpot's CRM and customer service features can help you improve customer engagement and satisfaction. By tracking customer interactions, providing personalized support, and addressing issues promptly, you can build stronger relationships and foster loyalty.",
    },
    {
      title: "Limited Data Insights",
      description:
        "HubSpot's reporting and analytics tools can provide valuable insights into your business performance. Track key metrics, analyze customer behavior, and identify areas for improvement to optimize your marketing and sales strategies.",
    },
    {
      title: "Complex Sales Processes",
      description:
        "HubSpot's sales automation tools can help you streamline your sales pipeline and improve sales productivity. By automating tasks like lead scoring, opportunity management, and reporting, you can focus on closing deals and building relationships with customers.",
    },
  ];

  return (
    <section id="hubsptcrmsct">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="heading-main mb-3">
              <h2>
              Common Challenges and
                <span>How HubSpot Can Help</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="sclbarchtct">
              {challenges.map((challenge, index) => (
                <div className="sclbarchtctinr" key={index}>
                  <h3>{challenge.title}</h3>
                  <p>{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hubspotcrm;
