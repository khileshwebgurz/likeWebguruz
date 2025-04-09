import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import "../../../../blogs/blogs.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import ExploreTopic from "@/components/blogComponents/ExploreTopic";
import BlogNewsletter from "@/components/blogComponents/BlogNewsletter";
import HomeHiring from "@/components/PopUpForms/HomeHiring";

// Constants for pagination
const POSTS_PER_PAGE = 10;

function normalizeString(str) {
  return str.toLowerCase().replace(/-/g, " ").replace(/\s+/g, " ").trim();
}

// Fetch posts from the API
async function getPost(selectedCategory) {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/getdata?&limit=1000`
  ); // Fetching all posts with a high limit
  const { data } = await res.json();

  if (!data || data.length === 0) {
    return null;
  }

  const category = normalizeString(selectedCategory?.category || "");

  // Filter posts based on the selected category
  const filteredPosts = data.filter((post) => {
    if (post.acf && post.acf.list_all_category) {
      const postTags = post.acf.list_all_category.map((tag) =>
        normalizeString(tag)
      );
      return postTags.includes(category);
    }
    return false;
  });

  return filteredPosts;
}

const Page = async ({ params }) => {
  const selectedCategory = params.category; // Get the selected category from params
  const currentPage = parseInt(params.pageNumber || "1", 10); // Get the current page number from params

  // Fetch posts and apply filtering
  const posts = await getPost({ category: selectedCategory });

  if (!posts || posts.length === 0) {
    notFound();
  }

  // Calculate pagination
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(startIndex, endIndex); // Slice the posts for the current page

  return (
    <>
      <section className="blog-categories">
        <div className="container">
          <div className="col-sm-12 col-xs-12">
            <h1 className="cate-heading">{params.category}</h1>
            <ul>
              <li>
                <Link href="/blogs">
                  <FontAwesomeIcon icon={faCaretLeft} />
                </Link>
              </li>
              <li>
                <Link href="/categories/web-design">Web Design</Link>
              </li>
              <li>
                <Link href="/categories/online-reputation-management">
                  Online Reputation Management
                </Link>
              </li>
              <li>
                <Link href="/categories/hubspot">Hubspot</Link>
              </li>
              <li>
                <Link href="/categories/digital-marketing">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/categories/google-remarketing">
                  Google Remarketing
                </Link>
              </li>
              <li>
                <Link href="/categories/artificial-intelligence">
                  Artificial Intelligence
                </Link>
              </li>
            </ul>
          </div>
          <div className="row">
            {paginatedPosts.map((post, index) => (
              <div key={index} className="col-sm-4 col-xs-12">
                <div className="blog-card-sub">
                  <div className="image">
                    <Image
                      src={
                        post.yoast_head_json.schema["@graph"][0].thumbnailUrl
                      }
                      alt={post.title}
                      width={700}
                      height={340}
                    />
                  </div>

                  <div className="content">
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
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="arrow-right"
                        className="svg-inline--fa fa-arrow-right ps-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination-controls">
            {currentPage > 1 && (
              <Link
                href={
                  currentPage === 2
                    ? `/categories/${selectedCategory}`
                    : `/categories/${selectedCategory}/page/${currentPage - 1}`
                }
                className="pagination-link"
              >
                <FontAwesomeIcon icon={faCaretLeft} height={"1em"} />
              </Link>
            )}
            {endIndex < posts.length && (
              <Link
                href={`/categories/${selectedCategory}/page/${currentPage + 1}`}
                className="pagination-link"
              >
                <FontAwesomeIcon icon={faCaretRight} height={"1em"} />
              </Link>
            )}
          </div>
        </div>
      </section>
      {/* <ExploreTopic />
      <BlogNewsletter /> */}
      <HomeHiring />
    </>
  );
};

export default Page;
export async function generateMetadata({ params }) {
  const { category, pageNumber } = params;

  const title =
    normalizeString(category)[0].toUpperCase() +
    normalizeString(category).slice(1);
  return {
    title: title + " - Page " + pageNumber + " - WebGuruz Technologies Pvt Ltd",
    description:"",
    robots: {
      index: false,
      follow: false,
    },
  };
}
