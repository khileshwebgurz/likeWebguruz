import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const VoiceSeoForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice voice-search-form  py-5"
        id="voice-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Speak Your Way to Success with{" "}
                <strong>Voice Search Optimization</strong>
              </h2>
              <p className="color-wt">
                Voice Search Optimization empowers businesses to connect with
                customers in smarter ways. By optimizing your website for voice
                search, you’ll rank higher in search results, attract more local
                customers, and offer seamless user experiences. Stay relevant in
                the age of conversational queries and ensure your business is
                always just a voice command away.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 formppc hub-ranking">
              {/* <HubspotForm /> */}
              <WebdevForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VoiceSeoForm;
