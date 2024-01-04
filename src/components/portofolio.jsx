import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";

function ComponentsPortofolio() {
  return (
    <section className="lg:w-screen lg:max-w-4xl lg:ml-20 mx-auto">
      <div className="w-full px-4">
        <Fade direction="top">
          <div
            className="mx-auto mb-16 max-w-xl text-center"
            data-aos="zoom-out-up"
          >
            <h4 className="mb-2 text-lg font-semibold text-cyan-400">
              Portofolio
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-darksm:text-4xl lg:text-5xl">
              MyProject
            </h2>
            <p className="text-md font-medium text-secondary md:text-lg"></p>
          </div>
        </Fade>
      </div>
      <div className=" lg:grid grid-cols-2 gap-2 flex flex-wrap p-5">
        <Slide direction="left">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/img/project-simple-shopping.png"
              alt=""
            />
          </div>
        </Slide>
        <Slide direction="right">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/img/project-portofolio-tailwind.png"
              alt=""
            />
          </div>
        </Slide>
        <Slide direction="left">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/img/project-movie1.png"
              alt=""
            />
          </div>
        </Slide>
        <Slide direction="right">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/img/project-artikel.png"
              alt=""
            />
          </div>
        </Slide>
      </div>
    </section>
  );
}

export default ComponentsPortofolio;
