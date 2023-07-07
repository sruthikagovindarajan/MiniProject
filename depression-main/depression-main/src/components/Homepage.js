import '../css/hp.css';
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../navbar/Navbar1';
import { Navbar } from 'react-bootstrap';
import '../navbar/Navbar1';
import { Link, useNavigate } from "react-router-dom";
import Navbar1 from '../navbar/Navbar1';

const Homepage = () => {


    return (
        <div className="App">
<Navbar1 />
            <Carousel fade>
                <Carousel.Item>
                    <img className="d-block w-100"/>
                    <Carousel.Caption>
                        <div className="card-HP">
                            <div className="card-body-HP">
                                <h1>
                                    Greetings and welcome!</h1>
                                <br /> It's crucial to put our mental health and  wellbeing first as we continue to face life's obstacles.
                                lives can benefit from taking good care of our mental, emotional, and physical health.Let's work together to eliminate the stigma associated with mental health and create a welcoming
                                environment where everyone can thrive, whether you are looking for assistance for yourself or helping someone else.Keep in mind that seeking treatment is a sign of strength because your mental health counts.
                                Together, let's put our wellbeing first!

                                <br /><br /> It is crucial for individuals to maintain good mental health because it has a significant impact on their ability to function effectively in daily life, establish and maintain
                                a healthy relationships, and contribute to society.Unfortunately, mental health issues are often stigmatized, and people may feel ashamed or embarrassed to seek help. This is why it is crucial to raise awareness about mental health and break down the barriers that prevent people from seeking treatment.
                                One of the most significant challenges when it comes to mental health is that it can be difficult to recognize.
                                <br /><br />Many people may not realize that they are struggling with a mental health issue, or they may be hesitant to seek help because they believe that their symptoms are not severe enough.

                                Some common signs that someone may be struggling with a mental health issue include changes in behavior or mood, difficulty sleeping, loss of interest in activities they once enjoyed, and feelings of hopelessness or helplessness.
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"

                    />

                    <Carousel.Caption>
                        <div className="card-HP">
                            <div className="card-body-HP">

                                <h1>What does WHO have to say?</h1>
                                Depression is a common illness worldwide, with an estimated 3.8% of the population affected, including 5.0% among adults and 5.7% among adults older than 60 years (1). Approximately 280 million people in the world have depression (1). Depression is different from usual mood fluctuations and short-lived emotional responses to challenges in everyday life. Especially when recurrent and with moderate or severe intensity, depression may become a serious health condition. It can cause the affected person to suffer greatly and function poorly at work, at school and in the family. At its worst, depression can lead to suicide. Over 700 000 people die due to suicide every year. Suicide is the fourth leading cause of death in 15-29-year-olds.
                                <br />   <img div className='imge' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/WHO_logo.svg/800px-WHO_logo.svg.png'></img>
                                <br />  During a depressive episode, the person experiences depressed mood (feeling sad, irritable, empty) or a loss of pleasure or interest in activities, for most of the day, nearly every day, for at least two weeks. Several other symptoms are also present, which may include poor concentration, feelings of excessive guilt or low self-worth, hopelessness about the future, thoughts about dying or suicide, disrupted sleep, changes in appetite or weight, and feeling especially tired or low in energy.

                                In some cultural contexts, some people may express their mood changes more readily in the form of bodily symptoms (e.g. pain, fatigue, weakness).  Yet, these physical symptoms are not due to another medical condition.
                                <br />                        <br />Depression is one of the priority conditions covered by WHO’s Mental Health Gap Action Programme (mhGAP). The Programme aims to help countries increase services for people with mental, neurological and substance use disorders through care provided by health workers who are not specialists in mental health.

                                WHO has developed brief psychological intervention manuals for depression that may be delivered by lay workers to individuals and groups. An example is the Problem Management Plus manual, which describes the use of behavioural activation, stress management, problem solving treatment and strengthening social support
                            </div>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                    />

                    <Carousel.Caption>
                        <div className="card-HP">
                            <div className="card-body-HP">

                                <h1>YOU ARE NOT ALONE IN THIS!</h1>
                                <br />Although all these texts sound to be mere hearsay, you are not going through this alone!.We cannot stress that enough.
                                So yes, take help.World can turn into a beaultiful place if and only if you feel and see it that way.
                                It is important to remember that mental health issues are not a sign of weakness, and seeking help is a sign of strength.
                                Taking care of our mental health is just as important as taking care of our physical health.
                                It's important to recognize the signs of poor mental health and prioritize self-care practices that promote mental wellness, such as exercise, relaxation techniques, and seeking professional help when needed.
                                By prioritizing mental health, we can enhance our overall well-being and live happier, more fulfilling lives.
                                <br /><br />
                                Asking for help is not a sign of weakness, but rather a sign of strength and self-awareness. It's important to recognize when we need help and reach out to others, whether it's a mental health professional, a friend, or a family member. By seeking help, we can gain new perspectives, receive support, and improve our overall well-being. Don't be afraid to ask for help when you need it, as it can be the first step towards healing and growth.
                                Let's break this taboo!
                                Let's together make this world a beautiful place again!
                            </div>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
           
        </div>


    )
}
export default Homepage;