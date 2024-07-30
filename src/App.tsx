import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";

function App() {
  const MaimPage = lazy(() => import("./Pages/MainPage"));
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<MaimPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
