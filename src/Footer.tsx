import Image1 from "./assets/linkedin.svg";
import Image2 from "./assets/github.svg";
const Footer = () => {
  return (
    <footer className="flex flex-col pl-60 justify-center">
      <span className="text-sky-500 text-4xl pb-4 font-bold pt-4">Contacts</span>
      <span className="text-5xl pb-6 font-bold">Get in touch</span>
      <span className="text-3xl italic pb-4">deniskabos@gmail.com</span>
      <div className="flex pb-10 space-x-4">
        <img src={Image1} className="w-12 h-12" />
        <img src={Image2} className="w-12 h-12" />
      </div>
    </footer>
  );
};
export default Footer;
