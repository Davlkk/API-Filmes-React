import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API, IMAGE_ORIGINAL_URL, URL } from "../api/movieApi";

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  const IMAGE_BASE_URL = IMAGE_ORIGINAL_URL;

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await fetch(
          `${URL}/movie/${id}?api_key=${API}&language=pt-BR`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Erro ao buscar detalhes:", error);
      }
    }
    fetchMovie();
  }, [id]);

  if (!movie) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Carregando detalhes...
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-stone-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm"
        style={{
          backgroundImage: `url(${IMAGE_BASE_URL}${
            movie.backdrop_path || movie.poster_path
          })`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 p-8 md:p-16 min-h-screen max-w-6xl mx-auto">
        <img
          src={IMAGE_BASE_URL + movie.poster_path}
          alt={movie.title}
          className="w-[300px] md:w-[350px] rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105"
        />

        <div className="flex flex-col gap-4 max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-xl">
            {movie.title}
          </h1>
          <p className="text-gray-300 text-lg">
            {movie.overview || "Sem sinopse disponível."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-4">
            <span className="bg-purple-600/80 px-4 py-2 rounded-full text-sm font-bold">
              ⭐ {movie.vote_average?.toFixed(1)}/10
            </span>
            <span className="bg-blue-600/80 px-4 py-2 rounded-full text-sm font-bold">
              🎬 {movie.release_date}
            </span>
            {movie.runtime && (
              <span className="bg-green-600/80 px-4 py-2 rounded-full text-sm font-bold">
                ⏱️ {movie.runtime} min
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
