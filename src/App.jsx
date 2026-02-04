import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";

// finish login modal  create close active modal

import LoginModal from "./components/LoginModal/LoginModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleOpenLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseActiveModal = () => {
    setShowLoginModal(false);
  };
  return (
    <Router>
      <div className="app">
        <Header handleShowLoginModal={handleOpenLoginModal} />
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
      </div>
    </Router>
  );
}

export default App;
