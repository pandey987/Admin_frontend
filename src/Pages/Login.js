// src/Login.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (
    <div className="container mt-3">
      <div className="row">
        <h2 className="col-6 offset-2 mb-3">Admin Login in E-Cell</h2>
        
        <div className="col-8 offset-2">
          <form className="needs-validation" noValidate>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Enter Username</label>
              <input name="username" type="text" className="form-control" required />
              <div className="invalid-feedback"> username is required</div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input name="password" type="password" className="form-control" required />
              <div className="invalid-feedback"> password is required</div>
            </div>
            <button type="submit" className="btn btn-dark add-btn mb-3">Login</button>
            <a href="/reset">Reset-Password/username</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
