import logo from './logo.svg';
import './App.css';
import Welcome from './chapter05/Welcome';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          리액트 프로젝트 <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React gogo
        </a>
      </header>
    </div>
  );
}

export default App;
