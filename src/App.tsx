import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="flex h-screen w-screen flex-col justify-center gap-5 bg-[radial-gradient(#ffffff33_1px,#121212_1px)] bg-[size:40px_40px] text-white lg:flex-row">
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
