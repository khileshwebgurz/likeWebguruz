import "./style.css";
import "../services/pay-per-click-management/style.css";
import "../services/technical-seo/style.css";
import "../magento-development-services/style.css";
import BigComBanner from "@/components/DevBigcommerce/01BigComBanner";
import BigComForm from "@/components/DevBigcommerce/02BigComForm";
import BigComCounter from "@/components/DevBigcommerce/03BigComCounter";
import BigComServices from "@/components/DevBigcommerce/04BigComServices";
import BigComTabber from "@/components/DevBigcommerce/05BigComTabber";
import BigComCycle from "@/components/DevBigcommerce/06BigComCycle";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import BigComReasons from "@/components/DevBigcommerce/07BigComReasons";
import BigComBenifits from "@/components/DevBigcommerce/08BigComBenefits";
import BigComDetails from "@/components/DevBigcommerce/09BigComDetails";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { bigcommdata } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
const page = () => {
  return (
    <>
      <BigComBanner />
      <BigComForm />
      <BigComCounter />
      <BigComServices />
      <BigComTabber />
      <BigComCycle />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater to"
        paragraph="We have worked with businesses across various industries. Our expertise ensures that your BigCommerce store is tailored to your industry’s specific needs."
      />
      <BigComReasons />
      <BigComBenifits />
      <BigComDetails />
      <ServiceFaq accordionData={bigcommdata} />
      <AddsPartner
        heading="Let’s Build Your BigCommerce Store Today!"
        paragraph="Get in touch with WebGuruz Technologies Pvt Ltd and let’s create a high-converting, scalable, and feature-rich BigCommerce store for your business. "
        linkHref="/book-an-appointment"
        linkText="Call us now or request a free consultation!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "BigcommerceWeb Development Services Company in India - WebGuruz Technologies",
  description: "Are you looking for Bigcommerce Web Development Services Company in India? Our expert bigcommerce app developers create responsive, user-friendly websites for business success.",
};
