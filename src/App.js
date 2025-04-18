import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "./components/PageWrapper";
import IntroPage from "./components/IntroPage/IntroPage";
import InfographicPage from "./components/InfographicPage/InfographicPage";
import ModulePage from "./components/ModulePage/ModulePage";
import ConclusionPage from "./components/ConclusionPage/ConclusionPage";
import "./App.scss";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <div className="app-container">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <IntroPage />
              </PageWrapper>
            }
          />
          <Route
            path="/infographic"
            element={
              <PageWrapper>
                <InfographicPage />
              </PageWrapper>
            }
          />
          <Route
            path="/module/:id"
            element={
              <PageWrapper>
                <ModulePage />
              </PageWrapper>
            }
          />
          <Route
            path="/conclusion"
            element={
              <PageWrapper>
                <ConclusionPage />
              </PageWrapper>
            }
          />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default App;
