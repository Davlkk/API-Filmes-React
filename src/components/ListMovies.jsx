import { useState, useEffect } from "react";
import Movie from "./Movie";
import { API, IMAGE_URL, URL } from "../api/movieApi";


function ListMovies() {
  const [movies, setMovies] = useState([]);

  async function getPopularMovies(page = 1) {
    const response = await fetch(
      `${URL}/movie/popular?api_key=${API}&page=${page}&language=pt-BR`
    );
    if (!response.ok) {
      throw new Error("Erro.");
    }
    return response.json();
  }

  useEffect(() => {
    async function fetchPopularMovies() {
      try {
        const data = await getPopularMovies();
        const mappedMovies = data.results.map((movie) => ({
          title: movie.title,
          imagem: IMAGE_URL + movie.poster_path,
          id: movie.id,
        }));
        setMovies(mappedMovies);
      } catch (error) {
        console.error("Erro ao buscar filmes populares:", error);
      }
    }

    fetchPopularMovies();
  }, []);

  return (
    <ul className="grid gap-y-8 gap-x-8 mx-auto justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 text">
      {movies.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </ul>
  );
}

export default ListMovies;
