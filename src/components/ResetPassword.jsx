export default function ResetPassword({ setResetPassword, onAccountSubmit }) {
  return (
    <div className="account">
      <div className="container">
        <h3 className="page-title">Reset your password</h3>
        <form onSubmit={onAccountSubmit}>
          <div className="inputs">
            <input type="email" placeholder="Email address" required />
          </div>
          <button type="submit">Submit</button>
        </form>
        <button
          onClick={() => setResetPassword(false)}
          className="sign-in-button">
          Back
        </button>
      </div>
    </div>
  );
}
