import "./style.css";
import "../services/pay-per-click-management/style.css";
import ContMarketBanner from "@/components/contentmarketing/01ContMarketBanner";
import ContMarketForm from "@/components/contentmarketing/02ContMarketForm";
import ContMarketExpand from "@/components/contentmarketing/03ContMarketExpand";
import ContMarketExplore from "@/components/contentmarketing/04ContMarketExplore";
import ContMarketSolution from "@/components/contentmarketing/05ContMarketSolution";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { contentmarketdata } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import ContMarketSteps from "@/components/contentmarketing/08ContMarketSteps";
import ContMarketImpact from "@/components/contentmarketing/09ContMarketImpact";
import ContMarketConsult from "@/components/contentmarketing/10ContMarketConsult";
import ContMarketRevenue from "@/components/contentmarketing/07ContMarketRevenue";
import ContMarketServices from "@/components/contentmarketing/06ContMarketServices";

const page = () => {
  return (
    <>
      <ContMarketBanner />
      <ContMarketForm />
      <ContMarketExpand />
      <ContMarketExplore />
      <ContMarketSolution />
      <ContMarketServices />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater to"
        paragraph="Our content marketing expertise spans across various sectors, ensuring tailored strategies for every industry."
      />
      <ContMarketRevenue />
      <ContMarketSteps />
      <ContMarketImpact />
      <ContMarketConsult />
      <ServiceFaq accordionData={contentmarketdata} />
      <AddsPartner
        heading="Take the first step towards transforming your digital presence."
        paragraph="Contact WebGuruz Technologies Pvt Ltd today and let our expert team create compelling content that drives results."
        linkHref="/contact-us"
        linkText="Your success story starts with one conversation- get in touch now!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Best content marketing agency services in India - WebGuruz",
  description: "Best content agency offer top content marketing services in India that include strategy development, content creation, and boost your traffic.",
};