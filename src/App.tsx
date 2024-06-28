import "./App.css";
import { PathfindingProvider } from "./context/PathfindingContext";
import { SpeedContextProvider } from "./context/SpeedContext";
import { TileContextProvider } from "./context/TilesContext";

function App() {
  return (
    <PathfindingProvider>
      <TileContextProvider>
        <SpeedContextProvider>
          <div>test`</div>
        </SpeedContextProvider>
      </TileContextProvider>
    </PathfindingProvider>
  );
}

export default App;
