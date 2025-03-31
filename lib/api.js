const TMDB_API_KEY = 'YOUR_API_KEY'; 

export async function fetchMovies() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`);
  const data = await res.json();
  return data.results;
}

export async function fetchBooks() {
  const res = await fetch(`https://openlibrary.org/subjects/fiction.json?limit=10`);
  const data = await res.json();
  return data.works;
}
