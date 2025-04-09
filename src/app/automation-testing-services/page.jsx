import AutomateBanner from "@/components/testingAutomate/01AutomateBanner";
import "../services/pay-per-click-management/style.css";
import "../magento-development-services/style.css";
import "./style.css";
import AutomateForm from "@/components/testingAutomate/02AutomateForm";
import AutomateExpand from "@/components/testingAutomate/03AutomateExpand";
import AutomateQuality from "@/components/testingAutomate/04AutomateQuality";
import AutomateApproach from "@/components/testingAutomate/05AutomateApproach";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import AutomateServices from "@/components/testingAutomate/06AutomateServices";
import AutomateExperts from "@/components/testingAutomate/07AutomateExperts";
import AutomatePerform from "@/components/testingAutomate/08AutomatePerform";
import AutomateAccordian from "@/components/testingAutomate/09AutomateAccordian";
import AutomateTestServe from "@/components/testingAutomate/10AutomateTestServe";
import AutomateModal from "@/components/testingAutomate/11AutomateModal";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { automatetest } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
const page = () => {
  return (
    <>
      <AutomateBanner />
      <AutomateForm />
      <AutomateExpand />
      <AutomateQuality />
      <AutomateApproach />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater to"
        paragraph="We understand the specific compliance standards and user expectations in each sector, allowing us to create testing strategies that address industry-specific concerns. Whether you need HIPAA-compliant healthcare testing or PCI-DSS-compliant financial application testing, we have the expertise to deliver reliable results."
      />
      <AutomateServices />
      <AutomateExperts />
      <AutomatePerform />
      <AutomateAccordian />
      <AutomateTestServe />
      <AutomateModal />
      <ServiceFaq accordionData={automatetest} />
      <AddsPartner
        heading="Don't let inefficient testing slow down your business!"
        paragraph="Contact WebGuruz Technologies today to discuss how our automation testing services can help you deliver better software, faster. Our team of experts will work with you to create a customized testing solution that addresses your specific challenges and helps you achieve your business goals."
        linkHref="/book-an-appointment"
        linkText="Schedule a free consultation now!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Automation Testing Services - Test Automation Testing Solution in India",
  description: "WebGuruz is a leading automation testing services company in the US & India. Our test automation tools solution gives the best test quality in the market.",
};
