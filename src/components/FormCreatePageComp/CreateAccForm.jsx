import { Link } from "react-router-dom";
import React, { useState } from "react";

const CreateAccForm = () => {
  // const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   setValidated(true);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   const name = formData.get('name');
  //   const email = formData.get('email');
  //   const password = formData.get('password');
  //   // perform form validation and submission
  //   if (name && email && password) {
  //     // form data is valid, submit the form
  //     console.log('Submitting form data:', { name, email, password });
  //   } else {
  //     // form data is invalid, show error message
  //     console.error('Invalid form data');
  //   }
  // };

  return (
    <div className="d-flex justify-content-center m-4">
      <img src="./components/img/BruEdify.png" alt="" />
      <form noValidate validated="false">
        <h1 className="text-center">Create Account</h1>
        <br />
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="Firstname">First Name:</label>
            <input type="text" className="form-control" id="Firstname" placeholder="Enter first name" required />
            <div className="invalid-feedback">Please enter your first name.</div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="Lastname">Last Name:</label>
            <input
              type="text" className="form-control" id="Lastname" placeholder="Enter last name" required />
            <div className="invalid-feedback">Please enter your last name.</div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="Email">Email:</label>
            <input type="email" className="form-control" id="Email" placeholder="Enter email" required />
            <div className="invalid-feedback">
              Please enter a valid email address.
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="Password">Password:</label>
            <input type="password" className="form-control" id="Password" placeholder="Enter password" required
             /> 
            <div className="invalid-feedback">Please enter a password.</div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="Address">Address:</label>
            <input
              type="text"
              className="form-control"
              id="Address"
              placeholder="Enter address"
              required
            />
            <div className="invalid-feedback">Please enter your address.</div>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="state">State:</label>
            <select id="state" className="form-control" required>
              <option value="">Please choose state</option>
              <option value="Brunei-Muara">Brunei-Muara</option>
              <option value="Tutong">Tutong</option>
              <option value="Belait">Belait</option>
              <option value="Temburong">Temburong</option>
            </select>
            <div className="invalid-feedback">Please choose a state.</div>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="Postcode">Postcode</label>
            <input
              type="text" className="form-control" id="Postcode" placeholder="Zip" required 
            />
            <div className="invalid-feedback">
            </div>
          </div>
          <div className="mr-auto">
            <button className="btn btn-custom" type="submit"><Link to={'/'} className="btn p-0" id="b-link">Create Account</Link></button>
          </div>
          <Link to={'/SignIn'} className="nav-link pt-2 pl-0" id="a-link">Already have an account?</Link>
        </div>
      </form>
    </div>
  )
}

export default CreateAccForm;