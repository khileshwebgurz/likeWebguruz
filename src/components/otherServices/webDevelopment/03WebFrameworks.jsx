import Image from "next/image";
import webimage from "/public/images/webimages/webservice.webp";
import webimage1 from "/public/images/webimages/webservice1.webp";
import webimage2 from "/public/images/webimages/webservice2.webp";
import webimage4 from "/public/images/webimages/webservice4.webp";
import webimage5 from "/public/images/webimages/webservice5.webp";
import webimage6 from "/public/images/webimages/webservice6.webp";
import webimage7 from "/public/images/webimages/webservice7.webp";
import webimage8 from "/public/images/webimages/webservice8.webp";
import webicon1 from "/public/images/webimages/iconweb1.svg";
import webicon2 from "/public/images/webimages/iconweb2.svg";
import webicon3 from "/public/images/webimages/iconweb3.svg";
import webicon4 from "/public/images/webimages/iconweb4.svg";
import webicon5 from "/public/images/webimages/iconweb5.svg";
import webicon6 from "/public/images/webimages/iconweb6.svg";
import webicon7 from "/public/images/webimages/iconweb7.svg";
import Link from "next/link";

const WebFrameworks = () => {
  return (
    <>
      <section className="web-framework py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center pt-2 pb-4">
              <h2>
                <span> Website Development Services</span> We Offer
              </h2>
              <span className="d-inline-block mb-2">
                From simple websites to complex e-commerce platforms, web apps,
                and more, we&apos;ve got you covered.
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-7 col-xs-12">
              <div className="row">
                <div className="col-sm-6 col-xs-12">
                  <div className="flip-card image-content">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                          <div className="image">
                          <Image src={webimage1} alt="Front End Development" />
                        </div>
                        <div className="content">
                          <div className="contentimg">
                            <Image src={webicon1} alt="Icon" />
                          </div>
                          <p className="color-wt">Front-end Development</p>
                        </div>
                      </div>
                      <div className="flip-card-back">
                        <p>We utilize the latest design trends and technologies to create websites that are not only aesthetically pleasing but also highly functional and user-friendly.</p> 
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12">
                <div className="flip-card image-content">
                <Link href={'/ecommerce-development-services'}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                      <div className="image">
                      <Image src={webimage2} alt="Ecommerce Development" />
                    </div>
                    <div className="content">
                      <div className="contentimg">
                        <Image src={webicon2} alt="webimage" />
      
                      </div>
                      <p className="color-wt">E-Commerce Development</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <p>Our e-commerce development experts specialize in building online stores that drive sales and provide a seamless shopping experience.</p>
                  </div>
                </div>
                </Link>
              </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-sm-12 col-xs-12">
                <div className="flip-card image-content">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                      <div className="image">
                      <Image src={webimage4} alt="CMS Development" />
                    </div>
                    <div className="content">
                      <div className="contentimg">
                        <Image src={webicon3} alt="webimage" />
                      </div>
                      <p className="color-wt">CMS Development</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <p>Empower your team to easily manage and update your website&apos;s content with our custom content management systems (CMS). We develop user-friendly interfaces that allow you to make changes without requiring technical expertise.</p>
                  </div>
                </div>
              </div>
                </div>
              </div>
            </div>
            <div className="col-sm-5 col-xs-12 flip-image-right">
            <div className="flip-card image-content">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                  <div className="image">
                  <Image src={webimage} alt="Back-end development" />
                </div>
                <div className="content">
                  <div className="contentimg">
                          <Image src={webicon1} alt="webimage" />
                  </div>
                  <p className="color-wt">Back-end Development</p>
                </div>
              </div>
              <div className="flip-card-back">
                <p>Our website developers possess expertise in building robust and scalable server-side infrastructure. We ensure that your website performs flawlessly, handles high traffic volumes, and provides a seamless user experience.</p>
              </div>
            </div>
          </div>
            </div>
          </div>
          <div className="row reverse">
            <div className="col-sm-7 col-xs-12">
              <div className="row">
                <div className="col-sm-6 col-xs-12">
                <div className="flip-card image-content">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                      <div className="image">
                      <Image src={webimage7} alt="PWA's Development" />
                    </div>
                    <div className="content">
                      <div className="contentimg">
                        <Image src={webicon5} alt="webimage" />
                      </div>
                      <p className="color-wt">PWAs Development</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <p>Our Progressive Web App (PWA) development services deliver a native-like experience, even offline.</p>
                  </div>
                </div>
              </div>
                </div>
                <div className="col-sm-6 col-xs-12">
                <div className="flip-card image-content">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                      <div className="image">
                      <Image src={webimage8} alt="Custom Web Development" />
                    </div>
                    <div className="content">
                      <div className="contentimg">
                      
                        <Image src={webicon6} alt="webimage" />
                      </div>
                      <p className="color-wt">Custom Web Development</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <p>Our custom web development services are tailored to your exact specifications. We work closely with you to understand your vision and create a website that perfectly aligns with your brand and goals.</p>
                  </div>
                </div>
              </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-xs-12">
                <div className="flip-card image-content">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                      <div className="image">
                      <Image src={webimage5} alt="Open Source Platform Development" />
                    </div>
                    <div className="content">
                      <div className="contentimg">
                        <Image src={webicon7} alt="webimage" />
                      </div>
                      <p className="color-wt">Open Source Platform Development</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <p>Our team of experienced developers can tailor platforms like WordPress and Drupal to meet your specific needs, ensuring that your website stands out from the competition.</p>
                  </div>
                </div>
              </div>
                </div>
              </div>
            </div>
            <div className="col-sm-5 col-xs-12 flip-image-right">
            <div className="flip-card image-content">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                  <div className="image">
                  <Image src={webimage6} alt="Magento Development" />
                </div>
                <div className="content">
                  <div className="contentimg">
                  <Image src={webicon4} alt="webimage" />
              
                  </div>
                  <p className="color-wt">Magento Development</p>
                </div>
              </div>
              <div className="flip-card-back">
                <p>Our developers possess deep expertise in this highly scalable and feature-rich e-commerce platform, enabling us to create customized solutions that meet your specific needs.</p>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebFrameworks;
