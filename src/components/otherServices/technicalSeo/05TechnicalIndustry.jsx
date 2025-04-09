const industries = [
    {
      title: "Better Search Engine Ranking",
      description:
        "Our team ensures your website meets all technical SEO standards, resulting in higher search engine rankings and increased organic traffic.",
    },
    {
      title: "Efficient Crawling & Indexing",
      description:
        "With our technical optimization, search engines can easily crawl and index your pages, increasing the likelihood of ranking for relevant keywords.",
    },
    {
      title: "Improved Website Speed",
      description:
        "Slow websites lose visitors. We optimize your website's loading times, ensuring faster performance and better user engagement.",
    },
    {
      title: "Increased Organic Traffic",
      description:
        "By fixing technical issues, we help your website perform better in search engines, which translates into higher organic traffic and potential leads.",
    },
    {
      title: "Enhanced User Experience",
      description:
        "We make sure your website is user-friendly across all devices, leading to better user retention and lower bounce rates.",
    },
    {
      title: "Higher Conversion Rates",
      description:
        "An optimized website not only brings in more traffic but also Improves conversion rates by providing a smooth and engaging user experience.",
    },
  ];
  
  const TechnicalIndustry = () => {
    return (
      <section className="industries-serve py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12">
              <div className="heading-main text-center pb-2 heading-content">
                <h2>
                Benefits Of Hiring WebGuruz For <span>Technical SEO</span>
                </h2>
                <span className="d-inline-block para">
                We take pride in offering customized and result-driven Technical SEO services to meet your business needs. Here&apos;s what you&apos;ll gain from working with us.
                </span>
              </div>
  
              <div className="indstrsrv">
                {industries.map((industry, index) => (
                  <div key={index} className="indstrsrvinr">
                    <h3>{industry.title}</h3>
                    <p>{industry.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default TechnicalIndustry;
  