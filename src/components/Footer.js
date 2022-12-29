import { Container, Row, Col } from "react-bootstrap";
import facebook from "../images/facebook26x51.png";
import linkedin from '../images/linkedin43x41.png';
import twitter from '../images/twitter46x37.png';



function Footer() {
    return (
      <div className="footer">
        <Container className="footer-container">
          <Row>
          <Col sm={12} md={6} data-aos="fade-up" className='footer-column'>
              <h3>Contact</h3>
              <p>555-555-5555</p>
              <h3>Red Seal Certificate #</h3>
              <p>V9Q2KDKFD98</p>
              <h3>Social Media</h3>
              <div className="social-media">
                <img src={facebook} alt="facebook" className="facebook-icon" />
                <img src={linkedin} alt="linkedin" className="social-media-icon" />
                <img src={twitter} alt="twitter" className="social-media-icon" />
              </div>
            </Col>
            <Col sm={12} md={6} data-aos="fade-up" className='footer-column'>
              <div className='credits'>
                <h3>Credits</h3>
                <p><a href='https://www.flaticon.com/authors/surang' rel='noreferrer' target='_blank'>Pipeline icons created by surang - Flaticon</a></p>
                <p><a href='https://www.flaticon.com/authors/freepik' rel='noreferrer' target='_blank'>Emergency icons created by Freepik - Flaticon</a></p>
                <p><a href='https://www.flaticon.com/authors/freepik' rel='noreferrer' target='_blank'>Renovation icons created by Freepik - Flaticon</a></p>
                <p><a href='https://www.flaticon.com/authors/prosymbols' rel='noreferrer' target='_blank'>Gear icons created by Prosymbols - Flaticon</a></p>
                <p><a href='https://www.flaticon.com/authors/freepik' rel='noreferrer' target='_blank'>Repair icons created by Freepik - Flaticon</a></p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="copyright">
        <p>&copy; Rob The Plumber 2022</p>
        </div>
      </div>
    );
  }
  
  export default Footer;