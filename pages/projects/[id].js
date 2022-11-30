import Link from "next/link";
import { useRouter } from "next/router";
import ImageWrapper from "../../components/molecules/ImageWrapper";
import { projects } from "../../components/organism/constant";
import AppLayout from "../../components/templates";
import { git } from "../../public/icon";

const ProjectDetail = () => {
  const headList = {
    title: `Detail Project`,
    description: `This is detail page`,
  };

  const param = useRouter();
  const ids = param.query.id;

  return (
    <AppLayout {...headList}>
      <div className="px-5 pt-5 ">
        {projects.all
          .filter((filter) => filter.id == ids)
          .map((project, index) => (
            <div key={index} className="flex flex-col md:flex-row">
              <ImageWrapper
                src={project.photo}
                alt="Project photo"
                className="w-full h-[300px] mb-10 md:mb-0 md:w-[600px] md:h-[450px] relative rounded-md border-black border"
              />
              <div className="px-4 flex flex-col gap-4 text-center md:text-start">
                <p className="font-bold uppercase text-4xl">{project.name}</p>
                <p>{project.desc}</p>

                <div className="flex justify-center md:justify-start">
                  <Link
                    href={project.github}
                    className="flex gap-x-2 items-center justify-center md:justify-start"
                  >
                    <ImageWrapper
                      src={git}
                      alt="github link"
                      className="relative w-10 h-10"
                    />
                    <p className="font-semibold">Github</p>
                  </Link>
                  {project.demo && (
                    <Link
                      href={project.demo}
                      className="flex gap-x-2 items-center justify-center md:justify-start"
                    >
                      <p className="font-semibold ml-5 hover:text-cyan-600">
                        DEMO
                      </p>
                    </Link>
                  )}
                </div>
                <p className="font-semibold mt-5">Technology used:</p>
                <div className="flex justify-center md:justify-start">
                  {project?.tech?.map((tech, index) => (
                    <ImageWrapper
                      src={tech}
                      alt="tech used"
                      className="relative w-16 h-16 mr-5"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </AppLayout>
  );
};

export default ProjectDetail;
