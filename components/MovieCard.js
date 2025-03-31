"use client";
import { useState } from "react";
import Image from "next/image";

export default function MovieCard({ movie }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-[200px] cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative mt-6">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={200}
          height={300}
          className="rounded-lg transition duration-300 "
        />
        {hovered && (
          <div className="absolute inset-0 bg-black bg-opacity-80 text-white p-3 flex flex-col justify-center items-center rounded-lg transition-opacity duration-300">
            <p className="text-sm text-gray-300 text-center">{movie.overview}</p>
          </div>
        )}
      </div>
      <h3 className="text-white text-center font-bold mt-2">{movie.title} ({new Date(movie.release_date).getFullYear()})</h3>
      <p className="text-yellow-400 text-center">⭐ {movie.vote_average.toFixed(1)}</p>
    </div>
  );
}
