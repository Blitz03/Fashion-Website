import { Link } from "react-router-dom";

export default function Register({ onAccountSubmit }) {
  return (
    <div className="account">
      <div className="container">
        <h3 className="page-title">Register</h3>
        <form onSubmit={onAccountSubmit}>
          <div className="inputs">
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
            <input type="email" placeholder="Email address" required />
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit">Register</button>
        </form>
        <Link to="/account/login">I already have an account</Link>
      </div>
    </div>
  );
}
