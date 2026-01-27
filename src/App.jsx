import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatWeDo from "./components/WhatWeDo";
import TrustUs from "./components/TrustUs";
import BangerGallery from "./components/BangerGallery";
import StepByStep from "./components/StepByStep";
import MusicCreatorBanner from "./components/MusicCreatorBanner";
import HeroComponent from "./components/HeroComponent";
import Testimonial from "./components/Testimonial";
import Slider from "./components/Slider";
import Home from "./pages/Home";
import ChangeBackground from "./components/ChangeBackground";

function App() {
  return (
    <>
      <Home />

      {/* <Navbar />
      <HeroComponent />
      <WhatWeDo />
      <BangerGallery />
      <StepByStep />
      <TrustUs />
      <Slider />
      <Testimonial />
      <MusicCreatorBanner />

      <Footer /> */}
    </>
  );
}

export default App;
