import { useEffect } from "react";

export default function Movies() {
  useEffect(() => {
    const fetchMovies = async() => {
      try {
        const resp = fetch("https://tmdbbackend.onrender.com/api/auth/movies",{
        //const resp = await fetch("http://localhost:3000/api/auth/movies",{
            method: "GET",
            credentials: "include",
        });
        const data = await resp.json();
        console.log(data);
      } catch (error) {
        console.log("ERROR FETCHING MOVIES: ", error);
      }
    };

    fetchMovies();
  }, []);

  return <h1>Movies</h1>;
}
