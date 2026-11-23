import styles from "../pages/Dashboard.module.css";
function Greeting() {
  return (
    <>
      <div className={styles.dashboard_user_greeting}>
        <h1>Good Day👋🏽,Tomikimi!</h1>
        <p>Let's make today productive!</p>
      </div>
    </>
  );
}

export default Greeting;
