import styles from "../pages/forgotPassword.module.css";

function ForgotPassword() {
  return (
    <>
      <section className={styles.section_forgotPassword}>
        <h1 className="logo">TaskB📝</h1>
        <div className="app_container">
          <h2 className={styles.forgot_password_title}>
            Forgot your password?🤔
          </h2>
          <p className={styles.forgot_password_subTitle}>
            Not a problem,provide us with your Email and you will be back on
            track...👍🏽
          </p>
          <div className="input_container">
            <label
              htmlFor="userEmail"
              className="input_container_label"
            ></label>
            <input
              type="text"
              name="userEmail"
              className="input_container_controller"
              id="userEmail"
            />
          </div>
          <button className={`btn ${styles.btn_forgotPassword}`}>Submit</button>
        </div>
      </section>
    </>
  );
}

export default ForgotPassword;
