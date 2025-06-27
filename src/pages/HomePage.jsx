import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import {Link} from 'react-router-dom';



const HomePage = () => {
    return(
      
            
     <><div className="body">

        <Header />




        <div className="inner-body">

          <img src="images/college7.png" alt="vivekanand college campus" className="b1" />




          <h1> Welcome To Vivekanand College Kolhapur</h1>
          <p>Your journey to excellence starts here.</p>

          <p>
            vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic
            development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to
            achieve their full potential.

            At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities,
            experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.
          </p>

          <h2>Why Choose Vivekanand College...?</h2>
          <div className="sp">
            <ul>
              <li>
                Legacy of Excellence:Decades of commitment to quality education.
              </li>
              <li>
                Experienced Faculty: Learn from renowned experts and passionate educators.
              </li>
              <li>
                Modern Facilities: Well-equipped labs, expansive library, and comfortable campus.
              </li>
              <li>
                Holistic Development: Focus on co-curricular activities, sports, and community service.
              </li>
              <li>
                Strong Placements: Excellent career opportunities with leading companies
              </li>

            </ul>
            <p>Ready to start your journey with us?</p>

            <Link to="/admission" className="g1">Apply Now..!</Link>{""}
          </div>

          <h2>Campus Life & Facilities</h2>
          <div className="d1">
            <img src="images/students.jpeg" className="t1"></img>


            <img src="images/campus.jpg" className="t1"></img>

          </div>

          <h3>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience 

              and personal growth.</h3>
          <p>Ready to explore our courses?</p>

          <div>


            <Link to="/courses" className="g1">Explore Courses</Link>


          </div>


        </div>

      </div><Footer /></>

    )
}

export default HomePage;