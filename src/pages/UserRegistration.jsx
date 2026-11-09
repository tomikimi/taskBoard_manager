import { useState } from "react";
import styles from "../pages/userRegistration.module.css";
function UserRegistration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleConfirmPassword(e) {
    setConfirmPassword(e.target.value);
  }

  function handleCancel(e) {
    e.preventDefault();

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  function handleSubmitRegistration(e) {
    e.preventDefault();

    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    console.log(data);
  }
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
                value={firstName}
                onChange={handleFirstName}
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
                value={lastName}
                onChange={handleLastName}
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
                value={email}
                onChange={handleEmail}
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
                value={password}
                onChange={handlePassword}
                id="userPassword"
              />
            </div>
            <div className="input_container">
              <label
                htmlFor="userConfirmPassword"
                className="input_container_label"
              >
                Confirm-Password
              </label>
              <input
                type="text"
                name="userConfirmPassword"
                className="input_container_controller"
                value={confirmPassword}
                onChange={handleConfirmPassword}
                id="userConfirmPassword"
              />
            </div>
            <div className={styles.registration_action}>
              <button
                type="submit"
                onClick={handleSubmitRegistration}
                className={`btn ${styles.btn_register}`}
              >
                Create Account
              </button>
              <button
                onClick={handleCancel}
                className={`btn ${styles.btn_cancel}`}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default UserRegistration;
