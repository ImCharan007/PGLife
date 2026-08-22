function SignupModal({ onClose, onLogin }) {
  return (
    <div className="modal-overlay">
      <div className="auth-modal">

        <div className="modal-header">
          <h5>Signup with PGLife</h5>

          <button onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="modal-body">
          <form>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                maxLength="30"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                maxLength="10"
                minLength="10"
                required
              />
            </div>

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

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="College Name"
                maxLength="150"
                required
              />
            </div>

            <div className="form-group">
              <span>I'm a </span>

              <label>
                <input type="radio" name="gender" value="male" />
                {" "}Male
              </label>

              <label className="ml-3">
                <input type="radio" name="gender" value="female" />
                {" "}Female
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-block btn-primary"
            >
              Create Account
            </button>

          </form>
        </div>

        <div className="modal-footer">
          <span>
            Already have an account?{" "}
            <button onClick={onLogin}>
              Login
            </button>
          </span>
        </div>

      </div>
    </div>
  );
}

export default SignupModal;