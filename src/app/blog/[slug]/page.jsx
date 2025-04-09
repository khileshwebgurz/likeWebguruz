import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import ContentBlogClient from "../../../components/blogComponents/ContentBlogClient";
import NewBlogSubscriber from "@/components/blogComponents/NewBlogSubscriber";
import '../../blogs/blogs.css'
import HomeHiring from "@/components/PopUpForms/HomeHiring";
const categoryLinks = {
  "artificial-intelligence": "/categories/artificial-intelligence",
  blogging: "/categories/blogging",
  "brand-marketing": "/categories/brand-marketing",
  "content-marketing": "/categories/content-marketing",
  "digital-marketing": "/categories/digital-marketing",
  ecommerce: "/categories/ecommerce",
  "email-marketing": "/categories/email-marketing",
  "facebook-marketing": "/categories/facebook-marketing",
  frameworks: "/categories/frameworks",
  "full-stack-javascript-development":
    "/categories/full-stack-javascript-development",
  "google-remarketing": "/categories/google-remarketing",
  hubspot: "/categories/hubspot",
  infographic: "/categories/infographic",
  infusionsoft: "/categories/infusionsoft",
  "internet-marketing": "/categories/internet-marketing",
  "ios-app": "/categories/ios-app",
  "iphone-app-development": "/categories/iphone-app-development",
  "java-development": "/categories/java-development",
  joomla: "/categories/joomla",
  "linkedin-marketing": "/categories/linkedin-marketing",
  "logo-design": "/categories/logo-design",
  magento: "/categories/magento",
  "main-post": "/categories/main-post",
  "mobile-application-development":
    "/categories/mobile-application-development",
  "office-culture": "/categories/office-culture",
  "online-reputation-management": "/categories/online-reputation-management",
  orm: "/categories/orm",
  "paid-marketing": "/categories/paid-marketing",
  php: "/categories/php",
  seo: "/categories/seo",
  shopify: "/categories/shopify",
  "social-media-marketing": "/categories/social-media-marketing",
  "titanium-development": "/categories/titanium-development",
  "web-application-development": "/categories/web-application-development",
  "web-design": "/categories/web-design",
  "web-developments": "/categories/web-developments",
  wordpress: "/categories/wordpress",
};
const categoryCounts = {
  "artificial-intelligence": 1,
  blogging: 9,
  "brand-marketing": 5,
  "content-marketing": 4,
  "digital-marketing": 30,
  ecommerce: 12,
  "email-marketing": 1,
  "facebook-marketing": 3,
  frameworks: 4,
  "full-stack-javascript-development": 2,
  "google-remarketing": 7,
  hubspot: 32,
  infographic: 18,
  infusionsoft: 2,
  "internet-marketing": 5,
  "ios-app": 2,
  "iphone-app-development": 3,
  "java-development": 2,
  joomla: 1,
  "linkedin-marketing": 2,
  "logo-design": 1,
  magento: 5,
  "main-post": 2,
  "mobile-application-development": 10,
  "office-culture": 2,
  "online-reputation-management": 2,
  orm: 1,
  "paid-marketing": 9,
  php: 1,
  seo: 26,
  shopify: 9,
  "social-media-marketing": 4,
  "titanium-development": 2,
  "web-application-development": 2,
  "web-design": 10,
  "web-developments": 16,
  wordpress: 12,
};
const Page = async ({ params }) => {
  const { slug } = params;

  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/getdata?&limit=1000`
  );
  const { data } = await response.json();

  if (!response.ok || !data) {
    throw new Error("Failed to fetch posts");
  }

  const post = data.find((p) => p.slug === slug);
  if (post.acf && post.acf.inforgaphic_image) {
    redirect(`/infographic/${slug}`);
  }
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

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="all-blog-head">
        <h2 className="text-center mb-4 color-wt">Top Blog By Our Experts</h2>
      </section>
      <section className="single-blog-main py-5">
        <div className="container">
          <ContentBlogClient
            post={post}
            categoryLinks={categoryLinks}
            userData={userData}
            count={count}
            categoryCounts={categoryCounts}
          />
        </div>
      </section>
      <NewBlogSubscriber/>
      <section className="latest-blog py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h2>
                Our Latest <span>Blog</span>
              </h2>
              <p>Stay updated and join the buzz with these topics.</p>
            </div>
            {data.slice(0, 3).map((latestPost, index) => (
              <div className="col-sm-4 col-xs-12" key={latestPost.slug}>
                <div className="blog-card-main">
                  <div className="image">
                    <Image
                      src={
                        latestPost.yoast_head_json.schema["@graph"][0]
                          .thumbnailUrl
                      }
                      alt={`img${index + 1}`}
                      width={700}
                      height={340}
                    />
                  </div>
                  <div className="content">
                    <ul>
                      <li>
                        <p>
                          {
                            latestPost.yoast_head_json.schema["@graph"][4].image
                              .caption
                          }
                        </p>
                      </li>
                      <li>
                        <p>
                          {latestPost.yoast_head_json.schema[
                            "@graph"
                          ][0].datePublished.slice(0, 10)}
                        </p>
                      </li>
                      <li>
                        <p>7 min read</p>
                      </li>
                    </ul>
                    <h4>
                      <Link href={`/blog/${latestPost.slug}`}>
                        {latestPost.title.rendered}
                      </Link>
                    </h4>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: latestPost.excerpt.rendered
                          .replace(/<p>/g, "")
                          .replace(/<\/p>/g, ""),
                      }}
                    />
                    <Link
                      href={`/blog/${latestPost.slug}`}
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
                      </svg>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeHiring/>
    </>
  );
};

export default Page;

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
