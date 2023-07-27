import { useState } from "react";
import { useTranslation } from "react-i18next";
import { stringToFlag } from "./functions";
type Flag = "🇺🇸" | "🇺🇦" | "🇵🇱";
const NavBar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="h-24 md:h-auto flex flex-col xl:pl-20 md:flex-row items-center justify-between bg-sky-100 text-gray-700 md:pl-0 xl:pr-20">
      <a className="text-3xl font-bold mb-4 font-nunito md:mb-0 text-gray-700 italic">
        Nertwy
      </a>
      <input
        type="checkbox"
        id="menu-toggle"
        className="hidden md:hidden"
        checked={isMenuOpen}
        onChange={handleMenuToggle}
      />
      <label
        htmlFor="menu-toggle"
        className="md:hidden text-3xl cursor-pointer absolute right-2 top-2"
      >
        &#9776;
      </label>
      <input
        type="checkbox"
        id="menu-close"
        className="hidden md:hidden"
        checked={!isMenuOpen}
        onChange={handleMenuToggle}
      />
      <label
        htmlFor="menu-close"
        className={`md:hidden text-3xl cursor-pointer fixed right-2 top-2 z-20 ${
          isMenuOpen ? "visible" : "hidden"
        }`}
      >
        &#10005;
      </label>
      <ul
        className={`flex items-center font-nunito md:flex ${
          isMenuOpen
            ? "h-[100vh] fixed top-[0px] flex flex-col justify-center items-center w-full md:hidden bg-white z-10 duration-1000"
            : "hidden"
        }`}
      >
        <li className="px-4 py-2 mb-4 md:mb-0">
          <a className="text-3xl hover:text-black" href="#">
            {t("description.navBar_Home")}
          </a>
        </li>
        <li className="px-4 py-2 mb-4 md:mb-0">
          <a className="text-3xl hover:text-black" href="#">
            {t("description.navbar_About")}
          </a>
        </li>
        <li className="px-4 py-2 mb-4 md:mb-0">
          <a className="text-3xl hover:text-black" href="#">
            {t("description.navbar_Skill")}
          </a>
        </li>
        <li className="px-4 py-2 mb-4 md:mb-0">
          <a className="text-3xl hover:text-black" href="#">
            {t("description.navbar_Project")}
          </a>
        </li>
        <li className="px-4 py-2 mb-4 md:mb-0 md:mr-0">
          <a className="text-3xl hover:text-black" href="#">
            {t("description.navbar_Contact")}
          </a>
        </li>
        <li className="px-4 py-2 mb-4 md:mb-0 md:mr-0">
          <a className="text-3xl hover:text-black" href="#">
            <ChangeLangBtn />
          </a>
        </li>
      </ul>
    </nav>
  );
};

interface CountryInfo {
  flag: string;
  name: string;
}
const countries: CountryInfo[] = [
  { flag: "🇵🇱", name: "Polski" },
  { flag: "🇺🇸", name: "English US" },
  { flag: "🇺🇦", name: "Українська" },
];
const ChangeLangBtn = () => {
  const { i18n } = useTranslation();

  const getFlag = (flagName: string): Flag => {
    let result: Flag = "🇺🇸";
    switch (flagName) {
      case "🇵🇱":
        i18n.changeLanguage("pl");
        result = "🇵🇱";
        break;
      case "🇺🇸":
        i18n.changeLanguage("en");
        result = "🇺🇸";
        break;
      case "🇺🇦":
        i18n.changeLanguage("uk");
        result = "🇺🇦";
        break;
    }
    return result;
  };
  const [flag, setFlag] = useState<Flag>(stringToFlag(i18n.language));
  return (
    <div className="hs-dropdown relative inline-flex align-middle">
      <button
        id="hs-dropdown-basic"
        type="button"
        className="text-2xl hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all"
      >
        {flag}
        <svg
          className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>
      <div
        className={`hs-dropdown-menu 
        transition-[opacity,margin] duration 
        hs-dropdown-open:opacity-100 opacity-0 
        w-56 hidden z-10 mt-2 min-w-[15rem] bg-white shadow-md 
        rounded-lg p-2 
        
        `}
        aria-labelledby="hs-dropdown-basic"
      >
        {countries.map((val, i) => (
          <a
            key={i}
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-md  text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 text-base"
            href="#"
            onClick={() => setFlag(getFlag(val.flag))}
          >
            {val.flag} {val.name}
          </a>
        ))}
      </div>
    </div>
  );
};
export default NavBar;
