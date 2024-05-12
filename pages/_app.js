import NavBar from "../components/nav_bar";
import "../app/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="body">
      <NavBar></NavBar>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
