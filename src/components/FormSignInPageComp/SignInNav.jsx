import { Link } from "react-router-dom";
import BruEdify from "../img/BruEdify.png"

const SignInNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-custom">
            <Link to={'/'} className="navbar-brand"><img src={BruEdify} id="logo" alt="" /></Link>
                <div className="navbar-nav ml-auto justify-content ">
                    <Link to={'/ContactUs'} className="nav-link navbar-link">Contact us</Link>
                </div>
        </nav>
    )
};

export default SignInNav