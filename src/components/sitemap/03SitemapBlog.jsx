import Link from "next/link";
import { fetchPosts } from "../../../lib/fetchData";

const SitemapBlog = async () => {
  const res = await fetchPosts();
  return (
    <div className="sitemap-blog-content pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-4">Blogs</h2>
            {res.slice(0, 5).map((post, index) => (
              <div className="listing-blogs" key={index}>
                <ul className="sitemap-blog-link">
                  <li>
                    <Link className="sitemap-blogs" href={`/blog/${post.slug}`}>
                      {post.title.rendered}
                    </Link>
                  </li>
                </ul>
              </div>
            ))}

            <h2 className="my-4">Infographics</h2>
            <ul className="sitemap-blog-link">
              <li>
                <Link href="/infographic/worried-about-the-rising-web-development-costs" className="link">
                Worried about the rising web development costs ?
                </Link>
              </li>
              <li className="not-hover">
                <Link href="/infographic/local-seo-guide-2023" className="link">
                Local SEO in 2023 : The Ultimate Guide to Boost Your Business
                </Link>
              </li>
              <li>
                <Link href="/infographic/the-chatbot-industry-overview" className="link">
                The ChatBot Industry: An Overview
                </Link>
              </li>
              <li>
                <Link href="/infographic/role-of-web-design-in-branding" className="link">
                The Role of Web Design in Branding
                </Link>
              </li>
              <li>
                <Link href="/infographic/instagram-in-your-social-media-marketing-strategy" className="link">
                Instagram in your Social Media Marketing Strategy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapBlog;
