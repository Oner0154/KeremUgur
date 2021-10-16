import React from "react";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonal from "./components/Testimonal";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Input from "./components/Input";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Preloader />
      <Header />
      <Banner />
      <About />
      <Services />
      <Portfolio />
      <Testimonal />
      <Blog />
      <Contact />
      <Input />
      <Footer />
    </div>
  );
};

export default App;
