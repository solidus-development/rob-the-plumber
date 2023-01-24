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
import ContactModal from './components/ContactModal';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sectionReveal, setSectionReveal] = useState(false);
  const [contactModal, setContactModal] = useState(false)

  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <div className="App">
      <div id="home"></div>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} setContactModal={setContactModal}/>
      <MobileMenu menuOpen={menuOpen} setContactModal={setContactModal}/>
      <ContactModal contactModal={contactModal} setContactModal={setContactModal} />
      <Intro setContactModal={setContactModal}/>
      <Services sectionReveal={sectionReveal} setSectionReveal={setSectionReveal} setContactModal={setContactModal}/>
      <Testimonials />
      <About setContactModal={setContactModal} />
      <Footer />
    </div>
  );
}

export default App;
