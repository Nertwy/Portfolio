import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="h-24 md:h-auto flex flex-col xl:pl-20 md:flex-row items-center justify-between bg-sky-100 text-gray-700 md:pl-0 xl:pr-20">
      <a className="text-3xl font-bold mb-4  md:mb-0 font-sora  italic text-gray-700 ">
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
        className={`flex items-center font-sora md:flex ${
          isMenuOpen
            ? "h-[100vh] fixed top-[0px] flex flex-col justify-center items-center w-full md:hidden bg-white z-10 duration-1000"
            : "hidden"
        }`}
      >
        <li className="px-4 py-2 mb-4 md:mb-0 md:mr-13">
          <a className="text-3xl hover:text-black" href="#">
            Home
          </a>
        </li>
        <li className="px-4 py-2 mb-4 md:mb-0 md:mr-13">
          <a className="text-3xl hover:text-black" href="#">
            About
          </a>
        </li>
        <li className="px-4 py-2 mb-4 md:mb-0 md:mr-13">
          <a className="text-3xl hover:text-black" href="#">
            Skill
          </a>
        </li>
        <li className="px-4 py-2 mb-4 md:mb-0 md:mr-13">
          <a className="text-3xl hover:text-black" href="#">
            Project
          </a>
        </li>
        <li className="px-4 py-2 mb-4 md:mb-0 md:mr-0">
          <a className="text-3xl hover:text-black" href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
