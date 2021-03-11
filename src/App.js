import "./App.css";
import Jobs from "./compotment/Jobs";

function App() {
  return (
    <div className="body">
      <div className="contener">
        <header>
          <h1>The Job Board </h1>
        </header>
        <Jobs></Jobs>
        <footer>
          <h1>
            Made whith <strong>React</strong> at <strong>Le Reacteur</strong> By
            <strong> Me</strong>
          </h1>
        </footer>
      </div>
    </div>
  );
}

export default App;
