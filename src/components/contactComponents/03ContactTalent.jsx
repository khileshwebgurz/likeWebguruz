"use client";
import Image from "next/image";
import contactimg1 from "../../../public/images/contactimages/talent-1.webp";
import contactimg from "../../../public/images/contactimages/talent-2.webp";
import emailimg from "../../../public/images/contactimages/talent-3.webp";
import enquiryimg from "../../../public/images/contactimages/talent-4.webp";
import Link from "next/link";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("wgz-cntct-banner");
  if (jobSection) {
    const yOffset = -150; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
  }
  document.querySelector(".hs-firstname input").focus();
};

const ContactTalent = () => {
  return (
    <>
      <section className="talent talent-new py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10 mx-auto col-xs-12 talent-cards">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="helpdesk-box">
                    <Link href="/book-an-appointment">
                      <Image
                        src={contactimg1}
                        alt="Contact Icon"
                        className="mb-3"
                      />
                      <p className="hire-contact-para">Hire Us Now</p>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="helpdesk-box">
                    <Link href="tel:(+91) 959 201 6444">
                      <Image
                        src={contactimg}
                        alt="Contact Icon"
                        className="mb-3"
                      />
                      <p className="hire-contact-para">Contact Sales</p>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="helpdesk-box">
                    <a
                      href="mailto:info@webguruz.in"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image src={emailimg} alt="Email Icon" className="mb-3" />
                      <p className="hire-contact-para">Send An Email</p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="helpdesk-box">
                    <button
                      onClick={handleScrollToJobs}
                      id="wgz-enquiry"
                      className="new-enquiry"
                    >
                      <Image
                        src={enquiryimg}
                        alt="Enquiry Icon"
                        className="mb-3"
                      />
                      <p className="hire-contact-para">Send An Enquiry</p>
                    </button>
                  </div>
                </div>
                {/* <div className="col-sm-3 col-xs-12">
                  <div className="contact-card text-center p-3">
                    <a href="/book-an-appointment">
                      <Image
                        src={contactimg1}
                        alt="Contact Icon"
                        className="mb-3"
                      />
                      <p>Hire Us Now!</p>
                    </a>
                  </div>
                </div>
                <div className="col-sm-3 col-xs-12">
                  <div className="contact-card text-center p-3">
                    <a href="tel:(+91) 959 201 6444">
                      <Image
                        src={contactimg}
                        alt="Contact Icon"
                        className="mb-3"
                      />
                      <p>Contact Sales</p>
                    </a>
                  </div>
                </div>
                <div className="col-sm-3 col-xs-12">
                  <div className="contact-card text-center p-3">
                    <a
                      href="mailto:info@webguruz.in"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image src={emailimg} alt="Email Icon" className="mb-3" />
                      <p>Send An Email</p>
                    </a>
                  </div>
                </div>
                <div className="col-sm-3 col-xs-12">
                  <div className="contact-card text-center p-3">
                    <button onClick={handleScrollToJobs} id="wgz-enquiry">
                      <Image
                        src={enquiryimg}
                        alt="Enquiry Icon"
                        className="mb-3"
                      />
                      <p>Send An Enquiry</p>
                    </button>
                  </div>
                </div> */}
                <div className="col-12 text-center mt-4 talent-btn btn-merge">
                  <Link
                    className="explore-btn job-apply no-color"
                    href={"/careers"}
                  >
                    Start your Career with us!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactTalent;
