import { Slide } from "react-awesome-reveal";
import CardSkill from "./cardSkill";
function ComponentSkill() {
  const skillset = "SKILLSET";
  const creative = `Creative and Professional Skills Experience on few area`;
  const crafted = `Selama perjalanan saya di dunia pengembangan web, saya telah mengembangkan 
                     sejumlah keahlian yang kuat dan beragam. Portofolio ini mencerminkan penguasaan 
                     saya dalam berbagai teknologi dan alat-alat terkini untuk membangun pengalaman web 
                     yang inovatif dan fungsional.`;
  return (
    <Slide direction="right">
      <section className="lg:w-screen w-screen lg:p-5 p-10 lg:mt-10 mt-10 bg-slate-300 overflow-x-hidden">
        <div className="container lg:px-20 lg:py-10">
          <div className="flex flex-col justify-around lg:flex-row ">
            <div className="skillset">
              <h1 className="text-2xl font-bold text-cyan-400">{skillset}</h1>
              <h2 className="lg:w-96 w-full text-justify text-xl font-semibold">
                {creative}
              </h2>
              <p className="lg:w-96 w-full text-justify">{crafted}</p>
            </div>
            <div className="grid grid-cols-2 gap-5 lg:w-1/3 mt-5">
              <CardSkill />
            </div>
          </div>
        </div>
      </section>
    </Slide>
  );
}

export default ComponentSkill;
