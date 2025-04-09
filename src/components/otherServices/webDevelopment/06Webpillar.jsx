import Image from "next/image";
import pillarbg from "/public/images/webimages/pillarbg.svg";

const Webpillar = () => {
  return (
    <>
      <section className="pillar-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center">
              <h2 className="mb-4">
                Key Pillars of <span>Web Development</span>
              </h2>
              <Image src={pillarbg} alt="Web Development Agency" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Webpillar;
