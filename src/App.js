import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AboutProjects from "./component/aboutProjects";
import AboutSection from "./component/aboutSection";
import AboutUs from "./component/aboutUs";
import CaseStudy from "./component/caseStudy";
import { Footer } from "./component/footer";
import HeroSection from "./component/heroSection";
import Navbar from "./component/navbar";
import Reviews from "./component/reviews";
import ShoppingCards from "./component/shoppingCards";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = (count) => {
    setCartCount(count);
  };
  return (
    <div>
      <Navbar cartCount={cartCount} />
      <HeroSection />
      <AboutSection />
      <CaseStudy />
      <Reviews />
      <ShoppingCards updateCartCount={updateCartCount} />
      <AboutProjects />
      <AboutUs />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
