import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthenticationPage from "./Pages/Authentication";
import ProfilePage from "./Pages/Profile";
import ServicePage from "./Pages/Service";
import ScratchPage from "./Pages/Service/Scratch";
import InspirePage from "./Pages/Service/Inspire";
import Layout from "./Components/Layout";
import AuthProvider from "./Context/AuthContext";
import MainPage from "./Pages/Main";
import PrivateRoute from "./Context/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/authentication"
              element={<AuthenticationPage />}
            ></Route>
            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<ProfilePage />}></Route>
              <Route path="/service" element={<ServicePage />}></Route>
              <Route path="/service/scratch" element={<ScratchPage />}></Route>
              <Route path="/service/inspire" element={<InspirePage />}></Route>
              <Route path="/" element={<MainPage />}></Route>
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
