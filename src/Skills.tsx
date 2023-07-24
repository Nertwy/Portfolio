import Image1 from "./assets/Html.png";
import Image2 from "./assets/Css.png";
import Image3 from "./assets/tailwindcss.png";
import Image4 from "./assets/React.png";
import Image5 from "./assets/NodeJs.png";
import Image6 from "./assets/Postgresql.png";
import Image7 from "./assets/Prisma.png";
import Image8 from "./assets/Typescript.png";
const Skills = () => {
  return (
    <section className="flex flex-col content-center items-center py-16 bg-sky-100">
      <h1 className="text-sky-500 text-4xl font-bold">Skills</h1>
      <h2 className="text-5xl pb-6 font-bold ">What I am capable of?</h2>
      <div className="flex justify-center h-28 space-x-8">
        <img src={Image1} />
        <img src={Image2} />
        <img src={Image3} />
        <img src={Image4} />
        <img src={Image5} />
        <img src={Image6} />
        <img src={Image7} />
        <img src={Image8} />
      </div>
    </section>
  );
};
export default Skills;
