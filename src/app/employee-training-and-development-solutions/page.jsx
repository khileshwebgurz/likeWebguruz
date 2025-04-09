import TrainBanner from "@/components/trainingDevelopment/01TrainBanner";
import "../services/pay-per-click-management/style.css";
import TrainForm from "@/components/trainingDevelopment/02TrainForm";
import TrainingBenfits from "@/components/trainingDevelopment/03TrainBenefits";
import "./style.css";
import "../services/amazon-ppc-management/style.css";
import "../services/white-label-seo/style.css";
import "../ecommerce-consulting-services/style.css";
import TrainOrganisation from "@/components/trainingDevelopment/04TrainOrganisation";
import TrainTalent from "@/components/trainingDevelopment/05TrainTalent";
import TrainFeatures from "@/components/trainingDevelopment/06TrainFeatures";
import TrainHelp from "@/components/trainingDevelopment/07TrainHelp";
import TrainOffer from "@/components/trainingDevelopment/08TrainOffer";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { traindevdata } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
const page = () => {
  return (
    <>
      <TrainBanner />
      <TrainForm />
      <TrainingBenfits />
      <TrainOrganisation />
      <TrainTalent />
      <TrainFeatures />
      <TrainHelp />
      <TrainOffer />
      <ServiceFaq accordionData={traindevdata} />
      <AddsPartner
        heading="Ready to Transform Your Workforce?"
        paragraph="Partner with WebGuruz Technologies and unlock your team's full potential. Contact us today for a free consultation and take the first step towards organizational excellence!"
        linkHref="/contact-us"
        linkText="Connect with us today!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Employee training and development solutions - WebGuruz",
  description: "Best employee training and development solutions inspire your employees to love what they do and the brand they do it for with engaging learning solutions.",
};