import { useEffect } from "react";
import BtnLogout from "../components/BtnLogout";

export default function Profile() {
  useEffect(() => {
    const fetchMovies = () => {
      try { 
        const url = 'https://api.themoviedb.org/3/movie/575265';
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDk3N2M0NDhiNzZjYjMyODY5NmNhZWMyMGQyNDAxNSIsIm5iZiI6MTcwNTA5NzY1MC4xNjUsInN1YiI6IjY1YTFiOWIyOWFlNjEzMDEyZWI3NzQ5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tKnWyb2UanxxqUvmFJHLIbMt_qzEaTxNR0jvvWcTFCw",
          },
        };

        fetch(url, options)
          .then((res) => res.json())
          .then((json) => console.log(json))
          .catch((err) => console.error(err));
      } catch (error) {
        console.log("error");
      }
    };
    fetchMovies();
    console.log("xxx");
  }, []);

  return (
    <>
      <h1 className="text-pink-500">Pagina PROFILE</h1>
      <BtnLogout />
    </>
  );
}
