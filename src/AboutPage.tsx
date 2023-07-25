import image from "./assets/Code typing-amico 1.png";
const AboutPage = () => {
  return (
    <section className="sm:flex justify-around w-full font-sora text-gray-700 py-10">
      <div className="self-center">
        <img src={image} className="w-full h-full" />
      </div>
      <div className="flex-col sm:w-1/4 self-center text-center">
        <span className="text-sky-500 text-2xl font-semibold">About</span>
        <h1 className="text-6xl font-bold">About Me?</h1>
        <div className="flex flex-col">
          <p>
            Lorem ipsum dolor sit amet consectetur. Iaculis diam augue a
            adipiscing non aliquet. Leo semper lacus fringilla consectetur cras
            ac ullamcorper ut. Risus nunc diam accumsan feugiat. Tristique diam
            consectetur aliquam vitae suspendisse vel leo. Nec quisque senectus
            laoreet id pulvinar id vulputate. Montes consectetur diam non
            aliquam nunc maecenas non. Molestie pretium amet id dictum vitae nam
            vel sit. Rhoncus massa velit ut amet massa morbi eget.
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutPage;
