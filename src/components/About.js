import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from 'react';
import useContentful from './useContentful';
import family from "../images/family.jpeg";

function About(props) {

  const [about, setAbout] = useState([]);
  const { getAbout } = useContentful();

  useEffect(() => { 
    getAbout().then((response) => setAbout(response))
  }, [])

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
                {about}
              </p>
            </Col>
          </Row>
        </Container>
        <div className='button-row' data-aos='flip-right'>
          <button className="cta-button white-border" onClick={() => props.setContactModal(true)}>Free Quote</button>
      </div>
    </div>
  );
}

export default About;
