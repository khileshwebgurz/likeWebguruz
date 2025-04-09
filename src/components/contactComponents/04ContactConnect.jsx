import Image from "next/image";
import bloging from "../../../public/images/contactimages/blogging.svg";
import success from "../../../public/images/contactimages/success.svg";
import Link from "next/link";
const ContactConnect = () => {
  return (
    <>
      <section className="connect-level py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h2>
                <span>Get Started </span> on Your Transformation Journey
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2 col-xs-12 vacent-div"></div>
            <div className="col-sm-4 col-xs-12">
              <div className="connect-card text-center p-4">
                <Image src={bloging} alt="Blog Icon" />
                <h3>Blog</h3>
                <p>
                  Discover the latest insights, trends, and expert advice on
                  digital technologies.
                </p>
                <Link className="explore-btn" href="/blogs">
                  Read More
                </Link>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="connect-card text-center p-4">
                <Image src={success} alt="Success Stories icon" />
                <h3>Success Stories</h3>
                <p>
                  See how we have helped businesses build success stories that
                  inspire.
                </p>
                <Link className="explore-btn" href="/client-testimonials">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactConnect;
