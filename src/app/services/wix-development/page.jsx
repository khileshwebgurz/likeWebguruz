import "../pay-per-click-management/style.css";
import "./style.css";
import "../../bigcommerce-development-services/style.css";
import "../../magento-development-services/style.css";
import WixBanner from "@/components/serviceWix/01WixBanner";
import WixForm from "@/components/serviceWix/02WixForm";
import WixCounter from "@/components/serviceWix/03WixCounter";
import WixServices from "@/components/serviceWix/04WixServices";
import React from "react";
import WixSolutions from "@/components/serviceWix/05WixSolutions";
import WixProcess from "@/components/serviceWix/06WixProcess";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import WixWhyChoose from "@/components/serviceWix/08WixWhyChoose";
import WixBenefits from "@/components/serviceWix/09WixBenefits";
import WixDetails from "@/components/serviceWix/10WixDetails";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { wixdevdata } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import WixFactsFigures from "@/components/serviceWix/07WixFactsFigures";

const page = () => {
  return (
    <>
      <WixBanner />
      <WixForm />
      <WixCounter />
      <WixServices />
      <WixSolutions />
      <WixProcess />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater to"
        paragraph="Our Wix development services are trusted across multiple industries. Whether you need a simple portfolio or a full-fledged online store, we have the expertise to deliver."
      />
      <WixFactsFigures />
      <WixWhyChoose />
      <WixBenefits />
      <WixDetails />
      <ServiceFaq accordionData={wixdevdata} />
      <AddsPartner
        heading="Looking for a stunning, high-performing website?"
        paragraph="Let’s create a powerful online presence for your business with our Wix development services. Contact WebGuruz Technologies Pvt Ltd today and take your website to the next level!"
        linkHref="/contact-us"
        linkText="Contact Us Today!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Wix Development Services Company in India - WebGuruz Technologies",
  description:
    "Are you looking for Wix web Development Services Company in India? Our expert wix developers create responsive, user-friendly websites for business success.",
};
