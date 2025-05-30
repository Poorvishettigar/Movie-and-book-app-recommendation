import './globals.css';
import Navbar from '../components/Navbar';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}

