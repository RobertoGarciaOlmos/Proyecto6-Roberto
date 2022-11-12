import Crud from './Styles/crud.png'
import Exchange from './Styles/Exchange.png'
import Restaurante from './Styles/restaurante.png'
import Sunny from './Styles/sunny.png'
import Repo from './Styles/repo.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Portafolio.css';

const Portafolio = () =>
{
return(

    <div>
        <br /><br /><br />
    <Container>
        <br />
<Row>
<div id='TituloPortafolio'>FULL STACK PROJECTS</div>
</Row>
</Container>

<Container>
        <br /><br /><br />
        <Row>
        <Col sm={6}>  
        <a href="https://github.com/RobertoGarciaOlmos/Proyecto4?classId=f50f3cfb-9708-40ee-8da9-e04854046f8c&assignmentId=4459a4b4-8d9c-4738-acde-1ca3e0fac907&submissionId=36f5fb7d-23f1-3c1c-d89e-c114f60df342" target="repo" rel="repo">
        <img  className='proyectImg2' src={Repo} alt="Restaurante"/>
        </a> 

        <div><a href="https://robertogarciaolmos.github.io/Proyecto4/" target="_blank" rel="noreferrer">
        <img  className='proyectImg' src={Restaurante} alt="Restaurante"/>
        </a> </div> 
        <br />
        <div id='TituloPortafolio1'>Restaurante</div> 
    
        </Col>
        
    
        <Col sm={6}> 
        <a href="https://github.com/RobertoGarciaOlmos/Ucamp-Proyecto1" target="repo" rel="repo">
        <img  className='proyectImg2' src={Repo} alt="Restaurante"/>
        </a> 
        
        <div><a href="https://robertogarciaolmos.github.io/Ucamp-Proyecto1/PROYECTO%201/Sunnyblue.html?classId=f50f3cfb-9708-40ee-8da9-e04854046f8c&assignmentId=c71092af-f498-4687-aaf4-d5a0ca55ab95&submissionId=cffc8f1a-8677-ef40-259c-5ed52e804a16" target="_blank" rel="noreferrer">
        <img  className='proyectImg' src={Sunny} alt="sunny" />  
        </a>
        <br />
        <div id='TituloPortafolio1'>Sunny Blue (Home Page) </div>
        </div>  </Col>
        </Row>
        </Container>
        <br /><br />
    <br /><br />

    <Container>
        <Row>
        <Col sm={6}> <a href="https://github.com/RobertoGarciaOlmos/CRUD?classId=f50f3cfb-9708-40ee-8da9-e04854046f8c&assignmentId=2437f90d-eb26-46fe-b7e8-bdd5c1c4b8e5&submissionId=89597b7a-5d06-0b46-cb22-24a04b9409b4" target="repo" rel="repo">
        <img  className='proyectImg2' src={Repo} alt="Restaurante"/>
        </a> 
        
         <div><a href="https://robertogarciaolmos.github.io/CRUD/#" target="_blank" rel="noreferrer"><img  className='proyectImg' src={Crud} alt="Crud" /> </a>
        <br />
        <div id='TituloPortafolio1'>CRUD</div>
        </div></Col>
    
        <Col sm={6}> <div>
        <a href="https://github.com/RobertoGarciaOlmos/Proyecto-3?classId=f50f3cfb-9708-40ee-8da9-e04854046f8c&assignmentId=9efdb336-126e-46d0-b4bc-dd98d40555ff&submissionId=c2262d27-f08d-7014-2144-839a2b093f3e
" target="repo" rel="repo">
        <img  className='proyectImg2' src={Repo} alt="Restaurante"/>
        </a> 
        <a href="https://robertogarciaolmos.github.io/Proyecto-3/" target="_blank" rel="noreferrer"><img  className='proyectImg' src={Exchange} alt="Exchange" /> </a> 
       <br />
        <div id='TituloPortafolio1'>EXCHANGE</div>
        </div>  </Col>
        </Row>
    
    </Container>
    
    <br /><br /><br />
    
    
            </div>
)

}

export default Portafolio;