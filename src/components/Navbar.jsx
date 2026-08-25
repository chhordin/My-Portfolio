import { useState } from "react";
import logo from "../assets/react.svg";
import { HiHome, HiUser, HiCode, HiFolder, HiMail } from "react-icons/hi";
import { HiSun, HiMoon } from "react-icons/hi2"; 
import { HiMenu, HiX } from "react-icons/hi"; 

export const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      path: "#home",
      icon: <HiHome className="w-5 h-5" />,
      color: "text-blue-500",
      activeColor: "text-blue-600",
    },
    {
      name: "About",
      path: "#about",
      icon: <HiUser className="w-5 h-5" />,
      color: "text-purple-500",
      activeColor: "text-purple-600",
    },
    {
      name: "Skill",
      path: "#skill",
      icon: <HiCode className="w-5 h-5" />,
      color: "text-emerald-500",
      activeColor: "text-emerald-600",
    },
    {
      name: "Project",
      path: "#project",
      icon: <HiFolder className="w-5 h-5" />,
      color: "text-amber-500",
      activeColor: "text-amber-600",
    },
    {
      name: "Contact",
      path: "#contact",
      icon: <HiMail className="w-5 h-5" />,
      color: "text-rose-500",
      activeColor: "text-rose-600",
    },
  ];

  const handleNavClick = (name) => {
    setActiveTab(name);
    setIsOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        isDarkMode
          ? "bg-slate-900 border-gray-800 text-white"
          : "bg-white border-gray-200 text-gray-900"
      }`}
    >
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-7" alt="Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            Portfolio
          </span>
        </a>

        {/* Buttons Group */}
        <div className="flex items-center md:order-2 space-x-2">
          {/* Theme Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            type="button"
            className={`p-2.5 rounded-lg text-sm transition-colors ${
              isDarkMode
                ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            title="Toggle Dark/Light Mode"
          >
            {isDarkMode ? (
              <HiSun className="w-5 h-5" />
            ) : (
              <HiMoon className="w-5 h-5" />
            )}
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none transition-colors ${
              isDarkMode
                ? "text-gray-400 hover:bg-gray-800"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:block md:w-auto md:order-1 transition-all duration-300 ease-in-out`}
          id="navbar-default"
        >
          <ul
            className={`font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ${
              isDarkMode
                ? "bg-slate-900 border-gray-800"
                : "bg-white border-gray-200"
            }`}
          >
            {navItems.map((item, index) => {
              const isActive = activeTab === item.name;

              return (
                <li key={index}>
                  <a
                    href={item.path}
                    onClick={() => handleNavClick(item.name)}
                    className={`flex items-center gap-2 py-2 px-3 rounded md:p-0 transition-all duration-200 ${
                      isActive
                        ? `${item.activeColor} font-bold bg-blue-50/10 md:bg-transparent`
                        : isDarkMode
                          ? "text-gray-300 hover:text-white hover:bg-gray-800 md:hover:bg-transparent"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 md:hover:bg-transparent"
                    }`}
                  >
                    {/* Icon ជាមួយពណ៌ */}
                    <span className={isActive ? item.activeColor : item.color}>
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
