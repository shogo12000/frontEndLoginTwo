import { useEffect, useState } from "react";
import MovieBox from "../components/MovieBox";

export default function Movies() {
  const [dataMovies, setDataMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const resp = await fetch(
          "https://tmdbbackend.onrender.com/api/auth/movies",
          {
            //const resp = await fetch("http://localhost:3000/api/auth/movies",{
            method: "GET",
            credentials: "include",
          }
        );

        const data = await resp.json();
        setDataMovies(data.results);
        console.log(data.results);
      } catch (error) {
        console.log("ERROR FETCHING MOVIES: ", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <h1>Movies</h1>
      <div className="max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {dataMovies.map((m) => (
          <MovieBox key={m.id} movie={m}/>
        ))}
      </div>
    </>
  );
}
