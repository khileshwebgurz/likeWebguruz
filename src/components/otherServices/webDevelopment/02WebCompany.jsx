import Link from "next/link";
import HubspotForm from "../hubspotDev/clientHubForm/HubspotForm";
import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const WebCompany = () => {
  return (
    <>
      <section className="web-company pb-5" id="webdev-com">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 content color-wt">
              <h2 className="color-wt mb-4">
                Work with the No.1 Web Development Company in India
              </h2>
              <p className="color-wt">
                At WebGuruz, we&apos;re more than just a web development company.
                We&apos;re a vibrant community of passionate individuals who believe
                in the transformative power of the digital world. Our mission is
                to create exceptional web experiences that not only captivate
                audiences but also drive tangible business results.
              </p>
              <p className="color-wt">
                From small startups to large enterprises, we&apos;ve helped countless
                clients achieve their online goals. Our team of skilled
                developers, designers, and digital strategists brings a unique
                blend of creativity, technical expertise, and industry knowledge
                to every project. We&apos;re committed to staying at the forefront of
                web technology trends, ensuring that your website is always
                cutting-edge and optimized for performance.
              </p>
              <ul>
                <li>Unmatched Quality</li>
                <li>Proven Expertise</li>
                <li>Client-Centric Approach</li>
              </ul>
              <Link href="#" className="explore-btn" aria-label="View Potfolio">
                View Our Portfolio
              </Link>
            </div>
            <div className="col-sm-6 col-xs-12 web-form">
              {/* <form className="web-connect text-center">
                <h2 className="color-wt">Connect With Our Experts</h2>
                <p className="color-wt mb-4">
                  We respond to 97% of messages within 1-2 business hour(s),
                  really!
                </p>
                <div className="merge">
                  <label>
                    <input type="text" placeholder="Your Name" />
                  </label>
                  <label>
                    <input type="text" placeholder="Email" />
                  </label>
                </div>
                <div className="merge">
                  <label>
                    <input type="number" placeholder="Phone Number" />
                  </label>
                  <label>
                    <input type="number" placeholder="Your Budget" />
                  </label>
                </div>
                <textarea
                  className="project-requiremnt"
                  placeholder="Project Requirement"
                ></textarea>
                <label className="fileupload">
                  <input type="file" id="myFile" name="filename" />
                  <Image src={upload} alt="Image" />
                  (Attach Files (doc, xls, pdf, txt and ppt files only, Max Size
                  2MB))
                </label>
                <label className="submit">
                  <input type="submit" value="Send Your Enquiry" />
                </label>
              </form> */}
              {/* <HubspotForm/> */}
              <WebdevForm/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebCompany;
