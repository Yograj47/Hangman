// App.tsx
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import NotFoundScreen from "./screens/PageNotFound";

function App() {
  return (
    <div className="min-h-screen w-full text-white checkerboard-bg">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </div>
  );
}

export default App;
