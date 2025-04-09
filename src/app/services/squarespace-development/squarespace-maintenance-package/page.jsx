import Featuredblog from "@/components/homeComponents/09Featuredblog";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { squaremaintaindata } from "@/utils/accordionData";
import "../../wordpress-development/wordpress-maintenance-package/style.css";
import AddsPartner from "@/components/contactComponents/06AddsPartner";

import "../../pay-per-click-management/style.css";
import SquareMaintainBanner from "@/components/wordSquarespce/01SquareMaintainBanner";
import SquareMaintainForm from "@/components/wordSquarespce/02SquareMaintainForm";
import SquareMaintainNumbers from "@/components/wordSquarespce/03SquareMaintainNumbers";
import SquareTabs from "@/components/wordSquarespce/04SquareTabs";
import SquareWorking from "@/components/wordSquarespce/05SquareWorking";
import SquareTable from "@/components/wordSquarespce/06SquareTable";

const page = () => {
  return (
    <>
      <SquareMaintainBanner />
      <SquareMaintainForm />
      <SquareMaintainNumbers />
      <SquareTabs />
      <SquareWorking />
      <SquareTable />
      <ServiceFaq accordionData={squaremaintaindata} />
      <AddsPartner
        heading="Don't let website maintenance issues hold your business back."
        paragraph="Contact WebGuruz Technologies today for professional Squarespace maintenance and support services tailored to your needs. Our team of experts is ready to help you create a faster, more secure, and better-performing website that drives results for your business."
        linkHref="/contact-us"
        linkText="Call us now!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "",
  description: "",
};
