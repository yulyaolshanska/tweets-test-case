import React, { lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyle";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import theme from "../styles/theme";
import Loader from "./Loader/Loader";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const TweetsPage = lazy(() => import("../pages/TweetsPage/TweetsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
