import { Container, Row, Col } from "react-bootstrap";

function Testimonial() {
  return (
    <div className="testimonial section" >
      <div className="title-frame" data-aos="fade-up">
        <h2 className="section-title">Testimonials</h2>
      </div>
      <Container>
        <Row>
          <Col sm={12} md={4} className="testimonial-col" data-aos="fade-right">
            <div className="testimonial-text">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur nisl metus, scelerisque ac cursus sit amet, sodales
                sit amet ante. Curabitur et risus ac augue imperdiet commodo
                quis nec odio."
              </p>
            </div>
            <div className="testimonial-author">
              <p>- John Doe | Job Title | Company LTD.</p>
            </div>
          </Col>
          <Col sm={12} md={4} className="testimonial-col" data-aos="fade-right">
            <div className="testimonial-text">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur nisl metus, scelerisque ac cursus sit amet, sodales
                sit amet ante. Curabitur et risus ac augue imperdiet commodo
                quis nec odio."
              </p>
            </div>
            <div className="testimonial-author">
              <p>- John Doe | Job Title | Company LTD.</p>
            </div>
          </Col>
          <Col sm={12} md={4} className="testimonial-col" data-aos="fade-right">
            <div className="testimonial-text">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur nisl metus, scelerisque ac cursus sit amet, sodales
                sit amet ante. Curabitur et risus ac augue imperdiet commodo
                quis nec odio."
              </p>
            </div>
            <div className="testimonial-author">
              <p>- John Doe | Job Title | Company LTD.</p>
            </div>
          </Col>
        </Row>
        <div id='about'></div>
      </Container>
    </div>
  );
}

export default Testimonial;
