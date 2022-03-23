

import React from 'react';
import HeaderBar from './component/Header';
import "./App.css"
import Hero from "../src/component/Hero"
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SelectedWork from './component/SelectedWork';
import Awards from './component/Awards';
import About from './component/About';
import Footer from './component/Footer';

AOS.init()

function App() {
  return (
    <div>
    <HeaderBar/>
    <Hero/>
    <SelectedWork/>
    <Awards/>
    <About/>
    <Footer/>
    </div>
  );
}


export default App;
