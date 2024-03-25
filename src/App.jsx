import React from "react";
import {
  Navbar,
  Home,
  Skills,
  Experience,
  Projects,
  Contact,
  Footer,
} from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
