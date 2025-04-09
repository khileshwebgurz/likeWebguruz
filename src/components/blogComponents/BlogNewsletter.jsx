// import BlogSubscribeForm from "@/utils/formsHubspot/BlogSubscribeForm";
import NewLetterLogo from "../../../public/images/newLetter-logo.webp";
import Image from "next/image";
// import HomeClient from "../homeComponents/clientcomp/HomeClient";
import BlogSubscribeForm from "@/utils/formsHubspot/BlogSubscribeForm";
const BlogNewsletter = () => {
  return (
    <>
      <div className="blog-news-letter-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="newletter-wrap-section">
                <div className="news-letter-left">
                  <Image src={NewLetterLogo}  alt="Image3" />
                  <div className="content-news-letter-wrap">
                    <h4>Stay in the Loop! </h4>
                    <p>
                    Subscribe to our email newsletter and stay up to date with the latest in the digital world.
                    </p>
                  </div>
                </div>
                <div className="news-form-right">
                  {/* <form>
                    <input type="text" placeholder="Enter Email" />
                    <button type="submit">Subscribe Now!</button>
                  </form> */}
                  {/* <HomeClient/> */}
                  <BlogSubscribeForm/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogNewsletter;
