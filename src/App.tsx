import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, NotFound } from "./Pages/routes.js";

function App() {
  return (
    <div className="bg-stone-950 text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
