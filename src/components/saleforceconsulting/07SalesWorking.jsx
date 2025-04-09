
function SalesWorking() {
  const industries = [
    {
      step: "Step 1",
      title: "Discovery & Planning",
      alt: "Technology Icon",
      description:
        "We start by understanding your business goals, challenges, and requirements. During this phase, our consultants analyze your existing processes, identify improvement opportunities, and define the scope of the Salesforce implementation. The outcome is a detailed project plan and roadmap.",
    },
    {
      step: "Step 2",
      title: "Design & Configuration",
      alt: "E-commerce Icon",
      description:
        "Based on the requirements gathered, we design and configure your Salesforce environment. This includes setting up the organizational structure, defining security models, creating custom objects and fields, and designing workflows and approval processes to match your business requirements.",
    },
    {
      step: "Step 3",
      title: "Implementation & Integration",
      alt: "Healthcare Icon",
      description:
        "In this phase, we bring the design to life. We configure the system according to the approved design, migrate data from existing systems, develop custom components when needed, and integrate Salesforce with other business applications to create a unified ecosystem.",
    },
    {
      step: "Step 4",
      title: "Training & Go-Live Support",
      alt: "Education Icon",
      description:
        "We provide comprehensive training to your team, ensuring they can effectively use the new system. Once training is complete, we support the go-live process, addressing any issues that arise during the transition. After a successful launch, we continue to provide support and optimization services.",
    },
  ];

  return (
    <section id="brdindstries" className="salesforce-working py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-5 col-sm-12 col-12">
            <div className="heading-main">
              <h2>
                Our <span> Work Process</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12 col-12">
            <div className="brdighdtxt">
              <span>
                We follow a structured and transparent approach to every
                Salesforce consulting project. Our proven four-step methodology
                ensures smooth implementation, maximum value, and long-term
                success for your business:
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="indrngserv">
              {industries.map((industry, index) => (
                <div className="indrngservinnr" key={index}>
                  <div className="sales-steps">{industry.step}</div>
                  <div className="indrngservcnnct">
                    <h3>{industry.title}</h3>
                    <p>{industry.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SalesWorking;
