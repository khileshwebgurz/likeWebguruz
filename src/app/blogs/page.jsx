export const dynamic = "force-dynamic";
import "./blogs.css";
import AllPost from "../../components/blogComponents/02AllPosts";
import Link from "next/link";

import blogcat1 from "../../../public/images/blogimages/blog-cat-1.webp";
import blogcat2 from "../../../public/images/blogimages/blog-cat-2.webp";
import blogcat3 from "../../../public/images/blogimages/blog-cat-3.webp";
import blogcat4 from "../../../public/images/blogimages/blog-cat-4.webp";
import blogcat5 from "../../../public/images/blogimages/blog-cat-5.webp";
import blogcat6 from "../../../public/images/blogimages/blog-cat-6.webp";
import blogcat7 from "../../../public/images/blogimages/blog-cat-7.webp";
import blogcat8 from "../../../public/images/blogimages/blog-cat-8.webp";
import Image from "next/image";
import { fetchBlogPosts } from "../../../lib/blogging";
import NewBlogSubscriber from "@/components/blogComponents/NewBlogSubscriber";
import TrendingTopic from "@/components/blogComponents/TrendingTopic";
import HomeTestimonial from "../home2/components/homeComponents/07HomeTestimonial";
import HomeHiring from "@/components/PopUpForms/HomeHiring";

const page = async ({ searchParams }) => {
  const params = await searchParams;
  const page = params.page ? parseInt(params.page) : 1;
  const limit = 10;

  // Use the fetchBlogPosts function
  const { data, currentPage, totalPages } = await fetchBlogPosts(page);

  return (
    <>
      <section className="all-blog-head">
        <h1 className="text-center mb-4 color-wt">Top Blog By Our Experts</h1>
      </section>
      <section className="blog-content-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 text-center">
              <div className="category-heading">
                <h4>Most Popular Categories</h4>
              </div>
              <ul className="new-categories">
                <li>
                  <Link href="/categories/wordpress">
                    <Image src={blogcat1} alt="Our Categories" />
                    Wordpress
                  </Link>
                </li>
                <li>
                  <Link href="/categories/web-developments">
                    <Image src={blogcat2} alt="Our Categories" />
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/categories/web-design">
                    <Image src={blogcat3} alt="Our Categories" />
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link href="/categories/web-application-development">
                    <Image src={blogcat4} alt="Our Categories" />
                    Web Application Development
                  </Link>
                </li>
                <li>
                  <Link href="/categories/titanium-development">
                    <Image src={blogcat5} alt="Our Categories" />
                    Titanium Development
                  </Link>
                </li>

                <li>
                  <Link href="/categories/social-media-marketing">
                    <Image src={blogcat6} alt="Our Categories" />
                    Social Media Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/categories/shopify">
                    <Image src={blogcat7} alt="Our Categories" />
                    Shopify
                  </Link>
                </li>
                <li>
                  <Link href="/categories/seo">
                    <Image src={blogcat8} alt="Our Categories" />
                    SEO
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <AllPost
            posts={data}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
        <NewBlogSubscriber />
        <TrendingTopic />
        <HomeTestimonial />
        <HomeHiring/>
      </section>
    </>
  );
};

export default page;
export const metadata = {
  title: "Browse and Read Our Latest Web Technology Blogs - WebGuruz",
  description:
    "Read insightful articles on web development, digital marketing, SEO, PPC, and SMO at WebGuruz Blogs. Stay updated with the latest trends to boost your business.",
};
