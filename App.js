import React from 'react';
import logo from './logo.svg';
import './App.css';
import CodeEditor from './components/CodeEditor'; // Import the CodeEditor component

function App() {
  const githubUrl = 'https://github.com/your-username/your-repository'; // Replace with your GitHub repository URL

  return (
    <div className="App">
      <header className="App-header">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
        >
          View on GitHub
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Simple Code Editor</h1>
        <CodeEditor /> {/* Add the CodeEditor component here */}
      </header>
    </div>
  );
}

export default App;
