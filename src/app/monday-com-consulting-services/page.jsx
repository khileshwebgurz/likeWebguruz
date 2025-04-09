import MonConsultBanner from "@/components/mondayconsulting/01MonConsultBanner";
import "../services/pay-per-click-management/style.css";
import "./style.css";
import MonConsultForm from "@/components/mondayconsulting/02MonConsultForm";
import MondayConSupport from "@/components/mondayconsulting/04MonConsultSupport";
import MonConsultTeam from "@/components/mondayconsulting/03MonConultTeam";
import MonConsultApproach from "@/components/mondayconsulting/05MonConsultApproach";
import MonConsultSteps from "@/components/mondayconsulting/06MonConsultSteps";
import MonConsultInvest from "@/components/mondayconsulting/07MonConsultInvest";
import MonConsultManage from "@/components/mondayconsulting/08MonConsultManage";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import MonConsultOffering from "@/components/mondayconsulting/09MonConsultOffering";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { mondayconsult } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
const page = () => {
  return (
    <>
      <MonConsultBanner />
      <MonConsultForm />
      <MonConsultTeam />
      <MondayConSupport />
      <MonConsultApproach />
      <MonConsultSteps />
      <MonConsultInvest />
      <MonConsultManage />
      <CustomizeHome
        heading="From Startups to Enterprises, "
        subheading=" We Serve All"
        paragraph="We have successfully implemented Monday.com solutions across various industries including IT services, manufacturing, healthcare, construction, marketing agencies, and professional services."
      />
      <MonConsultOffering />
      <ServiceFaq accordionData={mondayconsult} />
      <AddsPartner
        heading="Don't let inefficient workflows hold your business back any longer."
        paragraph="Partner with WebGuruz, India's leading Monday.com consulting team, and discover how the right work management platform can revolutionize your operations."
        linkHref="/book-an-appointment"
        linkText="Contact us today for a free consultation!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Monday.com Expert Professional Managed Consulting Services in India - WebGuruz",
  description: "Are you looking for Monday.com Expert Services in India. We at WebGuruz Offer managed expert Monday consulting services at very affordable prices.",
};