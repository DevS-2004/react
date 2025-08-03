import React from 'react';
import Calculator from './component/Calculator';

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Smart React Calculator</h1>
      <p className="app-subtitle">Perform fast and simple calculations with a modern UI</p>
      <Calculator />
      <footer className="footer-text">© 2025 Devendra Singh • NIT Jalandhar</footer>
    </div>
  );
};
export default App;