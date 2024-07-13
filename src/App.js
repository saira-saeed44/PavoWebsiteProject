import React from "react";
import NavBar from "./components/NavBar";
// import Hero from './components/Hero';
// import Features from './components/Features';
// import Pricing from './components/Pricing';
import Slider from './components/Slider';
import {
  headerData,
  cardsData,
  cardsData2,
  cardsData3,
  cardsData4,
} from "./data";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cardsecond from "./components/Cardsecond";
import Cardthird from "./components/Cardthird";
import Counter from './components/Counter';
import Cardfourth from "./components/Cardfourth";
function App() {
  return (
    <>
      <NavBar />
      <Header data={headerData} />
      <Cards data={cardsData} />
      <Cardsecond data={cardsData2} />
      <Cardthird data={cardsData3} />
      <Counter />
      <Cardfourth data={cardsData4} />
<Slider />
      {/* <Hero /> */}
      {/* <Features /> */}
      {/* <Pricing /> */}
      <Footer />
    </>
  );
}

export default App;
