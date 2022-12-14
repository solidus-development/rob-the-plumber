import phoneIcon from '../images/phone-icon.png'
import blackPipe from '../images/black-pipe350x349.png';

function Intro() {
    return (
      
      <div className="intro">
        <div id='home'></div>
        <div className="ribbon">
          <p>Proudly Serving Nanaimo, BC</p>
          <p><img className='ribbon-image' src={phoneIcon} alt='Plumber Nanaimo Honest' />555-555-5555</p>
        </div>
        <div className='intro-billboard'>
              <div className='intro-billboard-content-container'>
                <img className='black-pipe' src={blackPipe} alt='Black Pipe'/>
                <div className='intro-logo'>
                  <h1 className='intro-logo-heading'>Rob The Plumber</h1>
                  <p className="tagline">Plumbing and Maintenance</p>
                </div>
              </div>
        </div>
        <div className='cta'>
          <img src='' alt='rob-the-plumber' />
          
        </div>
      </div>
    );
  }
  
  export default Intro;