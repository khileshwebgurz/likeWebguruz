import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { fetchPosts } from "../../../lib/fetchData";

const Featuredblog = async () => {
  const headerList = headers();
  // i imported headers() here as it is also part of server component, and whatver value is set to x-current-path will be accessible here.
  // so in server component we got the current url without even using usepathname().
  const pathname = headerList.get("x-current-path");
  let posts = await fetchPosts();

  // Filter posts if pathname includes "seo" or "voice-search"
  if (
    pathname.includes("seo") ||
    pathname.includes("voice-search") ||
    pathname.includes("search-engine-optimization")
  ) {
    posts = posts.filter((post) =>
      post.acf?.list_all_category?.some(
        (category) => category.toLowerCase() === "seo"
      )
    );
  } else if (
    pathname.includes("ppc") ||
    pathname.includes("ads") ||
    pathname.includes("pay-per-click")
  ) {
    posts = posts.filter((post) =>
      post.acf?.list_all_category?.some(
        (category) => category.toLowerCase() === "paid-marketing"
      )
    );
  } else if (
    pathname.includes("magento-development-services") ||
    pathname.includes("woocommerce-development-services") ||
    pathname.includes("ecommerce-development-services") ||
    pathname.includes("ecommerce-consulting-services") ||
    pathname.includes("ecommerce-web-design-services") ||
    pathname.includes("ecommerce-implementation-services") ||
    pathname.includes("ecommerce-maintenance-support") ||
    pathname.includes("shopify-development-services") ||
    pathname.includes("bigcommerce-development-services") ||
    pathname.includes("whmcs-development")
  ) {
    posts = posts.filter((post) =>
      post.acf?.list_all_category?.some(
        (category) => category.toLowerCase() === "ecommerce"
      )
    );
  } else if (pathname.includes("hubspot")) {
    posts = posts.filter((post) =>
      post.acf?.list_all_category?.some(
        (category) => category.toLowerCase() === "hubspot"
      )
    );
  } else if (
    pathname.includes("wordpress") ||
    pathname.includes("drupal-development") ||
    pathname.includes("web-development") ||
    pathname.includes("joomla") ||
    pathname.includes("keap") ||
    pathname.includes("squarespace") ||
    pathname.includes("webflow") ||
    pathname.includes("content-management-system")
  ) {
    posts = posts.filter((post) =>
      post.acf?.list_all_category?.some(
        (category) => category.toLowerCase() === "web-developments"
      )
    );
  } else if (pathname.includes("digital-marketing")) {
    posts = posts.filter((post) =>
      post.acf?.list_all_category?.some(
        (category) => category.toLowerCase() === "digital-marketing"
      )
    );
  }
  if (posts.length === 0) {
    return <p>No posts available</p>;
  }

  return (
    <div>
      <section className="featured-blog py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-5">
              <h2 className="pb-2">
                <span>Related</span> Blogs
              </h2>
              <span>Stay updated and join the buzz with these topics.</span>
            </div>
          </div>
          <div className="row blog-card-content">
            <div className="col-sm-6 col-xs-12 blog-sub left">
              {posts.slice(0, 2).map((post, index) => (
                <div className="blog-card" key={index}>
                  <div className="blogimage">
                    <Image
                      src={
                        post.yoast_head_json.schema["@graph"][0].thumbnailUrl
                      }
                      alt="img"
                      width={700}
                      height={340}
                    />
                  </div>
                  <div className="blog-content">
                    <span className="mb-2 d-inline-block">Blog </span>
                    <h6> {post.title.rendered}</h6>
                    <Link className="explore-btn" href={`/blog/${post.slug}`}>
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-sm-6 col-xs-12 blog-sub right">
              <div className="blog-card">
                <div className="blogimage">
                  <Image
                    src={
                      posts[2].yoast_head_json.schema["@graph"][0].thumbnailUrl
                    }
                    alt="img"
                    width={700}
                    height={340}
                  />
                </div>
                <div className="blog-content">
                  <span className="mb-2 d-inline-block">Blog </span>
                  <h6> {posts[2].title.rendered}</h6>
                  <Link className="explore-btn" href={`/blog/${posts[2].slug}`}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featuredblog;
