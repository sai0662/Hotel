import React,{Component} from 'react';
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route,Switch,Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HomeScreen from "../src/pages/HomeScreen";
import HotelScreen from "../src/pages/HotelScreen";
import BookingHis from "../src/pages/BookingHis";
import SigninScreen from './pages/SigninScreen';

function App(){
  
  
  return (
    

    <Router>
      <header className="header">
        <NavBar /> 
      </header>
      <Switch>
      <main className="main">
        <div className="content">
          <Route path="/signin"  component={SigninScreen}/>
        <Route path="/book/:id?" component={BookingHis} />
          <Route path="/hotel/:id" component={HotelScreen} />
          <Route exact path="/" component={HomeScreen} />
        </div>
      </main>
      </Switch>
      <footer className="footer">
        <Footer />  
      </footer>
    </Router>

  );
}

export default App;
