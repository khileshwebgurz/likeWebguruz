import Featuredblog from "@/components/homeComponents/09Featuredblog";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { WebsiteTrainig } from "@/utils/accordionData";
import "../digital-marketing-training-in-chandigarh-mohali/style.css";
import WebTrainForm from "@/components/commonTrainingProgram/01WebTrainForm";
import WebTrainDesc from "@/components/commonTrainingProgram/02WebTrainDesc";
import WebTrainFeat from "@/components/commonTrainingProgram/03WebTrainFeat";
import WebTrainBenefits from "@/components/commonTrainingProgram/04WebTrainBenefits";
import WebCertificates from "@/components/commonTrainingProgram/05WebCertificates";
import WebAfterCourse from "@/components/commonTrainingProgram/06WebAfterCourse";
const page = () => {
  return (
    <>
      <WebTrainForm />
      <WebTrainDesc />
      <WebTrainFeat />
      <WebTrainBenefits />
      <WebCertificates />
      <WebAfterCourse />
      <ServiceFaq accordionData={WebsiteTrainig} />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Expert Website Development Training in Mohali and Chandigarh",
  description:
    "Get expert website development training in Mohali and Chandigarh with WebGuruz. Enhance your skills and kickstart your career in web development today!",
};
