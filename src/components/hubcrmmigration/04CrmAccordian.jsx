import { hubcrmmigrate } from "@/utils/accordionData";
import DropDown from "./DropDown";

const CrmAccordian = () => {
  return (
    <>
      <section className="crm-migration-simplify py-5">
        <div className="container">
          <div className="row align-items-center">
          <div className="col-12 heading-main text-center">
            <h2 className="mb-5">
            What to Expect from Our <span> HubSpot CRM Migration?</span>
            </h2>
          </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12 heading-main crm-text-left">
              <h3>
             Benefit from a secure, comprehensive, and  efficient migration process.
              </h3>
              <p>
              WebGuruz ensures that every element of your existing CRM is meticulously transferred to HubSpot. From data mapping to custom workflows, our detailed approach guarantees zero data loss and maximum usability. 
              </p>
              <p>
              Expect enhanced automation, advanced reporting, and a streamlined sales process. Our team handles the complexity while you focus on your core business activities.
              </p>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 col-12">
              <DropDown accordionData={hubcrmmigrate} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CrmAccordian;
