import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/pages/HeroSection";
import Featured from "./components/pages/Featured";
import Collection from "./components/pages/Collection";
import Community from "./components/pages/Community";
import DiscountSale from "./components/blocks/DiscountSale";
import Collaboration from "./components/pages/Collaboration";
import Newsletter from "./components/pages/Newsletter";
import Footer from "./components/blocks/Footer";

function App() {
  return (
    <div className="landing-page bg-[#051139] ">
      <div className=" bg-[#051139] ">
        <Navbar />
        <HeroSection />
        <DiscountSale />
        <Featured />
        <Collection />
        <Community />
        <DiscountSale />
        <Collaboration />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}

export default App;
