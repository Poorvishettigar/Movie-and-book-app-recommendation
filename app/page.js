import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center">
      <h1>Welcome to BiblioFlix😎</h1>
      <p>One stop for Vibe and Peace. Browse movies and books, save your favorites!</p>
      <Image 
        src="/image.jpeg"  
        alt="Movie and Book Recommendation Banner"
        width={1000} 
        height={700} 
        className="mx-auto rounded-lg shadow-lg"
      />
    </div>
  );
}

