import NavBar from "../components/nav_bar";
import "../app/globals.css";
import BottomNavBar from "../components/bottom_nav_bar";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="body">
      <NavBar></NavBar>
      <Component {...pageProps} />
      <BottomNavBar></BottomNavBar>
    </div>
  );
};

export default MyApp;
