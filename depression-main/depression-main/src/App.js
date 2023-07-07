import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './components/Homepage';
import './components/SimpleInput';
import SimpleInput from './components/SimpleInput';
import Homepage from './components/Homepage';
import Hamilton from './components/Hamilton';
import { Navbar } from "react-bootstrap";
import Navbar1 from "./navbar/Navbar1";
import Anxiety from "./components/Anxiety";
import AssistiveBreathing from "./AnxietyKit/AssistiveBreathing";
import Profile from "./components/Profile";
import GuidedMeditation from "./AnxietyKit/GuidedMeditation";
import GroundingTechnique from "./AnxietyKit/GroundingTechnique";
import GroundingTechnique2 from "./AnxietyKit/GroundingTechnique2";
import GT3 from "./AnxietyKit/GT3";
import GT4 from "./AnxietyKit/GT4";
import GT5 from "./AnxietyKit/GT5";

function App() {
  return (

    <div className='divs'>
      <Router>
        <Routes>
          <Route path="/" element={<SimpleInput />} />
          <Route path="/GuidedMeditation" element={<GuidedMeditation />} />
          <Route path="/GroundingTechnique" element={<GroundingTechnique />} />
          <Route path="/GroundingTechnique2" element={<GroundingTechnique2 />} />
          <Route path="/GT3" element={<GT3 />} />
          <Route path="/GT4" element={<GT4 />} />
          <Route path="/GT5" element={<GT5 />} />
         
          <Route path="/homepage" element={<Homepage />} />

          <Route path="/Anxiety" element={<Anxiety />} />
          <Route path="/AssistiveBreathing" element={<AssistiveBreathing />} />
          <Route path="/Profile" element={<Profile />} />

          <Route path="/Hamilton" element={<Hamilton />} />
          <Route path="/navbar" element={<Navbar1 />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
