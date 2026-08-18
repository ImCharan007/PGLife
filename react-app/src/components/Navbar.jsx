function Navbar() {
  return (
    <div className="header">
      <nav className="navbar">
        
        <a className="navbar-brand" href="/">
          <img src="/images/logo.png" alt="PG Life" />
        </a>

        <div className="navbar-links">
          <a href="#" className="nav-link">
            <i className="fas fa-user"></i>
            Signup
          </a>

          <div className="nav-vl"></div>

          <a href="#" className="nav-link">
            <i className="fas fa-sign-in-alt"></i>
            Login
          </a>
        </div>

      </nav>
    </div>
  );
}

export default Navbar;