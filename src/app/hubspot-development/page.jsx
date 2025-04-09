import Hubspotbanner from "@/components/otherServices/hubspotDev/01HubspotBanner";
import Broadindustries from "@/components/otherServices/hubspotDev/02Broadindustries";
import Hubspotdevelopment from "@/components/otherServices/hubspotDev/03HubspotDevelopment";
import Hubspotcms from "@/components/otherServices/hubspotDev/04Hubspotcms";
import Hubspotcrm from "@/components/otherServices/hubspotDev/05Hubspotcrm";
import OurTeamhubspot from "@/components/otherServices/hubspotDev/06Ourteam";
import Serviceprovide from "@/components/otherServices/hubspotDev/07Serviceprovide";
import "../contact-us/contact.css";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import BoostHubRank from "@/components/otherServices/hubspotDev/BoostHubRank";
import HubServiceDisplay from "@/components/otherServices/hubspotDev/HubServiceDisplay";
import WhyHubspot from "@/components/otherServices/hubspotDev/WhyHubspot";
import HubspotClients from "@/components/otherServices/hubspotDev/HubspotClients";
import { hubspotData } from "@/utils/accordionData";
// export const dynamic = 'force-dynamic'

import ImageHubspot from "@/components/otherServices/hubspotDev/ImageHubspot";
import HomeHiring from "@/components/PopUpForms/HomeHiring";
const page = () => {
  return (
    <>
      <Hubspotbanner />
      <HubServiceDisplay />
      <ImageHubspot />
      <BoostHubRank />
      <Serviceprovide />
      <Hubspotdevelopment />
      <Broadindustries />
      <Hubspotcrm />
      <WhyHubspot />
      <Hubspotcms />
      <ImageHubspot />
      <HubspotClients />
      <OurTeamhubspot />
      <ServiceFaq accordionData={hubspotData} />
      <AddsPartner
        heading="Ready to transform your business with HubSpot?"
        paragraph="Leverage the potential of the world's most loved CMS platform for your business growth!"
        linkHref="/contact-us"
        linkText="Connect with Us Today!"
      />
      <Featuredblog />
      <HomeHiring/>
    </>
  );
};

export default page;
export const metadata = {
  title: "HubSpot Development Company | HubSpot Certified Agency",
  description:
    "Top HubSpot development company offering certified HubSpot CRM development services. Inbound certified agency for tailored HubSpot solutions. Contact us today!",
};
