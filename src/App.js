import './App.css';
import Aboutme from './components/Aboutme';
import Contactme from './components/Contactme';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Recommendations from './components/Recommendations';
import Skills from './components/Skills';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
const person={
  name:"Amit Yadav",
  about:"I am a web developer, apt in coding and development of Portal based on React and Node framework. I have good experience of working on web technologies like CSS, HTML and javascript. I have total 3 years experience of working in the field of web development. I am good team player, able to learn fast and acts as valuable resource for an organizaiton.",
  skills:"Javascript, HTML, CSS, Nodejs, REACT",
  experience:"3 years"
}

const contactDetails={
  name:"Amit Yadav",
  address:"ETI Sorojini Nagar, Lucknow",
  phone:"8885566644",
  email:"amitaeit@gmail.com",
  resume:"resume.pdf"
}

  return (
    <div className="App">
      <Router>
      <Navbar title="Portfolio App"/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Aboutme person={person}/>} />
            <Route exact path="/contactme" element={<Contactme contactDetail={contactDetails} />} />
            <Route exact path="/experience" element={<Experience />} />
            <Route exact path="/recommendations" element={<Recommendations />} />
            <Route exact path="/skills" element={<Skills/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
