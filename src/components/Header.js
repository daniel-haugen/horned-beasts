import { Navbar } from 'react-bootstrap';


function Header () {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Daniels Voting App</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
  </Navbar>
  )};

export default Header;