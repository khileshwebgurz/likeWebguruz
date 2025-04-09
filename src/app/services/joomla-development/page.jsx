import "./style.css";
import "../../magento-development-services/style.css";
import "../../woocommerce-development-services/style.css";
import "../pay-per-click-management/style.css";
import JoomlaBanner from "@/components/serviceJoomla/01JoomlaBanner";
import JoomlaForm from "@/components/serviceJoomla/02JoomlaForm";
import JoomlaCounter from "@/components/serviceJoomla/03JoomlaCounter";
import JoomlaFeatures from "@/components/serviceJoomla/05JoomlaFeatures";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import JoomlaDetails from "@/components/serviceJoomla/11JoomlaDetails";
import JoomlaBenefits from "@/components/serviceJoomla/10JoomlaBenefits";
import JoomlaApplication from "@/components/serviceJoomla/09JoomlaApplication";
import JoomlaHiring from "@/components/serviceJoomla/08JoomlaHiring";
// import JoomlaProficient from "@/components/serviceJoomla/07JoomlaProficient";
import JoomlaServices from "@/components/serviceJoomla/04JoomlaServices";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { joomlaData } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
// import JoomlaFlowChart from "@/components/serviceJoomla/06JoomlaFlowChart";

const page = () => {
  return (
    <>
      <JoomlaBanner />
      <JoomlaForm />
      <JoomlaCounter />
      <JoomlaServices />
      <JoomlaFeatures />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater to"
        paragraph="We provide Joomla development services to various industries, including:"
      />
      {/* <JoomlaFlowChart/> */}
      {/* <JoomlaProficient /> */}
      <JoomlaHiring />
      <JoomlaApplication />
      <JoomlaBenefits />

      <JoomlaDetails />
      <ServiceFaq accordionData={joomlaData} />
      <AddsPartner
        heading="Get Started with Joomla Development Today!"
        paragraph="WebGuruz Technologies Pvt Ltd is here to help. Contact our expert Joomla developers today and transform your digital presence with a secure, high-performing website."
        linkHref="/contact-us"
        linkText="Call us now or Request a Free Quote Today!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title:
    "Joomla CMS Web Development Services Company in India - WebGuruz Technologies",
  description:
    "Are you looking for Joomla web Development Services Company in India? Our expert Joomla developers create responsive, user-friendly websites for business success.",
};
