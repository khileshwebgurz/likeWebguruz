import React from "react";
import Image from "next/image";
import agency1 from "../../../public/images/traningdevimg/train-performance-1.png";
import agency2 from "../../../public/images/traningdevimg/train-performance-2.png";
import agency3 from "../../../public/images/traningdevimg/train-performance-3.png";
import agency4 from "../../../public/images/traningdevimg/train-performance-4.png";
import agency5 from "../../../public/images/traningdevimg/train-performance-5.png";
import agency6 from "../../../public/images/traningdevimg/train-performance-6.png";

const agencyData = [
  {
    id: 1,
    image: agency1,
    title: "Organizational Assessment",
    alt: "Certified Professionals Icon",
    description:
      "A deep-dive, multi-dimensional evaluation that goes beyond surface-level skill assessment. Our expert team conducts comprehensive diagnostic analyses using advanced methodological frameworks, including in-depth interviews, performance data reviews, competency mapping, and organizational behavior assessments. We meticulously examine current skill levels across different departments, identifying not just existing gaps, but potential future skill requirements, emerging technological trends, and strategic organizational objectives.",
  },
  {
    id: 2,
    image: agency2,
    title: "Custom Program Design",
    alt: "24/7 Support Icon",
    description:
      "Leveraging insights from our comprehensive organizational assessment, we craft highly sophisticated, precision-engineered training modules that are far more than generic solutions. Our instructional design experts collaborate closely with your leadership to develop a bespoke learning ecosystem perfectly aligned with your organizational DNA. Each training module is strategically constructed to address specific skill gaps, cultural nuances, technological requirements, and long-term strategic goals.",
  },
  {
    id: 3,
    image: agency3,
    title: "Interactive Learning",
    alt: "Tools Icon",
    description:
      "Our learning methodologies transcend traditional training paradigms, creating immersive, multi-format educational experiences that engage learners on multiple cognitive levels. We blend diverse learning modalities, including interactive workshops, comprehensive online modules, real-world case study analyses, simulation-based training, peer learning networks, and hands-on practical training sessions. By offering a rich, varied learning landscape, we ensure maximum knowledge retention, practical skill application, and sustained engagement.",
  },
  {
    id: 4,
    image: agency4,
    title: "Continuous Monitoring",
    alt: "Client-Centric Approach Icon",
    description:
      "We view training as an ongoing journey, not a one-time event. Our sophisticated performance tracking mechanisms provide real-time insights into individual and collective learning progression. Utilizing advanced analytics and machine learning algorithms, we continuously assess skill development, knowledge application, and performance improvements. Regular feedback loops, personalized progress dashboards, and adaptive learning recommendations ensure that your workforce remains on an upward trajectory of continuous improvement.",
  },
  {
    id: 5,
    image: agency5,
    title: "Skill Validation",
    alt: "Proven ROI Icon",
    description:
      "Our robust skill validation process is designed to transform theoretical knowledge into demonstrable, practical competence. We employ a multi-tiered assessment approach that includes theoretical examinations, practical skill demonstrations, real-world problem-solving challenges, and industry-recognized certification processes. Participants don't just receive a certificate; they prove their enhanced capabilities through comprehensive evaluations that simulate actual workplace scenarios.",
  },
  {
    id: 6,
    image: agency6,
    title: "Post-Training Support",
    alt: "Scalable Services Icon",
    description:
      "Our commitment to your team's development extends far beyond the formal training period. We provide an extensive post-training support ecosystem designed to reinforce and sustain learning outcomes. This includes ongoing mentorship programs, access to exclusive knowledge repositories, periodic refresher modules, peer learning networks, and dedicated support channels for continuous skill refinement.",
  },
];

const TrainFeatures = () => {
  return (
    <div className="Amazonagency-section training-features py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2 className="mb-3">
              How it <span> Works?</span>
            </h2>
            <p>
              Our holistic approach to Employee Training & Development is
              designed for maximum impact and seamless integration:
            </p>
          </div>
          {agencyData.map((agency) => (
            <div key={agency.id} className="col-md-4 col-12 mb-4">
              <div className="amamzon-agency-card">
                <Image src={agency.image} alt={agency.alt} />
                <h5>{agency.title}</h5>
                <p>{agency.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainFeatures;
