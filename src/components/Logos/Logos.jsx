import Portada from './Styles/Portada.png'
import Logo1 from './Styles/LogoPersonal.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Logos.css'

const Logos= () =>{
    return(

        <div style={{ backgroundImage: `url(${Portada})`,  backgroundRepeat: 'no-repeat',  backgroundSize: 'cover'}} >
<br /><br /><br />
<Container>
    <Row>
    <Col sm={2}> <div><img  id= 'imagenLogo2' src={Logo1} alt="Logo" /></div>  </Col>
    <Col sm={0}></Col>
    <Col sm={6}>
        <br /><br /><br /><br />
    <Row> <div id='TituloLogo'> Roberto Emmanuel </div></Row>
    <Row>  <div id='TituloLogo'>  García Olmos </div></Row>
    </Col>
    <Col sm={0}></Col>
<Col sm={2}> <div><img  id='imagenLogo2' src={Logo1} alt="Logo" /></div>  </Col>
    </Row>


</Container>

<br /><br />
        </div>
    )}
    
    export  default Logos;
    
    