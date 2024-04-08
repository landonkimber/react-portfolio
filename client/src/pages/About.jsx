const About = () => {
  return (
    <main>
      <div className="w-screen h-screen bg-gradient-to-r from-orange-500 to-rose-600">
        <div className="w-screen flex items-center">
          <h1 className="text-4xl font-bold mb-6 mt-6 ml-[12.5%] text-white">
            About Me
          </h1>
        </div>

        <div className="flex justify-center bg-gradient-to-r from-[#fdfdfd] to-[#fcf9f3] w-[100%] h-[100%]">
          <section className="w-4/5 mt-[5%]">
            <h2 className="text-2xl text-gray-900 font-bold mb-2">Bio</h2>
            <p className="text-gray-900">
              I am a full-stack web developer with a passion for building
              beautiful and functional websites. I have experience working with
              various technologies including HTML, CSS, JavaScript, React, Node,
              Express, and MongoDB.
            </p>

            <h2 className="text-2xl text-gray-900 font-bold mb-2 mt-[3%]">
              Experience
            </h2>
            <p className="text-gray-900">
              I am a full-stack web developer with a passion for building
              beautiful and functional websites. I have experience working with
              various technologies including HTML, CSS, JavaScript, React, Node,
              Express, and MongoDB.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;
