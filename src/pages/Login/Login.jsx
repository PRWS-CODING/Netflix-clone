import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

function Login() {
  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button>Sign Up</button>
          <div className="form-help">
            <div className="remember-me">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <div className="form-switch">
          <p>New to Netflix? <span>Sign Up</span></p>
          <p>Already Have an Account? <span>Sign In</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login
