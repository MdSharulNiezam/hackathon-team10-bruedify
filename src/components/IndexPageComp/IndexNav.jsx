import BruEdify from "../img/BruEdify.png";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

const IndexNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-custom">
        <Link to={'/Index/:Email'} className="navbar-brand"><img src={BruEdify} id="logo" alt="" /></Link>
        <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto justify-content ">
                <Link to={'/Index/Courses'} className="nav-link navbar-link">Courses</Link>
                <div class="nav-item dropdown">
                    <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                        Opportunity    
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                        <Link to={'/InternshipPage'} class="nav-link navbar-link">Internship</Link>
                        <Link to={'/JobPage'} class="nav-link navbar-link">Job</Link>
                    </div>
                </div>
                <Link to={'/MyLearningPage'} class="nav-link navbar-link">My Learning</Link>
                <div className="nav-item dropdown">
                    <button class="btn dropdown-toggle navbar-link" style={{background:"transparent"}} type="button" data-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-person-square"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in" style={{position: "absolute"}}>
                        <Link to={'/ProfilePage'} class="nav-link navbar-link">Profile</Link>
                        <Link to={'/CartPage'} class="nav-link navbar-link">Cart</Link>
                        <Link to={'/'} class="nav-link navbar-link">Log Out</Link>
                    </div>
                </div>
                {/* <Link to={'/'} class="navbar-brand h1-custom">Contact us</Link>
            // <a class="nav-link" href="#">Courses</a>
            // <a class="nav-link" href="#">Internship</a>
            // <a class="nav-link" href="#">Jobs</a>
            // <a class="nav-link" href="#">Cart</a>
            // <a class="nav-link" href="#">My Learning</a>
            // <a class="nav-link" href="#">Profile Page</a>
            // {/* <Link to={'/ContactUs'} class="nav-link">Contact us</Link> */}
            </div>
        </div>
    </nav>
    )
};

export default IndexNav;