import Service from "@/components/serviceComponent/01ServiceBanner";
import ExpertManaged from "@/components/serviceComponent/02ExpertManaged";
import BoostRanking from "@/components/serviceComponent/03BoostRanking";
import DigitalMarketing from "@/components/serviceComponent/04DigitalMarketing";
import ProcessStep from "@/components/serviceComponent/05ProcessStep";
import ServiceTools from "@/components/serviceComponent/06ServiceTools";
import WhyChoose from "@/components/serviceComponent/07WhyChoose";
import IndustriesServe from "@/components/serviceComponent/08IndustriesServe";
import CreativePortfolio from "@/components/serviceComponent/09CreativePortfolio";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import TeamService from "@/components/serviceComponent/10TeamService";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import { digitalData } from "@/utils/accordionData";
import ServicesDisplay from "@/components/serviceComponent/13ServicesDisplay";
import HomeHiring from "@/components/PopUpForms/HomeHiring";

const page = () => {
  return (
    <>
      <Service />
      <ExpertManaged />
      <BoostRanking />
      <DigitalMarketing />
      <ProcessStep />
      <ServiceTools />
      <WhyChoose />
      <IndustriesServe />
      <CreativePortfolio />
      <ServicesDisplay />
      <TeamService />
      <ServiceFaq accordionData={digitalData} />
      <AddsPartner
        heading="On the lookout for a digital marketing agency to help you reach your business goals?"
        paragraph="Let WebGuruz help you succeed with its comprehensive digital marketing solutions."
        linkHref="/contact-us"
        linkText="Reach Out Now!"
      />
      <Featuredblog />
      <HomeHiring/>
    </>
  );
};

export default page;
export const metadata = {
  title: "Trusted Best Digital Marketing Agency in India for Growth",
  description:
    "Looking for the best digital marketing agency in India? WebGuruz offers digital marketing solutions like SEO, PPC, social media, and branding to grow your business.s",
};
