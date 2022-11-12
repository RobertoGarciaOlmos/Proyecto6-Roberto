import City from './Styles/City.png'
import js from './Styles/js.png'
import boots from './Styles/boots.png'
import css from './Styles/css.png'
import express from './Styles/express.png'
import firebase from './Styles/firebase.png'
import node from './Styles/node.png'
import git from './Styles/git.png'
import HTML from './Styles/HTML.png'
import mongo from './Styles/mongo.png'
import mongodb from './Styles/mongodb.png'
import react from './Styles/react.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MyProjects.css';


const MyProjects = () =>{

    return(
        
        <div style={{ backgroundImage: `url(${City})`,  backgroundRepeat: 'no-repeat',  backgroundSize: 'cover'}} >
        <div >
        <br /><br /><br /><br /><br />
        <Container id='logoPro'>
        <Row>            
            <Col sm={3}> </Col>
            <Col sm={6}><div id='TituloProj1'>FULL STACK SKILLS</div></Col>
            <Col sm={3}> </Col>
        </Row>
        <br />
            <br />
            <br />
            <Row>
            <Col sm={4}><div id='TituloProj2'>Programming Languages</div></Col>
            <Col sm={4}> </Col>
            <Col sm={4}> </Col>
            </Row>
<br />
            <Row>
            <Col sm={1}> </Col>
            <Col sm={2}>  <div><br /><img  className='logoPro' src={js} alt="js" /> 
            </div>
            <br />
            <div id='TituloProj4'>JavaScript</div></Col>
            <Col sm={2}> </Col>
            <Col sm={2}>  <div><br /><img  className='logoPro' src={HTML} alt="HTML" /> 
            </div>
            <br />
            <div id='TituloProj4'>HTML</div></Col>
            <Col sm={2}> </Col>
            <Col sm={2}>  <div><br /><img  className='logoPro' src={css} alt="css" /> 
            </div>
            <br />
            <div id='TituloProj4'>CSS</div></Col>
            <Col sm={1}> </Col>
            </Row>

<br />
<br />
            <Row>
            
            <Col sm={4}><br />
            <div id='TituloProj2'>Frameworks</div></Col>
            <Col sm={4}> </Col>
            <Col sm={4}> </Col>
            </Row>
            <Row>
            <Col sm={1}> </Col>
            <Col sm={2}>  <div><br /><br /><img  className='logoPro' src={react} alt="js" /> 
            </div>
            <br />
            <div id='TituloProj4'>React</div></Col>
            <Col sm={2}> </Col>
            <Col sm={2} >  <div><br /><br /><img  className='logoProj2' src={express} alt="js" /> 
            </div>
            <br />
            <div id='TituloProj4'>Express</div></Col>
            <Col sm={2}> </Col>
            <Col sm={2}>  <div><br /><br /><img  className='logoPro' src={boots} alt="js" /> 
            </div>
            <br />
            <div id='TituloProj4'>Bootstrap</div></Col>
            <Col sm={1}> </Col>
            </Row>
<br /><br />
            <Row>

            <Col sm={4}><br />
            <div id='TituloProj2'>Cloud</div></Col>
            <Col sm={4}></Col>
            <Col sm={4}></Col>
            </Row>
            
            <Row>
            <Col sm={1}> </Col>
            <Col sm={3}>  <div><br /><img  className='logoPro3' src={firebase} alt="js" /> 
            </div>
            <br />
            <div id='TituloProj4'>Firebase</div></Col>
            <Col sm={4}> </Col>
            <Col sm={3}>  <div><br /><img  className='logoPro3' src={mongodb} alt="js" /> 
            </div>
            <br />
            <div id='TituloProj4'>MongoDB Atlas</div></Col>
            <Col sm={1}> </Col>
            </Row>
<br /><br />
            <Row >
            <Col sm={4}><br />
            <div id='TituloProj2'>Others</div></Col>
            <Col sm={4}></Col>
            <Col sm={4}></Col>
            </Row>

            <Row>
            <Col sm={1}> </Col>
            <Col sm={3}>  <div><br /><img  className='logoPro3' src={node} alt="js" /> 
            </div>
            <br />
            <div id='TituloProj4'>Node</div></Col>
            <Col sm={4}> </Col>
            <Col sm={3}>  <div><br /><img  className='logoPro3' src={git} alt="js" /> 
            </div>
            <br />
            <div id='TituloProj4'>Git</div></Col>
            <Col sm={1}> </Col>
            </Row>
            <br />
            <Row >
            <Col sm={4}><br /><br />
            <div id='TituloProj2'>Database</div></Col>
            <Col sm={4}></Col>
            <Col sm={4}></Col>
            </Row>

            <Row>
            <Col sm={5}> </Col>
            <Col sm={2}>  <div><br /><img  className='logoPro4' src={mongo} alt="js" /> 
            </div>

            <div id='TituloProj4'>MongoDB</div></Col>
            <Col sm={5}> </Col>
            </Row>
        
        </Container>
        
        <br /><br /><br />
        </div>    
                </div>)};
                

export default MyProjects;