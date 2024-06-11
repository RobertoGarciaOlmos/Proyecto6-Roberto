import Portada2 from './Styles/Portada2.png'
import UAEMex from './Styles/UAEMex.png'
import utel from './Styles/utel.png'
import Tec from './Styles/Tec.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Education.css';


const Education= () =>{
    return(

        <div style={{ backgroundImage: `url(${Portada2})`,  backgroundRepeat: 'no-repeat',  backgroundSize: 'cover', }} >
<br /><br /><br />
<Container>
<br /><br />
    <div id='TituloEdu1'>EDUCATION</div>

    <Row>
        
    <Col sm={3}>  <div><br /><br /><img  className='logoEscuela1' src={UAEMex} alt="Logo" /> 
    </div></Col>
    <Col sm={1}></Col>
    <Col sm={4}> <div><img  className='logoEscuela' src={Tec} alt="Logo" />  
    </div>  </Col>
    <Col sm={1}></Col>
    <Col sm={3}> <div><img  className='logoEscuela' src={utel} alt="Logo" /> 
    </div>  </Col>
    </Row>

    <Row>
    <Col sm={3}>  <div>
    <div id='TituloEdu'>Universidad Autónoma del Estado de México</div>
    <br />
    </div></Col>
    <Col sm={1}></Col>
    <Col sm={4}> <div>
    <div id='TituloEdu'>Instituto Tecnológico de Toluca</div>
    <br />
    
    </div>  </Col>
    <Col sm={1}></Col>

    <Col sm={3}> <div> 
    <div id='TituloEdu'>UTEL Universidad</div>
    <br />
   
    </div>  </Col>
    </Row>

    <Row>
    <Col sm={3}>  <div>

    <div id='LetraEdu'>Master in Organizational Management</div>
    <div id='LetraEdu'>August 2021 - June 2024</div>
    </div></Col>
    <Col sm={1}></Col>
    <Col sm={4}> <div>
    <div id='LetraEdu'>Industrial Engineer</div>
    <div id='LetraEdu'>August 2009- June 2014</div>    
    </div>  </Col>
    <Col sm={1}></Col>
    <Col sm={3}> <div> 
    <div id='LetraEdu'>Full Stack Developer</div>
    <div id='LetraEdu'>Data Analytics and AI</div>
    <div id='LetraEdu'>April 2022- June 2023</div>    
    </div>  </Col>
    </Row>

</Container>

<br /><br /><br />

        </div>
    )}
    
    export  default Education;
    
    
