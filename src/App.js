import './App.css';
import HeroSection from './component/heroSection';
import Navbar from './component/navbar';
import AboutSection from './component/aboutSection';
import CaseStudy from './component/caseStudy';
import Reviews from './component/reviews';
import ShoppingCards from './component/shoppingCards';
import { useState } from 'react';
import AboutProjects from './component/aboutProjects';
import AboutUs from './component/aboutUs';
import { Footer } from './component/footer';



function App() {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = (count) => {
    setCartCount(count);
  };
  return (
    <div>
    <Navbar cartCount={cartCount} />

      <HeroSection/>
      <AboutSection/>
  <CaseStudy/>
<Reviews/>
      <ShoppingCards updateCartCount={updateCartCount} />
      <AboutProjects/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}

export default App;
