import { Container, Row, Col } from "react-bootstrap";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import twitter from '../images/twitter.png';

function Footer() {
    return (
      <div className="footer">
        <Container>
          <Row>
            <Col sm={6}>
              <h3>Contact</h3>
              <p>555-555-5555</p>
              <h3>Red Seal Certificate #</h3>
              <p>V9Q2KDKFD98</p>
              <h3>Social Media</h3>
              <Row>
                <img src={instagram} alt="Instagram" className="social-media" />
                <img src={linkedin} alt="linkedin" className="social-media" />
                <img src={twitter} alt="twitter" className="social-media" />
              </Row>
            </Col>
            <Col sm={6}>
              <h3>Credits</h3>
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