import { Container, Row, Col } from "react-bootstrap";
import family from "../images/family.jpeg";

function About() {
  return (
    <div className="about section">
      <div className="title-frame" data-aos="fade-up">
        <h2 className="section-title">About</h2>
      </div>
        <Container>
          <Row>
            <Col sm={12} md={6} data-aos="fade-up">
              <img src={family} alt="family" className="family-image" />
            </Col>
            <Col sm={12} md={6} data-aos="fade-up">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                porttitor finibus rhoncus. Proin tempor sapien ac massa
                vestibulum venenatis. Ut felis nulla, efficitur sed commodo non,
                fermentum non neque. Nam quis molestie diam. Vivamus porttitor
                ante sit amet vestibulum fringilla. Sed blandit sapien nibh.
                Etiam vel urna lectus. Sed ornare, risus quis iaculis mattis,
                tortor libero rutrum massa, quis eleifend odio justo non erat.
                Nulla gravida lacinia felis in convallis. Sed eu eros et mi
                aliquet fringilla. Sed non justo ut ex pulvinar dapibus. Duis
                facilisis venenatis orci, non dignissim sem porttitor eu. Duis
                sit amet erat nec nunc convallis interdum et eget velit. Vivamus
                cursus quam et lectus dictum, fringilla sollicitudin neque
                aliquam. Aliquam venenatis semper ipsum, sed aliquam erat
                faucibus a.
              </p>
            </Col>
          </Row>
        </Container>
        <div className='button-row' data-aos='flip-right'>
          <button className="cta-button white-border">Free Quote</button>
      </div>
    </div>
  );
}

export default About;
