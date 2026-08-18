import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const MyWorks = lazy(() => import("./pages/MyWorks"));
const Play = lazy(() => import("./pages/Play"));
const TaskFlowPrivacy = lazy(() => import("./pages/privacy/TaskFlow"));
const BiderAppPrivacy = lazy(() => import("./pages/privacy/BiderApp"));
const AmsPrivacy = lazy(() => import("./pages/privacy/AttendanceManagement"));
const CBWorkspacePrivacy = lazy(() => import("./pages/privacy/CBWorkspace"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LoadingProvider>
              <Suspense>
                <MainContainer>
                  <Suspense>
                    <CharacterModel />
                  </Suspense>
                </MainContainer>
              </Suspense>
            </LoadingProvider>
          }
        />
        <Route
          path="/myworks"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MyWorks />
            </Suspense>
          }
        />
        <Route
          path="/play"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Play />
            </Suspense>
          }
        />
        <Route
          path="/privacy/taskflow"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <TaskFlowPrivacy />
            </Suspense>
          }
        />
        <Route
          path="/privacy/bider"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <BiderAppPrivacy />
            </Suspense>
          }
        />
        <Route
          path="/privacy/cb-ams"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <AmsPrivacy />
            </Suspense>
          }
        />
        <Route
          path="/privacy/cb-workspace"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <CBWorkspacePrivacy />
            </Suspense>
          }
        />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
};

export default App;
