import React from "react";
import GlobalRouter from "./components/globalRouter/globalRouter";
import NavBar from "./components/navBar/navBar";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <GlobalRouter />
    </div>
  );
};

export default App;
