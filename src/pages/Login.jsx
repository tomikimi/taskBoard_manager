import styles from "../pages/login.module.css";
function Login() {
  return (
    <>
      <section id="login">
        <div className={styles.login_container}>
          <h2 className={styles.login_title}>Sign into TaskBoard!</h2>
          <div>
            <div className={styles.input_container}>
              <label htmlFor="" className={styles.input_container_label}>
                Email
              </label>
              <input
                type="email"
                name=""
                id=""
                className={styles.input_container_controller}
              />
            </div>
            <div className={styles.input_container}>
              <label htmlFor="" className={styles.input_container_label}>
                Password
              </label>
              <input
                type="password"
                name=""
                id=""
                className={styles.input_container_controller}
              />
            </div>
          </div>
          <a className={styles.link_forgot_password}>Forgot Password?</a>
          <div className={styles.link_register_container}>
            New User?<a className={styles.link_new_register}>Register</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
