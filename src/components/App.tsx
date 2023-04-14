import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const TweetsPage = lazy(() => import("../pages/TweetsPage/TweetsPage"));

function App() {
  return (
    <Suspense fallback={<div>Loader</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
