import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Timeline */}
      <div className="relative before:absolute before:top-0 before:left-4 sm:before:left-1/2 before:h-full before:w-[2px] before:bg-purple-500 sm:before:-translate-x-1/2">

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row items-start mb-14 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >

            {/* Timeline Dot */}
            <div className="absolute left-0 sm:left-1/2 top-2 sm:-translate-x-1/2 w-10 h-10 sm:w-14 sm:h-14 bg-[#0f172a] border-4 border-purple-500 rounded-full z-10 flex items-center justify-center overflow-hidden">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card */}
            <div
              className={`w-full sm:w-[44%] ml-12 sm:ml-0 p-5 sm:p-7 rounded-xl border border-white/10 bg-[#0f172a] backdrop-blur-md shadow-[0_0_18px_rgba(130,69,236,0.2)] transition duration-300 hover:scale-[1.03]
              ${
                index % 2 === 0
                  ? "sm:mr-auto sm:pr-10"
                  : "sm:ml-auto sm:pl-10"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white rounded-md overflow-hidden shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-gray-300">
                    {edu.school}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {edu.date}
                  </p>
                </div>
              </div>

              <p className="mt-3 text-gray-400 font-semibold">
                Grade: {edu.grade}
              </p>

              <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                {edu.desc}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Education;