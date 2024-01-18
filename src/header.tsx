import { Dispatch, SetStateAction } from "react";
import moon from "./assets/icon-moon.svg"
import sun from "./assets/icon-sun.svg"


const Header = (props: { theme: string; setTheme: Dispatch<SetStateAction<string>> ; }) => {
  const {theme, setTheme}= props;
  return (
    <div className="header">
      <h1>TODO</h1>
      {theme === "dark"? 
      <img src={sun} onClick={() => setTheme('light')} alt="" />
      :
      <img src={moon} onClick={() => setTheme('dark')} alt="" />
      }
    </div>
  );
};

export default Header;
