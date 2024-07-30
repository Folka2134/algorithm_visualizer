import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="flex min-h-screen w-screen flex-col justify-center gap-5 bg-[radial-gradient(#ffffff33_1px,#121212_1px)] bg-[size:40px_40px] text-white lg:flex-row">
      <div className="mt-5 flex items-center justify-center md:mt-0">
        <Link to="/pather">
          <div className="group">
            <h3 className="mb-3 text-center text-2xl font-semibold">
              Path Finder
            </h3>
            <img
              src="public/pathfinder_preview.png"
              alt="path finder preview"
              className="transition-transform duration-200 group-hover:scale-105"
            />
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <Link to="/sorter">
          <div className="group">
            <h3 className="mb-3 text-center text-2xl font-semibold">
              Bar sorter
            </h3>
            <img
              src="public/sorter_preview.png"
              alt="path finder preview"
              className="transition-transform duration-200 group-hover:scale-105"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default App;
