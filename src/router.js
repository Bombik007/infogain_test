import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { Dashboard } from "./pages";
import { ErrorBoundary } from "./components";

const Router = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <Routes>
        <Route index path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  </ErrorBoundary>
);

export default Router;
