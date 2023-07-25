import Image1 from "./assets/linkedin.svg";
import Image2 from "./assets/github.svg";
const Footer = () => {
  const email = "deniskabos@gmail.com";
  const copyToClipboard = () => {
    const textToCopy = email;

    // Create a temporary textarea element to copy the text to the clipboard
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);

    // Select and copy the text
    tempTextarea.select();
    document.execCommand("copy");

    // Remove the temporary textarea element
    document.body.removeChild(tempTextarea);
  };
  return (
    <footer className="flex flex-col justify-center pl-8 font-sora text-gray-700">
      <span className="text-sky-500 text-4xl pb-4 font-bold pt-4">
        Contacts
      </span>
      <span className="text-5xl pb-6 font-bold">Get in touch</span>
      <span
        className="text-xl italic pb-4 cursor-pointer sm:text-3xl"
        onClick={copyToClipboard}
      >
        {email}
      </span>
      <div className="flex pb-5 space-x-4">
        <a href="https://www.linkedin.com/in/denys-bosiuk-a847a1217/">
          <img src={Image1} className="w-12 h-12" />
        </a>
        <a href="https://github.com/Nertwy">
          <img src={Image2} className="w-12 h-12" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
