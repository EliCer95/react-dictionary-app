import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1 className="mt-5">📚Dictionary App📚</h1>
      </header>
      <div className="container">
        <Dictionary keyword="sunset" />
      </div>
      <footer className="mt-4 mb-5">
        This app was made by{" "}
        <a
          href="https://timely-cascaron-7f0bb7.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Eliska Cerna
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/EliCer95/react-dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>{" "}
        on GitHub
      </footer>
    </div>
  );
}
