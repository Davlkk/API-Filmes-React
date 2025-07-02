import { Link } from "react-router-dom";

function Movie({ movie }) {
  return (
    <li className="flex flex-col items-center max-w-[200px]">
      <Link
        to={`/details/${movie.id}`}
        className="transition-all duration-300 hover:scale-110"
      >
        <img
          src={movie.imagem}
          alt={movie.title}
          className="w-[180px] rounded-xl mb-4"
        />
      </Link>
      <span className="font-medium text-center text-[120%]">{movie.title}</span>
    </li>
  );
}

export default Movie;
