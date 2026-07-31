import { TypeAnimation } from "react-type-animation";
import profile from "../assets/3.jpg";
import FadeIn from "../components/FadeIn";

export const Home = () => {
  return (
    <div className="flex items-center min-h-[80vh]">
      <div className="grid max-w-6xl px-6 py-10 mx-auto grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* ================= Left Side ================= */}
        <FadeIn className="lg:col-span-7 flex flex-col order-2 lg:order-1">
          
          {/* Badge */}
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center px-4 py-2 mb-6 border border-purple-500/50 rounded-full w-fit bg-purple-500/10">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-purple-400 font-medium text-sm">
                Available for work
              </span>
            </div>
          </FadeIn>

          {/* Name */}
          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
              <span className="bg-linear-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Chheut Chhordin
              </span>
            </h1>
          </FadeIn>

          {/* Animation Typing */}
          <FadeIn delay={0.3}>
            <TypeAnimation
              sequence={[
                "Turning Ideas Into Reality",
                2000,
                "Frontend Developer",
                2000,
                "Focus Full Stack",
                2000,
                "Backend Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-500 mb-6"
            />
          </FadeIn>

          {/* Description */}
          <FadeIn delay={0.4}>
            <p className="max-w-xl text-base sm:text-lg text-blue-400 mb-8 leading-relaxed">
              Transforming ideas into scalable web applications with a focus on
              performance, user experience, and modern design.
            </p>
          </FadeIn>

          {/* Action Buttons */}
          <FadeIn delay={0.5}>
            <div className="flex flex-wrap gap-4">
              <a
                href="#practice"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg shadow-purple-500/25 hover:opacity-90 hover:scale-105 transition-all duration-200 text-center text-sm sm:text-base"
              >
                View Portfolio
              </a>

              <a
                href="/cv.pdf"
                download="Chheut_Chhordin_CV.pdf"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg shadow-blue-500/25 hover:opacity-90 hover:scale-105 transition-all duration-200 text-center flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Download CV
              </a>
            </div>
          </FadeIn>
        </FadeIn>

        {/* ================= Right Side (Profile Image) ================= */}
        <FadeIn direction="right" delay={0.25} className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-[80px] scale-125"></div>
            
            {/* Gradient Border Frame */}
            <div className="p-1.5 rounded-full bg-linear-to-r from-purple-500 via-pink-600 to-cyan-500 shadow-2xl relative">
              <img
                src={profile}
                alt="Profile"
                className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover"
              />
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
};