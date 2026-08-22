import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import SignupModal from "./components/SignupModal";
import LoginModal from "./components/LoginModal";

function App() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar
        onSignup={() => setShowSignup(true)}
        onLogin={() => setShowLogin(true)}
      />

      <Home />

      <Footer />

      {showSignup && (
        <SignupModal
          onClose={() => setShowSignup(false)}
          onLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}

      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        />
      )}
    </>
  );
}

export default App;