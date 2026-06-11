import "./App.css";
import { useState, useEffect } from "react";
import { Rotas } from "./routes/routes";

function App() {

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";

    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <>
      <Rotas
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </>
  );
}

export default App;