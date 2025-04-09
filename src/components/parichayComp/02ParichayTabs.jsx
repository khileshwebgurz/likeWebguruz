"use client";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import apply1 from "../../../public/images/parichayimgs/parichay-1.webp";
import apply2 from "../../../public/images/parichayimgs/parichay-2.webp";
import apply3 from "../../../public/images/parichayimgs/parichay-3.webp";
import apply4 from "../../../public/images/parichayimgs/parichay-4.webp";
import logo from "../../../public/images/parichayimgs/apply-webguruz.webp";
import Image from "next/image";
import DigitalForm from "@/utils/formsHubspot/DigitalForm";
import ServiceFaq from "../serviceComponent/12ServiceFaq";
import { parichayData } from "@/utils/accordionData";
import DownloadModal from "./DownloadModal";
const ParichayTabs = () => {
  return (
    <section className="tab-main apply-tabs py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 parichay-tabbing">
            <Tabs
              defaultActiveKey="tab1"
              id="static-tab-example"
              className="pb-0"
            >
              <Tab eventKey="tab1" title="Application Process">
                <div className="parichay-content d-flex justify-content-between column-gap-2">
                  <div className="parichay-inner-content content">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="tab-1-content">
                          <div className="tab-icon-content">
                            <div className="tabs-icon">
                              <Image src={apply1} alt="Apply Online Icon" />
                            </div>
                            <div className="tabs-title">
                              <h4>1. Apply Online</h4>
                            </div>
                          </div>
                          <p>
                            Fill Out the Online Application Form Submit your
                            application through our easy-to-navigate online
                            portal. Provide essential details about your
                            background, education, and area of interest to help
                            us understand your aspirations.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="tab-1-content">
                          <div className="tab-icon-content">
                            <div className="tabs-icon">
                              <Image src={apply2} alt="Upload Documents Icon" />
                            </div>
                            <div className="tabs-title">
                              <h4>2. Upload Documents</h4>
                            </div>
                          </div>
                          <p>
                            Upload Your Resume and Portfolio Showcase your
                            skills by uploading an updated resume and any
                            relevant work samples or projects. This gives us
                            insight into your potential and areas of expertise.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="tab-1-content">
                          <div className="tab-icon-content">
                            <div className="tabs-icon">
                              <Image src={apply3} alt="Interview Icon" />
                            </div>
                            <div className="tabs-title">
                              <h4>3. Interview</h4>
                            </div>
                          </div>
                          <p>
                            Attend an Interview Qualified applicants will be
                            invited to an interview with our expert team. This
                            is an opportunity to discuss your goals, ask
                            questions, and demonstrate your enthusiasm for
                            joining Parichay.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="tab-1-content">
                          <div className="tab-icon-content">
                            <div className="tabs-icon">
                              <Image
                                src={apply4}
                                alt="Feedback & Selection Icon"
                              />
                            </div>
                            <div className="tabs-title">
                              <h4>4. Feedback & Selection</h4>
                            </div>
                          </div>
                          <p>
                            Receive Your Selection Confirmation After the
                            interview, successful candidates will receive an
                            email confirmation with all the program details,
                            including the start date, schedule, and
                            expectations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="tab2" title="Apply Now">
                <div className="parichay-content d-flex justify-content-between column-gap-2">
                  <div className="parichay-inner-content content apply-now-section">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="tab-2-content">
                          <div className="tabs-title">
                            <h2>Ready to take the leap?</h2>
                          </div>

                          <p>
                            Apply now to Parichay- Internship Program and gain
                            industry-relevant skills that will set you apart in
                            the competitive job market. Our program offers
                            flexible schedules, expert-led training sessions,
                            and the opportunity to work on live projects. Don’t
                            miss this chance to elevate your career. Click below
                            to begin your journey toward excellence.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="tab-2-content-form">
                          <div className="tab-img-content">
                            <div className="tabs-title">
                              <Image src={logo} alt="webguru-logo" />
                              <h2>Internship Application</h2>
                            </div>
                            <div className="form-section">
                              <DigitalForm />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="tab3" title="FAQs">
                <div className="parichay-content d-flex justify-content-between column-gap-2">
                  <div className="parichay-inner-content content">
                    <ServiceFaq accordionData={parichayData} />
                  </div>
                </div>
              </Tab>

              <Tab eventKey="tab4" title="Projects">
                <div className="parichay-content d-flex justify-content-between column-gap-2">
                  <div className="parichay-inner-content content project-table">
                    <h2>Get Real-World Experience on Live Projects</h2>

                    <p className="my-3">
                      Parichay ensures that interns gain invaluable real-world
                      experience by working on live projects for actual clients.
                      Whether it’s creating innovative marketing campaigns,
                      developing functional websites, or designing cutting-edge
                      mobile applications, you will contribute to impactful work
                      while learning from industry experts.
                    </p>
                    <div className="project-table-main">
                      <table>
                        <thead>
                          <tr>
                            <th>
                              Academic Concentration (Bachelor&apos;s,
                              Master&apos;s, MBA or PhD)
                            </th>
                            <th>Project Area</th>
                            <th>Duration (in weeks)</th>
                            <th>
                              Description (You may specify keywords such as
                              development, testing, research, management,
                              marketing, and strategy)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              Bachelor&apos;s/Masters
                              <DownloadModal/>
                              {/* <div className="downlaod-btn">
                                <a
                                  href="#"
                                  className="octf-btn octf-btn-primary octf-btn-icon"
                                >
                                  <span>
                                    Download File
                                    <i className="flaticon-right-arrow-1"></i>
                                  </span>
                                </a>
                              </div> */}
                            </td>

                            <td>Human Resources Management</td>
                            <td>6</td>
                            <td>
                              <p>
                                This Internship in Human Resources offers a
                                dynamic learning experience in the field of HR
                                management, providing interns with hands-on
                                exposure to various aspects of talent
                                acquisition, employee development, and
                                organizational effectiveness. This comprehensive
                                program is designed to cultivate essential
                                skills and knowledge required for a successful
                                career in Human Resources.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>Bachelor’s/Masters</td>

                            <td>Wish Health Patient App</td>
                            <td>8</td>
                            <td>
                              <p>
                                Webguruz developed a health app for people who
                                can appoint their doctors in 5 cities Mohali,
                                Zirakpur, Kharar, Panchkula and Chandigarh. The
                                patient can access the doctor&apos;s bio,
                                profile, and designation on the app. They can
                                schedule appointments at any time that is
                                convenient for them based on the available
                                slots, and they can even make payments through
                                the payroll section.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>Bachelor’s/Masters</td>

                            <td>Customer Relationship Management</td>
                            <td>6</td>
                            <td>
                              <p>
                                Webguruz created a CRM website to manage the
                                lead generating information collected on the
                                website. This portals manages the details of the
                                project, including the requirements of the
                                client, the time frame for the project, and the
                                level of support.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>Bachelor’s/Masters</td>

                            <td>Billionaire Realtors Group</td>
                            <td>8-12</td>
                            <td>
                              <p>
                                A South african based real estate app where
                                users can watch different properties on
                                different locations and buy and sale it with in
                                mintues. The app for real estate brokers can be
                                used to plan a variety of events.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan="4">
                              <p>
                                <strong>Mobile Application Development</strong>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>Bachelor’s/Masters</td>

                            <td>Genie Connections</td>
                            <td>8-12</td>
                            <td>
                              <p>
                                Genie Connections is a dating app made for
                                singles. The app is available for download on
                                both iOS and Android devices and comes equipped
                                with features like left & right swipe for
                                profile matching, Bluetooth device detection,
                                and more. Built on technologies like Swift and
                                Kotlin, this app is made to bring people closer.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>Bachelor’s/Masters</td>

                            <td>Food Guru</td>
                            <td>8-12</td>
                            <td>
                              <p>
                                Team Webguruz is developing a food delivery app
                                to the likes of Zomato and Swiggy. Users will be
                                able to browse through restaurant listings and
                                order food online. The app will support online
                                payment options as well for maximum convenience.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan="4">
                              <p>
                                <strong> Website Development </strong>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>Bachelor’s/Masters</td>

                            <td>Robert James Realty</td>
                            <td>8-12</td>
                            <td>
                              <p>
                                Webguruz designed and developed a website for
                                this real-estate property management agency. The
                                website allows users to find the best real
                                estate agents so they can have access to
                                up-to-date real estate data, trends, and
                                statistics.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>Bachelor’s/Masters</td>

                            <td>Minus The Agent</td>
                            <td>8-12</td>
                            <td>
                              <p>
                                The website allows owners to sell or rent their
                                properties using advertising and marketing
                                tools. Team Webguruz helped MTA build a
                                responsive website and maintain it for increased
                                leads.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan="4">
                              <p>
                                <strong> Digital Marketing </strong>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>Bachelor’s/Masters</td>

                            <td>Lease Java (Pay Per Click)</td>
                            <td>8-12</td>
                            <td>
                              <p>
                                Webguruz has been handling the online paid
                                advertising campaigns for Lease Java. Our
                                campaigns have resulted in greater leads and
                                resultantly higher conversions.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>Bachelor’s/Masters</td>

                            <td>APD Promotions (SEO)</td>
                            <td>8-12</td>
                            <td>
                              <p>
                                Webguruz has helped APD gain significant leads
                                and grow their portfolio of services as well.
                                Using a host of effective SEO strategies, we
                                have helped their website rank at the top of the
                                SERPs.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>Bachelor’s/Masters</td>

                            <td>XLTrade (Online Reputation Management)</td>
                            <td>8-12</td>
                            <td>
                              <p>
                                Trading websites do not enjoy a very good
                                reputation. But with Webguruz, XLTrade saw a
                                jump in the number of leads by 35% in a matter
                                of just 4 months. Using our SEO and ORM
                                services, the website saw a positive impact on
                                its search engine rankings as well.
                              </p>
                            </td>
                          </tr>

                          <tr>
                            <td colSpan="4">
                              <p>
                                <strong> Website Designing </strong>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>Bachelor’s/Masters</td>

                            <td>Passion Landscapes</td>
                            <td>8-12</td>
                            <td>
                              <p>
                                Our Website Design team worked on the design
                                part of the Passion Landscapes website. Based on
                                a simple design language, the website is
                                accessible and users can navigate through
                                different sections easily.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>Bachelor’s/Masters</td>

                            <td>G-Mana</td>
                            <td>8-12</td>
                            <td>
                              <p>
                                G-Mana is a leading supplier of used vehicles.
                                The team at Webguruz helped them with Banner
                                Design, Mockups Design, and UI/UX Design as
                                well.
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParichayTabs;
