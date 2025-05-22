import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Movie() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Volta para a página anterior
  };

  useEffect(()=>{
    async function fetchMovie(){
        try{
            const res = await fetch(`https://tmdbbackend.onrender.com/api/auth/movie/${id}`);
            //const res = await fetch(`http://localhost:3000/api/auth/movie/${id}`);
            const data = await res.json();
            console.log(data);
            
        }catch(err){
            console.error("Error ao carregar Filme: ", err)
        }
    }

    fetchMovie();
  },[id])

  return (
    <>
      <h1>My Movie</h1>
      <button onClick={handleBack}>Voltar</button>
    </>
  );
}
