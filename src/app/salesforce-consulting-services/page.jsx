import SalesBanner from "@/components/saleforceconsulting/01SalesBanner";
import "../services/pay-per-click-management/style.css";
import "../services/local-seo/style.css";
import SalesForm from "@/components/saleforceconsulting/02SalesForm";
import SalesPartner from "@/components/saleforceconsulting/03SalesPartner";
import "./style.css";
import SalesExpert from "@/components/saleforceconsulting/04SalesExpert";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import SalesWorking from "@/components/saleforceconsulting/07SalesWorking";
import SalesWhyChoose from "@/components/saleforceconsulting/08SalesWhyChoose";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { salesforcedata } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import SalesPlanning from "@/components/saleforceconsulting/06SalesPlanning";
import SalesTopNotch from "@/components/saleforceconsulting/05SalesTopNotch";

const page = () => {
  return (
    <>
      <SalesBanner />
      <SalesForm />
      <SalesPartner />
      <SalesExpert />
      <SalesTopNotch />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater to"
        paragraph="Our Salesforce consulting expertise spans across multiple industries. We've successfully implemented Salesforce solutions for:"
      />
      <SalesPlanning />
      <SalesWorking />
      <SalesWhyChoose />
      <ServiceFaq accordionData={salesforcedata} />
      <AddsPartner
        heading="Take the first step toward revolutionizing your business operations with expert Salesforce Consulting."
        paragraph="Our team of certified Salesforce consultants is ready to help you design, implement, and optimize a Salesforce solution that drives real business results."
        linkHref="/book-an-appointment"
        linkText="Contact us today for a free consultation!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Top Salesforce service consulting partner companies in India - WebGuruz",
  description: "Transform your business with best Salesforce consulting partner companies in India. Our services includes Solutions, Consulting, onboarding, integration and training.",
};