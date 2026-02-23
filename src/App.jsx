import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";

import LoginModal from "./components/LoginModal/LoginModal";
import RegisterModal from "./components/RegisterModal/RegisterModal";
import RegistrationCompleteModal from "./components/RegistrationCompleteModal/RegistrationCompleteModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showRegistrationCompleteModal, setShowRegistrationCompleteModal] =
    useState(false);

  const handleOnSwitchToLogin = () => {
    setShowLoginModal(true);
    setShowRegisterModal(false);
  };

  const handleOnSwitchToRegister = () => {
    setShowRegisterModal(true);
    setShowLoginModal(false);
  };

  const handleOpenLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleOpenRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const handleOpenRegistrationCompleteModal = () => {
    setShowRegistrationCompleteModal(true);
  };

  const handleCloseActiveModal = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
    setShowRegistrationCompleteModal;
  };
  return (
    <Router>
      <div className="app">
        <Header
          handleOpenLoginModal={handleOpenLoginModal}
          handleOpenRegisterModal={handleOpenRegisterModal}
        />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/saved-news"
            element={<div>Saved News Page - Coming Soon!</div>}
          />
        </Routes>
        <Footer />
        {showLoginModal && (
          <LoginModal
            isOpen={showLoginModal}
            onClose={handleCloseActiveModal}
            onSwitchToRegister={handleOnSwitchToRegister}
          />
        )}

        {showRegisterModal && (
          <RegisterModal
            isOpen={showRegisterModal}
            onClose={handleCloseActiveModal}
            handleOnSwitchToLogin={handleOnSwitchToLogin}
          />
        )}

        {showRegistrationCompleteModal && (
          <RegistrationCompleteModal
            isOpen={showRegistrationCompleteModal}
            onClose={handleCloseActiveModal}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
