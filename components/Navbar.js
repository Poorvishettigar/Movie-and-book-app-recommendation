export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 flex justify-center">
      <div className="flex justify-center items-center w-full max-w-4xl mx-auto gap-8">
        <a href="/" className="text-white hover:text-yellow-400">Home</a>
        <a href="/movies" className="text-white hover:text-yellow-400">Movies</a>
        <a href="/books" className="text-white hover:text-yellow-400">Books</a>
      </div>
    </nav>
  );
}
