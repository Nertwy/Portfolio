import { FC } from "react";
import Image1 from "./assets/DishSite.png";
import Image2 from "./assets/systemsApp.png";
import Image3 from "./assets/Portfolio.png";
import { useTranslation } from "react-i18next";
const Images: string[] = [Image1, Image2, Image3];

const newLink: Link[][] = [
  [{ link: "https://github.com/Nertwy/Ts_Dish_Site", name: "GitHub" }],
  [
    { link: "https://github.com/Nertwy/hr-system", name: "GitHub" },
    {
      link: "https://hr-system-ndgf8wxau-nertwy.vercel.app/?vercelToolbarCode=HwbU5TGyH5znR3H",
      name: "Vercel View",
    },
  ],
  [
    { link: "https://github.com/Nertwy/Portfolio", name: "GitHub" },
    {
      link: "https://portfolio-efwof5uq4-nertwy.vercel.app/?vercelToolbarCode=L2-Tx4aTwnV1-Hb",
      name: "Vercel View",
    },
  ],
];

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col items-center pt-8 font-nunito text-gray-700 text-center">
      <h2 className="text-4xl text-sky-500 text-center">
        {t("description.projectsPage_h1")}
      </h2>
      <h1 className="text-5xl font-bold text pb-4">
        {t("description.projectsPage_h2")}
      </h1>
      <div className="md:flex md:space-x-28 justify-evenly mx-8">
        {newLink.map((elem, i) => (
          <Card
            title={t(`description.projTitle.${i}`)}
            links={elem}
            description={t(`description.projDesc.${i}`)}
            image={Images[i]}
          />
        ))}
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
    <div className="shadow-2xl rounded-lg w-full p-1 mb-4">
      <img src={image} className="object-fill" alt="Card image" />
      <div className="flex-col p-5 text-left">
        <h2 className="font-semibold text-xl">{title}</h2>
        <p className="text-sm">{description}</p>
        <div className="flex space-x-4">
          {links?.map((val, i) => (
            <a
              href={val.link}
              key={i}
              className="text-slate-500 underline hover:text-black"
            >
              {val.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
