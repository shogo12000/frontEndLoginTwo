import { Link } from "react-router-dom";

export default function Menu( ) {
  return (
    <div className="w-full" >
      <nav className="w-full flex gap-3 "> 
        <Link to="/api" className="hover:underline">Home</Link>
        <Link to="/api/profile" className="hover:underline">Profile</Link>
        <Link to="/api/movies" className="hover:underline">Movies</Link>
      </nav> 
    </div>
  );
}