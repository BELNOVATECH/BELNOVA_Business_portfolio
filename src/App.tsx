import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
// import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
// import Leadership from "./components/Leadership/Leadership";
import Portfolio from "./components/Portfilo/Portfolio";
import HireDevelopers from "./components/HireDevelopers/HireDevelopers";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio/>
      <HireDevelopers/>
      {/* <Leadership/> */}
      <About />
      {/* <WhyChooseUs /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;