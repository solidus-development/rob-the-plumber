import { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import useContentful from './useContentful';
import siren from "../images/siren.png";
import renovation from "../images/renovation.png";
import maintenance from "../images/maintenance.png";
import tools from "../images/tools.png";


function Services(props) {

  const [emergencyService, setEmergencyService] = useState([]);
  const [renovationService, setRenovationService] = useState([]);
  const [maintenanceService, setMaintenanceService] = useState([]);
  const [installationService, setInstallationService] = useState([]);
  const { 
    getEmergencyService, 
    getRenovationService,
    getMaintenanceService,
    getInstallationService
   } = useContentful();

  useEffect(() => {
    getEmergencyService().then((response) => setEmergencyService(response))
    getRenovationService().then((response) => setRenovationService(response))
    getMaintenanceService().then((response) => setMaintenanceService(response))
    getInstallationService().then((response) => setInstallationService(response))
  }, [])

  return (
    <div className='services section'>
      <div className="title-frame" data-aos='fade-up'>
        <h2 className="section-title">Services</h2>
      </div>
      <Container>
        <Row>
          <Col sm={12} md={6} className="service" data-aos='fade-right'>
            <img
              src={siren}
              alt="Emergency Repairs"
              className="service-symbol"
            />
            <h3 className="service-title">Emergencies</h3>
            <div className="service-text-canvas emergency-bg">
              <div className="overlay-light">
                <div className="service-text">
                  <p>
                    {emergencyService}
                  </p>
                </div>
              </div>
            </div>
          </Col>
         <Col sm={12} md={6} className="service" data-aos='fade-left'>
            <img
              src={renovation}
              alt="Renovations"
              className="service-symbol"
            />
            <h3 className="service-title">Renovations</h3>
            <div className="service-text-canvas renos-bg">
            <div className="overlay-light">
                <div className="service-text">
                  <p>
                    {renovationService}
                  </p>
                </div>
              </div>
            </div>
          </Col>
         <Col sm={12} md={6} className="service" data-aos='fade-right'>
            <img
              src={maintenance}
              alt="Maintenance"
              className="service-symbol"
            />
            <h3 className="service-title">Maintenance</h3>
            <div className="service-text-canvas maintenance-bg">
            <div className="overlay-light">
                <div className="service-text">
                  <p>
                    {maintenanceService}
                  </p>
                </div>
              </div>
            </div>
          </Col>
         <Col sm={12} md={6} className="service" data-aos='fade-left'>
            <img
              src={tools}
              alt="Repair and Installation"
              className="service-symbol"
            />
            <h3 className="service-title">Installations</h3>
            <div className="service-text-canvas installations-bg">
            <div className="overlay-light">
                <div className="service-text">
                  <p>
                    {installationService}
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div id='testimonials'></div>
      <div className='button-row' data-aos='flip-right'>
          <button className="cta-button white-border" onClick={() => props.setContactModal(true)}>Free Quote</button>
      </div>
    </div>
  );
}

export default Services;
