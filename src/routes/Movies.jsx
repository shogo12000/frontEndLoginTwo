import { useEffect, useState } from "react";

export default function Movies() {
  const [dataMovies, setDataMovies] = useState(null);

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
        console.log(resp);
        const data = await resp.json();
        setDataMovies(data.results);
        console.log(data);
      } catch (error) {
        console.log("ERROR FETCHING MOVIES: ", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <h1>Movies</h1>

      <div>
        {dataMovies.map((m) => (
          <p key={m.id}>{m.title}</p>
        ))}
      </div>
    </>
  );
}
