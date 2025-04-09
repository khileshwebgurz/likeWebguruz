import React from "react";
import "./style.css";
import "../pay-per-click-management/style.css";
import "../local-seo/style.css";
import TechnicalBanner from "@/components/otherServices/technicalSeo/01TechnicalBanner";
import TechnicalForm from "@/components/otherServices/technicalSeo/02TechnicalForm";
import TechnicalCounter from "@/components/otherServices/technicalSeo/03TechnicalCounter";
import TechnicalServices from "@/components/otherServices/technicalSeo/04TechnicalServices";
import TechnicalIndustry from "@/components/otherServices/technicalSeo/05TechnicalIndustry";
import ChooseTechnical from "@/components/otherServices/technicalSeo/06ChooseTechnical";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { technicalData } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import TechnicalProcess from "@/components/otherServices/technicalSeo/TechnicalProcess";
import AboutTechincal from "@/components/otherServices/technicalSeo/AboutTechnical";
import Featuredblog from "@/components/homeComponents/09Featuredblog";

const page = () => {
  return (
    <>
      <TechnicalBanner />
      <TechnicalForm
        heading={"Boost Your Website’s Potential with Our "}
        subheading={"Technical SEO Services"}
        paragraph={
          "Ready to take your website’s performance to the next level? Our Technical SEO services are tailored to ensure your site is technically sound, search engine-friendly, and poised for success. We have the expertise and the tools to make that happen."
        }
      />
      <TechnicalCounter />
      <TechnicalServices />
      <TechnicalIndustry />
      <TechnicalProcess />
      <AboutTechincal />
      <ChooseTechnical />
      <ServiceFaq accordionData={technicalData} />
      <AddsPartner
        heading="Take the Next Step with WebGuruz’s Technical SEO Services"
        paragraph="Ready to make your website technically flawless and search engine-friendly? Let our Technical SEO experts in Mohali help you enhance your online visibility!"
        linkHref="/contact-us"
        linkText="Connect With Us Now!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Leading Technical SEO Services Company in India | WebGuruz",
  description:
    "Enhance your online visibility with WebGuruz, India's leading technical SEO services company. Expert solutions for improved search rankings and performance!",
};
