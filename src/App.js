import React from "react";
import AppHeader from "./components/inc/AppHeader";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
