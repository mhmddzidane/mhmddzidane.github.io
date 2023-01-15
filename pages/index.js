import ImageWrapper from "../components/molecules/ImageWrapper";
import Header from "../components/organism/Header";
import Projects from "../components/organism/Projects";
import AppLayout from "../components/templates";
import { pic } from "../public/images/homePage";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Experience from "../components/organism/Experience";

const Home = () => {
  const headList = {
    title: `Muhammad Zidane | Home`,
    description: `This is homepage`,
  };

  const control = useAnimation();
  const [ref, inView] = useInView();
  const [refProject, projectView] = useInView();

  useEffect(() => {
    if (inView || projectView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView, projectView]);

  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <AppLayout {...headList}>
      <Header />
      <div className="text-center mt-20 px-5 md:px-28 " id="about">
        <p className="text-4xl">GET TO KNOW ME</p>
        <div className="flex md:flex-row flex-col-reverse justify-center mt-10  ">
          <div className="bg-black text-start px-5 py-4">
            <div className="flex flex-col">
              <p className="text-white text-2xl">
                Hello, my name is Zidane. I am an Undergradute Informatics
                Engineering Student at Mercu Buana University.
              </p>
              <hr className="my-5" />
              <p className="text-white text-xl">
                I design and develop websites and web applications using HTML,
                CSS and JavaScript. I am focus in Front-end Web Development. As
                a person I'm a meticulous, organized, multitask and
                forward-thinking individual with a strong passion to learn new
                things.I have big interest in programming, especially in web
                development.
              </p>
            </div>
          </div>
          <div className="bg-gray-500 grayscale  md:rounded-r-full">
            <ImageWrapper
              src={pic}
              alt="profile pic"
              className="relative w-full h-[300px] md:w-[300px]  md:rounded-r-full p-3"
            />
          </div>
        </div>
        <Experience />
        <motion.div
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
          <p className="mt-2  text-4xl" id="portfolio">
            PORTFOLIO
          </p>
          <p className="mt-10 text-xl">
            Examples of my latest projects build with Web Technologies. My
            portfolio includes static websites, web applications ,and submission
            from some online course company.
          </p>
        </motion.div>
        <motion.div
          ref={refProject}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
          <Projects />
        </motion.div>
      </div>
    </AppLayout>
  );
};

export default Home;
