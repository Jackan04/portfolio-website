import { Outlet } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import ScrollToTop from "./components/scrollToTop/ScrollToTop.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet />
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
}

export default App;
