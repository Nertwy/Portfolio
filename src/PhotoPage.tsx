import Image1 from "./assets/no_hands_V2.png";
import pdf from "./assets/Denis_Bosiuk_CV.pdf";
// md:items-center md:justify-between
const PhotoPage = () => {
  return (
    <section className="bg-sky-100 h-auto font-sora pb-20 xl:pl-20 xl:pr-20 md:flex items-center justify-between">
      <div className="flex flex-col items-start text-gray-700">
        <span className="text-sky-500 text-2xl">Hi Everyone, I am</span>
        <h1 className="text-6xl font-bold">Denis Bosiuk</h1>
        <div className="flex flex-col">
          <span>Lorem ipsum dolor sit amet consectetur. Vitae maecenas</span>
          <span className="pb-6">
            pellentesque tellus tempus purus integer nisi cras fermentum.
          </span>
        </div>
        <div className="sm:flex-row w-full sm:justify-between pb-4 flex flex-col space-y-2 items-center">
          <a
            href={pdf}
            download
            target="_blank"
            rel="noreferrer"
            className=""
          >
            <button className="inline-flex items-center bg-sky-700 text-white py-2 px-4 rounded-md w-48 text-center hover:bg-sky-900 sm:mr-2">
              <span className="pr-4">Download CV</span>
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                className="bi bi-arrow-down-circle w-6 h-6"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                  ></path>{" "}
                </g>
              </svg>
            </button>
          </a>
          <button className="bg-sky-700 text-white py-2 px-4 rounded-md w-48 hover:bg-sky-900">
            Contact Me!
          </button>
        </div>
      </div>
      <div className="flex xl:mt-10 align-middle bg-sky-700 md:rounded-3xl shadow-md overflow-hidden rounded-full items-center justify-center mt-5">
        <img src={Image1} className="h-fit w-auto" alt="Profile" />
      </div>
    </section>
  );
};
export default PhotoPage;
