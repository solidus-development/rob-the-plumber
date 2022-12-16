import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Intro from './components/Intro';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sectionReveal, setSectionReveal] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <div className="App">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MobileMenu menuOpen={menuOpen} />
      <Intro />
      <Services sectionReveal={sectionReveal} setSectionReveal={setSectionReveal}/>
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}

export default App;
