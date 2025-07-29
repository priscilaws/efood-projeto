import Footer from "./components/Footer";
import Header from "./components/Header";
import { GlobalCss } from "./styles";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
