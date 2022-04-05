import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

import Data from './components/Data'

import Menu from "./components/Menu";
import Banner from './components/Banner';
import Info from './components/Info';
import Parallax from './components/Parallax';
import Mision from './components/Mision';
import About from './components/About';
import Footer from './components/Footer';

function App() {

const data = Data()
const {banner,analytic,design,developer,parallaxOne,parallaxTwo,mision,about} = data;

  return (
    <>
      <Menu/>
      <Banner banner={banner} /> 
      <Info datos={analytic} />
      <Info datos={design} />
      <Parallax datos={parallaxOne} />
      <Info datos={developer} />
      <Parallax datos={parallaxTwo} />
      <Mision datos={mision} />
      <About />
      <Footer />

    </>
    
  )
}

export default App;
