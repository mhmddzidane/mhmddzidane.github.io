import Image from "next/image";
import ImageWrapper from "../components/molecules/ImageWrapper";
import Header from "../components/organism/Header";
import Projects from "../components/organism/Projects";
import AppLayout from "../components/templates";
import { pic } from "../public/images/homePage";

const Home = () => {
  const headList = {
    title: `Muhammad Zidane | Home`,
    description: `This is homepage`,
  };

  return (
    <AppLayout {...headList}>
      <Header />
      <div className="text-center mt-20 px-5 md:px-28" id="about">
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
        <p className="mt-20  text-4xl" id="portfolio">
          PORTFOLIO
        </p>
        <p className="mt-10 text-xl">
          Examples of my latest projects build with Web Technologies. My
          portfolio includes static websites, web applications ,and submission
          from some online course company.
        </p>
        <Projects />
      </div>
    </AppLayout>
  );
};

export default Home;
