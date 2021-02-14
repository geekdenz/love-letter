import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LoveLetter } from './LoveLetter';

function App() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const name = params.get('name');
  return (
    <div className="App">
      <header className="App-header">
        ❤
        <h1>
          Dear {name},
        </h1>
      </header>
      <article>
        <LoveLetter />
      </article>
      <footer>
        <a href="https://github.com/geekdenz/love-letter">
          https://github.com/geekdenz/love-letter
        </a>
      </footer>
    </div>
  );
}

export default App;
