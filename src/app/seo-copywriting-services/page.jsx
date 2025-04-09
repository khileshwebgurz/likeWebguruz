import "./style.css";
import "../services/pay-per-click-management/style.css";
import React from "react";
import CopyBanner from "@/components/contentcopywrite/01CopyBanner";
import CopyForm from "@/components/contentcopywrite/02CopyForm";
import CopyRank from "@/components/contentcopywrite/03CopyRank";
import CopyInfoGet from "@/components/contentcopywrite/04CopyInfoGet";
import CopyInHouse from "@/components/contentcopywrite/05CopyInHouse";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import CopyExperience from "@/components/contentcopywrite/06CopyExperience";
import CopyCharacteristics from "@/components/contentcopywrite/07CopyCharacteristics";
import CopyBenefits from "@/components/contentcopywrite/08CopyBenefits";
import CopyWorking from "@/components/contentcopywrite/09CopyWorking";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { copywritingdata } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";

const page = () => {
  return (
    <>
      <CopyBanner />
      <CopyForm />
      <CopyRank />
      <CopyInfoGet />
      <CopyInHouse />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater to"
        paragraph="We have helped businesses from different industry verticals beat competitor rankings with our SEO copywriting services."
      />
      <CopyExperience />
      <CopyCharacteristics />
      <CopyBenefits />
      <CopyWorking />
      <ServiceFaq accordionData={copywritingdata} />
      <AddsPartner
        heading="Transforming Your Digital Strategy with Expert Content Solutions"
        paragraph="Contact WebGuruz Technologies today and transform your content strategy with India's leading SEO copywriting experts."
        linkHref="/contact-us"
        linkText="Your digital success story starts here!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "SEO Copywriting Services | Best SEO Copywriting Agency - WebGuruz",
  description: "Boost sales with our expert Website SEO copywriting services. As a top agency, we create engaging, optimized content that drives traffic and boosts conversions.",
};