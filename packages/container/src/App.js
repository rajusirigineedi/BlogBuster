import React from "react";
import Home from "./components/HomeApp";
import LandingApp from "./components/LandingApp";
import EditorApp from "./components/EditorApp";

export default () => {
  return (
    <div>
      <h2>Container</h2>
      <Home />
      <LandingApp />
      <EditorApp />
    </div>
  );
};
