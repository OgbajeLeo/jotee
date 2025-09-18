import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import GlobalLoader from "../components/loaders/GlobalLoader";
// import { ToastProvider } from "../contexts/ToastContext";

const LandingPage = lazy(() => import("../pages/landingPage"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      {/* <ToastProvider> */}
      <Suspense fallback={<GlobalLoader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Suspense>
      {/* </ToastProvider> */}
    </BrowserRouter>
  );
}
