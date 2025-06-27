import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import {Link} from 'react-router-dom';


const CoursesPage = () => {
    return(
            
        <div className="body">
                
               
                <Header/>

                <div className="inner-body">
                <h1 className="pt">Our Academic Programs</h1>

                <p>
                Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. 
                
              Our curriculum is regularly updated to reflect industry trends and academic advancements.
              </p>

                <div>

                <video src="/videos/college.mp4" controls height="500px" width="900px" ></video>

                </div>
      <p>

        Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the
        knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and
        academic advancements.
      </p>

      <h2>
        Undergraduate Programs (UG)
      </h2>

    <ul>
        <li align="left">Bachelor of Science (B.Sc.)</li>
        <ul>
          
          <li align="left">Computer Science (3 years)</li>
          <li align="left">Information Technology (3 years)</li>
          <li align="left">Biotechnology (3 years)</li>
          
          </ul>

        </ul>

        <ul>
           <li align="left">Bachelor of Commerce (B.Com)</li>
            <ul>
              <li align="left">Accounting & Finance (3 years)</li>
              <li align="left">Banking & Insurance (3 years)</li>

            </ul>

           </ul>

           <ul>

            <li align="left">Bachelor of Arts (B.A.)</li>
            <ul>
              <li align="left">English Literature (3 years)</li>
                 <li align="left">Psychology (3 years)</li>
            </ul>

           </ul>

                  <h2>Program Details & Fee Structure (Annual)</h2>

           <table border="1">
                  <tr>
                   <th>Program Type</th>
               <th>Course Name</th>
                  <th>Duration</th>
                     <th>Annual Fee (INR)</th>
                     <th>Eligibility</th>
                     </tr>
                     <tr>
                      
                  <td>UG</td>
                      <td>B.Sc. Computer Science</td>
                          <td>3 Years</td>
                              <td>₹ 85,000</td>
                                  <td>10+2 with PCM (50%)</td>
                     </tr>
                     <tr>
                      
                      <td>UG</td>
                          <td>B.Com. Accounting & Finance</td>
                              <td>3 Years</td>
                                  <td>	₹ 70,000</td>
                                      <td>10+2 with PCM (45%)</td>
                     </tr>
                     <tr>
                      <td>PG</td>
                      <td>M.Sc. Information Technology</td>
                      <td>	2 Years</td>
                      <td>	₹ 95,000</td>
                      <td>	B.Sc. IT/CS (50%)</td>

                     </tr>

           </table>
                 

                  <h2>Specialized & Vocational Courses</h2>

                  <p>
                    In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web
                    Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.

                  </p>

                  <p>
                    Explore detailed syllabi and admission criteria on our Admissions page.

                  </p>
       

                    <div >

                   <Link to="/contact" className="m1">Inquire</Link>
                    </div>

                      
                    </div>
                  <Footer/>
        </div>

    
    )
}

export default CoursesPage;