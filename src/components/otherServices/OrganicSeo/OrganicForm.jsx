import WebdevForm from "@/utils/formsHubspot/Webdeveform";
import Link from "next/link";

const OrganicForm = () => {
  return (
    <>
      <section className="ppcbannerservice py-5 supercharge" id="org-form">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              {/* <h2 className="color-wt">
                {heading} <span>{subHeading}</span>
              </h2> */}

              <h2 className="color-wt">
                Supercharge Your Business with Our 
                <strong> Organic SEO Services</strong>
              </h2>
              <p className="color-wt">
                Our Organic SEO experts in Mohali work tirelessly to ensure your
                website ranks on the first page of search engine results.
                Through time-tested strategies, we bring you long-lasting
                results that increase your traffic and conversions organically.
                Let us help you maximize your online presence and outshine your
                competition.
              </p>
              <Link className="explore-btn" href={"/book-an-appointment"} >Connect Now!</Link>
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

export default OrganicForm;
