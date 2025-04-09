import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const SitemapBanner = () => {
  return (
    <div className="sitemap-banner py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-9 mx-auto col-12">
            <div className="linking-home">
              <Link href={"/"}>
                <FontAwesomeIcon icon={faArrowLeft} height={20} />
                Home / Site Map
              </Link>
            </div>
            <h1>Sitemap</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapBanner;
