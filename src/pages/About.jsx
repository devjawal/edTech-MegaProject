import React from "react"

import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
// import Footer from "../components/common/Footer"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"
import ReviewSlider from "../components/common/ReviewSlider"
import Footer from "../components/common/Footer"
import {  FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <section className="bg-richblack-900">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%] text-center">
  Building Scalable Tech for a
  <HighlightText text={"Smarter Tomorrow"} />
  <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-200 lg:w-[95%]">
    I created this EdTech platform to explore full-stack development, solve real-world problems, and deliver impactful digital experiences. This project reflects my goal of using technology to simplify learning and drive meaningful change in education.
  </p>
</header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <img src={BannerImage1} alt="" />
            <img src={BannerImage2} alt="" />
            <img src={BannerImage3} alt="" />
          </div>
        </div>
      </section>

      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <div>
            <a
              href="https://drive.google.com/file/d/1RdIU5nf268e1hya6dzDqP2GMFtM4TFeW/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group mx-auto mt-12 w-fit rounded-full bg-caribbeangreen-100 p-1 font-bold text-richblack-800 transition-all duration-200 hover:scale-95 hover:bg-yellow-50">
                <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200">
                  <p>View Resume</p>
                  <FaArrowRight />
                </div>
                
              </div>
              <div className="mx-auto flex justify-center items-center mt-6">
                <a
                    href="https://github.com/devjawal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex top-3 text-xl items-center gap-2 text-blue-150 hover:text-yellow-50 transition-all duration-200"
                  >
                    Explore more on my GitHub
                    <FaGithub />
                  </a>
              </div>
            </a>
          </div>
          <Quote />
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="text-caribbeangreen-50 bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-50 lg:w-[95%]">
                  Myself <span className="font-bold text-blue-25 text-xl"> Devkaran Jawal</span>,<br></br> I'm a passionate web developer currently pursuing my studies at VIT Vellore, driven by a deep interest in building scalable, modern web applications. This EdTech platform was developed as a personal project to gain a hands-on understanding of full-stack development, integrating both frontend and backend technologies to strengthen my core skills in real-world environments.
              </p>
              <p className="text-base font-medium text-richblack-50 lg:w-[95%]">
                While the platform is still evolving, it already incorporates essential production-level features like JWT and cookie-based authentication, Razorpay integration, role-based access, media uploading, and an interactive instructor dashboard. My goal is to continuously enhance it while exploring new tools and best practices—transforming this project into a robust, scalable solution aligned with industry standards.
              </p>
            </div>

            <div>
              <img
                src={FoundingStory}
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10 relative">
              {/* BackgrounFade */}
              
              <div className={`h-[200px] w-full absolute bottom-0 rounded-full bg-richblack-400 opacity-20 blur-3xl drop-shadow-[0_0_60px_#00C9A7] pointer-events-none`} />
              <h1 className="text-caribbeangreen-50 bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Academics
              </h1>
              <p className="text-base font-medium text-richblack-50 lg:w-[95%]">
                  I have maintained strong academic performance throughout my education, consistently aiming for excellence and self-improvement. Alongside my coursework, I actively pursue certifications and hands-on projects to broaden my technical knowledge and industry exposure.
                </p>
                <ul className="list-disc text-base font-medium text-richblack-50 lg:w-[95%] pl-6 space-y-1">
                  <li>Pursuing B.Tech at VIT Vellore with a <span className="font-bold text-blue-25">CGPA of 9.09</span></li>
                  <li>Scored 96% in 10th grade and 92.8% in 12th grade</li>
                  <li>Certified in <strong>Microsoft Azure AI Fundamentals (AI-102)</strong></li>
                  <li>Completed a professional Web Development certification</li>
                </ul>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10 relative">
              
              <div className={`h-[200px] w-full absolute top-0 rounded-full bg-richblack-400 opacity-20 blur-3xl drop-shadow-[0_0_60px_#00C9A7] pointer-events-none`} />
              <h1 className="text-caribbeangreen-50 bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                  My Other Projects
                </h1>
                <p className="text-base font-medium text-richblack-50 lg:w-[95%]">
                  Beyond this EdTech platform, I’ve built several full-stack and frontend projects that reflect my commitment to continuous learning and practical application. These include a feature-rich blog backend, a responsive shopping site, a real-time weather app, a trip planner, and a file upload tool with Cloudinary integration.
                </p>
                <ul className="list-disc text-base font-medium text-richblack-50 lg:w-[95%] pl-6 space-y-1">
                  <li>Tech Stack: MERN (MongoDB, Express, React, Node.js), Tailwind CSS</li>
                  <li>Tools Used: Postman, MongoDB Compass, JWT, Razorpay, Axios, Cloudinary</li>
                  <li>Projects emphasize authentication, API integration, dynamic UIs, and user-centric features</li>
                  
                  
                
                </ul>
            </div>
          </div>
        </div>
      </section>

      <StatsComponenet />
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        {/* <ReviewSlider /> */}
        <ReviewSlider />
      </div>
      {/* <Footer /> */}
      <Footer />
    </div>
  )
}

export default About