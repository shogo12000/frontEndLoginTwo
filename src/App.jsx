import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import LogimForm from "./components/LoginForm";

function App() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
 
  const handleSuccess = async (credentialResponse) => {
    const { credential } = credentialResponse;

    try {
      const response = await fetch("http://localhost:3000/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Necessário para enviar e receber cookies
        body: JSON.stringify({ credential }),
      });

      const data = await response.json(); 
 
      if (data && data.user) {
        setUser(data.user); 
        navigate("/profile");         
      }
    } catch (err) {
      console.error("Erro ao realizar login:", err);
    }
  };

  const handleError = (error) => {
    console.error("Erro no login:", error);
  };

  return (
    <div className="App">
      <LogimForm />
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </div>
  );
}

export default App;
