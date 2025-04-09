import KeapBanner from "@/components/serviceInfusion/01KeapBanner";
import "./style.css";
import "../../magento-development-services/style.css";
import "../pay-per-click-management/style.css";
import KeapForm from "@/components/serviceInfusion/02KeapForm";
import KeapExpert from "@/components/serviceInfusion/03KeapExpert";
import KeapSkills from "@/components/serviceInfusion/08KeapSkills";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import KeapBenefits from "@/components/serviceInfusion/04KeapBenefits";
import KeapOffer from "@/components/serviceInfusion/05KeapOffer";
import KeapSolutions from "@/components/serviceInfusion/06KeapSolutions";
import KeapPlatform from "@/components/serviceInfusion/07KeapPlatform";
import KeapWhyChoose from "@/components/serviceInfusion/09KeapWhyChoose";
import KeapReality from "@/components/serviceInfusion/11KeapReality";
import KeapHiring from "@/components/serviceInfusion/10KeapHiring";
import KeapDetails from "@/components/serviceInfusion/12KeapDetails";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { joomlaData, keapData } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";

const page = () => {
  return (
    <>
      <KeapBanner />
      <KeapForm />
      <KeapExpert />
      <KeapBenefits />
      <KeapOffer />
      <KeapSolutions />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater to"
        paragraph="No matter your industry, we have the expertise to create a Keap solution that addresses your specific needs and helps you achieve your business goals."
      />
      <KeapPlatform />
      <KeapSkills />
      <KeapWhyChoose />
      <KeapHiring />
      <KeapReality />
      <KeapDetails />
      <ServiceFaq accordionData={keapData} />
      <AddsPartner
        heading="Don't wait to start your journey toward greater efficiency and profitability!"
        paragraph="Our team is ready to help you create a customized solution that streamlines your operations, enhances customer engagement, and drives sustainable growth."
        linkHref="/book-an-appointment"
        linkText="Contact us today for a free consultation!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Keap Development Services - Keap Developer - Keap Custom Integration",
  description: "Get a keap custom development services with our expert keep developers that solves your problems, and is the solution you are looking for!",
};
