

const services = [
  {
    id: "01",
    title: "HubSpot Website Development",
    description:
      "Create stunning, responsive websites that not only look great but also drive conversions. We specialize in building HubSpot websites that are optimized for search engines, mobile devices, and user experience, ensuring your business stands out online.",
  },
  {
    id: "02",
    title: "HubSpot API & Integrations",
    description:
      "Our HubSpot developers can integrate HubSpot with your email marketing software, CRM, accounting system, and more, streamlining your workflows and providing a unified view of your customer data. By leveraging the power of HubSpot's API, we can create custom integrations that meet your specific business needs and enhance your productivity.",
  },
  {
    id: "03",
    title: "HubSpot CRM Development",
    description:
      "We'll work with you to understand your specific needs and tailor HubSpot's CRM to your exact specifications. With a customized HubSpot CRM, you can streamline your sales and customer service processes, improve lead management, and drive growth.",
  },
  {
    id: "04",
    title: "HubSpot Migration",
    description:
      "Our experienced team will carefully migrate your contacts, deals, tasks, and other essential information, ensuring a smooth transition. We'll also configure HubSpot to match your current processes, minimizing disruption and maximizing efficiency. ",
  },
  {
    id: "05",
    title: "HubSpot CMS Module Development",
    description:
      "Build custom modules and extensions to enhance the functionality of your HubSpot website. By extending the capabilities of HubSpot's CMS, we can create a truly unique and engaging website that meets your specific business objectives.",
  },
  {
    id: "06",
    title: "HubSpot Inbound Marketing & Reporting",
    description:
      "Develop effective inbound marketing strategies and track your results with HubSpot's powerful analytics tools. With HubSpot's comprehensive reporting capabilities, you can track the performance of your campaigns and make data-driven decisions to optimize your marketing efforts.",
  },
];

function Serviceprovide() {
  return (
    <section id="serviceprovide" className="py-5 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="heading-main pb-0 pb-md-5">
              <h2>
                <span>HubSpot Services</span> We Provide
              </h2>
              <span className="mb-4 d-inline-block">
              From website development to CRM integration, our comprehensive HubSpot services can help you achieve your business goals. 
              </span>
            </div>

            <div className="servdvlpmnt">
              {services.map((service) => (
                <div key={service.id} className="serdvinnr">
                  <div className="servcntr">{service.id}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Serviceprovide;
