import Image from 'next/image';
import techseo1 from '../../../../public/images/seoimages/techseo-1.svg'
import techseo2 from '../../../../public/images/seoimages/techseo-2.svg'
import techseo3 from '../../../../public/images/seoimages/techseo-3.svg'
import techseo4 from '../../../../public/images/seoimages/techseo-4.svg'
import techseo5 from '../../../../public/images/seoimages/techseo-5.svg'
import techseo6 from '../../../../public/images/seoimages/techseo-6.svg'
import techseo7 from '../../../../public/images/seoimages/techseo-7.svg'

const SeoProfessional = () => {
  return (
    <>
      <section className="seoprofessional-main py-5 text-center counter-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main mb-3">
              <h2>
              Our SEO <span> Services</span>
              </h2>
              <span className='d-inline-block'>
              Our comprehensive suite of SEO services includes: 
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3  col-xs-12">
              <div className="seo-card flexd-column d-flex align-items-center">
                <Image src={techseo1} alt="ON Page SEO" />
                <h3>ON Page SEO</h3>
                <p>Optimizing website content, meta tags, and internal linking to improve relevance and search engine rankings.</p>
                {/* <button className="explore-btn">Get Started</button> */}
              </div>
            </div>
            <div className="col-sm-3 col-xs-12">
              <div className="seo-card flexd-column d-flex align-items-center">
                <Image src={techseo2} alt="OFF Page SEO" />
                <h3>OFF Page SEO</h3>
                <p>Building authoritative backlinks and improving online reputation through targeted outreach and content marketing.</p>
                {/* <button className="explore-btn">Get Started</button> */}
              </div>
            </div>
            <div className="col-sm-3 col-xs-12">
              <div className="seo-card flexd-column d-flex align-items-center">
                <Image src={techseo3} alt="Technical SEO" />
                <h3>Technical SEO </h3>
                <p>Ensuring your website is fast, secure, mobile-friendly, and easy for search engines to crawl.</p>
                {/* <button className="explore-btn">Get Started</button> */}
              </div>
            </div>
            <div className="col-sm-3 col-xs-12">
              <div className="seo-card flexd-column d-flex align-items-center">
                <Image src={techseo4} alt="Local SEO" />
                <h3> Local SEO</h3>
                <p>Enhancing your local search presence by optimizing your Google Business profile and other local directories.</p>
                {/* <button className="explore-btn">Get Started</button> */}
              </div>
            </div>
            <div className="col-sm-3 col-xs-12 mt-3">
              <div className="seo-card flexd-column d-flex align-items-center">
                <Image src={techseo6} alt="E-commerce SEO" />
                <h3> E-commerce SEO</h3>
                <p>Boosting your product pages and ensuring your online store ranks highly for relevant searches.  </p>
                {/* <button className="explore-btn">Get Started</button> */}
              </div>
            </div>
            <div className="col-sm-3 col-xs-12 mt-3">
              <div className="seo-card flexd-column d-flex align-items-center">
                <Image src={techseo5} alt="SEO Audits" />
                <h3> SEO Audits</h3>
                <p>Analyzing your current SEO performance to identify areas for improvement and growth.</p>
                {/* <button className="explore-btn">Get Started</button> */}
              </div>
            </div>
            <div className="col-sm-3 col-xs-12 mt-3">
              <div className="seo-card flexd-column d-flex align-items-center">
                <Image src={techseo7} alt="SEO Content" />
                <h3> SEO Content</h3>
                <p>Crafting keyword-optimized content that resonates with your audience and ranks well on search engines.</p>
                {/* <button className="explore-btn">Get Started</button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SeoProfessional;
