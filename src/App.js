import LoginForm from "./form/form";
import {Link} from "react-router-dom"
import Employee from './employee/Employee'
import "./App.css";

function LoginPage () {
  const handleLogin = (credentials) => {
    // Replace this with actual authentication logic (e.g., API call)
    console.log("Logging in with:", credentials);
  };
  
  return (
    <>
      <LoginForm handleLogin={handleLogin} />
    </>
  );
};

export default LoginPage;
