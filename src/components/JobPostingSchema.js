"use client";
import { usePathname } from "next/navigation";
import Script from "next/script";

export default function JobPostingSchema() {
  const pathname = usePathname();
  let jobPostingData = null;

  // Use if-else to determine which job posting to show
  if (pathname === "/jobs-in-mohali/social-media-executive") {
    jobPostingData = {
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      title: "Social Media Executive",
      description:
        "We are looking for a Social Media Expert to plan and manage social media campaigns and help us build brands. You should be a creative individual who can produce witty and engaging content for our social media pages. Besides, you should be well-versed in social media campaign creation and management to ensure the success of our campaigns. To excel in this role, you should be updated with the latest trends and design a strategy to take advantage of the same. If you consider yourself a social media ninja and have a demonstrable portfolio of your work, we would like to meet you.",
      identifier: {
        "@type": "PropertyValue",
        name: "WebGuruz Technologies Pvt Ltd",
        value: "",
      },
      datePosted: "2025-03-05",
      validThrough: "2026-03-05T00:00",
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "WebGuruz Technologies Pvt Ltd",
        sameAs: "https://webguruz.in/",
        url: "https://webguruz.in/jobs-in-mohali/social-media-executive",
        logo: "https://webguruz.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-logo-one.f806d280.webp&w=384&q=75",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: "C-205, 4th Floor, SM Heights, NH 5",
          addressLocality: "Sector 74",
          addressRegion: "Sahibzada Ajit Singh Nagar",
          postalCode: "160071",
          addressCountry: "India",
        },
      },
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "INR",
        value: {
          "@type": "QuantitativeValue",
          value: "00.00",
          unitText: "Month",
        },
      },
    };
  }
  if (pathname === "/jobs-in-mohali/brand-manager-social-media") {
    jobPostingData = {
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      title: "Brand Manager (Social Media)",
      description:
        "We are seeking a passionate and experienced Brand Manager with 2+ years of hands-on experience in Social Media Marketing (SMM). The ideal candidate will have a deep understanding of social media strategies, content creation, and community engagement. The role requires excellent communication skills, a strong ability to manage and lead a team, and experience in working with overseas clients. You will play a key role in developing and executing social media strategies that build and enhance brand presence across various platforms.",
      identifier: {
        "@type": "PropertyValue",
        name: "WebGuruz Technologies Pvt Ltd",
        value: "",
      },
      datePosted: "2025-03-05",
      validThrough: "2026-03-05T00:00",
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "WebGuruz Technologies Pvt Ltd",
        sameAs: "https://webguruz.in/",
        url: "https://webguruz.in/jobs-in-mohali/brand-manager-social-media",
        logo: "https://webguruz.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-logo-one.f806d280.webp&w=384&q=75",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: "C-205, 4th Floor, SM Heights, NH 5",
          addressLocality: "Sector 74",
          addressRegion: "Sahibzada Ajit Singh Nagar",
          postalCode: "160071",
          addressCountry: "India",
        },
      },
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "INR",
        value: {
          "@type": "QuantitativeValue",
          value: "00.00",
          unitText: "Month",
        },
      },
    };
  }
  if (pathname === "/jobs-in-mohali/quality-analyst") {
    jobPostingData = {
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      title: "Quality Analyst",
      description:
        "We are looking for a Quality Analyst (QA) with 1 to 3 years of experience to ensure the quality and functionality of web and software applications. The ideal candidate should have a keen eye for detail, strong analytical skills, and expertise in testing methodologies to identify and resolve issues efficiently. In this role, you will be responsible for manual and automated testing, reporting bugs, and ensuring a seamless user experience. You will collaborate with developers and designers to enhance product performance and meet industry standards.",
      identifier: {
        "@type": "PropertyValue",
        name: "WebGuruz Technologies Pvt Ltd",
        value: "",
      },
      datePosted: "2025-03-05",
      validThrough: "2026-03-05T00:00",
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "WebGuruz Technologies Pvt Ltd",
        sameAs: "https://webguruz.in/",
        url: "https://webguruz.in/jobs-in-mohali/quality-analyst",
        logo: "https://webguruz.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-logo-one.f806d280.webp&w=384&q=75",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: "C-205, 4th Floor, SM Heights, NH 5",
          addressLocality: "Sector 74",
          addressRegion: "Sahibzada Ajit Singh Nagar",
          postalCode: "160071",
          addressCountry: "India",
        },
      },
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "INR",
        value: {
          "@type": "QuantitativeValue",
          value: "00.00",
          unitText: "Month",
        },
      },
    };
  }
  if (pathname === "/jobs-in-mohali/project-coordinator") {
    jobPostingData = {
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      title: "Project Coordinator",
      description:
        "We are looking for a Project Coordinator with 2+ years of experience to assist in planning, executing, and overseeing projects to ensure timely delivery and client satisfaction. The ideal candidate should be detail-oriented, proactive, and have excellent communication and organizational skills to manage multiple projects efficiently.",
      identifier: {
        "@type": "PropertyValue",
        name: "WebGuruz Technologies Pvt Ltd",
        value: "",
      },
      datePosted: "2025-03-05",
      validThrough: "2026-03-05T00:00",
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "WebGuruz Technologies Pvt Ltd",
        sameAs: "https://webguruz.in/",
        url: "https://webguruz.in/jobs-in-mohali/project-coordinator",
        logo: "https://webguruz.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-logo-one.f806d280.webp&w=384&q=75",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: "C-205, 4th Floor, SM Heights, NH 5",
          addressLocality: "Sector 74",
          addressRegion: "Sahibzada Ajit Singh Nagar",
          postalCode: "160071",
          addressCountry: "India",
        },
      },
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "INR",
        value: {
          "@type": "QuantitativeValue",
          value: "00.00",
          unitText: "Month",
        },
      },
    };
  }
  if (pathname === "/jobs-in-mohali/marketing-specialist") {
    jobPostingData = {
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      title: "Marketing Specialist",
      description:
        "We are looking for an enthusiastic Marketing Specialist to help us in our overall marketing efforts. You will be an integral part of the development and execution of marketing plans to reach targets from brand awareness to product promotion. A Marketing specialist should be a competent professional able to grasp consumer behavior trends and generate creative ideas. You should be well-versed in specialized marketing concepts, principles, and tactics. The goal is to deliver effective marketing programs that will help our reputation and growth.",
      identifier: {
        "@type": "PropertyValue",
        name: "WebGuruz Technologies Pvt Ltd",
        value: "",
      },
      datePosted: "2025-03-05",
      validThrough: "2026-03-05T00:00",
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "WebGuruz Technologies Pvt Ltd",
        sameAs: "https://webguruz.in/",
        url: "https://webguruz.in/jobs-in-mohali/marketing-specialist",
        logo: "https://webguruz.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-logo-one.f806d280.webp&w=384&q=75",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: "C-205, 4th Floor, SM Heights, NH 5",
          addressLocality: "Sector 74",
          addressRegion: "Sahibzada Ajit Singh Nagar",
          postalCode: "160071",
          addressCountry: "India",
        },
      },
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "INR",
        value: {
          "@type": "QuantitativeValue",
          value: "00.00",
          unitText: "Month",
        },
      },
    };
  }
  if (pathname === "/jobs-in-mohali/hubspot-implementation-expert") {
    jobPostingData = {
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      title: "HubSpot Implementation Expert",
      description:
        "Our team is expanding rapidly and evolving in exciting ways, and were looking for a high-performing individual to join us in helping our clients excel with HubSpot. As a partnered firm with a strong focus on HubSpot integration, our unique expertise is driving significant growth. To keep up with the increasing demand from new clients, we need additional support to ensure we continue delivering exceptional service.",
      identifier: {
        "@type": "PropertyValue",
        name: "WebGuruz Technologies Pvt Ltd",
        value: "",
      },
      datePosted: "2025-03-05",
      validThrough: "2026-03-05T00:00",
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "WebGuruz Technologies Pvt Ltd",
        sameAs: "https://webguruz.in/",
        url: "https://webguruz.in/jobs-in-mohali/hubspot-implementation-expert",
        logo: "https://webguruz.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-logo-one.f806d280.webp&w=384&q=75",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: "C-205, 4th Floor, SM Heights, NH 5",
          addressLocality: "Sector 74",
          addressRegion: "Sahibzada Ajit Singh Nagar",
          postalCode: "160071",
          addressCountry: "India",
        },
      },
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "INR",
        value: {
          "@type": "QuantitativeValue",
          value: "00.00",
          unitText: "Month",
        },
      },
    };
  }
  if (pathname === "/jobs-in-mohali/hr-executive") {
    jobPostingData = {
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      title: "HR Executive",
      description:
        "We are looking for a passionate candidate who’s personality is about Professional, Reliable, Empathetic, Supportive, Proactive, Solution-Oriented, Encouraging, Motivating, Transparent and Trustworthy and carries 2 to 3 years of relevant experience in HR and Talent Acquisition. HR Executive responsibilities include overseeing HR Operations, and end-to-end recruitments. To be successful in this role, you should have a background in Human Resources. Ultimately, you will make strategic decisions for our company so that we hire, develop and retain qualified employees.",
      identifier: {
        "@type": "PropertyValue",
        name: "WebGuruz Technologies Pvt Ltd",
        value: "",
      },
      datePosted: "2025-03-05",
      validThrough: "2026-03-05T00:00",
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "WebGuruz Technologies Pvt Ltd",
        sameAs: "https://webguruz.in/",
        url: "https://webguruz.in/jobs-in-mohali/hr-executive",
        logo: "https://webguruz.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-logo-one.f806d280.webp&w=384&q=75",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: "C-205, 4th Floor, SM Heights, NH 5",
          addressLocality: "Sector 74",
          addressRegion: "Sahibzada Ajit Singh Nagar",
          postalCode: "160071",
          addressCountry: "India",
        },
      },
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "INR",
        value: {
          "@type": "QuantitativeValue",
          value: "00.00",
          unitText: "Month",
        },
      },
    };
  }
  if (pathname === "/jobs-in-mohali/creative-designer") {
    jobPostingData = {
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      title: "Creative Designer",
      description:
        "We are looking for a creative and skilled Graphic Designer to join our Social Media Team. The ideal candidate will have 2-5 years of experience in designing for digital marketing, with a focus on creating compelling visuals that engage and drive traffic across various social media platforms. You will play a key role in developing dynamic visual content for social campaigns, enhancing brand presence, and boosting audience engagement.",
      identifier: {
        "@type": "PropertyValue",
        name: "WebGuruz Technologies Pvt Ltd",
        value: "",
      },
      datePosted: "2025-03-05",
      validThrough: "2026-03-05T00:00",
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "WebGuruz Technologies Pvt Ltd",
        sameAs: "https://webguruz.in/",
        url: "https://webguruz.in/jobs-in-mohali/creative-designer",
        logo: "https://webguruz.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-logo-one.f806d280.webp&w=384&q=75",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: "C-205, 4th Floor, SM Heights, NH 5",
          addressLocality: "Sector 74",
          addressRegion: "Sahibzada Ajit Singh Nagar",
          postalCode: "160071",
          addressCountry: "India",
        },
      },
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "INR",
        value: {
          "@type": "QuantitativeValue",
          value: "00.00",
          unitText: "Month",
        },
      },
    };
  }
  if (pathname === "/jobs-in-mohali/jr-creative-designer") {
    jobPostingData = {
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      title: "Jr. Creative Designer",
      description:
        "We are looking for a talented Web Designer to create amazing user experiences. The ideal candidate should have an eye for clean and artful web design. They should also have superior user interface design skills.The successful candidate will be able to translate high-level requirements into interaction flows and artifacts. They will be able to transform them into beautiful, intuitive, and functional designs.",
      identifier: {
        "@type": "PropertyValue",
        name: "WebGuruz Technologies Pvt Ltd",
        value: "",
      },
      datePosted: "2025-03-05",
      validThrough: "2026-03-05T00:00",
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "WebGuruz Technologies Pvt Ltd",
        sameAs: "https://webguruz.in/",
        url: "https://webguruz.in/jobs-in-mohali/jr-creative-designer",
        logo: "https://webguruz.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-logo-one.f806d280.webp&w=384&q=75",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: "C-205, 4th Floor, SM Heights, NH 5",
          addressLocality: "Sector 74",
          addressRegion: "Sahibzada Ajit Singh Nagar",
          postalCode: "160071",
          addressCountry: "India",
        },
      },
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "INR",
        value: {
          "@type": "QuantitativeValue",
          value: "00.00",
          unitText: "Month",
        },
      },
    };
  }
  if (pathname === "/jobs-in-mohali/lead-web-ui-ux-designer") {
    jobPostingData = {
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      title: "Lead Web UI/UX Designer",
      description:
        "We are looking for a talented Lead Web UIUX Designer with 5+ years of experience who can work full time to create amazing user experiences. The ideal candidate should have an eye for clean and artful web design. They should also have superior user interface design skills.The successful candidate will be able to translate high-level requirements into interaction flows and artifacts. They will be able to transform them into beautiful, intuitive, and functional designs.",
      identifier: {
        "@type": "PropertyValue",
        name: "WebGuruz Technologies Pvt Ltd",
        value: "",
      },
      datePosted: "2025-03-05",
      validThrough: "2026-03-05T00:00",
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "WebGuruz Technologies Pvt Ltd",
        sameAs: "https://webguruz.in/",
        url: "https://webguruz.in/jobs-in-mohali/lead-web-ui-ux-designer",
        logo: "https://webguruz.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-logo-one.f806d280.webp&w=384&q=75",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: "C-205, 4th Floor, SM Heights, NH 5",
          addressLocality: "Sector 74",
          addressRegion: "Sahibzada Ajit Singh Nagar",
          postalCode: "160071",
          addressCountry: "India",
        },
      },
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "INR",
        value: {
          "@type": "QuantitativeValue",
          value: "00.00",
          unitText: "Month",
        },
      },
    };
  }
  if (pathname === "/jobs-in-mohali/assistant-project-manager-seo") {
    jobPostingData = {
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      title: "Assistant Project Manager – SEO",
      description:
        "We are looking for an Assistant Project Manager with 3+ years of hands-on SEO experience. The ideal candidate will have a strong background in SEO techniques, team management, and a good understanding of digital marketing. This role requires excellent communication skills, experience working with overseas clients, and the ability to work in a fast-paced environment. You will play a key role in supporting the project management team and ensuring smooth execution of SEO campaigns from start to finish.",
      identifier: {
        "@type": "PropertyValue",
        name: "WebGuruz Technologies Pvt Ltd",
        value: "",
      },
      datePosted: "2025-03-05",
      validThrough: "2026-03-05T00:00",
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "WebGuruz Technologies Pvt Ltd",
        sameAs: "https://webguruz.in/",
        url: "https://webguruz.in/jobs-in-mohali/assistant-project-manager-seo",
        logo: "https://webguruz.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-logo-one.f806d280.webp&w=384&q=75",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: "C-205, 4th Floor, SM Heights, NH 5",
          addressLocality: "Sector 74",
          addressRegion: "Sahibzada Ajit Singh Nagar",
          postalCode: "160071",
          addressCountry: "India",
        },
      },
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "INR",
        value: {
          "@type": "QuantitativeValue",
          value: "00.00",
          unitText: "Month",
        },
      },
    };
  }
  if (pathname === "/jobs-in-mohali/senior-project-manager-digital-marketing") {
    jobPostingData = {
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      title: "Senior Project Manager – Digital Marketing",
      description:
        "We are seeking a Senior Project Manager with 10+ years of hands-on experience in Digital Marketing, including SEO, SMM, and PPC. The ideal candidate will possess a deep understanding of digital marketing strategies and demonstrate exceptional communication skills, both with clients and within cross-functional teams. This role requires an individual who has managed large, complex projects, has exposure to working with overseas clients, and can lead teams to achieve impactful results.",
      identifier: {
        "@type": "PropertyValue",
        name: "WebGuruz Technologies Pvt Ltd",
        value: "",
      },
      datePosted: "2025-03-05",
      validThrough: "2026-03-05T00:00",
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "WebGuruz Technologies Pvt Ltd",
        sameAs: "https://webguruz.in/",
        url: "https://webguruz.in/jobs-in-mohali/senior-project-manager-digital-marketing",
        logo: "https://webguruz.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-logo-one.f806d280.webp&w=384&q=75",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: "C-205, 4th Floor, SM Heights, NH 5",
          addressLocality: "Sector 74",
          addressRegion: "Sahibzada Ajit Singh Nagar",
          postalCode: "160071",
          addressCountry: "India",
        },
      },
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "INR",
        value: {
          "@type": "QuantitativeValue",
          value: "00.00",
          unitText: "Month",
        },
      },
    };
  }
  if (
    pathname ===
    "/jobs-in-mohali/business-development-manager-digital-marketing"
  ) {
    jobPostingData = {
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      title: "Business Development Manager (Digital Marketing)",
      description:
        "We are looking for an experienced Business Development Manager (BDM) with 4+ years of experience and strong expertise in team handling, client acquisition, and revenue generation. The ideal candidate will be responsible for leading a team, identifying business opportunities, building client relationships, and driving company growth.",
      identifier: {
        "@type": "PropertyValue",
        name: "WebGuruz Technologies Pvt Ltd",
        value: "",
      },
      datePosted: "2025-03-05",
      validThrough: "2026-03-05T00:00",
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "WebGuruz Technologies Pvt Ltd",
        sameAs: "https://webguruz.in/",
        url: "https://webguruz.in/jobs-in-mohali/business-development-manager-digital-marketing",
        logo: "https://webguruz.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-logo-one.f806d280.webp&w=384&q=75",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: "C-205, 4th Floor, SM Heights, NH 5",
          addressLocality: "Sector 74",
          addressRegion: "Sahibzada Ajit Singh Nagar",
          postalCode: "160071",
          addressCountry: "India",
        },
      },
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "INR",
        value: {
          "@type": "QuantitativeValue",
          value: "00.00",
          unitText: "Month",
        },
      },
    };
  }
  if (pathname === "/jobs-in-mohali/business-development-executive") {
    jobPostingData = {
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      title: "Business Developer Executive",
      description:
        "We’re seeking a highly motivated and skilled business development executive to join our fast-growing team at WebGuruz. The ideal candidate will be responsible for lead generation, driving revenue, and bringing new opportunities for our business growth.",
      identifier: {
        "@type": "PropertyValue",
        name: "WebGuruz Technologies Pvt Ltd",
        value: "",
      },
      datePosted: "2025-03-05",
      validThrough: "2026-03-05T00:00",
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "WebGuruz Technologies Pvt Ltd",
        sameAs: "https://webguruz.in/",
        url: "https://webguruz.in/jobs-in-mohali/business-development-executive",
        logo: "https://webguruz.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-logo-one.f806d280.webp&w=384&q=75",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: "C-205, 4th Floor, SM Heights, NH 5",
          addressLocality: "Sector 74",
          addressRegion: "Sahibzada Ajit Singh Nagar",
          postalCode: "160071",
          addressCountry: "India",
        },
      },
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "INR",
        value: {
          "@type": "QuantitativeValue",
          value: "00.00",
          unitText: "Month",
        },
      },
    };
  }
  if (pathname === "/jobs-in-mohali/senior-project-manager-digital-marketing") {
    jobPostingData = {
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      title: "Business Development Manager",
      description:
        "We are looking for an experienced Business Development Manager (Web Development) with 5+ years of experience and strong expertise in team handling, client acquisition, and revenue generation. The ideal candidate will be responsible for leading a team, identifying business opportunities, building client relationships, and driving company growth.",
      identifier: {
        "@type": "PropertyValue",
        name: "WebGuruz Technologies Pvt Ltd",
        value: "",
      },
      datePosted: "2025-03-05",
      validThrough: "2026-03-05T00:00",
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "WebGuruz Technologies Pvt Ltd",
        sameAs: "https://webguruz.in/",
        url: "https://webguruz.in/jobs-in-mohali/business-development-manager-web-development",
        logo: "https://webguruz.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-logo-one.f806d280.webp&w=384&q=75",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: "C-205, 4th Floor, SM Heights, NH 5",
          addressLocality: "Sector 74",
          addressRegion: "Sahibzada Ajit Singh Nagar",
          postalCode: "160071",
          addressCountry: "India",
        },
      },
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "INR",
        value: {
          "@type": "QuantitativeValue",
          value: "00.00",
          unitText: "Month",
        },
      },
    };
  }
  if (pathname === "/jobs-in-mohali/shopify-developers") {
    jobPostingData = {
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      title: "Shopify Developers",
      description:
        "We are looking for Shopify developers who are comfortable programming on the Shopify platform. They should have development experience, in-depth understanding, and distinct perspectives of all things to specialize in all the Shopify projects.The chosen candidate should be able to create a bespoke development using the existing Shopify templates. Besides that, they must also know how to convert mock-ups and specifications into complete functional solutions. Candidate must also know how to update and modify the existing websites to enhance the UX/UI design or add new features. They must also know how to test and develop 3rd-party Shopify apps and customize and create Shopify accounts.",
      identifier: {
        "@type": "PropertyValue",
        name: "WebGuruz Technologies Pvt Ltd",
        value: "",
      },
      datePosted: "2025-03-05",
      validThrough: "2026-03-05T00:00",
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "WebGuruz Technologies Pvt Ltd",
        sameAs: "https://webguruz.in/",
        url: "https://webguruz.in/jobs-in-mohali/shopify-developers",
        logo: "https://webguruz.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-logo-one.f806d280.webp&w=384&q=75",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: "C-205, 4th Floor, SM Heights, NH 5",
          addressLocality: "Sector 74",
          addressRegion: "Sahibzada Ajit Singh Nagar",
          postalCode: "160071",
          addressCountry: "India",
        },
      },
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "INR",
        value: {
          "@type": "QuantitativeValue",
          value: "00.00",
          unitText: "Month",
        },
      },
    };
  }
  if (!jobPostingData) {
    return null;
  }

  return (
    <Script
      id="job-posting-ldjson"
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {JSON.stringify(jobPostingData)}
    </Script>
  );
}
