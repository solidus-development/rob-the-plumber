import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Services />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}

export default App;
