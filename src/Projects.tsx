import { FC } from "react";
import Image1 from "./assets/DishSite.png";
import Image2 from "./assets/systemsApp.png";

const Link1: Link[] = [
  { link: "https://github.com/Nertwy/Ts_Dish_Site", name: "GitHub" },
];
const Link2: Link[] = [
  { link: "https://github.com/Nertwy/hr-system", name: "GitHub" },
  { link: "hr-system-ndgf8wxau-nertwy.vercel.app", name: "Vercel View" },
];
const Link3: Link[] = [
  { link: "https://github.com/Nertwy/Portfolio", name: "GitHub" },
  { link: "https://portfolio-nertwy.vercel.app/", name: "Vercel View" },
];

const Projects = () => {
  return (
    <section className="flex flex-col items-center pt-8">
      <div>
        <h2 className="text-4xl text-sky-500 text-center">Projects</h2>
        <h1 className="text-5xl font-bold font-sora text pb-4">What have I made?</h1>
      </div>
      <div className="flex space-x-28 pb-20 justify-evenly mx-8">
        <Card
          description={"Food application with Basic usage"}
          title={"Food Recipes Application"}
          image={Image1}
          links={Link1}
        />
        <Card
          description={"Simple HR data management application"}
          title={"Web Application for HR"}
          image={Image2}
          links={Link2}
        />
        <Card
          description={"Portfolio website that is always up-to-date."}
          title={"Portfolio Website Design"}
          image={Image1}
          links={Link3}
        />
      </div>
    </section>
  );
};
type Link = {
  name: string;
  link: string;
};
interface CardProp {
  title: string;
  description: string;
  image: string;
  links?: Link[];
}
const Card: FC<CardProp> = ({ title, description, image, links }) => {
  return (
    <div className="shadow-2xl rounded-lg w-full h-[27rem] p-1">
      <img src={image} className="object-fill" alt="Card image" />
      <div className="flex-col p-5">
        <h2 className="font-semibold text-xl">{title}</h2>
        <p className="text-sm">{description}</p>
        <div className="flex space-x-4">
          {links?.map((val, i) => (
            <a href={val.link} key={i} className="text-slate-500">
              {val.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
