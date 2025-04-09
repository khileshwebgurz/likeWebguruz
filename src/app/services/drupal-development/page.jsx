import DrupalBanner from "@/components/serviceDrupal/01DrupalBanner";
import "../pay-per-click-management/style.css";
import "../../magento-development-services/style.css";
import "./style.css";
import DrupalForm from "@/components/serviceDrupal/02DrupalForm";
import DrupalCounter from "@/components/serviceDrupal/03DrupalCounter";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { drupalData } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import DrupalServices from "@/components/serviceDrupal/04DrupalServices";
import DrupalStratergy from "@/components/serviceDrupal/05DrupalStratergy";
import DrupalProcess from "@/components/serviceDrupal/06DrupalProcess";
// import DrupalTechnology from "@/components/serviceDrupal/07DrupalTechnology";
import DrupalAgency from "@/components/serviceDrupal/08DrupalAgency";
import DrupalBenefits from "@/components/serviceDrupal/09DrupalBenefits";
import "../../seo-packages/style.css";
import DrupalPartner from "@/components/serviceDrupal/10DrupalPartner";
import DruaplDetails from "@/components/serviceDrupal/11DrupalDetails";
const page = () => {
  return (
    <>
      <DrupalBanner />
      <DrupalForm />
      <DrupalCounter />
      <DrupalServices />
      <DrupalStratergy />
      <DrupalProcess />
      <CustomizeHome
        heading="Industries  "
        subheading="We Serve"
        paragraph="We cater to diverse industries, delivering custom Drupal solutions tailored to their specific needs:"
      />
      {/* <DrupalTechnology /> */}
      <DrupalAgency />
      <DrupalBenefits />
      <DrupalPartner />
      <DruaplDetails />
      <ServiceFaq accordionData={drupalData} />
      <AddsPartner
        heading="Get Started with the Best Drupal Development Company Today!"
        paragraph="Ready to build a custom, scalable, and high-performance Drupal website? Let WebGuruz Technologies bring your vision to life."
        linkHref="/book-an-appointment"
        linkText="Contact with our Team Today!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title:
    "Drupal CMS Development Services Company in India - WebGuruz Technologies",
  description:
    "Are you looking for Drupal web Development Services Company in India? Our expert Drupal developers create responsive, user-friendly websites for business success.",
};
