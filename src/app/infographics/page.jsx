import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "@/components/blogComponents/SearchBar";
import "./style.css";
import "../blogs/blogs.css";
import CategoryInfo from "@/components/blogComponents/CategoryInfo";
import HomeTestimonial from "../home2/components/homeComponents/07HomeTestimonial";
import RightBlogForm from "@/components/blogComponents/RightBlogForm";
import TrendingInfographic from "@/components/blogComponents/TrendingInfographic";

const page = async ({ searchParams }) => {
  const params = await searchParams;
  const page = params.page ? parseInt(params.page) : 1;
  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/getdata?page=${page}&limit=${1000}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await response.json();
  const filteredPosts = data.filter(
    (post) =>
      post.acf &&
      post.acf.inforgaphic_image &&
      post.acf.inforgaphic_image !== false
  );
  return (
    <>
      <section className="all-blog-head">
        <h1 className="text-center mb-4 color-wt">Infographics</h1>
      </section>
      <div className="infographics-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-12">
              <div className="row">
                {filteredPosts.map((post, index) => (
                  <div key={index} className="col-md-6 col-12 mb-4 mb-md-5">
                    <div className="infographics-card-main">
                      <div className="info-img">
                        <Link href={`/infographic/${post.slug}`}>
                          <Image
                            src={
                              post.yoast_head_json.schema["@graph"][0]
                                .thumbnailUrl
                            }
                            alt="Infographic Image"
                            height={1200}
                            width={1200}
                          />
                        </Link>
                      </div>
                      <div className="infor-title">
                        <Link href={`/infographic/${post.slug}`}>
                          <h4>{post.title.rendered}</h4>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="search-and-category infor aside">
                {/* Additional content for the aside */}
                <SearchBar />
                <div className="categories-main">
                  <CategoryInfo />
                  <div className="enabled-form">
                    <RightBlogForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TrendingInfographic />
      <HomeTestimonial />
    </>
  );
};

export default page;
export const metadata = {
  title: "Explore Top Infographics by WebGuruz for Clear Data Insights",
  description:
    "View top infographics by WebGuruz, designed to simplify complex data and deliver clear, impactful insights for easy understanding and effective communication.",
};
