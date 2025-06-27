import {Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
    return(
        <div className="new">
                <p className="v1">Vivekanand College Kolhapur....!</p>

                <div className="hate">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/contact">Contact</Link>
                 <Link to="/admission" className="neha">Apply Now....</Link>

                 </div>

            
               
                    
               
                       
        </div>
    )
}

export default Header;