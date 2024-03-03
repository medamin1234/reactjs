import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


export default function Navigationbar (){
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse>
      </Container>
    </Navbar>
  )
  }
  
 