import Container from "react-bootstrap/Container";

function Header(props) {
  

  return (
    <div className="header">
      <Container>
        <div className="logo">
          <h1>Rob The Plumber</h1>
          <p className="tagline">Plumbing and Maintenance</p>
        </div>
        <div className="navigation">
          <div className={props.menuOpen ? 'menu-btn open' : 'menu-btn'} onClick={() => props.setMenuOpen(!props.menuOpen)}>
            <div className="menu-btn__burger"></div>
          </div>

          {/* FOR LARGER TABLETS AND DESKTOP */}

          <ul className="full-menu">
            <li>Home</li>
            <li>Services</li>
            <li>Testimonials</li>
            <li>About</li>
            <li>Free Quote</li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Header;
