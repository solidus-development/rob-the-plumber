import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <CTA />
      <Testimonials />
      <About />
    </div>
  );
}

export default App;
