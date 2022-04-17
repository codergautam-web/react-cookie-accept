import logo from './logo.svg';
import './App.css';
import CookieConsent from "react-cookie-consent";

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
          Learn React
        </a>
      </header>
      <CookieConsent
        buttonStyle={{ backgroundColor: "#00ff00", color: "#000" }}
        containerClasses="cookiecard"
        debug={true}
      >
        This website uses cookies or similar technologies, to enhance your
        browsing experience and provide personalized recommendations. By
        continuing to use our website, you agree to our Privacy Policy .
      </CookieConsent>
    </div>
  );
}

export default App;
