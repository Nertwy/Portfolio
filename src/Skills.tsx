import Image1 from "./assets/Html.png";
import Image2 from "./assets/Css.png";
import Image3 from "./assets/tailwindcss.png";
import Image4 from "./assets/React.png";
import Image5 from "./assets/NodeJs.png";
import Image6 from "./assets/Postgresql.png";
import Image7 from "./assets/Prisma.png";
import Image8 from "./assets/Typescript.png";
import { useTranslation } from "react-i18next";
import { FC } from "react";
const logos = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];
const Skills = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col content-center items-center py-16 bg-sky-100 font-nunito text-center">
      <h1 className="text-sky-500 text-4xl font-bold pb-8">
        {t("description.skillsPage_Header")}
      </h1>
      <h2 className="text-5xl pb-8 font-bold text-gray-700">
        {t("description.skillsPage_Header2")}
      </h2>
      <LogoCarousel logos={logos} />
    </section>
  );
};
export default Skills;

type LogoCarouselProps = {
  logos: string[];
};

const LogoCarousel: FC<LogoCarouselProps> = ({ logos }) => {
  const phone = window.innerWidth < 920 ? true : false;
  return phone ? (
    <div className="grid gap-4 grid-cols-2 md:flex w-full place-items-center sm:grid-cols-3 justify-center">
      <img src={Image1} className="h-20" />
      <img src={Image2} className="h-20" />
      <img src={Image3} className="h-20" />
      <img src={Image4} className="h-20" />
      <img src={Image5} className="h-20 " />
      <img src={Image6} className="h-20 " />
      <img src={Image7} className="h-20 " />
      <img src={Image8} className="h-20 " />
    </div>
  ) : (
    <div className="w-full overflow-hidden whitespace-nowrap relative px-7 logos">
      <div className="logo_items inline-flex w-full justify-around">
        {logos.map((item) => (
          <img src={item} className="md:h-24" />
        ))}
      </div>
      <div className="logo_items inline-flex justify-around w-full">
        {logos.map((item) => (
          <img src={item} className="h-24" />
        ))}
      </div>
    </div>
  );
};
