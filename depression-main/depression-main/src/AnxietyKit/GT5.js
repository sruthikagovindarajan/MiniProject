
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Navbar1 from '../navbar/Navbar1';
import '../css/GroundingTechnique.css';
import SpeechRecognitionExample from '../speech-synthesis/useSpeechRecognition';
import { useRef } from 'react';
const route = (event) => {

    window.location.href = event.target.value;
}
const GT5 = () => {
    const playerRef = useRef(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className="AssBreathing">
            <Navbar1 />
            <div className='questions'>
                <h2> List out 1 thing that you can taste</h2>
            </div>
            <SpeechRecognitionExample />
            <div className='gt'>
                <Button className="button1" variant="primary" onClick={handleShow}>
                    Next
                </Button>

            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Take a look!</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    Now, I would like you to take a look at everything around you. The things you can see, hear, touch, taste and smell. Everything that is present. I would like you to focus on the present and reiterate that this is the present scenario.Grounding exercises are helpful for many situations where you find yourself becoming overwhelmed or distracted by distressing memories, thoughts or feelings. Grounding exercises can help bring you back down to earth.

                    It can be helpful to have a selection of grounding exercises that you can draw upon at different times. Just like no one technique works for all people, we often find that not all techniques work at all times.
                    Take ten slow breaths. Focus your attention fully on each breath, on the way in and on the way out. Say the number of the breath to yourself as you exhale.
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" value='/GuidedMeditation' onClick={(e) => { route(e) }}>
                        Close
                    </Button>

                    <Button variant="primary" className='button' value='/Homepage' onClick={(e) => { route(e) }}>Home</Button>

                </Modal.Footer>
            </Modal>

        </div>

    );
}




export default GT5;
