// /app/search/page.jsx

// I'm using this force-dynamic in route.js and search/page.js which helps me in making this one as dynamic not static as they both use request.url
// which used to geenerate page statically at build time .
export const dynamic = "force-dynamic";
import BlogNewsletter from "@/components/blogComponents/BlogNewsletter";
import ExploreTopic from "@/components/blogComponents/ExploreTopic";
import Image from "next/image";
import Link from "next/link";

// import "../blogs/blogs.css";

const SearchPage = async ({ searchTerms }) => {
  const searchTerm = searchTerms || "";

  // Fetch posts from your API
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/getdata?&limit=1000`);
  const { data } = await res.json(); // Replace with your API URL

  // Filter posts based on searchTerm
  const filteredPosts = data.filter(
    (post) =>
      post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.slug.toLowerCase().includes(searchTerm.toLowerCase())
    // The some method tests whether at least one element in the array passes the test implemented by the provided function
  );

  return (
    <>
    <section className="blog-single-post">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main">
            <h3>
              Search Results for: <span>{searchTerm}</span>
            </h3>
            <div className="row blog-image-content-center py-5">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post, index) => (
                  <div className="col-sm-4 col-xs-12 search-blog-card" key={index}>
                    <div className="image">
                      <Image
                        src={
                          post.yoast_head_json.schema["@graph"][0].thumbnailUrl
                        }
                        alt={`img${index + 1}`}
                        width={700}
                        height={340}
                      />
                    </div>
                    <div className="content">
                      <h3>
                        <Link href={`/blog/${post.slug}`}>
                          {post.title.rendered}
                        </Link>
                      </h3>
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
                      <span className="name">
                        {post.yoast_head_json.schema["@graph"][4].image.caption}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p>No results found for &quot;{searchTerm}&quot;.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <ExploreTopic/>
    <BlogNewsletter/> */}
    </>
  );
};

export default SearchPage;
