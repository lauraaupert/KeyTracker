import { useEffect, useState } from "react";
import "./App.css";
import FontButton from "./components/FontButton";
import Main from "./components/Main";

function App() {
  const [font, setFont] = useState("serious");
  const [theme, setTheme] = useState("dark");
  return (
    <div className={`App ${font} ${theme}`}>
      <Main setFont={setFont} theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
