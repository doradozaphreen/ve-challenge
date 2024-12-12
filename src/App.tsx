import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Teams from "./pages/teams";
import Challenges from "./pages/challenges";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  return (
    <main className="flex flex-col justify-center w-screen h-screen mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="teams" element={<Teams />} />
          <Route path="challenges" element={<Challenges />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        toastOptions={{
          duration: 1500,
          style: {
            background: "#eeeaf4",
            color: "#1C313F",
            fontSize: "14px",
          },
        }}
      />
    </main>
  );
};

export default App;
