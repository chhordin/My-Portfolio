import { useState } from "react";
import logo from "../assets/react.svg";
// 1. ទទួល Props (isDarkMode និង setIsDarkMode) ពី App.jsx
export const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Skill", path: "#skill" },
    { name: "Practice", path: "#practice" },
    {name: "Contact", path:"#contact"}
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
        <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
  <img src={logo} className="h-7" alt="Logo" />
  <span className="self-center text-xl font-semibold whitespace-nowrap">
    Portfolio
  </span>
</a>
        {/* Buttons Group (Toggle Mode + Mobile Hamburger) */}
        <div className="flex items-center md:order-2 space-x-2">
          {/* Theme Toggle Button */}
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
              /* Sun Icon (Light Mode) */
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              /* Moon Icon (Dark Mode) */
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Mobile Hamburger Button */}
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
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
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
                    className={`block py-2 px-3 rounded md:p-0 transition-colors ${
                      isActive
                        ? "text-blue-500 font-bold bg-blue-50/10 md:bg-transparent"
                        : isDarkMode
                        ? "text-gray-300 hover:text-blue-400 hover:bg-gray-800 md:hover:bg-transparent"
                        : "text-gray-600 hover:text-blue-600 hover:bg-gray-100 md:hover:bg-transparent"
                    }`}
                  >
                    {item.name}
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