"use client";
import { useState } from "react";
import Image from "next/image";

export default function BookCard({ book }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
        alt={book.title}
        width={200}
        height={300}
        className="rounded-lg cursor-pointer hover:opacity-80 transition duration-300"
      />
      <h2 className="mt-2 text-lg font-semibold">{book.title}</h2>
      <p className="text-yellow-400">📖 {book.authors?.[0]?.name || "Unknown Author"}</p>
      {hovered && (
        <div className="absolute inset-0 bg-black bg-opacity-80 text-white p-4 flex flex-col justify-center items-center rounded-lg">
          <p className="text-sm">{book.description || "No description available"}</p>
        </div>
      )}
    </div>
  );
}
