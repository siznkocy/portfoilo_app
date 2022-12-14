import "./App.css";

import Home from "./component/Home";
import { UserMode } from "./context/ModeContext";
import NavBar from "./component/NavBar";
import About from "./component/About";
import Skills from "./component/Skills";
import Work from "./component/Work";
import Contact from "./component/Contact";

function App() {
  const { darkMode } = UserMode();

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-gray-900 ">
        <main className="main bg-white px-1 md:px-32 dark:bg-gray-900 max-w-[1500px] mx-auto w-fit">
          <Home />
          <NavBar />
          <About />
          <Skills />
          <Work />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
