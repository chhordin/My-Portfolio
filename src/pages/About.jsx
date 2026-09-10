import FadeIn from "../components/FadeIn";
import din from "../assets/din.jpg";

export const About = () => {
  return (
    <section className="py-16 text-slate-100 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* Title */}
        <FadeIn>
          <div className="text-4xl md:text-4xl font-extrabold mb-4 text-center text-pink-500">
            <h1>About Me</h1>
            <h1 className="w-20 h-1 bg-linear-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4"></h1>
          </div>
        </FadeIn>

        {/* Main Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* ================= ផ្នែកខាងឆ្វេង: Image ================= */}
          <FadeIn direction="left" delay={0.15}>
            <div className="relative mx-auto lg:mx-0 w-full max-w-md">
              {/* Gradient Glow background */}
              <div className="absolute -inset-1 bg-linear-to-r from-pink-600 to-purple-600 rounded-3xl blur-xl opacity-30"></div>

              {/* Picture Container */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
                <img
                  src={din}   
                  alt="Profile"
                  className="w-full h-112.5 sm:h-130 object-cover"
                />
                {/* User Badge Icon */}
                <div className="absolute bottom-4 right-4 bg-pink-500 text-white p-2.5 rounded-full shadow-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ================= ផ្នែកខាងស្តាំ: Content ================= */}
          <FadeIn direction="right" delay={0.25}>
            <div className="space-y-6">
              {/* Title */}
              <h2 className="text-2xl sm:text-2xl font-extrabold text-red-500">
                Who am I?
              </h2>

              {/* Information List */}
              <div className="space-y-4 text-sm sm:text-base">
                {/* Education */}
                <div className="flex items-start space-x-3">
                  <div className="p-2.5 bg-purple-950/60 border border-purple-800/50 rounded-xl text-purple-400 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs sm:text-sm">Education</p>
                    <p className="font-semibold text-blue-500">
                      Information Technology Student
                    </p>
                  </div>
                </div>

                {/* Specialization */}
                <div className="flex items-start space-x-3">
                  <div className="p-2.5 bg-purple-950/60 border border-purple-800/50 rounded-xl text-purple-400 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs sm:text-sm">Specialization</p>
                    <p className="font-semibold text-blue-500">Frontend Development</p>
                  </div>
                </div>

                {/* Interests */}
                <div className="flex items-start space-x-3">
                  <div className="p-2.5 bg-purple-950/60 border border-purple-800/50 rounded-xl text-purple-400 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs sm:text-sm">Interests</p>
                    <p className="font-semibold text-blue-500">
                      React.js, Tailwind CSS & Web Design
                    </p>
                  </div>
                </div>
              </div>

              {/* Paragraph Description */}
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                 I am a Third-year Information Technology student at Asia Euro University with a strong interest in
                Frontend Developer focused on building dynamic,
                user-centric web applications. I love bridging functional logic with
                clean design—whether that's architecting reactive Vue components,
                optimizing API calls, or designing structured database schemas.
              </p>

              {/* 4 Stats Cards */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                {/* Card 1 */}
                <div className="bg-linear-to-br from-purple-900/30 to-purple-950/40 border border-purple-800/40 p-4 rounded-2xl text-center backdrop-blur-sm transition-transform hover:-translate-y-1">
                  <div className="flex justify-center text-purple-400 mb-1.5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-xl font-bold text-pink-600">3+</h3>
                  <p className="text-xs sm:text-sm text-blue-500">Projects Built</p>
                </div>

                {/* Card 2 */}
                <div className="bg-linear-to-br from-cyan-950/30 to-slate-900/40 border border-cyan-800/40 p-4 rounded-2xl text-center backdrop-blur-sm transition-transform hover:-translate-y-1">
                  <div className="flex justify-center text-cyan-400 mb-1.5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-xl font-bold text-pink-600">2nd Year</h3>
                  <p className="text-xs sm:text-sm text-blue-500">IT Student</p>
                </div>

                {/* Card 3 */}
                <div className="bg-linear-to-br from-purple-900/30 to-purple-950/40 border border-purple-800/40 p-4 rounded-2xl text-center backdrop-blur-sm transition-transform hover:-translate-y-1">
                  <div className="flex justify-center text-purple-400 mb-1.5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-xl font-bold text-pink-600">React.js / Vue3</h3>
                  <p className="text-xs sm:text-sm text-blue-500">Main Focus</p>
                </div>

                {/* Card 4 */}
                <div className="bg-linear-to-br from-pink-950/30 to-purple-950/40 border border-pink-800/40 p-4 rounded-2xl text-center backdrop-blur-sm transition-transform hover:-translate-y-1">
                  <div className="flex justify-center text-pink-400 mb-1.5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-xl font-bold text-pink-600">Front-end</h3>
                  <p className="text-xs sm:text-sm text-blue-500">Passion</p>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};