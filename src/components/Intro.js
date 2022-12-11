import phoneIcon from '../images/phone-icon.png'

function Intro() {
    return (
      
      <div className="intro">
        <div id='home'></div>
        <div className="ribbon">
          <p>Proudly Serving Nanaimo, BC</p>
          <p><img className='ribbon-image' src={phoneIcon} alt='Plumber Nanaimo Honest' /> 555-555-5555</p>
        </div>
        <h1>Intro</h1>
        <ul>
            <li>Value Proposition (8 words max)</li>
            <li>Visual Focus</li>
        </ul>
      </div>
    );
  }
  
  export default Intro;