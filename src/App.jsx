import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/saved-news"
            element={<div>Saved News Page - Coming Soon!</div>}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
