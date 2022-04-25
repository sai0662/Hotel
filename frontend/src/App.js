import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import HotelScreen from "./pages/HotelScreen/HotelScreen";

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <NavBar />
      </header>
      <main className="main">
        <div className="content">
          <Route path="/hotel/:id" component={HotelScreen} />
          <Route path="/" exact={true} component={HomeScreen} />
        </div>
      </main>
      <footer className="footer">
        <Footer />  
      </footer>
    </BrowserRouter>
  );
}

export default App;
