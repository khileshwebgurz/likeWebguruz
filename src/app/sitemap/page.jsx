import SitemapBanner from "@/components/sitemap/01SitemapBanner";
import "./style.css";
import SitemapContent from "@/components/sitemap/02SitemapContent";
import SitemapBlog from "@/components/sitemap/03SitemapBlog";
const page = () => {
  return (
    <>
      <SitemapBanner />
      <SitemapContent />
      <SitemapBlog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Sitemap | WebGuruz | Websites & Digital Marketing Strategies",
  description:
    "Explore our sitemap for easy navigation, discover hidden gems, and access information about pages, videos, and files on our site and their relationships.",
};