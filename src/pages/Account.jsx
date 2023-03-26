import { useParams, useNavigate } from "react-router-dom";
import SignIn from "../components/SignIn";
import Register from "../components/Register";

export default function Account() {
  const { type } = useParams();
  const navigate = useNavigate();

  function handleAccountSubmit(event) {
    event.preventDefault();
    navigate("/");
  }

  return (
    <>
      {type === "login" && <SignIn onAccountSubmit={handleAccountSubmit} />}
      {type === "register" && (
        <Register onAccountSubmit={handleAccountSubmit} />
      )}
    </>
  );
}
