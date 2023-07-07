import React, { useState, useRef } from 'react';
import useSpeechRecognition from '../src/useSpeechRecognition.js';
import '../css/SpeechRecognition.css'


const languageOptions = [
  { label: 'Cambodian', value: 'km-KH' },
  { label: 'Deutsch', value: 'de-DE' },
  { label: 'English', value: 'en-AU' },
  { label: 'Farsi', value: 'fa-IR' },
  { label: 'Français', value: 'fr-FR' },
  { label: 'Italiano', value: 'it-IT' },
  { label: '普通话 (中国大陆) - Mandarin', value: 'zh' },
  { label: 'Portuguese', value: 'pt-BR' },
  { label: 'Español', value: 'es-MX' },
  { label: 'Svenska - Swedish', value: 'sv-SE' },
];

const Example = () => {
  const [lang, setLang] = useState('en-AU');
  const [value, setValue] = useState("");
  const currentValue = useRef("")
  const shouldUpdate = useRef(true)
  const [blocked, setBlocked] = useState(false);

  const onEnd = () => {
    // You could do something here after listening has finished
  };

  const onResult = (result) => {
    if(shouldUpdate.current) {
      currentValue.current += " " + result
      shouldUpdate.current = false
      setValue(currentValue.current);
    } else {
      shouldUpdate.current = true
    }
  };

  const changeLang = (event) => {
    setLang(event.target.value);
  };

  const onError = (event) => {
    if (event.error === 'not-allowed') {
      setBlocked(true);
    }
  };

  const { listen, listening, stop, supported } = useSpeechRecognition({
    onResult,
    onEnd,
    onError,
  });

  const toggle = listening
    ? stop
    : () => {
      setBlocked(false);
      listen({ lang });
    };

  return (
    <form id="speech-recognition-form">
      {!supported && (
        <p>
          Oh no, it looks like your browser doesn&#39;t support Speech
          Recognition.
        </p>
      )}
      {supported && (
        <React.Fragment>
          
          <p>
            {`Click 'Listen' and start speaking.
              We will provide a transcript of what you are saying.`}
          </p>
          <label htmlFor="language">Language</label>
          <select
            form="speech-recognition-form"
            id="language"
            value={lang}
            onChange={changeLang}
          >
            {languageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <label htmlFor="transcript"></label>
        
          <textarea
            id="transcript"
            name="transcript"
            placeholder="Waiting to take notes ..."
            value={value}
            rows={4}
            disabled
          />
          <button disabled={blocked} type="button" onClick={toggle}>
            {listening ? 'Stop' : 'Listen'}
          </button>
          {blocked && (
            <p style={{ color: 'red' }}>
              The microphone is blocked for this site in your browser.
            </p>

          )}
        </React.Fragment>
      )}
    </form>
  );
};

export default Example;
