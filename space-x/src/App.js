import logo from './space-x.png'
import './App.css'
import Query from './Query'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p><Query /></p>
        <a
          className="App-link"
          href="https://www.spacex.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about SpaceX
        </a>
      </header>
    </div>
  );
}

export default App