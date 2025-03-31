"use client";
import { useState, useEffect } from "react";
import BookCard from "../../components/BookCard";
import { fetchBooks } from "../../lib/api";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    async function loadBooks() {
      const data = await fetchBooks();
      setBooks(data);
      setFilteredBooks(data); 
    }
    loadBooks();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setFilteredBooks(
        books.filter((book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredBooks(books);
    }
  }, [searchQuery, books]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Popular Books</h1>
      <input
        type="text"
        placeholder="Search for books..."
        className="search-bar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <BookCard key={book.key} book={book} />)
        ) : (
          <p className="text-gray-400">No books found.</p>
        )}
      </div>
    </div>
  );
}
