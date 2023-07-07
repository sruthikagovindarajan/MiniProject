import Navbar1 from '../navbar/Navbar1';
import {EX, selection} from './EX';
import '../css/Hamilton.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function handleSubmission(){

    

    var values = [
        "depressedMood",
        "feelingsOfGuilt",
        "suicide",
        "initialInsomnia",
        "insomniaDuringTheNight",
        "delayedInsomnia",
        "workAndInterests",
        "retardation",
        "agitation",
        "psychiatricAnxiety",
        "somaticAnxiety",
        "gastrointestinalSomaticSymptoms",
        "generalSomaticSymptoms",
        "hypochondriasis",
        "weightLoss",
        "insight"
        ]  
    var counter = 1;
    var toSubmit = {'username':window.username}
    
    values.forEach((value)=>{toSubmit[value] = selection[counter++]})

    axios.post("http://localhost:8000/api/questionare/",toSubmit).then(
        (response)=>{
            console.log("response",response)
        }
    
        ).catch(
            function (error){
                console.log(error.message)
            }
        )
    
}



const Hamilton = () => {

    const qs = [{
        qn: '1 DEPRESSED MOOD (sadness, hopeless, helpless, worthless)',
        o1: ' Absent',
        o2: 'These feeling states indicated only on questioning',
        o3: ' These feeling states spontaneously reported verbally',
        o4: 'Communicates feeling states non-verbally, i.e. through facial expression, posture, voice and tendency to weep',
        o5: ' Patient reports virtually only these feeling states in his/her spontaneous verbal and non-verbal communication'
    },
    {
        qn: '2 FEELINGS OF GUILT',
        o1: ' Absent',
        o2: 'Self reproach, feels he/she has let people down',
        o3: 'Ideas of guilt or rumination over past errors or sinful deeds.',
        o4: 'Present illness is a punishment. Delusions of guilt',
        o5: 'Hears accusatory or denunciatory voices and/or experiences threatening visual hallucinations    '

    },
    {
        qn: '3 SUICIDE',
        o1: ' Absent',
        o2: 'Feels life is not worth living',
        o3: ' Wishes he/she were dead or any thoughts of possible death to self',
        o4: ' Ideas or gestures of suicide',
        o5: 'Attempts at suicide '

    },

    {
        qn: '4 INSOMNIA: EARLY IN THE NIGHT',
        o1: ' Absent',
        o2: 'Complains of occasional difficulty falling asleep, i.e. more than 1 ⁄2 hour.',
        o3: '  Complains of nightly difficulty falling asleep'
    },
    {
        qn: '5 INSOMNIA: MIDDLE OF THE NIGHT',
        o1: ' Absent',
        o2: 'Patient complains of being restless and disturbed during the night',
        o3: 'Waking during the night – any getting out of bed rates 2 (except for purposes of voiding) ',
    }

        , {
        qn: '6 INSOMNIA: EARLY HOURS OF THE MORNING',
        o1: ' Absent',
        o2: 'Waking in early hours of the morning but goes back to sleep',
        o3: ' Unable to fall asleep again if he/she gets out of bed',


    },
    {
        qn: '7 WORK AND ACTIVITIES',
        o1: ' Absent',
        o2: 'Thoughts and feelings of incapacity, fatigue or weakness related to activities, work or hobbies',
        o3: 'Loss of interest in activity, hobbies or work – either directly reported by the patient or indirect in listlessness, indecision and vacillation (feels he/she has to push self to work or activities) ',
        o4: ' Decrease in actual time spent in activities or decrease in productivity. Rate 3 if the patient does not spend at least three hours a day in activities (job or hobbies) excluding routine chores',
        o5: ' Stopped working because of present illness orif patient engages in no activities except routine chores, or if patient fails to perform routine chores unassisted'

    }

        , {
        qn: '8 RETARDATION (slowness of thought and speech, impaired ability to concentrate, decreased motor activity)',
        o1: '  Normal speech and thought',
        o2: 'Slight retardation during the interview',
        o3: ' Obvious retardation during the interview ',
        o4: 'Interview difficult',
        o5: 'Complete stupor'

    }, {
        qn: '9 AGITATION',
        o1: ' None',
        o2: 'Fidgetiness',
        o3: '  Playing with hands, hair, etc',
        o4: 'Moving about, can’t sit still',
        o5: ' Hand wringing, nail biting, hair-pulling, biting of lips.'

    },

    {
        qn: '10 ANXIETY PSYCHIC',
        o1: '  No difficulty',
        o2: 'Subjective tension and irritability',
        o3: 'Worrying about minor matters ',
        o4: 'Apprehensive attitude apparent in face or speech',
        o5: 'Fears expressed without questioning'

    },

    {
        qn: '11 ANXIETY SOMATIC (physiological concomitants of anxiety) such as: gastro-intestinal – dry mouth, wind, indigestion, diarrhea, cramps, belching cardio-vascular – palpitations, headaches respiratory – hyperventilation, sighing urinary frequency sweating',
        o1: ' Absent',
        o2: 'Mild',
        o3: '  Loss of appetite but eating without staff encouragement. Heavy feelings in abdomen',
        o4: 'Severe',
        o5: ' Incapacitating'

    }, {
        qn: '12 SOMATIC SYMPTOMS GASTRO-INTESTINAL',
        o1: ' Absent',
        o2: ' Difficulty eating without staff urging. Requests or requires laxatives or medication for bowels or medication for gastro-intestinal symptoms.    ',

    },
    {
        qn: '13 GENERAL SOMATIC SYMPTOMS',
        o1: ' None',
        o2: 'Heaviness in limbs, back or head. Backaches,headaches, muscle aches. Loss of energy and fatigability.',
        o3: 'Any clear-cut symptom rates 2',
    },
    {
        qn: '14 GENITAL SYMPTOMS (symptoms such as loss of libido, menstrual disturbances)',
        o1: ' Absent',
        o2: 'Mild',
        o3: 'Severe',
    },
    {
        qn: '15 HYPOCHONDRIASIS',
        o1: ' Not present.',
        o2: 'Self-absorption (bodily)',
        o3: 'Preoccupation with health. ',
        o4: 'Frequent complaints, requests for help, etc.',
        o5: 'Hypochondriacal delusions.'
    },
    {
        qn: '16 LOSS OF WEIGHT  a) According to the patient: ',
        o1: 'No weight loss.',
        o2: 'Probable weight 1lb loss associated with in week.',
        o3: 'Definite (according  to patient) weight in week',
        o4: 'Not assessed'
    },
    {
        qn: '16 LOSS OF WEIGHT  b) According to weekly measurements:',
        o1: 'Less than 1 lb weight loss in week.',
        o2: 'Greater than present illness.',
        o3: 'Greater than 2 lb weight loss.',
        o4: 'Not assessed'
    },
    {
        qn: '17 INSIGHT',
        o1: 'Acknowledges illness but attributes cause to bad food,climate, overwork, virus, need for rest, etc',
        o2: 'Denies being ill at all',

    }
    ];

    

    function renderSlides(i){

            let element = qs[i];
          
            return(<div className="carousel-item">

                <EX
                    qn={element.qn}
                    o1={element.o1}
                    o2={element.o2}
                    o3={element.o3}
                    o4={element.o4}
                    o5={element.o5}
                />
            </div>
            )
        }   
        
    const questions = [];
    questions.push(
    <div className="carousel-item active">
    <EX
        qn={qs[0].qn}
        o1={qs[0].o1}
        o2={qs[0].o2}
        o3={qs[0].o3}
        o4={qs[0].o4}
        o5={qs[0].o5}
        /></div>);
    for (let i = 1; i < qs.length; i++) {
        questions.push(renderSlides(i));
      }
      questions.push(
      <div className="carousel-item middle">
        <div style={{height:"40px"}}></div>
        <div><h1 id="hamiltonScore"></h1></div>
        <div><h2 id="hamiltonResult"></h2></div>
        <button style={{width:"50%"}} onClick={handleSubmission}>Submit</button>
      </div>);
  
    
    return (
        <div className="Apps">

            <Navbar1 />
            <header className="Apps-header">
                <div className='ham-car'>
                    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-interval="false">
                        <div class="carousel-inner" >
                            {questions}
                        </div>
                    </div>
                </div>
            </header>

        </div >

    );
}
export default Hamilton;