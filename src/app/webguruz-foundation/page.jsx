import SliderBanner from "@/components/foundationComp/01SliderBanner";
import "./style.css";
import Foundationbox from "@/components/foundationComp/02FoundationBox";
import FoundationServices from "@/components/foundationComp/03FoundationServices";
import FoundationSports from "@/components/foundationComp/04FoundationSports";
import FoundatioMedical from "@/components/foundationComp/05FoundationMedical";
const page = () => {
  return (
    <>
      <SliderBanner />
      <Foundationbox />
      <FoundationServices />
      <FoundationSports />
      <FoundatioMedical />
    </>
  );
};

export default page;
export const metadata = {
  title: "WebGuruz Foundation: Driving Social Change Beyond IT",
  description:
    "WebGuruz is committed to bringing a difference and empowering communities beyond IT. Discover our initiatives that are driving a meaningful social change.",
};
