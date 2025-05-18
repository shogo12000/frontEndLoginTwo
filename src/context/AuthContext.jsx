import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 
  const [user, setUser] = useState(false); // null = carregando; false = não logado
 
  useEffect(() => {
 
     
    const fetchUser = async () => {
      try {
        const res = await fetch("https://tmdbbackend.onrender.com/api/auth/me", {
          credentials: "include", // importante para enviar o cookie
        });
        console.log(res);
        if (!res.ok) throw new Error("Não autenticado");
        const data = await res.json();
 
        setUser(data.user); // ex: { email, name }
        console.log(setUser)
      } catch {
        setUser(false); // não logado
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
