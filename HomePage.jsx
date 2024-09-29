
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <header>
        <h1>Welcome to Yellowmatics.ai</h1>
        <p>Learn coding interactively!</p>
      </header>
      <nav>
        <ul>
          <li><Link to="/tutorial/html">HTML</Link></li>
          <li><Link to="/tutorial/css">CSS</Link></li>
          <li><Link to="/tutorial/js">JavaScript</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
