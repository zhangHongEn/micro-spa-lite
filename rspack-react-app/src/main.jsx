import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/micro-spa-lite/rspack_react_app/home" element={<Home />} />
        <Route path="/micro-spa-lite/rspack_react_app/about" element={<About />} />
      </Routes>
    </Router>
  );
}

let app
let container
export async function mount() {
  container = document.createElement('div')
  document.getElementById("mfe-apps").appendChild(container)
  app = createRoot(container)
  app.render(<App />)
}
export async function unmount() {app.unmount()}
export async function bootstrap() {}