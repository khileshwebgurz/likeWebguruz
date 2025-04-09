import LeaderBanner from "@/components/leadershipTeam/01LeaderBanner";
import "./style.css";
import OurLeaders from "@/components/leadershipTeam/02OurLeaders";
const page = () => {
  return (
    <>
      <LeaderBanner />
      <OurLeaders />
    </>
  );
};

export default page;
export const metadata = {
  title: "Leadership Team - WebGuruz",
  description:
    "Meet the leadership team at WebGuruz. Our experts drive innovation, growth, and success, shaping the future of digital solutions with vision and expertise.",
};
