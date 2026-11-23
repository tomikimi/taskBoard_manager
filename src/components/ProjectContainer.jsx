import { VscPreview } from "react-icons/vsc";
import styles from "../pages/Dashboard.module.css";
function ProjectContainer({ projects, tab_accent, styleOverflow, taskIcon }) {
  return (
    <>
      <div
        className={`${styles.dashboard_today_project_container} ${styleOverflow}`}
      >
        {projects.map((item) => (
          <div key={item.id} className={`${styles.project_tab} ${tab_accent}`}>
            <div className={styles.project_taskName}>
              {taskIcon}
              <span className={styles.taskName}>{item.taskName}</span>
            </div>
            <div className={styles.project_date}>
              <VscPreview />
              <span className={styles.task_due_Date}>Due: {item.dueDate}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProjectContainer;
