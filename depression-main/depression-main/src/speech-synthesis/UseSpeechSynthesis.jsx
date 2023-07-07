import React, { useState, useEffect } from 'react';
import { useSpeechSynthesis } from '../src';
import { Container } from '../components/shared';
import '../css/UseSpeechSynthesis.css';


const Example = () => {
  const [text, setText] = useState("Breathe in");

  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(0.6);
  const [voiceIndex, setVoiceIndex] = useState(null);
  const [clicked, setClicked] = useState(0)

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const breathing = () => {}

  const onEnd = () => {
    // You could do something here after speaking has finished
  };
  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
    onEnd,
  });

  var breathSwitch = async () => {

    setClicked(clicked+1);
console.log(clicked);
    while (clicked>1){
        commandN(text);
        await delay(4000)
        if (text === "Breathe in"){
          setText("Breathe out"); 
        }
        else
        {
          setText("Breathe in");
        
      }
    }
    
  }

  const commandN = (text) => {
    console.log(text);
    const utterance = speak({ text, voice, rate, pitch });
   
    
    window.speechSynthesis.speak(utterance);
    console.log("TEXT 2 before delay:",text)

    

    
    /*
    console.log("TEXT 2 after delay:",text)

    
    const utterance2 = speak({ text, voice, rate, pitch });

    window.speechSynthesis.speak(utterance2);
    */
    //delay(2000)
   // const utterance = speak({ command, voice, rate, pitch });
    //window.speechSynthesis.speak(utterance);
    
  }

  const voice = voices[voiceIndex] || null;

  const styleFlexRow = { display: 'flex', flexDirection: 'row' };
  const styleContainerRatePitch = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 12,
  };

  useEffect(() => {
    setVoiceIndex(4);
    // speak({ text, voice, rate, pitch });
  }, [])

  return (
      <div className="speech">
        {!supported && (
          <p>
            Oh no, it looks like your browser doesn&#39;t support Speech
            Synthesis.
          </p>
        )}
        {supported && (
          <React.Fragment>
            {speaking ? (
              <div className='speak'>
              <button type="button" className='trigger' onClick={cancel}>
                Stop
              </button>
              </div>
            ) : (
              <div className='speak'>
             <button
                type="button"
                className='trigger'
                onClick={() => {
                  breathSwitch()
                }}
              >
                Speak
              </button>
              
              </div>
            )
            
            }
               </React.Fragment>
        )}
      </div>
  );
};

export default Example;
