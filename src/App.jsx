import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";

import LoginModal from "./components/LoginModal/LoginModal";
import RegisterModal from "./components/RegisterModal/RegisterModal";

// style login modal
//create register modal structure
// style register modal

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

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

  const handleCloseActiveModal = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
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
          />
        )}

        {showRegisterModal && (
          <RegisterModal
            isOpen={showRegisterModal}
            onClose={handleCloseActiveModal}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
