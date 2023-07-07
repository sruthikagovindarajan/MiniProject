import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar1 from '../navbar/Navbar1';
import ReactPlayer from 'react-player';
import SpeechSynthesisExamples from '../speech-synthesis/GuidedMeditation';
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';
import '../css/AssisstiveBreathing.css';
const VIDEO_PATH = "/videos/meditation.mp4";

const GuidedMeditation = () => {
    const playerRef = useRef(null);
    return (
        <div className="AssBreathing">
            <Navbar1 />
            <video src={VIDEO_PATH} autoPlay="autoplay" loop />
            <SpeechSynthesisExamples/>
        </div>
    );
}

export default GuidedMeditation;