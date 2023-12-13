import LoginForm from "./form/form";
import { useNavigate } from "react-router-dom";

function LoginPage () {
  const navigate = useNavigate();
  const handleLogin = (credentials) => {
    // Replace this with actual authentication logic (e.g., API call)
    console.log("Logging in with:", credentials);
    navigate("/Employee");

  };
  return (
    <>
      <LoginForm handleLogin={handleLogin} />
    </>
  );
};

export default LoginPage;
