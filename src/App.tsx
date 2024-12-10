import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Teams from "./pages/teams";
import Challenges from "./pages/challenges";

const App: React.FC = () => {
  return (
    <main className="flex flex-col justify-center w-screen h-screen mx-auto r p-2">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="teams" element={<Teams />} />
          <Route path="challenge" element={<Challenges />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
