import { notFound } from "next/navigation";
import ClientPostList from "./ClientPostList"; // Import the new client component
import "../../blogs/blogs.css";
import BlogNewsletter from "@/components/blogComponents/BlogNewsletter";
import ExploreTopic from "@/components/blogComponents/ExploreTopic";
import HomeHiring from "@/components/PopUpForms/HomeHiring";
const POSTS_PER_PAGE = 10;

function normalizeString(str) {
  return str.toLowerCase().replace(/-/g, " ").replace(/\s+/g, " ").trim();
}

// Fetch posts from the API
async function getPost(selectedCategory) {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/getdata?&limit=1000`
  );
  const { data } = await res.json();

  if (!data || data.length === 0) {
    return null;
  }

  const category = normalizeString(selectedCategory?.category || "");
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
  const selectedCategory = params.category;
  const currentPage = parseInt(params.pageNumber || "1", 10);

  const posts = await getPost({ category: selectedCategory });

  if (!posts || posts.length === 0) {
    notFound();
  }

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(startIndex, endIndex);

  return (
    <>
      <section className="blog-categories">
        <div className="container">
          <h1 className="cate-heading">{params.category}</h1>
          <ClientPostList
            paginatedPosts={paginatedPosts}
            selectedCategory={selectedCategory}
            currentPage={currentPage}
            totalPosts={posts.length}
            postsPerPage={POSTS_PER_PAGE}
          />
        </div>
      </section>
      {/* <ExploreTopic />
      <BlogNewsletter /> */}
      <HomeHiring/>
    </>
  );
};

export default Page;
export async function generateMetadata({ params }) {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/getdata?&limit=1000`
  );
  const { data } = await res.json();

  if (!data || data.length === 0) {
    return null;
  }

  const { category } = params;

  const title =
    normalizeString(category)[0].toUpperCase() +
    normalizeString(category).slice(1);
  return {
    title: title + " - " + "WebGuruz Technologies Pvt Ltd",
  
  };
}