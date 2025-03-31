"use client";
import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard";
import { fetchMovies } from "../../lib/api";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const data = await fetchMovies();
      setMovies(data);
      setFilteredMovies(data); 
    }
    loadMovies();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setFilteredMovies(
        movies.filter((movie) =>
          movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredMovies(movies);
    }
  }, [searchQuery, movies]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Popular Movies</h1>
      <input
        type="text"
        placeholder="Search for movies..."
        className="search-bar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          ) : (
            <p className="text-gray-400">No movies found.</p>
          )}
      </div>
    </div>
  );
}
