import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function LogimForm({formStatus}) {
  const [ login, setLogin ] = useState({ email: "", password: "" });
  const [ loginMsg, setLoginMsg ] = useState("");
  const { setUser } = useAuth();

  const subForm = async(e)=>{
    e.preventDefault();
    console.log(login);
    try {
        const res = await fetch("https://tmdbbackend.onrender.com/api/auth/login",{
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            credentials: "include",
            body: JSON.stringify(login),
        })

        const data = await res.json();
 

        if(res.ok){
            setUser(login);
            setLogin({email:"Logado com sucesso"})
        }else{
            setLoginMsg("Try again...")
            console.error("Erro no login: ", );
        }
    } catch (error) {
        console.log("Login Error: ", error)
    }
  }
  return (
    <form onSubmit={subForm} className="bg-slate-400 p-4 rounded w-[400px] space-y-4">
      <div className="flex items-center">
        <label htmlFor="email" className="w-24">
          Email:
        </label>
        <input
          type="text"
          id="email"
          value={login.name}
          onChange={(e)=>setLogin((x)=>({...x, email: e.target.value}))}
          className="flex-1 bg-white p-1 rounded border border-gray-300"
        />
      </div>

      <div className="flex items-center">
        <label htmlFor="password" className="w-24">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={login.password}
          onChange={(e)=>setLogin((x)=>({...x, password: e.target.value}))}
          className="flex-1 bg-white p-1 rounded border border-gray-300"
        />
      </div>
      <div>
        {loginMsg && <label className="text-red-700">Try again...</label> }
      </div>
      <div>
        <button className="py-1">Login</button>
      </div>
      <div className="flex justify-end" onClick={()=>formStatus((status)=>!status)}>
        Register
      </div>
    </form>
  );
}
