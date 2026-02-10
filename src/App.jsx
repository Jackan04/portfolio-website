import { Outlet } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
