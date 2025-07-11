import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const AbooutPage = () => {
    return(
        <div className="body">

            <Header/>
            <div className="inner-body">
            <h1>About Vivekanand College</h1>

      <p>
        Vivekanand College stands as a beacon of knowledge and integrity, committed to delivering transformative education since its inception
        in [Year of Establishment, e.g., 1980]. Located in the bustling heart of [City/Area, e.g., Chembur, Mumbai], our college has consistently
        strived to uphold the highest standards of academic rigor and ethical values.

        strived to uphold the highest standards of academic rigor and ethical values.
        nurture individuals who are not only successful in their careers but also contributing members of society.
        
      </p>

      <h2>Our Mission</h2>

      <div>
      <ul>
        <li>
          To provide high-quality, accessible education across various disciplines.
        </li>
        <li>
          To foster research, innovation, and creativity among students and faculty.
        </li>
          
         
          <li>
           To instill strong ethical values and leadership qualities.e.
          </li>
          <li>
            To cultivate a diverse and inclusive learning environment.
          </li>

      </ul>
      
     </div>

        <h2>Our Values</h2>

      <p>
        negrity, Excellence, Innovation, Community, and Respect are the pillars upon which Vivekanand College is built. We encourage open
        dialogue, intellectual curiosity, and a relentless pursuit of knowledge.
      </p>

      
      <h2>Our History</h2>
      <p>
        [Briefly describe the college's history - e.g., how it started, key milestones, growth over the years, famous alumni if any]. Our journey
        began with a vision to make quality education available to all, and we continue that legacy today.

      </p>
            </div>
                <Footer/>
        </div>
          
    )
}

export default AbooutPage;