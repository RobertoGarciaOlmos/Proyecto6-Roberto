import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import './Header.css'


const Header=() =>{
    return ( <>

    <div className='linea'></div>

    <Navbar fixed="top" expand="lg" className='fondo'>

    <Container fluid >
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0"style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#action1"><Nav.Link to='/' as={Link} id='letra'>Profile</Nav.Link></Nav.Link>
            <Nav.Link href="#action5"><Nav.Link to='/Education' as ={Link} id='letra'>Education</Nav.Link></Nav.Link>
            <Nav.Link href="#action3"><Nav.Link to='/Portfolio' as ={Link} id='letra'>Experience</Nav.Link></Nav.Link>
            <Nav.Link href="#action4"><Nav.Link to='/Projects' as ={Link} id='letra'>Full stack Development</Nav.Link></Nav.Link>
            <Nav.Link href="#action5"><Nav.Link to='/Contact' as ={Link} id='letra'>Contact</Nav.Link></Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
    
    
</>
    )
};

export default Header;