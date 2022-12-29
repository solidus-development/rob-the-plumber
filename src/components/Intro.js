import phoneIcon from "../images/phone-icon.png";
import blackPipe from "../images/black-pipe350x349.png";
import profilePic from "../images/profile-pic.jpg";

function Intro() {
  return (
    <>
    
    <div className="intro">
      <div className="ribbon">
        <p>Proudly Serving Nanaimo, BC</p>
        <p>
          <img
            className="ribbon-image"
            src={phoneIcon}
            alt="Plumber Nanaimo Honest"
          />
          555-555-5555
        </p>
      </div>
      <div className="intro-billboard">
        <div className="intro-billboard-content-container">
          <img className="black-pipe" src={blackPipe} alt="Black Pipe" />
          <div className="intro-logo">
            <h1 className="intro-logo-heading">Rob The Plumber</h1>
            <p className="tagline">Plumbing and Maintenance</p>
          </div>
        </div>
      </div>
      <div className="cta">
        <div className="overlay">
          <div className="cta-elements">
            <div className="cta-content">
              <img
                src={profilePic}
                className="profile-pic white-border"
                alt="rob-the-plumber"
              ></img>
              <div className="cta-text-canvas">
                <p>
                  Value proposition which makes value clear to the user. This is
                  why you should hire Rob as opposed to someone else.
                </p>
              </div>
            </div>
            <div id='services'></div>
            <div className='button-row'>
              <button className="cta-button white-border">Free Quote</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </>
  );
}

export default Intro;
