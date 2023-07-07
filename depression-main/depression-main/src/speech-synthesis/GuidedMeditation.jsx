import React, { useState, useEffect } from 'react';
import { useSpeechSynthesis } from '../src';
import { Container } from '../components/shared';
import '../css/UseSpeechSynthesis.css';


const Example = () => {
  const [text, setText] = useState("Welcome to Guided Meditation. Lie down either on the ground or on a bed. It is important that you feel safe where you are. Bring yourself to a place of inner stillness and when you’re ready, begin to close your eyes. Trust that your mattress or floor is there to catch you. Release any negative thoughts and anxieties accumulated over the day. Watch as, one by one, they begin to drift upward and leave your body behind.  Feel a certain heaviness in your back, feel it hold you down as the stress of the day floats upward and you become light as a feather. Slowly, I want you to bring attention to your breathing. Take big, cleansing breaths. In through the nose and out through the mouth.  Gently, I want you to bring your attention to your toes. I’d like you to visualize a pair of invisible hands gently massaging your toes and your feet. Find relaxation and feel your feet grow light and soft. Let the massaging hands travel up slowly, relaxing your ankles, and then your calves. Bring attention to your knees. I want you to pay particular attention to the knee joints and wiggle your knees a little bit. Feel them relax and grow heavy, sinking slowly toward the ground");

  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(0.4);
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

  
  const commandN = (text) => {
    console.log("step 3:"+text);
    const utterance = speak({ text, voice, rate, pitch });
   
    
    window.speechSynthesis.speak(utterance);

    

    
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
                  commandN(text)
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
