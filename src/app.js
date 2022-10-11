import { Outlet } from "react-router-dom";
import { Header } from "./components/header/Header";
import classes from "./components/layout/Layout.module.css";

function App() {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <Outlet />
      </main>
    </>
  );
}

export default App;
