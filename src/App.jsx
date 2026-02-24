import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import SelectAccountType from "./auth/authpages/SelectAccountType";
import BloggerSignup from "./auth/authpages/BloggerSignup";
import SelectCuratorType from "./auth/authpages/SelectCuratorType";
import SignupForm from "./auth/authpages/SignupForm";
import Email from "./auth/authpages/Email";
import Login from "./auth/authpages/Login";
import ConfirmEmail from "./auth/authpages/ConfirmEmail";
import AdditionalInformation from "./auth/authpages/AdditionalInformation";
import ContentCreatorMorePages from "./auth/authpages/ContentCreatorMorePages";
import ContentMoreInfo from "./auth/authpages/ContentMoreInfo";
import SocialMediaPage from "./auth/authpages/SocialMediaPage";
import ForgetPasswordPage from "./auth/authpages/ForgetPasswordPage";
import ResetPassword from "./auth/authpages/ResetPassword";
import PlayListCuratorAdditionalInfoPage from "./auth/authpages/PlayListCuratorAdditionalInfoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SelectAccountType />} />
          <Route path="/signup/curator/type" element={<SelectCuratorType />} />
          <Route path="/signupform" element={<SignupForm />} />
          <Route path="/email" element={<Email />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgetPasswordPage />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/confirm-email" element={<ConfirmEmail />} />
          <Route
            path="/additional_information"
            element={<AdditionalInformation />}
          />
          <Route
            path="/content-more-info"
            element={<ContentMoreInfo />}
          />
          <Route
            path="/blog-details"
            element={<ContentCreatorMorePages />}
          />
          <Route
            path="/social-media"
            element={<SocialMediaPage />}
          />
          <Route
            path="/playlist-curator-info"
            element={<PlayListCuratorAdditionalInfoPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
