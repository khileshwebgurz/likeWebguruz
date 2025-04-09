import "./style.css";
import "../../contact-us/contact.css";
import PpcBanner from "@/components/otherServices/PpcDev/01PpcBanner";
import PpcServiceForm from "@/components/otherServices/PpcDev/02PpcServiceForm";
import PpcAdvertising from "@/components/otherServices/PpcDev/03PpcAdvertising";
import PpcProcess from "@/components/otherServices/PpcDev/04PpcProcess";
import PpcManagement from "@/components/otherServices/PpcDev/06PpcManagement";
import PpcLeads from "@/components/otherServices/PpcDev/07PpcLeads";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import PpcLogos from "@/components/otherServices/PpcDev/PpcLogos";
import { ppcdata } from "@/utils/accordionData";
import OurTeamPpc from "@/components/otherServices/PpcDev/08OurTeamPpc";
import PpcSecondForm from "@/components/otherServices/PpcDev/PpcSecondForm";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import HomeHiring from "@/components/PopUpForms/HomeHiring";
// export const dynamic = "force-dynamic";

const page = () => {
  return (
    <>
      <PpcBanner />
      <PpcSecondForm heading={"Amplifying Your Reach with Expert "}
        subheading={"PPC Services"}
        paragraph={"We understand that each click is a potential customer. Our tailored PPC campaigns are designed to maximize your advertising budget while delivering exceptional returns."} />
      
      <PpcAdvertising />
      <PpcProcess />
      <CustomizeHome
        heading="Industries We Cater To with Our "
        subheading="PPC Services"
        paragraph="Our PPC services are designed to benefit a wide range of industries. Irrespective of the industry you belong to, our tailored strategies can help you reach your goals and connect with your audience effectively."
      />
      <PpcManagement />
      <PpcLeads />
      <PpcLogos />
      <OurTeamPpc />
      <ServiceFaq accordionData={ppcdata} />
      <AddsPartner
        heading="Reach the Right Audience at the Right Time with PPC Management Services"
        paragraph="Take the first step towards maximizing your ad performance. Contact us today to discuss how our PPC Management Services can help you achieve your business goals!"
        linkHref="/contact-us"
        linkText="Connect Now!"
      />
      <Featuredblog />
      <HomeHiring/>
    </>
  );
};

export default page;

export const metadata = {
  title: "PPC Management Services | Paid Advertising | PPC Agency",
  description:
    "Boost your business with expert PPC services in India from WebGuruz, a top PPC Agency. Maximize ROI, drive growth & dominate online advertising. Contact us now!",
};
