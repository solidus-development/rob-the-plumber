import Container from "react-bootstrap/Container";

function Header(){
    return(
        <div className="header">
            <Container>
                <div className='logo'>
                    <h1>Rob The Plumber</h1>
                    <p className="tagline">Plumbing and Maintenance</p>
                </div>
            </Container>
        </div>
    )
}

export default Header;