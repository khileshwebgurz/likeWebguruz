import Image from "next/image";
import logoppc from "../../../public/images/ppcimages/google-task-manager.svg"
import logoppc2 from "../../../public/images/ppcimages/google-ads.svg";
import logoppc3 from "../../../public/images/ppcimages/google-analytics.svg";
import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const HubMigrateForm = ({heading, subheading,paragraph}) => {
 
  

 

  return (
    <>
      <section className="ppcbannerservice migration-form-hub py-5" id="migrate-form">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              {/* <h2 className="color-wt">
                {heading} <span>{subHeading}</span>
              </h2> */}

              <h2 className="color-wt">
              {heading} <strong> {subheading}</strong>
              </h2>
              <p className="color-wt pt-20">
              {paragraph}
              </p>
              
             
            </div>
            <div className="col-sm-6 col-xs-12 formppc hub-ranking">
              {/* <HubspotForm /> */}
              <WebdevForm/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HubMigrateForm;
