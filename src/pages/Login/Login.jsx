import { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login, signup } from "../../firebase";
import netflix_spinner from "../../assets/netflix_spinner.gif";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };

  const handleGuestLogin = () => {
    localStorage.setItem("netflix_guest_mode", "true");
    navigate("/");
  };

  return (
    loading ? (
      <div className="login-spinner">
        <img src={netflix_spinner} alt="Loading" />
      </div>
    ) : (
      <div className="login">
        <div className="login-header">
          <div className="login-logo-container">
            <img src={logo} className="login-logo" alt="Netflix Clone Logo" />
            <span className="demo-badge">PORTFOLIO DEMO</span>
          </div>
        </div>
        <div className="login-form">
          <h1>{signState}</h1>
          <div className="demo-notice-box">
            <p>
              <strong>⚠️ Educational Project:</strong> Built for portfolio demonstration. Not affiliated with Netflix.
            </p>
          </div>
          <form onSubmit={user_auth}>
            {signState === "Sign Up" ? (
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your Name (Demo)"
                autoComplete="off"
              />
            ) : null}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email (e.g. demo@example.com)"
              autoComplete="off"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password (demo123)"
              autoComplete="new-password"
            />
            <button type="submit">{signState}</button>

            <div className="guest-divider">
              <span>OR</span>
            </div>

            <button
              type="button"
              className="guest-access-btn"
              onClick={handleGuestLogin}
            >
              🚀 Explore as Guest (Instant Preview)
            </button>

            <div className="form-help">
              <div className="remember-me">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <p>Need help?</p>
            </div>
          </form>
          <div className="form-switch">
            {signState === "Sign In" ? (
              <p>
                New to Netflix?{" "}
                <span
                  onClick={() => {
                    setSignState("Sign Up");
                  }}
                >
                  Sign Up
                </span>
              </p>
            ) : (
              <p>
                Already Have an Account?{" "}
                <span
                  onClick={() => {
                    setSignState("Sign In");
                  }}
                >
                  Sign In
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    )
  );
}

export default Login;
