import "./App.css";
import Notifications from "../Notifications/Notifications.jsx";
import Login from "../Login/Login.jsx";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Notifications />
      <Header />
      <Login />
      <Footer />
    </Fragment>
  );
}

export default App;
