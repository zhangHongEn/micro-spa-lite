import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>React Home</h1>
      <p>Welcome to the Home page of your React app.</p>
      <Link to="/micro-spa-lite/rspack_react_app/about">Go to About</Link>
    </div>
  );
}