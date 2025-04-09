"use client";
import React from "react";
import { useRouter } from "next/navigation";
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
const CategoryInfo = () => {
  const router = useRouter();
  return (
    <>
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
              {category.replace(/-/g, " ")} ({categoryCounts[category] || 0})
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default CategoryInfo;
