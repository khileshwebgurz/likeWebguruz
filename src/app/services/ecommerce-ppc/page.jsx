import EcomPpcBanner from "@/components/ecommercePpcSeo/01EcomPpcBanner";
import "../pay-per-click-management/style.css";
import "../technical-seo/style.css";
import "./style.css";
import EcomPpcForm from "@/components/ecommercePpcSeo/02EcomPpcForm";
import EcomPpcCounter from "@/components/ecommercePpcSeo/03EcomPpcCounter";
import EcomPpcProcess from "@/components/ecommercePpcSeo/05EcomPpcProcess";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { ecomPPcData } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import EcomPpcManagement from "@/components/ecommercePpcSeo/04EcomPpcManagement";
import EcomPpcBusiness from "@/components/ecommercePpcSeo/06EcomPpcBusiness";
import EcomPpcAgency from "@/components/ecommercePpcSeo/08EcomPpcAgency";
import EcomPpcReasons from "@/components/ecommercePpcSeo/07EcomPpcReasons";

const page = () => {
  return (
    <>
      <EcomPpcBanner />
      <EcomPpcForm />
      <EcomPpcCounter />
      <EcomPpcManagement />
      <EcomPpcProcess />
      <EcomPpcBusiness />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater To"
        paragraph="Our eCommerce PPC services cater to a wide range of industries. Whatever you sell, we have the expertise to help you succeed."
      />
      <EcomPpcReasons />
      <EcomPpcAgency />
      <ServiceFaq accordionData={ecomPPcData} />
      <AddsPartner
        heading="Ready to Grow Your Online Store?"
        paragraph="Let WebGuruz Handle Your PPC, While You Watch Your Sales Soar!"
        linkHref="/contact-us"
        linkText="Contact us today!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Get eCommerce PPC Management Services for Revenue Growth",
  description:
    "Collaborate with a top eCommerce PPC company and boost your eStore’s traffic & sales. WebGuruz offers expert eCommerce PPC management services to scale your results.",
};