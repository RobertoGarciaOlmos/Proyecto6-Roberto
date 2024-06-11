import LineaT from './Styles/lineaTiempo.png'
import Ford from './Styles/Ford.png'
import Nissan from './Styles/Nissan.png'
import Raloy from './Styles/Raloy.png'
import Vitro from './Styles/Vitro.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Experience.css';


const Experience= () =>{
    return(

        <div>
<br /><br /><br /><br />
<Container>
<br />
    <Row>
    <Col>  <div id='TituloExp1'> EXPERIENCE </div></Col>
    <br /><br /><br /><br /><br /><br />
    </Row>

    <Row>
    <Col sm={5}>  
    <div>
    <div>
    <img  className='logoEmp' src={Ford} alt="Logo" /> 
    <br />
    <div id='TituloExp2'>Ford Motor Company</div>
    <br /><br />
    <div id='TituloExp'> Cost optimitation cordinator</div>
    <div id='TituloExp' >November 2021 - Current Job</div>
    <br />
    <div  id='LetraExp'>-Cost optimization for purchased services: implementation of standard quotation formats and cost estimation methodology.</div>
    <div id='LetraExp'>-Negotiation and validation of costs for purchased services.</div>
    <div id='LetraExp'>-Implementation of digital dashboards (Power BI and Python) for cost control and project cost monitoring for upper management.</div>
    <div id='LetraExp'>-Development of a new supplier catalog.</div>
    <div id='LetraExp'>-Implementation of purchasing strategies.</div>
    <div id='LetraExp'>-Search and development of projects for the relocation of purchased services to LCC countries.</div>
        <br />
    <div id='TituloExp' >Additional Activities</div>
        <br />
        <div id='LetraExp'>-Closures D&R Engineer - Exchange and Training by Mentoring Program. </div>
    <div id='LetraExp'>-Team Leader for IMS Platforms. </div>
    <div id='LetraExp'>-Co-leader of ERG: Men as Allies WoF.</div>
    </div>
    <br /><br /><br /><br /><br />

    <div>  
    <img  className= 'logoEmp' src={Raloy} alt="Logo" />
    <br />
    <div id='TituloExp2'>RALOY LUBRICANTES</div>
        <br /><br />
        <div id='TituloExp' >Key account manager</div>
        <div id='TituloExp' >April 2015-June 2016</div>
    <br />
    <div id='LetraExp'>-Sales of imported basic oils and logistic services. (Increased the sales volume 300%).</div>
    <div id='LetraExp'>-Creation of market study and customer projection.</div>
    <div id='LetraExp'>-Development of national and international customer prospects for sales “basic oils”.</div>
    <div id='LetraExp'>-Consulting for services of terminals rail, exports, and imports.</div>

    </div>
    <br /><br /><br /><br />

    <div> 

    <div id='TituloExp3'>PROFESSIONAL PRACTICES</div>
    <br /><br /><br />
    <img  className='logoEmp' src={Nissan} alt="Logo" />
    <div id='TituloExp2'>Nissan Motor Corporation</div>
    <br /><br />
    <div id='TituloExp' >Purchasing </div>
    <div id='TituloExp' >April 2014- December 2014 </div>
    <br />
    <div id='LetraExp'>-Standardization for international purchasing processes.</div>
    <div id='LetraExp'>-Supplier payment and billing control. </div>
    <div id='LetraExp'>-Audits and creation of purchase order.</div>    
    </div>
    </div>
    </Col>

    <Col sm={2}> <br /><br /><br /> <br /><br /><img  className= 'lineaTiempo' src={LineaT} alt="Logo" />  </Col>
    <Col sm={5}>  
    <div> 
    <br /><br /><br /><br /><br /><br /><br /><br />
    <div>
    <img  className='logoEmp' src={Nissan} alt="Logo" />
    <br />
    <br />
    <div id='TituloExp2'>Nissan Motor Corporation</div>
    <br />
    <div id='TituloExp' >(GVT) Team Leader, Global Vendor Tooling – Plastic commodities </div>
    <div id='TituloExp' >June 2019 - November 2021 </div>
    <br />
    <div id='LetraExp'>-Purchasing tools (Die, Die Casting, Mold, jigs, gauges, etc) for CPM, Harness, Meter, SW, Electro parts, audio, battery, and alternator T/O 20Musd.</div>
    <div id='LetraExp'>-Negotiation of mass production tools with T1.</div>
    <div id='LetraExp'>-Tool cost validation to get the best business case.</div>
    <div id='LetraExp'>-Discussing budget logic and budget setting sheet with the cost estimator.</div>
    <div id='LetraExp'>-Discussing with the PD Team to choose the best supplier evaluated with the NPV  indicator (Net Present Value).</div>
    <br />
    <div id='TituloExp' >(GVT) Global Vendor Tooling Engineer - Stamping commodities</div>
    <div id='TituloExp' >August 2017- June 2019 </div>
    <br />
    <div id='LetraExp'>-Purchasing tools (Die, Die Casting, Mold, jigs, gauges, etc) for Pedal, PKB, Mechanism, fuel system, brake, BIW T/O 8 Musd.</div>
    <br />
    <div id='TituloExp' >(GVT) Global Vendor Tooling Auditor </div>
    <div id='TituloExp' >June 2016- August 2017 </div>
    <br />
    <div id='LetraExp'>-Process payment for tools with T1.</div>
    <div id='LetraExp'>-Audits to the new and old programs to certificate that all tools paid in a Purchase Order exist (Normally getting a 5% extra reduction).</div>
    <div id='LetraExp'>-Audits tools with T1 to review and validate the quotes for the refurbish & tools replacement.</div>
        
    </div>

    
    <br /><br /><br /><br />
    <div>
    <div id='TituloExp3'>PROFESSIONAL PRACTICES</div>
    <br /><br /><br />
    <img  className='logoEmp' src={Vitro} alt="Logo" />
      <br />
    <br />
    <div id='TituloExp2'>Vitro</div>
    <br />
    <div id='TituloExp' >Quality - Production</div>
    <div id='TituloExp' >August 2013- February 2014</div>
    <br />
    <div id='LetraExp'>-Creation of production parameters for new products.</div>
    <div id='LetraExp'>-Checking technical parameters for start line of silkscreen.</div>
    <div id='LetraExp'>-Creation of technical specifications for machinery, ovens and prints.</div>
    </div>
        </div>
    </Col>

    </Row>


</Container>

<br /><br /><br /><br /><br />

        </div>
        
    )}
    
    export  default Experience;
    
    
