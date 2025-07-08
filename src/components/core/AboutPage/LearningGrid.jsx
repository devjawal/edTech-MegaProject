import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";

const LearningGridArray = [
  {
  order: -1,
  heading: "Explore the Platform",
  highlightText: "Key Features and Capabilities",
  description:
    "This section highlights the core functionalities and technical strengths of the edTech platform — a full-stack learning system designed to support students, instructors, and admins through secure, scalable, and interactive tools.",
  BtnText: "Explore Platform",
  BtnLink: "/",
},
  {
    order: 1,
    heading: "Role-Based Access Control",
    description:
      "Customized functionality for each user type — students access courses, instructors manage content, and admins oversee platform activity.",
  },
  {
    order: 2,
    heading: "Course Creation and Management",
    description:
      "Instructors can create structured courses with videos, descriptions, pricing, and categories using an intuitive interface.",
  },
  {
    order: 3,
    heading: "Seamless Enrollment and Progress Tracking",
    description:
      "Students can browse the course catalog, enroll, and track their learning journey with built-in progress indicators. Includes Razorpay test-mode integration for simulating secure payment flows.",
  },
  {
    order: 4,
    heading: "Secure Authentication",
    description:
      "JWT-based login and role validation ensure a secure, stateless, and scalable user session management system.",
  },
  {
    order: 5,
    heading: "Modern Full-Stack Architecture",
    description:
      "Built using React, Node.js, MongoDB, Tailwind CSS, and deployed on Vercel/Render — ensuring performance, responsiveness, and scalability.",
  },
];

const LearningGrid = () => {
  return (
    <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`${i === 0 && "xl:col-span-2 xl:h-[294px]"}  ${
              card.order % 2 === 1
                ? "bg-richblack-700 h-[294px]"
                : card.order % 2 === 0
                ? "bg-richblack-800 h-[294px]"
                : "bg-transparent"
            } ${card.order === 3 && "xl:col-start-2"}  `}
          >
            {card.order < 0 ? (
              <div className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0">
                <div className="text-4xl font-semibold ">
                  {card.heading}
                  <HighlightText text={card.highlightText} />
                </div>
                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8">
                <h1 className="text-richblack-5 text-lg">{card.heading}</h1>

                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;