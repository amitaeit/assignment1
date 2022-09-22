import './App.css';
import Aboutme from './components/Aboutme';
import Contactme from './components/Contactme';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Recommendations from './components/Recommendations';
import Skills from './components/Skills';
import SignIn from './components/SignIn';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios'
import EditUserDetails from './components/EditUserDetails';


function App() {
  const [user, setUser] = useState({
    userId: "",
    name: "",
    role: "",
    email: "",
    contactno: "",
    about: ""
  })

  useEffect(() => {
    async function fetchUser() {
      const response = await axios({
        url: "http://localhost:8080/api/user/getuser",
        method: "GET",
        params: {
          userId: localStorage.getItem('userId')
        }
      })
      console.log(response);
      setUser(response.data.user);
    }
    fetchUser()

  },[])




  return (
    <div className="App">
      <Router>
        <Navbar title="Portfolio App" />
        <div className="container">
          <Routes>
            <Route exact path="/home" element={<Aboutme person={user} />} />
            <Route exact path="/contactme" element={<Contactme contactDetail={user} />} />
            <Route exact path="/experience" element={<Experience />} />
            <Route exact path="/recommendations" element={<Recommendations />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/edituser" element={<EditUserDetails />} />
            <Route exact path="/" element={<SignIn />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
