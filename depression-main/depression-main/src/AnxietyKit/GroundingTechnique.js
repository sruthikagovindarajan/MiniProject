import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar1 from '../navbar/Navbar1';
import ReactPlayer from 'react-player';
import { useNavigate } from "react-router-dom";
import SpeechRecognitionExample from '../speech-synthesis/useSpeechRecognition';
import { useRef } from 'react';
import '../css/AssisstiveBreathing.css';
const VIDEO_PATH = "/videos/beach.mp4";

const GroundingTechnique = () => {
    const playerRef = useRef(null);
    return (
        <div className="AssBreathing">
            <Navbar1 />
            
            <div className='questions'>
                <h2> List out 5 things that you can see</h2>
            </div>
            <SpeechRecognitionExample />
            <div className='gt'>
                <h3>   <a href='GroundingTechnique2'>Next</a></h3>
            </div>

        </div>
    );
}

export default  GroundingTechnique;
