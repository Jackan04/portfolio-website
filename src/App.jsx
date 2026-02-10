import { Outlet } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
