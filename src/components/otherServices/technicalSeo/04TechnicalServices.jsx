import React from "react";
import Image from "next/image";
import afordableseoone from "../../../../public/images/technicalimages/techservice1.webp";
import afordableseotwo from "../../../../public/images/technicalimages/techservice2.webp";
import afordableseothree from "../../../../public/images/technicalimages/techservice3.webp";
import afordableseofour from "../../../../public/images/technicalimages/techservice4.webp";
import afordableseofive from "../../../../public/images/technicalimages/techservice5.webp";
import afordableseosix from "../../../../public/images/technicalimages/techservice6.webp";

const TechnicalServices = () => {
  return (
    <>
      <section className="local-service technical-service py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h2>
                Our Technical <span>SEO Services</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-xs-12">
              <div className="seo-card text-center p-3 mb-4">
                <div className="seoservice-icon">
                  <Image src={afordableseoone} alt="Website Audits Icon" />
                </div>
                <div className="content">
                  <h3 className="mb-3">Website Audits</h3>
                  <p>
                    We conduct in-depth audits to identify technical issues such
                    as broken links, slow loading pages, or crawl errors that
                    might be hindering your website&apos;s performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="seo-card text-center p-3 mb-4">
                <div className="seoservice-icon">
                  <Image src={afordableseotwo} alt="Mobile Optimization Icon" />
                </div>
                <div className="content">
                  <h3 className="mb-3">Mobile Optimization</h3>
                  <p>
                    Ensuring your site is mobile-friendly is crucial for SEO. We
                    optimize your site for mobile devices to enhance user
                    experience and ranking.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="seo-card text-center p-3 mb-4">
                <div className="seoservice-icon">
                  <Image src={afordableseothree} alt="Page Speed Optimization Icon" />
                </div>
                <div className="content">
                  <h3 className="mb-3">Page Speed Optimization</h3>
                  <p>
                    Faster websites rank better. We enhance your site&apos;s speed to
                    meet Google&apos;s requirements, improving both user experience
                    and SEO performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="seo-card text-center p-3 mb-4">
                <div className="seoservice-icon">
                  <Image src={afordableseofour} alt="Structured Data Markup Icon" />
                </div>
                <div className="content">
                  <h3 className="mb-3">Structured Data Markup</h3>
                  <p>
                    By implementing schema markup, we help search engines
                    understand your content better, leading to improved rankings
                    and visibility in search results.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="seo-card text-center p-3 mb-4">
                <div className="seoservice-icon">
                  <Image src={afordableseofive} alt="Sitemap Creation Icon" />
                </div>
                <div className="content">
                  <h3 className="mb-3">XML Sitemap Creation</h3>
                  <p>
                    We create XML sitemaps that help search engines crawl and
                    index your website&apos;s pages effectively, ensuring maximum
                    visibility.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="seo-card text-center p-3 mb-4">
                <div className="seoservice-icon">
                  <Image src={afordableseosix} alt="HTTPS Icon" />
                </div>
                <div className="content">
                  <h3 className="mb-3">HTTPS Implementation</h3>
                  <p>
                    Security is a ranking factor. We help your site migrate to
                    HTTPS, ensuring that both visitors and search engines trust
                    your website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnicalServices;
