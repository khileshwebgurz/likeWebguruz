import "./style.css";
import "../services/pay-per-click-management/style.css";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { smmData } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import SmmBanner from "@/components/contentSmm/01SmmBanner";
import SmmForm from "@/components/contentSmm/02SmmForm";
import SmmManagement from "@/components/contentSmm/03SmmManagement";
import SmmAgency from "@/components/contentSmm/04SmmAgency";
import SmmBusiness from "@/components/contentSmm/05SmmBusiness";
import SmmSolution from "@/components/contentSmm/06SmmSolution";
import SmmPlatform from "@/components/contentSmm/07SmmPlatform";
import SmmPower from "@/components/contentSmm/08SmmPower";
import SmmFirm from "@/components/contentSmm/09SmmFirm";
import SmmBenefits from "@/components/contentSmm/10SmmBenefits";
import SmmWhyChoose from "@/components/contentSmm/11SmmWhyChoose";
import SmmServices from "@/components/contentSmm/12SmmServices";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
const page = () => {
  return (
    <>
      <SmmBanner />
      <SmmForm />
      <SmmManagement />
      <SmmAgency />
      <SmmBusiness />
      <SmmSolution />
      <SmmPlatform />
      <SmmPower />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater to"
        paragraph="From startups to established enterprises, we serve businesses across a wide range of industries."
      />
      <SmmFirm />
      <SmmBenefits />
      <SmmWhyChoose />
      <SmmServices />
      <ServiceFaq accordionData={smmData} />
      <AddsPartner
        heading="Your Digital Transformation Starts Here!"
        paragraph="Ready to elevate your social media from a mere online presence to a powerful business growth engine? Contact WebGuruz Technologies today, and let's craft your digital success story!"
        linkHref="/contact-us"
        linkText="Connect With Us Today!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Best Social Media Management Company and Agency | WebGuruz",
  description: "A top social media management company in India. We offer social media marketing, social media management, and social media advertising.",
};