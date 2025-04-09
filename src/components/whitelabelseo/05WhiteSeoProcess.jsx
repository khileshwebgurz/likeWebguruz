const WhiteSeoProcess = () => {
  const processSteps = [
    {
      step: "01",
      title: "SEO Audit",
      description:
        "Our process begins with a comprehensive SEO audit of your website to identify strengths, weaknesses, and opportunities for improvement.",
    },
    {
      step: "02",
      title: "Competitor Analysis",
      description:
        "We evaluate your competitors’ online presence to understand their strategies and identify gaps or opportunities that can give your website a competitive edge in the search rankings.",
    },
    {
      step: "03",
      title: "Keyword Research & Strategy",
      description:
        "Our team conducts in-depth keyword research to identify high-value search terms relevant to your business. Using this data, we create a customized SEO strategy focused on driving targeted traffic and improving rankings.",
    },
    {
      step: "04",
      title: "On-Page & Technical Optimization",
      description:
        "We optimize your website’s on-page elements, including meta tags, headings, and content, while addressing technical aspects such as site speed, mobile responsiveness, and crawl errors. These enhancements improve user experience and align your site with search engine algorithms.",
    },
    {
      step: "05",
      title: "Content Creation & Link Building",
      description:
        "We develop high-quality, engaging content tailored to your audience and industry. Additionally, we build a network of authoritative backlinks to boost your website's credibility and improve rankings.",
    },
    {
      step: "06",
      title: "Ongoing Monitoring & Performance Reporting",
      description:
        "Our team continuously monitors your website's performance using advanced analytics tools. We provide regular, transparent reports detailing traffic trends, keyword rankings, and actionable insights to keep your SEO strategy optimized for long-term success.",
    },
  ];

  return (
    <div className="webguruprocess-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-12 heading-main text-left mb-4 mb-md-5">
            <div className="webprocess-content">
              <h2>
                Our <span> White Label SEO Process </span>
              </h2>
              <h3>A Proven Process for Success</h3>
              <p>
                Our White Label SEO process is designed to ensure that your SEO
                strategy is both effective and results-driven. Here’s how we
                work:
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row box-process">
              {processSteps.map((step, index) => (
                <div key={index} className="col-12 mb-4">
                  <div className="webprocess-box">
                    <h4>
                      <span>{step.step}</span>{step.title}
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

export default WhiteSeoProcess;
