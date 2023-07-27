import image from "./assets/Code typing-amico 1.png";
import { useTranslation } from "react-i18next";
const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <section className="md:flex justify-around w-full font-nunito text-gray-700 py-10">
      <div className="self-center">
        <img src={image} className="w-full h-full" />
      </div>
      <div className="flex-col md:w-2/4 self-center text-center xl:w-1/4">
        <span className="text-sky-500 text-2xl font-semibold">
          {t("description.aboutPage_Header")}
        </span>
        <h1 className="text-6xl font-bold">
          {t("description.aboutPage_Header2")}
        </h1>
        <div className="flex flex-col">
          <p>{t("description.aboutPage_Text")}</p>
        </div>
      </div>
    </section>
  );
};
export default AboutPage;
