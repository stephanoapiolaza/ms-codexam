// @monaco-editor/react is Monaco editor wrapper for painless integration with React
// applications without need of webpack (or other module bundler)
// configuration files.

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          Hola que tal, estoy codeando en un editor en linea
          <iframe src="https://stephanoapiolaza.cl" width="100%" height="100%"/>
        </a>
      </header>
    </div>
  );
}

export default App;