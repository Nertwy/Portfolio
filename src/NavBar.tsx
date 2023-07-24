const NavBar = () => {
  return (
    <nav className="h-24 flex flex-col md:flex-row items-center justify-around bg-sky-100 text-gray-700">
      <a className="text-3xl font-bold mb-4 pl-20 md:mb-0 md:mr-52 font-sora italic text-gray-700">
        Nertwy
      </a>
      <ul className="flex items-center font-sora">
        <li className="px-4 py-2 mb-4 md:mb-0 md:mr-13">
          <a className="text-3xl" href="#">
            Home
          </a>
        </li>
        <li className="px-4 py-2 mb-4 md:mb-0 md:mr-13">
          <a className="text-3xl" href="#">
            About
          </a>
        </li>
        <li className="px-4 py-2 mb-4 md:mb-0 md:mr-13">
          <a className="text-3xl" href="#">
            Skill
          </a>
        </li>
        <li className="px-4 py-2 mb-4 md:mb-0 md:mr-13">
          <a className="text-3xl" href="#">
            Project
          </a>
        </li>
        <li className="px-4 py-2 mb-4 md:mb-0 md:mr-0">
          <a className="text-3xl" href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
