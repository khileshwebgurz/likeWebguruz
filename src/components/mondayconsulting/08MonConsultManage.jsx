import Image from "next/image";
import list1 from "../../../public/images/mondayconsimages/mon-con-1.png";
import list2 from "../../../public/images/mondayconsimages/mon-con-2.png";
import list3 from "../../../public/images/mondayconsimages/mon-con-3.png";
import list4 from "../../../public/images/mondayconsimages/mon-con-4.png";
import list5 from "../../../public/images/mondayconsimages/mon-con-5.png";
import list6 from "../../../public/images/mondayconsimages/mon-con-6.png";
import list7 from "../../../public/images/mondayconsimages/mon-con-7.png";
import list8 from "../../../public/images/mondayconsimages/mon-con-8.png";
import list9 from "../../../public/images/mondayconsimages/mon-con-9.png";

const MonConsultManage = () => {
  const navigateData = [
    {
      image: list1,
      title: "Visual Work Management",
      alt: "Certified Magento Expertise Icon",
      description:
        "Create visual, intuitive workflows that make it easy for teams to track progress, deadlines, and dependencies without wasting time in status meetings.",
    },
    {
      image: list2,
      title: "Collaborative Environment",
      alt: "Personalized Solutions Icon",
      description:
        "Foster better teamwork with shared workspaces, @mentions, updates, and file-sharing capabilities that keep everyone on the same page.",
    },
    {
      image: list3,
      title: "Custom Automation",
      alt: "Project Lifecycle Icon",
      description:
        "Eliminate repetitive tasks and reduce human error with automation that moves work forward automatically based on triggers you define.",
    },
    {
      image: list4,
      title: "Mobile Accessibility",
      alt: "Competitive Pricing Icon",
      description:
        "Keep work moving forward from anywhere with powerful mobile apps that provide the full Monday.com experience on the go.",
    },
    {
      image: list5,
      title: "Advanced Reporting",
      alt: "Faster Delivery Icon",
      description:
        "Gain insights into team performance, project status, and business metrics with custom dashboards that update in real time.",
    },
    {
      image: list6,
      title: "Customizable Notifications",
      alt: "100% Satisfaction Icon",
      description:
        "Ensure nothing falls through the cracks with smart notifications that alert team members about relevant updates and approaching deadlines.",
    },
    {
      image: list7,
      title: "Seamless Integrations",
      alt: "100% Satisfaction Icon",
      description:
        "Connect Monday.com with your existing tools like Gmail, Slack, Microsoft Teams, and more for a unified work ecosystem.",
    },
    {
      image: list8,
      title: "Flexible Permissions",
      alt: "100% Satisfaction Icon",
      description:
        "Control who can see and edit what with granular permission settings that protect sensitive information while promoting transparency.",
    },
    {
      image: list9,
      title: "Scalable Architecture",
      alt: "100% Satisfaction Icon",
      description:
        "Start with what you need today and expand as your business grows, with a platform that scales seamlessly from small teams to enterprise organizations.",
    },
  ];

  return (
    <div className="monday-consult-manage py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-5">
            <h2>
              Transform Your Workflow with the <span>Power of Monday.com </span>
            </h2>
            <p>
              Monday.com is more than just project management software- it&apos;s a
              complete work operating system that can revolutionize how your
              business operates. With WebGuruz as your implementation partner,
              you&apos;ll unlock the platform&apos;s full potential.
            </p>
          </div>
          {navigateData.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="Navigatesucess-box">
                <div className="navigate-icon">
                  <Image src={item.image} alt={item.alt} />
                </div>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonConsultManage;
