import React from "react";
import { Routers, Route, Routes } from "react-router-dom";
import routes from "../router";
import "./assets/styles/App.css";

function App() {
  return (
    <>
      <Routes>
        {routes.map(({ path, element}, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </>
  );
}

export default App;