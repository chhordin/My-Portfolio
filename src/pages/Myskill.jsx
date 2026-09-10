import FadeIn from "../components/FadeIn";

export const Myskill = () => {
  const skills = [
    {
      name: "HTML5",
      level: "95%",
      type: "FRONTEND",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      level: "95%",
      type: "FRONTEND",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      level: "70%",
      type: "FRONTEND",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      level: "50%",
      type: "FRONTEND",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Tailwind CSS",
      level: "70%",
      type: "FRONTEND",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Bootstrap5",
      level: "90%",
      type: "FRONTEND",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "React",
      level: "70%",
      type: "FRONTEND",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Vue3",
      level: "90%",
      type: "FRONTEND",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
      name: "Nuxt3",
      level: "90%",
      type: "FRONTEND",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
    },
    {
      name: "Angular",
      level: "60%",
      type: "FRONTEND",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
    },
  ];

  return (
    <div className="py-20 px-6 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-5xl w-full mx-auto">
        {/* Title */}
        <FadeIn>
          <h2 className="text-4xl font-extrabold text-center mb-16 bg-linear-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Technical Expertise
            <h1 className="w-20 h-1 bg-linear-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4"></h1>
          </h2>
        </FadeIn>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {skills.map((skill, index) => (
            <FadeIn key={skill.name} delay={index * 0.1}>
              <div className="bg-[#130f22]/70 border border-purple-950/40 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden group hover:border-purple-500/40 transition-all duration-300 shadow-xl">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#1c1635] flex items-center justify-center mb-4 border border-purple-900/30 group-hover:scale-110 transition-transform p-2.5">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-100 mb-1 tracking-wide">
                  {skill.name}
                </h3>

                <span className="inline-block text-[10px] font-bold tracking-widest text-purple-300 bg-purple-950/60 px-2.5 py-0.5 rounded-full border border-purple-800/30 mb-6">
                  {skill.type}
                </span>

                <div className="space-y-1.5">
                  <div className="w-full bg-gray-800/50 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-purple-500 via-pink-500 to-red-400 rounded-full"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};
