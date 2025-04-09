import WordpressBanner from "@/components/servicewordpress/01WordpressBanner";
import WordpressForm from "@/components/servicewordpress/02WordpressForm";
import WordpressCounter from "@/components/servicewordpress/03WordpressCounter";
import WordpressServices from "@/components/servicewordpress/04WordpressServices";
import "../pay-per-click-management/style.css";
import "./style.css";
import "../../magento-development-services/style.css";
import "../../woocommerce-development-services/style.css";
import WordpressHiring from "@/components/servicewordpress/06WordpressHiring";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import WordpressDetails from "@/components/servicewordpress/10WordpressDetails";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { wordpressdev } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import WordpressBenefits from "@/components/servicewordpress/08WordpressBenefits";
import WordpressProcess from "@/components/servicewordpress/05WordpressProcess";
import WordpressWhyChoose from "@/components/servicewordpress/07WordpressWhyChoose";
import WordpressCompany from "@/components/servicewordpress/09WordpressCompany";
const page = () => {
  return (
    <>
      <WordpressBanner />
      <WordpressForm />
      <WordpressCounter />
      <WordpressServices />
      <WordpressProcess />
      <WordpressHiring />
      <CustomizeHome
        heading="Industries We  "
        subheading="Cater To "
        paragraph="We provide WordPress development services for a wide range of industries, including:"
      />
      <WordpressWhyChoose />
      <WordpressBenefits />
      <WordpressCompany />
      <WordpressDetails />
      <ServiceFaq accordionData={wordpressdev} />
      <AddsPartner
        heading="Ready to Build Your Dream Website? Contact Us Today!"
        paragraph="Whether you need a custom WordPress website, WooCommerce store, or plugin development, WebGuruz Technologies Pvt Ltd is your trusted partner. Get in touch with us today to discuss your project!"
        linkHref="/book-an-appointment"
        linkText="Consult with our experts Today!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title:
    "WordPress CMS Development Services Company in India - WebGuruz Technologies",
  description:
    "Are you looking for WordPress CMS Development Services Company in India? Our expert wordpress developers create responsive, user-friendly websites for business success.",
};
