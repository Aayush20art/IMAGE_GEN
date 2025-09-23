import phone from "/src/assets/phone.png";
import phonecover1 from "/src/assets/phonecover1.jpeg";
import phonecover2 from "/src/assets/phonecover2.jpeg";

const ImageGenSaaS = () => {
  return (
    <div className="flex justify-between z-10 bg-black text-white p-30 pl-80 pr-80  font-sans">
      {/* Text and button section */}
      <div className="max-w-lg">
        <p className="text-purple-700 text-2xl pl-5 py-2 font-semibold mb-3 bg-gray-800 w-45 rounded-full ">Our Mission</p>

        <h1 className="text-5xl font-bold mb-4">About ImageGen SaaS</h1>
        <p className="text-2xl leading-relaxed mb-10">
          ImageGen SaaS is revolutionizing image creation with powerful AI, making stunning visuals accessible to everyone.
        </p>
        <div className="flex justify-between mb-10">
          <div className="max-w-xs">
            <div className="text-purple-700 mb-2 text-2xl">💻</div>
            <h3 className="font-bold mb-1 text-2xl">AI</h3>
            <p className="text-xl">Cutting-edge AI algorithms for unparalleled image generation quality.</p>
          </div>
          <div className="max-w-xs">
            <div className="text-purple-700 mb-2 text-2xl">🔧</div>
            <h3 className="font-bold mb-1 text-2xl">API</h3>
            <p className="text-xl">Seamless integration for automated image creation workflows.</p>
          </div>
        </div>
        <button className="py-5 px-8 text-2xl bg-purple-700 hover:bg-purple-600 text-white cursor-pointer py-3 px-7 rounded-full  font-semibold">
          Get Started &rarr;
        </button>
      </div>

      {/* Phone images section */}
      <div className="flex items-center gap-8">
        {/* Smaller phone container */}
        <div className="relative w-[200px] max-h-[400px] rounded-2xl shadow-[0_0_20px_rgba(64,61,255,0.5)] overflow-hidden">
          <img
            src={phone}
            alt="Phone Frame"
            className="w-full mix-blend-lighten   h-auto rounded-2xl z-10"
          />
          <img
            src={phonecover1}
            alt="Blue cover"
            className="absolute p-3 top-1 left-0 h-[380px] object-cover rounded-3xl"
          />
        </div>

        {/* Larger phone container */}
        <div className="relative w-[300px] max-h-[600px] rounded-[30px] shadow-[0_0_30px_rgba(64,61,255,0.9)] overflow-hidden">
          <img
            src={phone}
            alt="Phone large"
            className="w-full h-auto rounded-[30px]"
          />
          <img
            src={phonecover2}
            alt="Green and white cover"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-[30px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGenSaaS;
