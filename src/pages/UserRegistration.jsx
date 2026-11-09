import styles from "../pages/userRegistration.module.css";
function UserRegistration() {
  return (
    <>
      <section id="User_Registration" className={styles.section_registration}>
        <h1 className="logo">TaskB📝</h1>

        <div className={styles.registration_container}>
          <h2 className={styles.registration_title}>Hi👋🏽</h2>
          <p className={styles.registration_subTitle}>Let's get started...</p>
          <form action="" className="form_style">
            <div className="input_container">
              <label htmlFor="userFirstName" className="input_container_label">
                FirstName
              </label>
              <input
                type="text"
                name="userFirstName"
                className="input_container_controller"
                id="userFirstName"
              />
            </div>
            <div className="input_container">
              <label htmlFor="userLastName" className="input_container_label">
                LastName
              </label>
              <input
                type="text"
                name="userLastName"
                className="input_container_controller"
                id="userLastName"
              />
            </div>
            <div className="input_container">
              <label htmlFor="userEmail" className="input_container_label">
                Email
              </label>
              <input
                type="text"
                name="userEmail"
                className="input_container_controller"
                id="userEmail"
              />
            </div>
            <div className="input_container">
              <label htmlFor="userPassword" className="input_container_label">
                Password
              </label>
              <input
                type="text"
                name="userPassword"
                className="input_container_controller"
                id="userPassword"
              />
            </div>
            <div className={styles.registration_action}>
              <button type="submit" className={`btn ${styles.btn_register}`}>
                Create Account
              </button>
              <button className={`btn ${styles.btn_cancel}`}>Cancel</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default UserRegistration;
