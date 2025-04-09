import React from "react";
import DigitalConsultancy from "@/components/bookConsultation/DigitalConsultancy";
import WebguruzConsultation from "@/components/bookConsultation/WebguruzConsultation";
import MeetingBanner from "@/components/bookConsultation/01MeetingBanner";
import RevolutionConsultancy from "@/components/bookConsultation/RevolutionConsultancy";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { appointmentdata } from "@/utils/accordionData";
import BookComphrehensive from "@/components/bookConsultation/BookComphrehensive";
const page = () => {
  return (
    <>
      <MeetingBanner />
      <DigitalConsultancy />
      <WebguruzConsultation />
      <RevolutionConsultancy />
      <AddsPartner
        heading="Ready to build your digital empire?"
        paragraph="Book your free consultation today and take the first step toward unstoppable growth."
        linkHref="/contact-us"
        linkText="Let’s create something incredible, together!"
      />
      <BookComphrehensive/> 
      <ServiceFaq accordionData={appointmentdata} />
    </>
  );
};

export default page;
export const metadata = {
  title: "Book a Free Consultation with Experts | WebGuruz",
  description:
    "Schedule a free consultation with our experts at WebGuruz. Get personalized insights and strategies to grow your business. Book your appointment today!",
};