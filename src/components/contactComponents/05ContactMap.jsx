const ContactMap = () => {
  return (
    <>
      <section className="contact-map py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center pb-4">
              <h2>
                Find Us <span>On Map</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-xs-12 iframe-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.4050166766688!2d76.6824212761928!3d30.707012386874137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fecf52c807f63%3A0x6e127f6af8de3a2!2sWebGuruz%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1725263072344!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMap;
