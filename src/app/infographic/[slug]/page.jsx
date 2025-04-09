import "../../infographics/style.css";
import "../../blogs/blogs.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "@/components/blogComponents/SearchBar";
import CategoryInfo from "@/components/blogComponents/CategoryInfo";
import ShareIcons from "@/components/blogComponents/ShareIcons";
import RightBlogForm from "@/components/blogComponents/RightBlogForm";
import AuthorDetails from "@/components/blogComponents/AuthorDetails";
import NewBlogSubscriber from "@/components/blogComponents/NewBlogSubscriber";
import TrendingInfographic from "@/components/blogComponents/TrendingInfographic";
const page = async ({ params }) => {
  const { slug } = params;
  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/getdata?&limit=1000`
  );

  const { data } = await response.json();
  if (!response.ok || !data) {
    throw new Error("Failed to fetch posts");
  }

  const post = data.find((p) => p.slug === slug);

  var userValue = post.author;
  const blogResponse = await fetch(
    `${process.env.NEXT_PUBLIC_USER_ID_API}/${userValue}`
  );
  const userData = await blogResponse.json();
  var count = 0;
  data.map((datas) => {
    if (datas.author === userValue) {
      count++;
    }
  });
  const newUrl = post.yoast_head_json.schema["@graph"][4].image.caption
    .replace(" ", "")
    .toLowerCase();

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* banner of infographic */}

      <section className="infographic-banner py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 info-banner-content inner-page text-center">
              <h2 className="color-wt">Top Infographic By Our Experts</h2>
            </div>
          </div>
        </div>
      </section>

      {/* banner of infographic */}
      <section className="information-inner-page py-5 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="info-main-image">
                <Image
                  src={post.yoast_head_json.schema["@graph"][0].thumbnailUrl}
                  alt="Infographic Image"
                  height={900}
                  width={900}
                  priority
                />
              </div>
              <div className="authorized-info-by">
                <div className="author-name-view">
                  <div className="author-content-img d-flex align-items-center mb-2">
                    <div className="autor-img-text">
                      {post.yoast_head_json.schema["@graph"][4] && (
                        <Image
                          src={
                            post.yoast_head_json.schema["@graph"][4].image.url
                          }
                          alt="Author"
                          width={20}
                          height={20}
                        />
                      )}
                    </div>
                    {post.yoast_head_json.schema["@graph"][4] && (
                      <span>
                        By{" "}
                        {post.yoast_head_json.schema["@graph"][4].image.caption}
                      </span>
                    )}
                  </div>
                  <div className="views-count">
                    <FontAwesomeIcon icon={faEye} aria-label="Count" />{" "}
                    <span className="wgz-view">
                      {" "}
                      {post.wgt_post_views_count}
                    </span>
                  </div>
                </div>
                <div className="date-issued">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    height={18}
                    aria-label="Calendar"
                  />
                  {post.yoast_head_json.schema["@graph"][0].datePublished.slice(
                    0,
                    10
                  )}
                </div>
              </div>
              <div className="information-content">
                <h2>{post.title.rendered}</h2>
                <Image
                  src={post.acf.inforgaphic_image}
                  alt="Infographic Image"
                  height={900}
                  width={900}
                  style={{ height: "1000px", width: "500px" }}
                  priority
                />
              </div>
              <ShareIcons
                title={post.title.rendered}
                thumbnailUrl={
                  post.yoast_head_json.schema["@graph"][0].thumbnailUrl
                }
              />
              <AuthorDetails
                newUrl={newUrl}
                post={post}
                count={count}
                userData={userData}
              />
            </div>

            <div className="search-and-category col-md-4 pt-0 pb-5 ">
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
      </section>
      <NewBlogSubscriber />
      <TrendingInfographic />
    </>
  );
};

export default page;
export async function generateMetadata({ params }) {
  const { slug } = params;

  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/getdata?&limit=1000`
  );
  const { data } = await response.json();

  if (!response.ok || !data) {
    throw new Error("Failed to fetch posts");
  }

  const post = data.find((p) => p.slug === slug);
  return {
    title: post?.yoast_head_json.title || "Default Title",
    description: post?.yoast_head_json.description || "Default Description",
  };
}
