import RmmBanner from "@/components/helpdeskrmm/01RmmBanner";
import "./style.css";
import "../pay-per-click-management/style.css";
import RmmServices from "@/components/helpdeskrmm/02RmmServices";
import RmmForm from "@/components/helpdeskrmm/02RmmForm";
import RmmGrowth from "@/components/helpdeskrmm/03RmmGrowth";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { rmmhelp } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import RmmPlatform from "@/components/helpdeskrmm/04RmmPlatform";

const page = () => {
  return (
    <>
      <RmmBanner />
      <RmmForm />
      <RmmServices />
      <RmmGrowth />
      <RmmPlatform />
      <ServiceFaq accordionData={rmmhelp} />
      <AddsPartner
        heading="Take Control of Your IT with WebGuruz RMM Services"
        paragraph="Don’t let IT issues slow your business down! Our certified RMM services ensure maximum uptime, security, and efficiency. Let WebGuruz handle your IT infrastructure so you can focus on growing your business."
        linkHref="/book-an-appointment"
        linkText="Book a Call for FREE consultation!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Efficient Remote Monitoring and Management for Seamless IT Support",
  description:
    "Ensure seamless IT support with WebGuruz efficient Remote Monitoring and Management (RMM) solutions, optimizing performance and boosting system reliability.",
};
