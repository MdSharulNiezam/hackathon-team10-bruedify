import { Link } from "react-router-dom";
import { useState } from "react";

const SignInForm = () => {
    const [ users ] = useState([
        { Email:'Hilman@gmail.com', Password:'hilman'},
        { Email:'Hafiz@gmail.com', Password:'hafiz'},
    ]);

    const handleSignIn = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const Email = formData.get('Email');
        const Password = formData.get('Password');

        const user = users.find((user) => user.Email === Email && user.Password === Password);
        if (user) {
            // alert(`Welcome, ${Email}!`);
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = '/Index/' + Email;
        } else {
            // Show validation feedback
            const emailInput = document.getElementById('Email');
            emailInput.classList.add('is-invalid');
            const passwordInput = document.getElementById('Password');
            passwordInput.classList.add('is-invalid');
            const feedback = passwordInput.nextElementSibling;
            feedback.innerText = 'Invalid email or password';
        }
    };
    return (

        <div className="d-flex justify-content-center m-5">
            <form className="needs-validation" noValidate onSubmit={handleSignIn}>
                <h1 className="text-center">Sign in</h1>
                <br />
                <div className="form-group">
                    <label htmlFor="Email">Email address:</label>
                    <input type="email" className="form-control" id="Email" name="Email" aria-describedby="emailHelp" placeholder="Enter email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password:</label>
                    <input type="password" className="form-control" id="Password" name="Password" placeholder="Enter password" required />
                    <div className="invalid-feedback">
                        Please enter a password
                    </div>
                </div>
                <div className="row container-fluid">
                    <div>
                        <button type="submit" className="btn apply-btn">Sign in</button>
                    </div>
                    <Link to={'/CreateAccount'} className="nav-link pt-2 pl-0" id="a-link">Don't have an account?</Link>
                </div>
            </form>
        </div>

    )
}

export default SignInForm;