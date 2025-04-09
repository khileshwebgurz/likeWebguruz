import WorkBanner from '@/components/howWeWorkPage/01WorkBanner'
import ProductCycle from '@/components/howWeWorkPage/02ProductCycle'
import TechnologyOperate from '@/components/howWeWorkPage/03TechnologyOperate'
import './style.css'
import RoiService from '@/components/howWeWorkPage/04RoiService'
const page = () => {
  return (
    <>
      <WorkBanner/>
      <ProductCycle/>
      <TechnologyOperate/>
      <RoiService/>
    </>
  )
}

export default page
export const metadata = {
  title: "How We Work | WebGuruz Technologies",
  description:
    "With WebGuruz, your digital ideas become reality. Our step-by-step process ensures your plan is achieved and your business succeeds online.",
};