import Container from 'react-bootstrap/Container';

import Col from 'react-bootstrap/Col';
import './Footer.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'

const Footer =() => {
    return  (<>  

    <div  className='ribbon'>  
    
    <Container fluid="md">

      </Container>
            </div>
      
            <div className='fin'>

            

    </div>
    <div className='fin'>
    <Navbar>
   
    <Col sm={3}><Nav.Link href="#action1"><Nav.Link to='/' as={Link} id='letraFooter'>Profile</Nav.Link></Nav.Link></Col>
    <Col sm={3}><Nav.Link href="#action3"><Nav.Link to='/Portfolio' as ={Link} id='letraFooter'>Portfolio</Nav.Link></Nav.Link></Col>
    <Col sm={3}><Nav.Link href="#action4"><Nav.Link to='/Projects' as ={Link} id='letraFooter'>Projects</Nav.Link></Nav.Link></Col>
    <Col sm={3}><Nav.Link href="#action5"><Nav.Link to='/Contact' as ={Link} id='letraFooter'>Contact</Nav.Link></Nav.Link></Col>

</Navbar>

    </div>
    
  </>)
};

export default Footer;
