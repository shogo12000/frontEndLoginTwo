import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./routes/Profile.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute, MainPage } from "./context/ProtectedRoute.jsx";
import Movies from "./routes/Movies.jsx";
import UserMainPage from "./routes/UserMainPage.jsx";
import LoggedUserLayout from "./routes/LoggedUserLayout.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="475376767328-soku8p9dl739un1ggshsnfijo5bjcc3m.apps.googleusercontent.com">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MainPage>
                  <App />
                </MainPage>
              }
            />

            <Route
              path="/api"
              element={
                <ProtectedRoute>
                  <LoggedUserLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<UserMainPage/>} />
              <Route path="profile" element={<Profile />} />
              <Route path="movies" element={<Movies />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);
