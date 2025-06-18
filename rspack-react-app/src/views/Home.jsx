import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Home Page</h1>
      <p>Welcome to the Home page of your React app.</p>
      <Link to="/rspack_react_app/about">Go to About</Link>
    </div>
  );
}