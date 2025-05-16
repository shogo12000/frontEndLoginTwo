import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function BtnLogout() {
  const {setUser} = useAuth();
  const navigate = useNavigate;

  const handleLogout = async () => {
    try {
      const res = await fetch("https://tmdbbackend.onrender.com/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (res.ok) {
        console.log("usuario ainda logado");
        setUser(false);
        navigate("/");
      }else{
        console.error("Erro ao fazer logout")
      }
    } catch (err) {
      console.error("Logout Error: ", err);
    }
  };

  return (
    <button className="bg-blue-400 text-white" onClick={handleLogout}>
      Logout
    </button>
  );
}
