import React from 'react';
import indexpage from "./pages/index";
import portfoliopage from "./pages/portfolio";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Route exact path={["/"]} component={indexpage} />
      <Route path={"/portfolio"} component={portfoliopage} />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
