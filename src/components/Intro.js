import phoneIcon from '../images/phone-icon.png'
import blackPipe from '../images/black-pipe.png';
import Container from "react-bootstrap/Container";

function Intro() {
    return (
      
      <div className="intro">
        <div id='home'></div>
        <div className="ribbon">
          <p>Proudly Serving Nanaimo, BC</p>
          <p><img className='ribbon-image' src={phoneIcon} alt='Plumber Nanaimo Honest' /> 555-555-5555</p>
        </div>
        <Container>
        <div className='intro-heading'>
          <img src={blackPipe} alt='Black Pipe'/>
          <div className='intro-logo'>
            <h1 className='intro-logo-heading'>Rob The Plumber</h1>
            <p className="tagline">Plumbing and Maintenance</p>
          </div>
        </div>
        </Container>
      </div>
    );
  }
  
  export default Intro;