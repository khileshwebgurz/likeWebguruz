import Image from "next/image";
import thanks from "../../../public/images/resume-thanks.webp";
import Link from "next/link";

const ThankYouContent = () => {
  return (
    <>
      <section className="resume-thanks-banner py-5"></section>
      <section className="resume-thanks-content pt-5 pb-3">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-md-6">
              <h1>
                Thank <strong>You!</strong>
              </h1>
              <p>
                Your Email has been sent. Someone from our HR team will get back
                to you within 1-2 business days.
              </p>
            </div>
            <div className="col-12 col-md-6 text-center">
              <Image src={thanks} alt="Resume Thank You" />
            </div>
          </div>
        </div>
      </section>
      <div className="thank-you-list">
        <div className="container">
          <div className="row pb-5">
            <div className="resume-linking col-12">
              <h3>
                While we get back to you why not visit <br /> these useful
                links:
              </h3>
              <ul>
                <li>
                  <Link href={"/about"}>Our Company</Link> is here for you to
                  read.
                </li>
                <li>
                  What{" "}
                  <Link href={"/what-employees-speaks-about-us"}>
                    employees speak about us
                  </Link>
                </li>
                <li>
                  Look through our <Link href={"/"}>various projects.</Link>
                </li>
                <li>
                  Life at <Link href={"/life-at-webguruz"}>Webguruz</Link>
                </li>
                <li>
                  Understand the{" "}
                  <Link href={"/how-we-work"}>way we operate</Link>
                </li>
                <li>
                  <Link href={"/careers"}>Job</Link> Position
                </li>
                <li>
                  Our <Link href={"/"}>Portfolio</Link>
                </li>
                <li>
                  <Link href={"/about"}>About</Link> us
                </li>
                <li>
                  You can read <Link href={"/blogs"}>our blog</Link> and
                  subscribe if you like it.
                </li>
                <li className="resume-social">
                  Join us on{" "}
                  <a
                    href="https://www.linkedin.com/company/webguru-technologies-pvt.-ltd./"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our LinkedIn page"
                  >
                    {" "}
                    LinkedIn
                  </a>
                  ,
                  <a
                    href="https://twitter.com/Webguruz"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our Twitter profile"
                  >
                    {" "}
                    X
                  </a>
                  , and{" "}
                  <a
                    href="https://www.facebook.com/webguruztechnologies/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our Facebook page"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYouContent;
