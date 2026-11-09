import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../pages/login.module.css";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleLoginSubmit(e) {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    console.log(data);
  }

  return (
    <>
      <section id="login" className={styles.section_login}>
        <h1 className="logo">TaskB📝</h1>

        <div className={styles.login_container}>
          <h2 className={styles.login_title}>Sign into TaskBoard!</h2>
          <div className={styles.form_container}>
            <form onSubmit={handleLoginSubmit} className="form_style">
              <div className="input_container">
                <label htmlFor="userEmail" className="input_container_label">
                  Email
                </label>
                <input
                  type="text"
                  id="userEmail"
                  name="userEmail"
                  className="input_container_controller"
                  value={username}
                  onChange={handleUsername}
                />
              </div>
              <div className="input_container">
                <label htmlFor="userPassword" className="input_container_label">
                  Password
                </label>
                <input
                  type="password"
                  id="userPassword"
                  name="userPassword"
                  className="input_container_controller"
                  value={password}
                  onChange={handlePassword}
                />
              </div>

              <NavLink
                to="/ForgotPassword"
                className={styles.link_forgot_password}
              >
                Forgot Password?
              </NavLink>

              <button className={`btn ${styles.btn_signIn}`}>Sign In</button>
            </form>
          </div>
          <div className={styles.link_register_container}>
            New User?
            <NavLink to="/AccountCreation" className={styles.link_new_register}>
              Register
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
