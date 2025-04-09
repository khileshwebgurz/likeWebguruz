import DevEcomBanner from "@/components/Developmentecomm/01DevEcomBanner";
import DevEcomForm from "@/components/Developmentecomm/02DevEcomForm";
import "../contact-us/contact.css";
import "../magento-development-services/style.css";
import "../shopify-development-services/style.css";
import "./style.css";
import "../hubspot-onboarding/style.css";
import "../services/voice-search-optimization/style.css";
import "../services/pay-per-click-management/style.css";
import "../services/amazon-ppc-management/style.css";
import HubspotClients from "@/components/otherServices/hubspotDev/HubspotClients";
import DevEcomPlatforms from "@/components/Developmentecomm/03DevEcomPlatforms";
import DevEcomExpertise from "@/components/Developmentecomm/04DevEcomExpertise";
import DevEcomSolutions from "@/components/Developmentecomm/05DevEcomSolutions";
import DevEcomApproach from "@/components/Developmentecomm/08DevEcomApproach";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { ecomdevelopmentData } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import DevEcomSteps from "@/components/Developmentecomm/07DevEcomSteps";
import DevEcomReasons from "@/components/Developmentecomm/10DevEcomReasons";
import DevEcomBenefits from "@/components/Developmentecomm/11DevEcomBenefits";
import DevEcomDetails from "@/components/Developmentecomm/12DevEcomDetails";
import DevEcomImages from "@/components/Developmentecomm/06DevEcomImages";
import DevEcomTech from "@/components/Developmentecomm/09DevEcomTech";

const page = () => {
  return (
    <>
      <DevEcomBanner />
      <DevEcomForm />
      <HubspotClients />
      <DevEcomPlatforms />
      <DevEcomExpertise />
      <DevEcomSolutions />
      <DevEcomImages />
      <DevEcomSteps />
      <DevEcomApproach />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater to"
        paragraph="We work with businesses across various industries, helping them build tailored eCommerce platforms that suit their unique needs. From retail to wholesale, our expertise enables businesses to scale effectively in today’s competitive digital world."
      />
      <DevEcomTech />
      <DevEcomReasons />
      <DevEcomBenefits />
      <DevEcomDetails />
      <ServiceFaq accordionData={ecomdevelopmentData} />
      <AddsPartner
        heading="Ready to Take Your Business Online?"
        paragraph="Let WebGuruz help you build a powerful, scalable, and secure eCommerce website."
        linkHref="/contact-us"
        linkText="Contact us today to get started!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "eCommerce Website Development Services and Company | WebGuruz",
  description:
    "Expert eCommerce website development by WebGuruz, offering custom solutions from eCommerce developers to help businesses grow with responsive, user-friendly designs.",
};
