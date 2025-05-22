import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Movie() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState({});
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Volta para a página anterior
  };

  useEffect(() => {
    async function fetchMovie() {
      try {
        const res = await fetch(
          `https://tmdbbackend.onrender.com/api/auth/movie/${id}`
        );
        //const res = await fetch(`http://localhost:3000/api/auth/movie/${id}`);
        const data = await res.json();
        setMovieData(data);
      } catch (err) {
        console.error("Error ao carregar Filme: ", err);
      }
    }

    fetchMovie();
  }, [id]);

  return (
    <>
      <h1>{movieData.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
        alt={title}
        className="w-full h-auto mb-2 object-contain"
      />
      <button onClick={handleBack}>Voltar</button>
    </>
  );
}
