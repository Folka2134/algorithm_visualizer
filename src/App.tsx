import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="flex h-screen w-screen flex-col bg-black text-white">
      <button>
        <Link to="/pather">Path Finder</Link>
      </button>
      <button>
        <Link to="/sorter">Bar sorter</Link>
      </button>
    </div>
  );
}

export default App;
