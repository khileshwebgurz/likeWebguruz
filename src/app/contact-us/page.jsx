import ContactBanner from "@/components/contactComponents/01ContactBanner";
import TeamCard from "@/components/contactComponents/02TeamCard";
import ContactTalent from "@/components/contactComponents/03ContactTalent";
import ContactConnect from "@/components/contactComponents/04ContactConnect";
import ContactMap from "@/components/contactComponents/05ContactMap";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import "./contact.css";
import '../services/helpdesk-services/style.css'
import ContactLogo from "@/components/contactComponents/07ContactLogo";
// import ContactTestimonial from "@/components/contactComponents/ContactTestimonial";
import HomeTestimonial from "../home2/components/homeComponents/07HomeTestimonial";
import HomeHiring from "@/components/PopUpForms/HomeHiring";
import HubspotClients from "@/components/otherServices/hubspotDev/HubspotClients";


const page = () => {
  return (
    <>
      <ContactBanner />
      <TeamCard />
      <ContactTalent />
      <HubspotClients/>
      {/* <ContactLogo /> */}
      <ContactConnect />
      <AddsPartner
        heading="Ready to unlock the full potential of your digital presence?"
        paragraph="Let WebGuruz help you in the journey."
        linkHref="/book-an-appointment"
        linkText="Connect Now!"
      />
      {/* <ContactTestimonial/> */}
      <HomeTestimonial/>
      <ContactMap />
      <HomeHiring/>
    
    </>
  );
};

export default page;

export const metadata = {
  title: "Contact Us - Webguruz", // Static title for this page
  description: "Get in touch with WebGuruz for top-notch web development, digital marketing, SEO, PPC, and SMO services. Contact now our expert to boost your business.",
};
