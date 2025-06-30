import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div style={{ padding: 20 }}>
      <h1>About Page</h1>
      <p>This is the About page, sharing more about your app.</p>
      <Link to="/module-federation-spa-boilerplate/rspack_react_app/home">Back to Home</Link>
    </div>
  );
}