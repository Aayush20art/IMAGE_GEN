import { useState } from "react";
import "./App.css";
import phone from "./assets/phone.png";
import video1 from "./assets/video1.mp4";
import video2 from "./assets/video2.mp4";
import FeaturesSection from './components/FeaturesSection';
import ImageGenSaaS from './components/ImageGenSaaS';
import MeetOurTeam from './components/MeetOurTeam';




function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="bg-black border-b-4 px-60 py-9 flex items-center justify-between border-b border-gray-700 ">
        {/* Left: Brand */}
        <div className="text-white text-5xl tracking-tight font-semibold hover:text-blue-600 cursor-pointer transition">
          ImageGen SaaS
        </div>

        {/* Center/Right: Nav links and button */}
        <div className="flex items-center space-x-10">
          {["Home", "Features", "Service", "Testimonial"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white font-semibold text-2xl hover:text-blue-600 transition pointer"
            >
              {item}
            </a>
          ))}
          <button className="ml-8 px-6 py-2 rounded-full border-3 border-purple-800 text-purple-800 text-2xl font-bold shadow-lg hover:bg-purple-600 hover:text-white border-purple-800 hover:shadow-xl transition pointer">
            Start Free
          </button>
        </div>
      </nav>

      <section className="bg-black min-h-screen flex items-center justify-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-0">
          {/* Left: Heading and buttons */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-5">
              Generate
              <br />
              Stunning Images
              <br />
              with AI Power
            </h1>
            <p className="text-white text-lg md:text-3xl mb-8">
              Unleash your creativity with AI-powered image generation.
              Create stunning visuals effortlessly, transforming ideas into
              reality with ImageGen SaaS.
            </p>
            <div className="flex space-x-6">
              <button className="bg-purple-800 text-white px-9 py-4 rounded-full font-semibold text-2xl shadow-lg hover:bg-purple-900 transition">
                Sign Up
              </button>
              <button className="border-3 border-purple-800 text-purple-800 px-8 py-3 rounded-full font-semibold text-2xl shadow-lg hover:bg-purple-600 hover:text-white transition">
                Login
              </button>
            </div>
          </div>

          {/* Right: Phones and videos */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative space-x-8">
            {/* Phone 1 */}
            <div className="relative w-[370px] h-[750px]">
              <video
                src={video1}
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-[30px] left-[25px] w-[320px] h-[730px] object-cover rounded-[40px] z-10 rotate-[18deg]"
              />
              <img
                src={phone}
                alt="Phone Frame"
                className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none"
                style={{ transform: "rotate(18deg)" }}
              />
            </div>

            {/* Phone 2 */}
            <div className="relative w-[370px] h-[750px]">
              <video
                src={video2}
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-[30px] left-[25px] w-[320px] h-[730px] object-cover rounded-[40px] z-10 rotate-[18deg]"
              />
              <img
                src={phone}
                alt="Phone Frame"
                className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none rotate-[18deg]"
              />
            </div>
          </div>
        </div>

      </section>

      <FeaturesSection />
      <ImageGenSaaS />
      <MeetOurTeam />

    </>
  );
}

export default App;
