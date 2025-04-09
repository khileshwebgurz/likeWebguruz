import LocalSeoBanner from "@/components/otherServices/localSeo/01LocalSeoBanner";
import PpcServiceForm from "@/components/otherServices/PpcDev/02PpcServiceForm";
import React from "react";
import "../pay-per-click-management/style.css";
import LocalSeoSearch from "@/components/otherServices/localSeo/02LocalSeoSearch";

import LocalServiceSeo from "@/components/otherServices/localSeo/03LocalServiceSeo";
import "./style.css";
import IncreasedVisiblitySeo from "@/components/otherServices/localSeo/IncreasedVisiblitySeo";
import BusinessLocalService from "@/components/otherServices/localSeo/BusinessLocalService";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { localData } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import LocalSeoCompany from "@/components/otherServices/localSeo/LocalSeoCompany";
import LocalSeoForm from "@/components/otherServices/localSeo/LocalSeoForm";
import LocalCounter from "@/components/otherServices/localSeo/LocalCounter";
import Featuredblog from "@/components/homeComponents/09Featuredblog";

const page = () => {
  return (
    <>
      <LocalSeoBanner />
      <LocalSeoForm />
      <LocalSeoSearch />
      <LocalSeoCompany />
      <LocalServiceSeo />
      <IncreasedVisiblitySeo />
      <BusinessLocalService />
      <LocalCounter />
      <ServiceFaq accordionData={localData} />
      <AddsPartner
        heading="Ready to enhance your local search presence?"
        paragraph="Contact WebGuruz today for expert local SEO services. We’ll help you rank higher and reach your local customers faster!"
        linkHref="/contact-us"
        linkText="Connect Now!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Dominate Local Search with our Expert Local SEO Agency",
  description:
    "Experience unrivaled local business growth with the expert team at our local SEO agency. Drive targeted traffic and outrank your competitors. Contact us today!",
};
