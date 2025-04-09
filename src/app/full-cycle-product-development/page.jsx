import CycleServices from "@/components/fullcycleproduct/02CycleServices";
import CycleFocus from "@/components/fullcycleproduct/03CycleFocus";
import CycleHierarchy from "@/components/fullcycleproduct/04CycleHierarchy";
import CycleApart from "@/components/fullcycleproduct/05CycleApart";
import CycleBanner from "@/components/fullcycleproduct/01CycleBanner";
import "./style.css";

const page = () => {
  return (
    <>
      <CycleBanner />
      <CycleServices />
      <CycleFocus />
      <CycleHierarchy />
      <CycleApart />
    </>
  );
};

export default page;
export const metadata = {
  title: "Full Cycle Product Development Services | WebGuruz",
  description:
    "Full cycle product development services with WebGuruz, delivering innovative solutions from ideation to launch, ensuring success and growth for your business.",
};
