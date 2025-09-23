// App.tsx
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import NotFoundScreen from "./screens/PageNotFound";
import HowToPlayScreen from "./screens/HowToPlay";
import CategoryScreen from "./screens/CategorySelection";
import GamePlayScreen from "./screens/GamePlay";

function App() {
  return (
    <div className="min-h-screen w-full text-white checkerboard-bg">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/howtoplay" element={<HowToPlayScreen />} />
        <Route path="/category" element={<CategoryScreen />} />
        <Route path="/game" element={<GamePlayScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </div>
  );
}

export default App;
