import React from 'react';
import Navbar1 from '../navbar/Navbar1';
import '../css/GroundingTechnique.css';
import SpeechRecognitionExample from '../speech-synthesis/useSpeechRecognition';
import { useRef } from 'react';

const GT3 = () => {
    const playerRef = useRef(null);
    return (
        <div className="AssBreathing">
            <Navbar1 />
            <div className='questions'>
               <h2> List out 3 things that you can hear</h2>
            </div>
            <SpeechRecognitionExample />
            <div className='gt'>
             <h3>   <a href='GT4'>Next</a></h3>
            </div>
        </div>
    );
}

export default GT3;
