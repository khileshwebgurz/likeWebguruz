import DeliverOrganic from "@/components/otherServices/OrganicSeo/DeliverOrganic";
import OrganicProcess from "@/components/otherServices/OrganicSeo/OrganicProcess";
import OrganicService from "@/components/otherServices/OrganicSeo/OrganicService";
import PpcServiceForm from "@/components/otherServices/PpcDev/02PpcServiceForm";
import "../pay-per-click-management/style.css";
import OrgaincCounter from "@/components/otherServices/OrganicSeo/OrganicCounter";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { organicData } from "@/utils/accordionData";
import OrganicStratergy from "@/components/otherServices/OrganicSeo/OrganicStratergy";
import OrganicQuality from "@/components/otherServices/OrganicSeo/OrganicQuality";
import OrganicDestination from "@/components/otherServices/OrganicSeo/OrganicDestination";
import OrganicSeoNeeds from "@/components/otherServices/OrganicSeo/OrganicSeoNeeds";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import OrganicForm from "@/components/otherServices/OrganicSeo/OrganicForm";
import Featuredblog from "@/components/homeComponents/09Featuredblog";

const page = () => {
  return (
    <div>
      <OrganicService />
      <OrganicForm />
      <OrgaincCounter />
      <DeliverOrganic />
      <OrganicStratergy />
      <OrganicProcess />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater To"
        paragraph="From startups to established enterprises, we serve businesses across a wide range of industries."
      />
      <OrganicSeoNeeds />
      <OrganicDestination />
      <OrganicQuality />
      <ServiceFaq accordionData={organicData} />
      <AddsPartner
        heading="Ready to Boost Your Organic Search Visibility?"
        paragraph="Don’t let your competitors outrank you! Partner with WebGuruz, a leading organic SEO agency, to supercharge your online presence and drive long-term results."
        linkHref="/contact-us"
        linkText="Contact us Today!"
      />
      <Featuredblog />
    </div>
  );
};

export default page;
export const metadata = {
  title: "Top Organic SEO Agency in India | Best SEO Company | WebGuruz",
  description:
    "Boost your business with top organic SEO agency in India. Our expert SEO company in Mohali provides organic SEO services. Get results with organic SEO experts.",
};
