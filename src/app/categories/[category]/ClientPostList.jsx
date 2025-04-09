"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const ClientPostList = ({
  paginatedPosts,
  selectedCategory,
  currentPage,
  totalPosts,
  postsPerPage,
}) => {
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  // Get the current pathname
  const pathname = usePathname();

  const isActive = (url) => pathname === url;

  return (
    <>
      <div className="col-sm-12 col-xs-12">
        <ul className="new-categries">
          <li>
            <Link href="/blogs">
              <FontAwesomeIcon icon={faCaretLeft} height="1em" />
            </Link>
          </li>
          <li
            className={
              isActive("/categories/web-design") ? "active-url-category" : ""
            }
          >
            <Link href="/categories/web-design">Web Design</Link>
          </li>
          <li
            className={
              isActive("/categories/online-reputation-management")
                ? "active-url-category"
                : ""
            }
          >
            <Link href="/categories/online-reputation-management">
              Online Reputation Management
            </Link>
          </li>
          <li
            className={
              isActive("/categories/hubspot") ? "active-url-category" : ""
            }
          >
            <Link href="/categories/hubspot">Hubspot</Link>
          </li>
          <li
            className={
              isActive("/categories/digital-marketing")
                ? "active-url-category"
                : ""
            }
          >
            <Link href="/categories/digital-marketing">Digital Marketing</Link>
          </li>
          <li
            className={
              isActive("/categories/google-remarketing")
                ? "active-url-category"
                : ""
            }
          >
            <Link href="/categories/google-remarketing">
              Google Remarketing
            </Link>
          </li>
          <li
            className={
              isActive("/categories/artificial-intelligence")
                ? "active-url-category"
                : ""
            }
          >
            <Link href="/categories/artificial-intelligence">
              Artificial Intelligence
            </Link>
          </li>
        </ul>
      </div>

      <div className="row">
        {paginatedPosts.map((post, index) => (
          <div key={index} className="col-sm-4 col-xs-12">
            <div className="blog-card-sub">
              <div className="image">
                <Image
                  src={post.yoast_head_json.schema["@graph"][0].thumbnailUrl}
                  alt={post.title}
                  width={700}
                  height={340}
                />
              </div>
              <div className="content">
                <h4>
                  <Link href={`/blog/${post.slug}`}>{post.title.rendered}</Link>
                </h4>
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
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination-controls">
        {currentPage > 1 && (
          <Link
            href={
              currentPage === 2
                ? `/categories/${selectedCategory}`
                : `/categories/${selectedCategory}/page/${currentPage - 1}`
            }
            className="pagination-link"
          >
            <FontAwesomeIcon icon={faCaretLeft} height="1em" />
          </Link>
        )}
        {endIndex < totalPosts && (
          <Link
            href={`/categories/${selectedCategory}/page/${currentPage + 1}`}
            className="pagination-link"
          >
            <FontAwesomeIcon icon={faCaretRight} height="1em" />
          </Link>
        )}
      </div>
    </>
  );
};

export default ClientPostList;
