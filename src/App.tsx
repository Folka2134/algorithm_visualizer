import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="flex h-screen w-screen flex-col bg-[radial-gradient(#ffffff33_1px,#121212_1px)] bg-[size:40px_40px] text-white">
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
