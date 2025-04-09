import Image from "next/image";
import techMain from "@/utils/05utilTechHome";
import Link from "next/link";

const splitTitle = (title) => {
  const parts = title.split(/<span>(.*?)<\/span>/);
  return (
    <h3>
      {parts.map((part, index) =>
        index % 2 === 1 ? <span key={index}>{part}</span> : part
      )}
    </h3>
  );
};

const TechnicalHome = () => {
  return (
    <section className="technical-main pt-5">
      <div className="container">
        <div className="row py-0">
          <div className="col-sm-12 col-xs-12 heading-main text-center">
            <h2 className="mb-3">
              Our <span>Technical Expertise</span>
            </h2>
          </div>
        </div>

        {techMain.map((techmain, index) => (
          <div className="row d-flex align-items-center" key={index}>
            <div className="card-content">
              <div className="col-sm-6 col-xs-12 image">
                <Image
                  src={techmain.img}
                  alt={techmain.alt}
                  style={{ height: "auto", width: "100%" }}
                  loading="lazy"
                />
              </div>
              <div className="col-sm-6 col-xs-12 content">
                {splitTitle(techmain.title)}
                <p>{techmain.para}</p>
                <ul className="logos-main">
                  {Array.from({ length: 6 }, (_, i) => (
                    <li key={i}>
                      <Image
                        src={techmain[`img${i + 1}`].src}
                        alt={techmain[`img${i + 1}`].alt}
                        style={{ height: "auto", width: "auto" }}
                        loading="lazy"
                      />
                    </li>
                  ))}
                </ul>
                <Link className="explore-btn" href={techmain.link}>
                  Learn More{" "}
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-right"
                    className="svg-inline--fa fa-arrow-right ms-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    aria-label="Arrow Right"
                  >
                    <path
                      fill="currentColor"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalHome;
