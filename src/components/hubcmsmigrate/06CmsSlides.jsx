import CmsMigrateProcess from "./06CmsMigrateProcess";

const CmsSlides = () => {
  return (
    <div>
      <section className="seomangement cms-slider pt-5 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-3">
              <h2>
                Our <span>Migration Process</span>
              </h2>
              <span className="d-inline-block mb-3">
                Our streamlined 5-step process ensures a smooth transition to
                HubSpot CMS:
              </span>
            </div>
            <CmsMigrateProcess />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CmsSlides;
