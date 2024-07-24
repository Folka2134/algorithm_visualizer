import { useRef } from "react";
import "./App.css";
import { Grid } from "./components/Grid";
import { PathfindingProvider } from "./context/PathfindingContext";
import { SpeedContextProvider } from "./context/SpeedContext";
import { TileContextProvider } from "./context/TilesContext";
import Nav from "./components/Nav";

function App() {
  const isVisualizationRunningRef = useRef(false);

  return (
    <PathfindingProvider>
      <TileContextProvider>
        <SpeedContextProvider>
          <div className="flex h-screen w-screen flex-col bg-black">
            <Nav />
            <Grid isVisualizationRunningRef={isVisualizationRunningRef} />
          </div>
        </SpeedContextProvider>
      </TileContextProvider>
    </PathfindingProvider>
  );
}

export default App;
