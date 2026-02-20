import React from "react";
import { experiences } from "../../constants"; 

const Experience = () => {
  const exp = experiences[0]; // Only one experience

  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My internship experience where I contributed and learned real-world skills.
        </p>
      </div>

      {/* Single Experience Card */}
      <div className="flex justify-center">
        <div className="w-full sm:max-w-xl p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105">

          {/* Logo + Details */}
          <div className="flex items-center space-x-6">
            <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
              <img
                src={exp.img}
                alt={exp.company}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
              <h4 className="text-md text-gray-300">{exp.company}</h4>
              <p className="text-sm text-gray-500 mt-1">{exp.date}</p>
            </div>
          </div>

          <p className="mt-4 text-gray-400">{exp.desc}</p>

          <div className="mt-4">
            <h5 className="font-medium text-white">Skills:</h5>
            <ul className="flex flex-wrap mt-2">
              {exp.skills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-[#8245ec] text-gray-300 px-4 py-1 text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
