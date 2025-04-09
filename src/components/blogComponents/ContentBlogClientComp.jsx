"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ShareIcons from "./ShareIcons";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import RightBlogForm from "./RightBlogForm";
import AuthorDetails from "./AuthorDetails";
import BlogCta from "./BlogCta";

const ContentBlogClientComp = ({
  post,
  categoryLinks,
  userData,
  count,
  categoryCounts,
}) => {
  const [activeSection, setActiveSection] = useState(null);
  const router = useRouter();
  const [likes, setLikes] = useState(post.initialLikes || 0);
  const [liked, setLiked] = useState(false);

  const newUrl = post.yoast_head_json.schema["@graph"][4].image.caption
    .replace(" ", "")
    .toLowerCase();

  useEffect(() => {
    const handleScroll = () => {
      {
        post.acf.post_inner_details.length > 0 &&
          post.acf.post_inner_details.forEach((detail, index) => {
            const section = document.getElementById(`section-${index}`);
            if (section) {
              const rect = section.getBoundingClientRect();
              if (rect.top <= 300 && rect.bottom >= 30) {
                setActiveSection(index);
              }
            }
          });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [post.acf.post_inner_details]);

  const scrollToSection = (index) => {
    const section = document.getElementById(`section-${index}`);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 90, // Adjust scroll position if needed
        behavior: "smooth",
      });
    }
  };

  const handleLikeClick = async () => {
    if (liked) return; 
    try {
      const res = await fetch("/api/Likes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId: post._id }),
      });

      const data = await res.json();
      console.log('my data is ?>>>',data)

      if (data.success) {
        setLikes(data.totalLikes);
        setLiked(true);
      } else {
        alert(data.message); 
      }
      console.log('my likes is >>>>', likes ,'and ',liked)
    } catch (err) {
      console.error("Like failed:", err);
    }
  };

  
  return (
    <div className="row">
      <div className="col-lg-9 col-md-8 col-12" key={post._id}>
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-start ">
            <Image
              src={post.yoast_head_json.schema["@graph"][0].thumbnailUrl}
              width={1200}
              height={1200}
              alt="singleblog"
              priority
            />
            <div className="authorized-info-by">
              <div className="author-name-view">
                <div className="author-content-img d-flex align-items-center mb-2">
                  <div className="autor-img-text">
                    {post.yoast_head_json.schema["@graph"][4] && (
                      <Image
                        src={post.yoast_head_json.schema["@graph"][4].image.url}
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
                  <FontAwesomeIcon onClick={handleLikeClick} icon={faThumbsUp} />
                  <span className="wgz-view">{likes}</span>
                  <FontAwesomeIcon icon={faEye} aria-label="Count" />{" "}
                  <span className="wgz-view"> {post.wgt_post_views_count}</span>
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
            <h1 className="mb-3 inner-heading">{post.title.rendered}</h1>
          </div>
        </div>
        {post.acf.post_inner_details.length > 0 && (
          <div className="inner-description">
            {post.acf.post_inner_details.map((detail, index) => (
              <div key={index}>
                {detail.heading && (
                  <h4 id={`section-${index}`}>{detail.heading}</h4>
                )}
                <div dangerouslySetInnerHTML={{ __html: detail.description }} />
              </div>
            ))}
          </div>
        )}
        <section className="blogging-banner blog-single-banner mb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="singleblog-img-content d-flex align-items-center">
                  <div className="peraph-lists">
                    {post?.acf?.bottom_form?.bottom_form_data?.length > 0 ? (
                      post.acf.bottom_form.bottom_form_data.map(
                        (detail, index) => (
                          <span key={index} className="detail-text">
                            {detail.bottom_form_text}
                          </span>
                        )
                      )
                    ) : (
                      <>
                        <span className="detail-text">
                          Bring Your Brand to Life With
                        </span>

                        <span className="detail-text">
                          Innersive & Interactive Storytelling
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="new-single-form">
                  <BlogCta />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="blog-single-categories">
          <h4>Tags</h4>
          <ul className="d-flex flex-wrap text-capitalize single-cat">
            {Object.keys(categoryLinks).map((category) => (
              <li key={category}>
                <Link href={categoryLinks[category]}>
                  {category.replace(/-/g, " ")} ({categoryCounts[category] || 0}
                  )
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <ShareIcons
          title={post.title.rendered}
          thumbnailUrl={post.yoast_head_json.schema["@graph"][0].thumbnailUrl}
        />
        <AuthorDetails
          newUrl={newUrl}
          post={post}
          count={count}
          userData={userData}
        />
      </div>
      <div className="col-lg-3 col-md-4 col-xs-12">
        <div className="categories-main single-page-category">
          <SearchBar />
          <div className="categories">
            <h4>Categories</h4>
            <select
              onChange={(e) => {
                if (e.target.value) {
                  router.push(e.target.value);
                }
              }}
              defaultValue=""
            >
              <option value="" disabled>
                Select a category
              </option>
              {Object.keys(categoryLinks).map((category) => (
                <option key={category} value={categoryLinks[category]}>
                  {category.replace(/-/g, " ")} ({categoryCounts[category] || 0}
                  )
                </option>
              ))}
            </select>
          </div>
          <div className="enabled-form">
            <RightBlogForm />
          </div>
        </div>
        <div className="table-content">
          <h4>Table of Contents</h4>
          <ul>
            {post.acf.post_inner_details.length > 0 && (
              <div className="inner-description">
                {post.acf.post_inner_details.map((detail, index) => (
                  <li
                    key={index}
                    className={activeSection === index ? "content-active" : ""}
                  >
                    {detail.heading && (
                      <span
                        style={{ cursor: "pointer" }} // Make it look like a link
                        onClick={() => scrollToSection(index)}
                      >
                        {detail.heading}
                      </span>
                    )}
                  </li>
                ))}
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContentBlogClientComp;
