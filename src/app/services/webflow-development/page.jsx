import WebflowBanner from "@/components/serviceWebflow/01WebflowBanner";
import WebflowForm from "@/components/serviceWebflow/02WebflowForm";
import WebflowCounter from "@/components/serviceWebflow/03WebflowCounter";
import "../pay-per-click-management/style.css";
import "../../magento-development-services/style.css";
import WebflowServices from "@/components/serviceWebflow/04WebflowServices";
import "./style.css";
import WebflowProcess from "@/components/serviceWebflow/05WebflowProcess";
import WebflowCompany from "@/components/serviceWebflow/08WebflowCompany";
import WebflowBenefits from "@/components/serviceWebflow/09WebflowBenefits";
import WebflowDetails from "@/components/serviceWebflow/10WebflowDetails";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { weblowData } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import WebflowSolutiom from "@/components/serviceWebflow/07WebflowSolution";
const page = () => {
  return (
    <>
      <WebflowBanner />
      <WebflowForm />
      <WebflowCounter />
      <WebflowServices />
      <WebflowProcess />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater to"
        paragraph="We provide Webflow development services for a wide range of industries, including:"
      />
      <WebflowSolutiom />
      <WebflowCompany />
      <WebflowBenefits />
      <WebflowDetails />
      <ServiceFaq accordionData={weblowData} />
      <AddsPartner
        heading="Let’s Build Your Webflow Website Today!"
        paragraph="Looking for a reliable Webflow development company? WebGuruz Technologies is here to help. Get in touch today for a free consultation!"
        linkHref="/book-an-appointment"
        linkText="Get in Touch!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title:
    "Webflow Web Development Services Company in India - WebGuruz Technologies",
  description:
    "Are you looking for Webflow web Development Services Company in India? WebGuruz offers expert webflow services to create responsive, user-friendly websites for business success.",
};
