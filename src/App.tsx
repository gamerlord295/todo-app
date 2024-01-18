import { useEffect, useState } from "react";
import "./App.css";
import Header from "./header";
import headerDark from "./assets/bg-desktop-dark.jpg";
import headerLight from "./assets/bg-desktop-light.jpg";
import Form from "./form";
import Tasks from "./tasks";

function App() {
  const [theme, setTheme] = useState("dark");
  const [background, setBackground] = useState<string>("hsl(0, 0%, 98%)");
  const [data, setData] = useState<{status: boolean;task: string; id: number;}[]>([])
  
  useEffect(() => {
    if (theme === "dark") {
      setBackground("hsl(235, 21%, 11%)");
    } else {
      setBackground("hsl(0, 0%, 98%)");
    }
  }, [theme]);

  return (
    <div className="main-container" style={{ background: background }}>
      {theme === "dark" ? (
        <img className="header-img" src={headerDark} alt="" />
      ) : (
        <img className="header-img" src={headerLight} alt="" />
      )}
      <div className="container">
        <Header theme={theme} setTheme={setTheme} />
        <Form data={data} setData={setData} />
        <Tasks data={data} setData={setData} />
      </div>
    </div>
  );
}

export default App;
