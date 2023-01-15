import React from "react";

const Experience = () => {
  return (
    <div>
      <p className="mt-20  text-4xl" id="experience">
        EXPERIENCE
      </p>
      <section className="text-start text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  BOUNTIE
                </span>
                <span className="mt-1 text-gray-500 text-sm">
                  September 2022 - December 2022
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Frontend Developer Intern
                </h2>
                <div className="leading-relaxed">
                  <ul className="list-disc">
                    <li>
                      Asssting and contributing on the revamp of Bountie.io
                      website
                    </li>
                    <li>
                      Implemented website pages from design and concept using
                      Nextjs, Typescript, Tailwind, and Context Bug Fixing
                    </li>
                    <li>Bug Fixing</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  Ambivers.id
                </span>
                <span className="mt-1 text-gray-500 text-sm">
                  March 2022 - June 2022
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Frontend Developer Intern
                </h2>
                <div className="leading-relaxed">
                  <ul className="list-disc">
                    <li>
                      Built Front-end of Ambivers.id Tryout Website using React
                      js
                    </li>
                    <li>
                      Implemented website pages from design and concept to
                      deployment
                    </li>
                    <li>
                      Worked with Back-end to communicate website using API
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  Kementerian Dalam Negeri
                </span>
                <span className="text-sm text-gray-500">
                  Oktober 2021 - November 2021
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Web Developer Intern
                </h2>
                <div className="leading-relaxed">
                  <ul className="list-disc">
                    <li>
                      Assistsing to develop a CPNS Tryout website using PHP
                      Codeigniter 3
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
