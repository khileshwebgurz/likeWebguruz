import React from "react";
import Image from "next/image";
import DeliverLeft from "../../../../public/images/organicseoimages/deliver-left.webp";
import OurArrow from "../../../../public/images/organicseoimages/out-arrow.webp";
import Link from "next/link";

const DeliverOrganic = () => {
  return (
    <section className="deliver-organic-sec-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="deliver-seo-left-section">
              <h2 className="heading_deliver_organic_ti">
                Improve Visibility with Our <span>Organic SEO Services</span>
              </h2>
              <p>
                At WebGuruz, our Organic SEO approach focuses on ranking your
                website at the top of search engine results poges (SERPs)
                through quality content, link building, and technical
                optimization. We use a combination of cutting-edge tools and
                data-driven insights to boost your rankings while providing a
                user-friendly experience. Our opproach is personalized, and we
                take into account your business needs and goals.
              </p>
              <div className="image-box-row">
                <figure>
                  <Image src={DeliverLeft} alt="Organic SEO Services" />
                  <span className="dots" data-speed="1.1"></span>
                </figure>
              </div>
              <Link href="/book-an-appointment" className="btn-deliver-wrap-set" aria-label="Connect with Webguruz">
                Let&apos;s Connect <Image src={OurArrow} alt="OurArrow" />
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-deliver-organic organic_Card1">
              <h3>Keyword Research and Strategy</h3>
              <p>
                We identify the most relevant keywords for your business,
                focusing on high search volume and low competition. By targeting
                the right keywords, we ensure your website attracts more
                qualified leads.
              </p>
            </div>

            <div className="card-deliver-organic organic_Card2">
              <h3>On-page SEO Optimization</h3>
              <p>
                Our team optimizes each page of your website, from titles and
                meta descriptions to headers and content, ensuring it aligns
                with best SEO practices for higher visibility on search engines.
              </p>
            </div>

            <div className="card-deliver-organic organic_Card3">
              <h3>Technical SEO Audits</h3>
              <p>
                We perform in-depth technical audits to fix issues such as slow
                load times, mobile responsiveness, and broken links. This
                ensures search engines can crawl your site easily, improving
                your rankings.
              </p>
            </div>

            <div className="card-deliver-organic organic_Card4">
              <h3>Content Creation and Optimization</h3>
              <p>
                Our experts develop high-quality, SEO-friendly content that not
                only ranks well but also resonates with your audience. Engaging
                content keeps visitors on your site longer and boosts your
                ranking.
              </p>
            </div>

            <div className="card-deliver-organic organic_Card1">
              <h3>Link Building and Backlinks</h3>
              <p>
                We help build a robust backlink profile by getting quality links
                from high-authority websites. This improves your website&apos;s
                credibility and helps you rank higher in organic search results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverOrganic;
