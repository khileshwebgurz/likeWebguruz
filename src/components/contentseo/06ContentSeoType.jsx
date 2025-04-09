import Image from "next/image";
import semrush1 from "../../../public/images/contentseoimgages/content-tools-1.webp";
import semrush2 from "../../../public/images/contentseoimgages/content-tools-2.webp";
import semrush3 from "../../../public/images/contentseoimgages/content-tools-3.webp";
import semrush4 from "../../../public/images/contentseoimgages/content-tools-4.webp";
import semrush5 from "../../../public/images/contentseoimgages/content-tools-5.webp";
import semrush6 from "../../../public/images/contentseoimgages/content-tools-6.webp";
import semrush7 from "../../../public/images/contentseoimgages/content-tools-7.webp";
import semrush8 from "../../../public/images/contentseoimgages/content-tools-8.webp";

const tools = [
  { image: semrush1, alt: "Blogs Icon", name: "Blogs" },
  {
    image: semrush2,
    alt: "Product Descriptions Icon",
    name: "Product Descriptions",
  },
  { image: semrush3, alt: "Ebooks Icon", name: "Ebooks" },
  { image: semrush4, alt: "Articles Icon", name: "Articles" },
  { image: semrush5, alt: "Web Pages Icon", name: "Web Pages" },
  { image: semrush6, alt: "Landing Pages Icon", name: "Landing Pages" },
  { image: semrush7, alt: "Press Releases Icon", name: "Press Releases" },
  { image: semrush8, alt: "Whitepapers Icon", name: "Whitepapers" },
];

const ContentSeoType = () => {
  return (
    <section className="tools-main content-seo-types py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center heading-content">
            <h2>
              Different Types of{" "}
              <span className="d-inline-block">SEO Content We Provide</span>
            </h2>
            <span className="pt-2 pb-3 para">
              We specialize in creating diverse content types, including:
            </span>
            <ul className="toolsicon-list d-flex align-items-center">
              {tools.map((tool, index) => (
                <li key={index}>
                  <Image src={tool.image} alt={tool.alt} />
                  <p className="mb-0 pt-2">{tool.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSeoType;
