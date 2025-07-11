import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const ContactPage = () => {
    return(
        <div className="body">

            <Header/>
            <div className="inner-body">

            <h1>Contact Us</h1>

            <div className="container">

                   <p>
                    We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.
                   </p>

                   <h2>
                    General Enquiries
                   </h2>

                   <h3>Vivekanad College Kolhapur</h3>

                   <p>
                    [Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
                    India
                    Phone: **+91 12345 67890**
                    Email: **info@vivekanandcollege.edu**
                    Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST

                   </p>

                    <h2>
                   Admissions Office
                   </h2>
                    
                    <p>
                    For all admission-related queries regarding undergraduate or postgraduate programs:
                    Phone: +91 98765 43210
                    Email: admissions@vivekanandcollege.edu
                    </p>

                  <h2>
                 Student Support Services
                   </h2>
                    <p>
                    For current student support, academic advising, or general assistance:
                    Phone: +91 87654 32109
                    Email: studentsupport@vivekanandcollege.edu
                    </p>

                    <h2>
                    Find Us on the Map
                    <br></br>
                    <br></br>

                   <Link to="https://www.google.com/maps?q=Vivekanand+College" className="n1">view_on_map</Link>

                   </h2>
                    <p>
                     <div>
                     
                     </div>
                    </p>



                  <h2>
                    Send Us a Message
                    [A contact form with fields for Name, Email, Subject, Message can be added here.]

                   </h2>
                 </div>
                 </div>
                  <Footer/>

            </div>
    )
}

export default ContactPage;