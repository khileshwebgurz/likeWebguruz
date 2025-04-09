import './style.css'
import AwardsrecogBanner from '@/components/awardsRecognition/01AwardsrecogBanner'
import LongHistory from '@/components/awardsRecognition/02LongHistory'

const page = () => {
  return (
    <>
    <AwardsrecogBanner/>
    <LongHistory/>
    </>
  )
}

export default page
export const metadata = {
  title: "Awards and Recognition | WebGuruz",
  description:
    "See how WebGuruz has earned global recognition for its innovation, excellence, and industry leadership. Discover our awards and the impact we have made worldwide.",
};