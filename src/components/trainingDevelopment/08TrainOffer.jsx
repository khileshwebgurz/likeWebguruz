
const ecomConsultData = [
  {
    text: "Digital Marketing Mastery",
  },
  {
    text: "Marketo Consulting Certification",
  },
  {
    text: "Leadership Development",
  },
  {
    text: "Technical Skills Enhancement",
  },
  {
    text: "Communication and Soft Skills",
  },
  {
    text: "Project Management",
  },
  {
    text: "Data Analytics and Insights",
  },
  {
    text: "Sales and Customer Engagement",
  },
  {
    text: "Change Management and Organizational Development",
  },
];

const TrainOffer = () => {
  return (
    <div className="Econsultingservices training-offer py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-md-5 mb-4">
            <h2>
              Corporate Training <span>Programs We Offer</span>
            </h2>
          </div>
          {ecomConsultData.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="services-one">
                <div className="eservices-main">
                  <div className="const-text">
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainOffer;
