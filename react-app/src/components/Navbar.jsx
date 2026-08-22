function Navbar({ onSignup, onLogin }) {
  return (
    <div className="header">
      <nav className="navbar">

        <a className="navbar-brand" href="/">
          <img src="/images/logo.png" alt="PG Life" />
        </a>

        <div className="navbar-links">

          <button
            className="nav-link"
            onClick={onSignup}
          >
            <i className="fas fa-user"></i>
            Signup
          </button>

          <div className="nav-vl"></div>

          <button
            className="nav-link"
            onClick={onLogin}
          >
            <i className="fas fa-sign-in-alt"></i>
            Login
          </button>

        </div>

      </nav>
    </div>
  );
}

export default Navbar;