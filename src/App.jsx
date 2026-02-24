import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { searchNews } from "./utils/api";

import LoginModal from "./components/LoginModal/LoginModal";
import RegisterModal from "./components/RegisterModal/RegisterModal";
import RegistrationCompleteModal from "./components/RegistrationCompleteModal/RegistrationCompleteModal";

function App() {
  const [articles, setArticles] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState("");

  const [activeModal, setActiveModal] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showRegistrationCompleteModal, setShowRegistrationCompleteModal] =
    useState(false);

  const handleSearch = async (query) => {
    try {
      setIsSearching(true);
      setSearchError("");

      const data = await searchNews(query);
      setArticles(data.articles || []);
    } catch (err) {
      setSearchError("Could not fetch news.Try again.");
      setArticles([]);
    } finally {
      setIsSearching(false);
    }
  };

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
          onSearch={handleSearch}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                articles={articles}
                isSearching={isSearching}
                searchError={searchError}
              />
            }
          />
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
