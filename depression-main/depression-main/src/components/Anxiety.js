import React from 'react';
import { GlobalStyles, Row, Title } from './shared.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AssistiveBreathing from '../AnxietyKit/AssistiveBreathing.js';
import Navbar from '../navbar/Navbar1';
import '../css/Anxiety.css';

// const route = (event) = {

// }
const route = (event) => {
  
  window.location.href = event.target.value;   
}

const Anxiety = () => {

  return (

    <div className="Anxiety">
      <Navbar />

      <Row>
        <Card className='card-anx' >
          <Card.Img variant="top" src="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2022/09/4-7-8-breathing-1388104915-770x533-1.jpg" />
          <Card.Body>
            <Card.Title>Assistive Breathing</Card.Title>
            <Card.Text>

            </Card.Text>
            <Button variant="primary" className='button' value='/AssistiveBreathing' onClick={(e) => { route(e) }}>Assistive Breathing</Button>
          </Card.Body>
        </Card>
        <Card className='card-anx'>
          <Card.Img variant="top" src="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2022/09/4-7-8-breathing-1388104915-770x533-1.jpg "/>
          <Card.Body>
            <Card.Title>
              Guided Meditation</Card.Title>
            <Card.Text>
            </Card.Text>
            <Button variant="primary" className='button' value='/GuidedMeditation' onClick={(e) => { route(e) }}>Guided Meditation</Button>
          </Card.Body>
        </Card>
        <Card className='card-anx'>
          <Card.Img variant="top" src='https://health.clevelandclinic.org/wp-content/uploads/sites/3/2022/09/4-7-8-breathing-1388104915-770x533-1.jpg' />
          <Card.Body>
            <Card.Title>Grounding Technique
            </Card.Title>
            <Card.Text>

            </Card.Text>
            <Button variant="primary" className='button' value='/GroundingTechnique' onClick={(e) => { route(e) }}>Grounding Technique</Button>
          </Card.Body>
        </Card>
      </Row>
      {/* <SpeechSynthesisExample /> */}



    </div>
  );
}

export default Anxiety;