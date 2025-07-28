import Header from "./components/Header";
import { GlobalCss } from "./styles";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Image from "./assets/images/three-dogs-banner.png";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalCss />
      {/* <Banner image={Image} alt="tres cachorros" /> */}
      <div>
        {/* <Header /> */}
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
