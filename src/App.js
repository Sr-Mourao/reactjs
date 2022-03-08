import logo from './logo.svg';
import './App.css';

import Teste from './Teste'

//jsx

function App() {
  return (
    <div className="App">

      <Teste/>
      <Teste/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          felipe mourao é foda!!
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
      </header>
    </div>
  );
}

export default App;
