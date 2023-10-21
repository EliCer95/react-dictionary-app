import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1 className="mt-5">Dictionary App</h1>
      </header>
      <div className="container">
        <Dictionary keyword="sunset" />
      </div>
      <footer className="mt-5 mb-5">
        This app was made by Eliska Cerna and is open-sourced on GitHub
      </footer>
    </div>
  );
}
