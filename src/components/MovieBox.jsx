import MovieCheckBoxes from "./MovieCheckBoxes";

export default function MovieBox({ movie }) {
  const { id, title, poster_path } = movie;

  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className=" border border-red-500">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-auto mb-2 object-contain"
        
      />
      <p>{title.length > 15 ? title.slice(0, 12) + "..." : title}</p>
      <MovieCheckBoxes myMovie={movie}/>
    </div>
  );
}
