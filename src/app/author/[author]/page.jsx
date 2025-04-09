import React from "react";
import { fetchPosts } from "../../../../lib/fetchData";
import Pagination from "@/components/Pagination/page";
import Image from "next/image";
import Link from "next/link";
import "../../blogs/blogs.css";
import AuthorDetails from "@/components/blogComponents/AuthorDetails";
const page = async ({ params }) => {
  const path = params;

  const data = await fetchPosts();

  var authVal;
  const post_per_page = 10;
  const currentPage = path.pageNumber ? parseInt(path.pageNumber, 10) : 1;

  if (path.author == "mohitbhatt") {
    authVal = 4;
  } else if (path.author == "jassingh") {
    authVal = 2;
  } else if (path.author == "devteam") {
    authVal = 7;
  }

  const blogResponse = await fetch(
    `${process.env.NEXT_PUBLIC_USER_ID_API}/${authVal}`
  );
  const userData = await blogResponse.json();
  var count = 0;
  data.map((datas) => {
    if (datas.author === authVal) {
      count++;
    }
  });
  const newUrl = path.author;

  const posts = data.filter((item) => item.author === authVal);
  const totalPosts = posts.length;
  const totalPages = Math.ceil(totalPosts / post_per_page);

  // Paginated posts for the current page
  const paginatedPosts = posts.slice(
    (currentPage - 1) * post_per_page,
    currentPage * post_per_page
  );

  return (
    <>
      <section className="all-blog-head">
        <h1 className="text-center mb-4 color-wt">
          Author:{" "}
          {`${posts[0].yoast_head_json.schema["@graph"][4].image.caption}`}
        </h1>
      </section>
      <section className="author-section py-5">
        <div className="container">
          <AuthorDetails
            newUrl={newUrl}
            post={posts[0]}
            count={count}
            userData={userData}
          />
          <div className="row bog-post-main justify-content-center">
            <div className=" col-xs-12 bog-post bottom">
              {paginatedPosts.length > 0 ? (
                paginatedPosts.map((post, index) => {
                  const thumbnailUrl =
                    post.yoast_head_json.schema["@graph"][0].thumbnailUrl;
                  const hasImage = !!thumbnailUrl;
                  return (
                    <div
                      key={index}
                      className={`blog-image-content ${
                        !hasImage ? "no-image" : ""
                      }`}
                    >
                      {hasImage && (
                        <div className="image">
                          <Image
                            src={thumbnailUrl}
                            alt={post.title.rendered}
                            width={700}
                            height={340}
                            priority
                          />
                        </div>
                      )}
                      <div className="content">
                        <span className="technology text-capitalize">
                          {post.acf.list_all_category}
                        </span>
                        <h4>
                          <Link href={`/blog/${post.slug}`}>
                            {post.title.rendered}
                          </Link>
                        </h4>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: post.excerpt.rendered
                              .replace(/<p>/g, "")
                              .replace(/<\/p>/g, ""),
                          }}
                        />

                        <Link
                          href={`/blog/${post.slug}`}
                          className="link-btn about--btn"
                        >
                          Read More{" "}
                          <i
                            className="fa fa-angle-double-right"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>No matching posts found</p>
              )}
            </div>
          </div>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            author={path.author}
          />
        </div>
      </section>
    </>
  );
};

export default page;
export async function generateMetadata({ params }) {
  let title = "";
  let description = "";

  if (params.author === "mohitbhatt") {
    title = "Authors at WebGuruz - Mohit Bhatt";
    description =
      "Meet our authors, experts in Digital Marketing, Web Development, Web Design, HubSpot, and IT. Explore their insights and expertise on this page.";
  } else if (params.author === "jassingh") {
    title = "Jaswinder Singh - CEO at WebGuruz Technologies Pvt Ltd";
    description =
      "Jaswinder Singh is the CEO of WebGuruz Technologies Pvt Ltd., a renowned company offering Web-applications, HubSpot solutions, and Digital Marketing solutions.";
  } else if (params.author === "devteam") {
    title = "Authors at WebGuruz - Dev Team Experts in HubSpot and CMS";
    description =
      "Meet our Dev Team! Experts in HubSpot CRM, HubSpot services, CMS, web development, WordPress, Shopify, and more, sharing insights, tips, and the latest tech trends.";
  }

  return {
    title,
    description,
  };
}
