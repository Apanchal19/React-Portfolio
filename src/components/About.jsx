import React from "react";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full max-h-fit">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl hmt-20">
        -> Firm knowledge of software development life cycle, application management, master data management, software support and maintenance.<br />
        -> Superlative problem-solving skills with solid Experience in troubleshooting, diagnosis, and fixing software issues in production environments.<br />
        -> Excellent ability to understand end to end application flow quickly thereby reducing turnaround time for root cause analysis for software issues.<br />
        -> Highly skilled in development, maintenance and configuration of software systems through code development or resolving other technical challenges.<br />
        -> Excellent teamwork skills including but not limited to working with development squads on enhancement, support and technical documentation of applications.<br />
       
        </p>

        <p className="text-xl">
        -> Identification of manual activities in the application development or support processes and taking initiatives to automate such processes.<br />
        -> Detail oriented mindset with impeccable communication within teams and with consumers, providing a professional customer experience even under pressure.<br />
        -> Distinguish priority tasks and distinct classification of issues to help make thoughtful decisions thus limit/prevent application outage.
       
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </p>
      </div>
    </div>
  );
};

export default About;
