import  { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Myskill } from "./pages/Myskill";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/footer";
import { Project } from "./pages/Project";



const App = () => {
  // 1. បង្កើត State សម្រាប់គ្រប់គ្រង Theme នៅក្នុង App
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    // 2. ដូរ dynamic background និងអក្សរតាម dynamic class លើ div ធំ
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-slate-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* 3. បាញ់ props ទៅឱ្យ Navbar */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about" className="py-20">
          <About />
        </section>

        <section id="skill" className="py-20">
          <Myskill />
        </section>
        <section  id="project" className="py-20">
           <Project />
        </section>
        
        {/* <section id="practice" className="py-20">
          <TodoList />
        </section> */}
        
        <section id="contact" className="py-20">
          <Contact />
        </section>
      
       <Footer />
       
      </main>
    </div>
  );
};

export default App;