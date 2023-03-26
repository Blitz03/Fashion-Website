import { useState } from "react";
import { Link } from "react-router-dom";
import ResetPassword from "../components/ResetPassword";

export default function SignIn({ onAccountSubmit }) {
  const [resetPassword, setResetPassword] = useState(false);
  return (
    <>
      {!resetPassword && (
        <div className="account">
          <div className="container">
            <h3 className="page-title">Sign in</h3>
            <form onSubmit={onAccountSubmit}>
              <div className="inputs">
                <input type="email" placeholder="Email address" required />
                <input type="password" placeholder="Password" required />
              </div>
              <button type="submit">Sign In</button>
            </form>
            <button
              onClick={() => setResetPassword(true)}
              className="sign-in-button">
              Forgotten your password?
            </button>
            <Link to="/account/register">I don’t have an account</Link>
          </div>
        </div>
      )}
      {resetPassword && (
        <ResetPassword
          onAccountSubmit={onAccountSubmit}
          setResetPassword={setResetPassword}
        />
      )}
    </>
  );
}
