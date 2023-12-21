import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      demoLink : "https://www.linkedin.com/posts/mohit-deore-97815921b_webdevelopment-html-css-activity-7109495297738719232-ZXWe?utm_source=share&utm_medium=member_desktop"
    },
    {
      id: 2,
      src: reactParallax,
      demoLink: "https://lnkd.in/ddEDhjnN",
    },
    {
      id: 3,
      src: navbar,
      // demoLink : 
    },
    {
      id: 4,
      src: reactSmooth,
      demoLink : "https://www.linkedin.com/posts/mohit-deore-97815921b_figma-ui-uiuxdesign-activity-7065420601074626560-4b2g?utm_source=share&utm_medium=member_desktop"
    },
    {
      id: 5,
      src: installNode,
      demoLink :"https://www.linkedin.com/feed/update/urn:li:activity:7087106927003860992/?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: 6,
      src: reactWeather,
      demoLink :"https://lnkd.in/dQqZ3XxG",
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full text-white bg-gradient-to-r from-gray-600 to-slate-800 md:h-screen"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0">
          {portfolios.map(({ id, src, demoLink }) => (
            <div key={id} className="rounded-lg shadow-md shadow-gray-600">
              <img
                src={src}
                alt=""
                className="duration-200 rounded-md hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
