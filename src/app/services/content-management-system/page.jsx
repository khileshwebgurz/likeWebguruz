// export const dynamic = 'force-dynamic'
import "../../contact-us/contact.css";
import CmsBanner from "@/components/otherServices/cmsDev/01CmsBanner";
import CmsForm from "@/components/otherServices/cmsDev/02CmsForm";
import CmsWebServices from "@/components/otherServices/cmsDev/03CmsWebServices";
import CmsComprehensiveServices from "@/components/otherServices/cmsDev/04CmsComprehensiveServices";
import CmsAboutIt from "@/components/otherServices/cmsDev/05CmsAboutIt";
import CmsWebSolution from "@/components/otherServices/cmsDev/06CmsWebSolution";
import CmsHireUsPage from "@/components/otherServices/cmsDev/08CmsHireUsPage";
import ProminentPrtnr from "@/components/otherServices/cmsDev/09ProminentPrtnr";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import CmsLogos from "@/components/otherServices/cmsDev/CmsLogos";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { cmsdata } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import HomeHiring from "@/components/PopUpForms/HomeHiring";
const page = () => {
  return (
    <>
      <CmsBanner />
      <CmsForm />
      <CmsWebServices />
      <CmsComprehensiveServices />
      <CmsAboutIt />
      <CmsWebSolution />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater To"
        paragraph="Diverse Solutions Across Multiple Industry Verticals"
      />
      <CmsHireUsPage />
      <ProminentPrtnr />
      <CmsLogos />
      <ServiceFaq accordionData={cmsdata}/>
      <AddsPartner
        heading="Take Control of your Website, today!"
        paragraph="Build a Dynamic, User-Friendly Website with our expert CMS Web Development Services"
        linkHref="/contact-us"
        linkText="Get Started!"
      />
      <Featuredblog />
      <HomeHiring/>
    </>
  );
};

export default page;
export const metadata = {
  title: "Custom CMS Web Development Services | CMS Solutions | WebGuruz",
  description:
    "Experience seamless content management with expert CMS Website Development and CMS Solutions by WebGuruz. Enhance your website’s efficiency and flexibility with us!",
};