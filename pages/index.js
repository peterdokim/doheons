import Image from 'next/image';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; 
import Link from 'next/link';  // Import Next.js Link component for navigation

export default function Home() {
  return (
    <div className="container">
      {/* Navbar Section */}
      <nav className="navbar">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="intro">
          <h1>Do heon Kim</h1>
      
          
          {/* Profile Picture */}
          <div className="profile-pic">
            <Image
              src="/headshot.jpg"
              alt="Your Name"
              width={200}
              height={250}
              className="rounded-circle"
            />
          </div>
        </div>

        {/* Social Media Links */}
        <div className="social-media">
          <a href="https://www.linkedin.com/in/dokim19" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/peterdokim" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://instagram.com/peterdokim" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
        </div>
      </header>

      <footer>
        <p>Connect with me:</p>
      </footer>
    </div>
  );
}

