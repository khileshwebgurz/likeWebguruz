import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const TrainForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice training-development-form py-5"
        id="training-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Grow Your Team&apos;s Potential{" "}
                <strong> with WebGuruz&apos;s Expert Training Solutions</strong>
              </h2>
              <p className="color-wt">
                Imagine a workplace where every team member is not just skilled,
                but truly empowered to drive your business forward. Our training
                programs are your gateway to unprecedented organizational
                growth. By partnering with WebGuruz, you&apos;ll witness a remarkable
                transformation in employee productivity, engagement, and
                innovation.
              </p>
              <p className="color-wt">
                Our proven methodologies don&apos;t just teach skills; they unlock
                potential, boost morale, and create a culture of continuous
                learning. We&apos;ve helped numerous organizations turn average
                performers into exceptional leaders, reduce turnover rates, and
                create a competitive advantage in their industry. The result? A
                dynamic, motivated workforce that propels your business to new
                heights. With WebGuruz, you&apos;re not just investing in training-
                you&apos;re investing in your company&apos;s future.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 formppc hub-ranking">
              <WebdevForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrainForm;
