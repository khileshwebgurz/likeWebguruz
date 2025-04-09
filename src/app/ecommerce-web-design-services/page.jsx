import "../services/pay-per-click-management/style.css";
import "../contact-us/contact.css";
import "../magento-development-services/style.css";
import "./style.css";
import DesignEcomBanner from "@/components/DevEcomDesiging/01DesignEcomBanner";
import HubspotClients from "@/components/otherServices/hubspotDev/HubspotClients";
import DesignEcomCounter from "@/components/DevEcomDesiging/03DesignEcomCounter";
import DesignEcomFeatures from "@/components/DevEcomDesiging/04DesignEcomFeatures";
import DesignEcomSolutions from "@/components/DevEcomDesiging/06DesignEcomSolutions";
import DesignEcomTech from "@/components/DevEcomDesiging/08DesignEcomTech";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import DesignEcomReasons from "@/components/DevEcomDesiging/09DesignEcomReasons";
import DesignEcomCompany from "@/components/DevEcomDesiging/10DesignEcomCompany";
import DesignEcomBenefits from "@/components/DevEcomDesiging/11DesignEcomBenefits";
import DesignEcomDetails from "@/components/DevEcomDesiging/12DesignEcomDetails";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { ecomdesigndata } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import DesignEcomForm from "@/components/DevEcomDesiging/02DesignEcomForm";
import DesignEocmServices from "@/components/DevEcomDesiging/05DesignEocmServices";

const page = () => {
  return (
    <>
      <DesignEcomBanner />
      <DesignEcomForm />
      <HubspotClients />
      <DesignEcomCounter />
      <DesignEcomFeatures />
      <DesignEocmServices />
      <DesignEcomSolutions />
      <DesignEcomTech />
      <CustomizeHome
        heading="Industries "
        subheading=" We Serve"
        paragraph="From retail to healthcare, finance to fashion, our expertise spans a wide array of industries. Whatever your niche, we create designs that resonate with your audience."
      />
      <DesignEcomReasons />
      <DesignEcomCompany />
      <DesignEcomBenefits />
      <DesignEcomDetails />
      <ServiceFaq accordionData={ecomdesigndata} />
      <AddsPartner
        heading="Transform Your Digital Presence with Certified eCommerce Web Designers"
        paragraph="Contact us today to elevate your eCommerce business with expert website design services."
        linkHref="/contact-us"
        linkText="Connect with us today!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Certified eCommerce Web Designers and Website Design Services",
  description: "Get eCommerce website design services from WebGuruz, eCommerce design experts, specializing in mobile-responsive, custom designs to boost online sales globally.",
};
