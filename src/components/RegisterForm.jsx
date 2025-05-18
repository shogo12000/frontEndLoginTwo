import { useState } from "react";

export default function RegisterForm({ formStatus }) {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setMsg("");

    try {
      const res = await fetch(
        "https://tmdbbackend.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setMsg("Conta criada com sucesso! Faça o login.");
        setForm({ username: "", email: "", password: "" });
      } else {
        setMsg(data.message || "Erro no cadastro. Tente novamente.");
      }
    } catch (err) {
      console.error("Erro no registro:", err);
      setMsg("Erro inesperado.");
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="bg-slate-400 p-4 rounded w-[400px] space-y-4"
    >
      <div className="flex items-center">
        <label htmlFor="name" className="w-24">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={form.username}
          onChange={(e) => setForm((f) => ({ ...f, username: e.target.value }))}
          className="flex-1 bg-white p-1 rounded border border-gray-300"
        />
      </div>

      <div className="flex items-center">
        <label htmlFor="email" className="w-24">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
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
          value={form.password}
          onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
          className="flex-1 bg-white p-1 rounded border border-gray-300"
        />
      </div>

      <div>{msg && <p className="text-sm text-red-700">{msg}</p>}</div>

      <div>
        <button className="py-1">Register</button>
      </div>
      <div
        className="flex justify-end"
        onClick={() => formStatus((status) => !status)}
      >
        Login
      </div>
    </form>
  );
}
