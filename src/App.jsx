import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; 

import './styles/Pages.css'
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";
import { useState } from "react";

import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import AdmissionPage from "./pages/AdmissionPage";
import AboutPage from "./pages/Aboutpage";
const App = () =>{
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Ruturaj Anant Swami"
          studentPhotoUrl="/images/ruturaj.jpeg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    <div>
      <Router>
        <Routes>
      
          <Route path="/home" element={<HomePage/>}/>
       
          <Route path="/courses" element={<CoursesPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/admission" element={<AdmissionPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
         
          
        </Routes>
        <ChatbotComponent/>
      </Router>

    </div>
    </>
  )
}







export default App;