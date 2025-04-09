import LocalPpcBanner from "@/components/localppcmanagement/01LocalPpcBanner";
import "../pay-per-click-management/style.css";
import "./style.css";
import LocalPpcForm from "@/components/localppcmanagement/02LocalPpcForm";
import LocalPpcCounter from "@/components/localppcmanagement/03LocalPpcCounter";
import LocalPpcServices from "@/components/localppcmanagement/04LocalPpcServices";
import LocalPpcApproach from "@/components/localppcmanagement/05LocalPpcApproach";
import LocalPpcProcessTab from "@/components/localppcmanagement/06LocalPpcProcessTab";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import LocalPpcReasons from "@/components/localppcmanagement/07LocalPpcReasons";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { localppcData } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";

const page = () => {
  return (
    <>
      <LocalPpcBanner />
      <LocalPpcForm />
      <LocalPpcCounter />
      <LocalPpcServices />
      <LocalPpcApproach />
      <LocalPpcProcessTab />
      <CustomizeHome
        heading="Industries Verticals "
        subheading="We can Help"
        paragraph="We cater to a wide array of industries, including:"
      />
      <LocalPpcReasons />
      <ServiceFaq accordionData={localppcData} />
      <AddsPartner
        heading="Ready to Get Started? Let’s Drive Results Together!"
        paragraph="Contact WebGuruz today for a free consultation and take the first step toward growing your business with targeted Local PPC Marketing Services."
        linkHref="/contact-us"
        linkText="Contact us today!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Increase Leads with Expert Local PPC Marketing Services",
  description: "Generate leads with expert Local PPC Marketing Services and Strategies from WebGuruz. Drive traffic, boost business growth, and maximize ROI with tailored solutions.",
};