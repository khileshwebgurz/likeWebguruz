import ManualBanner from "@/components/testingManual/01ManualBanner";
import ManualForm from "@/components/testingManual/02ManualForm";
import "./style.css";
import "../services/pay-per-click-management/style.css";
import "../services/squarespace-development/style.css";
import ManualServices from "@/components/testingManual/03ManualServices";
import ManualReasons from "@/components/testingManual/04ManualReasons";
import ManualValue from "@/components/testingManual/05ManualValue";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import ManualApproach from "@/components/testingManual/06ManualApproach";
import ManualPartner from "@/components/testingManual/08ManualPartner";
import ManualProcess from "@/components/testingManual/09ManualProcess";
import ManualBenefit from "@/components/testingManual/07ManualBenefit";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { manualtest } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";

const page = () => {
  return (
    <>
      <ManualBanner />
      <ManualForm />
      <ManualServices />
      <ManualReasons />
      <ManualValue />
      <ManualApproach />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater to"
        paragraph="We understand the specific challenges and compliance requirements of each sector, ensuring that your applications meet industry standards and customer expectations."
      />
      <ManualBenefit />
      <ManualPartner />
      <ManualProcess />
      <ServiceFaq accordionData={manualtest} />
      <AddsPartner
        heading="Don't let undetected bugs damage your reputation and user trust."
        paragraph="Partner with WebGuruz Technologies for comprehensive manual testing services that ensure your software performs flawlessly in the real world. Our experienced team is ready to help you deliver exceptional quality on every release."
        linkHref="/book-an-appointment"
        linkText="Contact us today for a free consultation!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Manual Software Testing Services Company | Manual QA Testing India",
  description: "Enhance software quality with our manual software testing services. Our team of experienced manual QA testers ensure functionality, performance, and user satisfaction",
};
