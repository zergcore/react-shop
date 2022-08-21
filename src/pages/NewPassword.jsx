import React from 'react';
import '@styles/NewPassword.scss';
import logo from "@logos/logo_yard_sale.svg";
function NewPassword() {
  return (
    <div className="NewPassword">
        <div className="NewPassword-container">
            <img src={logo} alt="logo" className="logo" />
            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new password for your account</p>
            <form action="/" className="form">
              <label htmlFor="email" className="label">Email address</label>
					    <input type="text" id="email" placeholder="platzi@example.cm" className="input input-email" />
              <label htmlFor="new-password" className="label">Password</label>
              <input type="password" id="new-password" placeholder="*********" className="input input-password" />
              <input type="submit" defaultValue="Confirm" className="primary-button login-button" />
            </form>
        </div>
    </div>
  )
}

export default NewPassword