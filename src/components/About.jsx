import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen text-white bg-gradient-to-r from-slate-900 to-slate-700 "
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="mt-20 text-xl">
        I am Mohit Deore a passionate and dedicated third-year computer science student at Sinhgad College, where I thrive on the challenges and excitement that the world of coding presents. With a profound love for programming, I find joy in turning complex problems into elegant solutions through the lines of code I write
        </p>

        <br />

        <p className="text-xl">
        My journey in the realm of computer science has been marked by a relentless pursuit of knowledge, constantly seeking to expand my skill set and stay abreast of the latest technologies. From algorithmic problem-solving to web development, my enthusiasm knows no bounds as I explore the diverse facets of the field.
        </p>
      </div>
    </div>
  );
   
};

export default About;
