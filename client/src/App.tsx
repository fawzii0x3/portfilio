import "./App.css";
import Backg from "./components/Backg";
import Card from "./components/Card";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
function App() {
  // w-[611px] h-[1300px] lg:w-[1222px] lg:h-[650px]
  return (
    <>
      <Card>
        <NavBar />
        <Outlet />
      </Card>
      <Backg />
    </>
  );
}

export default App;
