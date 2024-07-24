import "./App.css";
import { Grid } from "./components/Grid";
import { PathfindingProvider } from "./context/PathfindingContext";
import { SpeedContextProvider } from "./context/SpeedContext";
import { TileContextProvider } from "./context/TilesContext";

function App() {
  return (
    <PathfindingProvider>
      <TileContextProvider>
        <SpeedContextProvider>
          <div className="flex h-screen w-screen flex-col bg-black">
            <Grid />
          </div>
        </SpeedContextProvider>
      </TileContextProvider>
    </PathfindingProvider>
  );
}

export default App;
