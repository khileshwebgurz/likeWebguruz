import React from "react";
import BlogSlider from "./BlogSlider";
import { fetchPosts } from "../../../lib/fetchData";
const TrendingTopic = async () => {
  const posts = await fetchPosts();

  if (posts.length === 0) {
    return <p>No posts available</p>;
  }

  return (
    <>
      <section className="trending-blog">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center heading-main">
              <h3>Trending Topics</h3>
              <p>Stay updated and join the buzz with these topics.</p>
            </div>
            <div className="col-12">
              <div className="blog-slides">
              <div className="swiper-button-prev trend-nav-button"></div>
              <div className="swiper-button-next trend-nav-button"></div>
                <BlogSlider posts={posts} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingTopic;
