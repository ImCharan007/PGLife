function LoginModal({ onClose, onSignup }) {
  return (
    <div className="modal-overlay">
      <div className="auth-modal">

        <div className="modal-header">
          <h5>Login with PGLife</h5>

          <button onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="modal-body">
          <form>

            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                minLength="6"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-block btn-primary"
            >
              Login
            </button>

          </form>
        </div>

        <div className="modal-footer">
          <span>
            Don't have an account?{" "}
            <button onClick={onSignup}>
              Create Account
            </button>
          </span>
        </div>

      </div>
    </div>
  );
}

export default LoginModal;