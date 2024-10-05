// pages/index.js
import Link from 'next/link';

const Home = () => (
  <div>

    <main>
      <h1>Welcome to my page</h1>
      <p>Hi, I'm Do heon Kim. UCSD Student majoring in Computer Science.</p>
      <nav>
        <ul>
          <li><Link href="/about">About me</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </main>
  </div>
);

export default Home;