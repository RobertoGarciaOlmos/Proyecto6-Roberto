import Yo from './Styles/yo.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MyProfile.css'

const MyProfile = () =>{
return(

    <div className='fondo1'>
        <br /><br /><br /><br />
<Container>
    <Row>
    <Col sm={3}> <div ><img  className='foto1' src={Yo} alt="Logo" /></div>  </Col>
    <Col sm={9}>  <div id='TituloProfile'> About me</div>
    <br/>
    <div id='LetraProfile'>Hi, Mi name is Roberto Emmanuel García Olmos, I am Industrial engineer / Full stack developer / 3D maker and developer.</div>
    <div id='LetraProfile'>I am management master degree student and bootcamper. I am hard working, honest individual, always willing to learn new skills. I am friendly, helpful and polite, have a good sense of humour. </div>
    </Col>


    </Row>

</Container>
<br /><br /><br /><br />


    </div>
)}

export  default MyProfile;

