"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
const AuthorDetails = ({ post, newUrl, count, userData }) => {
  const mypath = usePathname();
  const urlPath = mypath.slice(0, 7);
  return (
    <>
      <section className="abt-author">
        <div className="container">
          <div className="row author-row">
            <div className=" author-profile col-lg-3  col-12 mb-3 mb-lg-0">
              {post.yoast_head_json.schema["@graph"][4] && (
                <Image
                  src={post.yoast_head_json.schema["@graph"][4].image.url}
                  alt="Author"
                  width={2000}
                  height={2000}
                />
              )}
            </div>
            <div className=" col-lg-9  col-12 verify-author">
              <div className="author-inner-detail">
                <span>WRITTEN BY:</span>
              </div>
              <div className="author-name-count">
                <div className="author-name">
                  {post.yoast_head_json.schema["@graph"][4].image.caption}
                </div>
                <div className="blog-count">{count}</div>
              </div>
              <div className="author-content">
                <p>{post.yoast_head_json.schema["@graph"][4].description}</p>
              </div>
              <div className="article-details">
                {urlPath !== "/author" && (
                  <Link href={`/author/${newUrl}`}>
                    View all Articles by{" "}
                    {post.yoast_head_json.schema["@graph"][4].image.caption}
                  </Link>
                )}
              </div>
              <div className="author-speciality">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faUserPlus} aria-hidden="true" />{" "}
                    <strong>Forte:</strong>
                    {userData.acf.forte}
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faThumbsUp} aria-hidden="true" />{" "}
                    <strong>Likes:</strong> {post.total_author_likes}
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faUser} aria-hidden="true" />{" "}
                    <strong>Wannabe:</strong> {userData.acf.wannabe}
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faShareAlt} aria-hidden="true" />{" "}
                    <strong>Social:</strong>{" "}
                    <ul className="inner-share d-flex align-items-center justify-content-center">
                      <li className="px-2">
                        <a
                          href="https://www.facebook.com/webguruztechnologies/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Visit our Facebook page"
                        >
                          <FontAwesomeIcon
                            icon={faFacebook}
                            height={20}
                            role="image"
                            aria-label="Facebook"
                          />
                        </a>
                      </li>

                      <li className="px-2">
                        <a
                          href="https://www.linkedin.com/company/webguru-technologies-pvt.-ltd./"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Visit our LinkedIn page"
                        >
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            height={20}
                            role="image"
                            aria-label="LinkedIn"
                          />
                        </a>
                      </li>
                      <li className="px-2">
                        <a
                          href="https://www.instagram.com/webguruz"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Visit our Instagram page"
                        >
                          <FontAwesomeIcon
                            icon={faInstagram}
                            height={20}
                            role="image"
                            aria-label="Instagram"
                          />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faExclamationTriangle}
                      aria-hidden="true"
                    />{" "}
                    <strong>Biggest Blunder Committed:</strong>{" "}
                    {userData.acf.biggest_blunder_committed}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthorDetails;
