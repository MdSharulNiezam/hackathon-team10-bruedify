import BruEdify from "../img/BruEdify.png";
import { Link } from "react-router-dom";

const ContactUsNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-custom">
            <Link to={'/'} className="navbar-brand"><img src={BruEdify} id="logo" alt="" /></Link>
            <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto justify-content ">
                    {/* <Link to={'/'} class="navbar-brand h1-custom">Contact us</Link> */}
                    {/* <a class="nav-link" href="#">Sign in<span class="sr-only">(current)</span></a> */}
                    {/* <a class="nav-link" href="#">Create account</a> */}
                    {/* <a class="nav-link" href="#">Contact us</a> */}
                    <Link to={'/SignIn'} className="nav-link navbar-link">Sign In</Link>
                    <Link to={'/CreateAccount'} className="nav-link navbar-link">Create Account</Link>
                </div>
            </div>
        </nav>
    )
};

export default ContactUsNav;