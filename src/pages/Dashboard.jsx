import {
  VscChecklistCompact,
  VscClockface,
  VscCircuitBoard,
  VscCheckAll,
  VscWarningCompact,
  VscSymbolEvent,
  VscEditCode,
  VscPreview,
} from "react-icons/vsc";
import styles from "./Dashboard.module.css";
function Dashboard() {
  return (
    <>
      {/* <div
        style={{
          backgroundColor: "#f6f6f6",
          color: "#000",
          minHeight: "100vh",
          paddingTop: "5rem",
        }}
      >
        <label htmlFor="">
          Dashboard Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Iusto vitae tempora sed corrupti eius quisquam non saepe
          necessitatibus hic nam.
        </label>
      </div> */}
      <div className={styles.section_dashboard}>
        <div className={styles.dashboard_user_greeting}>
          <h1>Good Day👋🏽,Tomikimi!</h1>
          <p>Let's make today productive!</p>
        </div>
        <div className={styles.dashboard_user_stats}>
          <div className={styles.dashboard_user_stat_box}>
            <VscChecklistCompact />
            <div>
              <span className={styles.dashboard_user_stats_completed}>12</span>
              <span className={styles.dashboard_user_stats_action}>
                Completed
              </span>
            </div>
          </div>
          <div className={styles.dashboard_user_stat_box}>
            <VscClockface />
            <div>
              <span className={styles.dashboard_user_stats_completed}>5</span>
              <span className={styles.dashboard_user_stats_action}>
                Pending
              </span>
            </div>
          </div>
          <div className={styles.dashboard_user_stat_box}>
            <VscWarningCompact />
            <div>
              <span className={styles.dashboard_user_stats_completed}>2</span>
              <span className={styles.dashboard_user_stats_action}>
                Overdue
              </span>
            </div>
          </div>
          <div className={styles.dashboard_user_stat_box}>
            <VscSymbolEvent />
            <div>
              <span className={styles.dashboard_user_stats_completed}>3</span>
              <span className={styles.dashboard_user_stats_action}>Active</span>
            </div>
          </div>
        </div>

        {/* TODAYS PROJECT SECTION */}
        <div className={styles.dashboard_project_container}>
          <div className={styles.dashboard_project_header}>
            <h2>Today's projects</h2>
            <p>Thursday, November 19, 2026</p>
          </div>

          <div className={styles.dashboard_today_project_container}>
            <div
              className={`${styles.project_tab} ${styles.project_tab_accent}`}
            >
              <div className={styles.project_taskName}>
                <VscEditCode />
                <span className={styles.taskName}>
                  Finalize HomePage WireFrame
                </span>
              </div>
              <div className={styles.project_date}>
                <VscPreview />
                <span className={styles.task_due_Date}>
                  Due: Today - 1.00pm
                </span>
              </div>
            </div>
            <div
              className={`${styles.project_tab} ${styles.project_tab_accent}`}
            >
              <div className={styles.project_taskName}>
                <VscEditCode />
                <span className={styles.taskName}>Review Test Code Result</span>
              </div>
              <div className={styles.project_date}>
                <VscPreview />
                <span className={styles.task_due_Date}>
                  Due: November 20 - 1.00pm
                </span>
              </div>
            </div>
            <div
              className={`${styles.project_tab} ${styles.project_tab_accent}`}
            >
              <div className={styles.project_taskName}>
                <VscEditCode />
                <span className={styles.taskName}>
                  Design Relationship Diagram for Database
                </span>
              </div>
              <div className={styles.project_date}>
                <VscPreview />
                <span className={styles.task_due_Date}>
                  Due: November 27, 2026 - 3.00pm
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* UPCOMING PROJECTS SECTION */}
        <div className={styles.dashboard_upcoming_projects_container}>
          <div className={styles.dashboard_project_header}>
            <h2>Upcoming projects</h2>
            <p>Tommorrow and coming week(s)</p>
          </div>

          <div className={styles.dashboard_today_project_container}>
            <div
              className={`${styles.project_tab} ${styles.project_tab_in_progress}`}
            >
              <div className={styles.project_taskName}>
                <VscCircuitBoard />
                <span className={styles.taskName}>
                  Team Meeting: Project E-Commerce KickOff
                </span>
              </div>
              <div className={styles.project_date}>
                <VscPreview />
                <span className={styles.task_due_Date}>
                  Start Day: December 10, 2026 - 1.00pm
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* COMPLETED PROJECTS SECTION */}
        <div className={styles.dashboard_upcoming_projects_container}>
          <div className={styles.dashboard_project_header}>
            <h2>Completed projects</h2>
            <p>Great Job These tasks are now off the table.</p>
          </div>

          <div className={styles.dashboard_today_project_container}>
            <div
              className={`${styles.project_tab} ${styles.project_tab_success}`}
            >
              <div className={styles.project_taskName}>
                <VscCheckAll />
                <span className={styles.taskName}>
                  Finalize Dashboard Design for Task Board
                </span>
              </div>
              <div className={styles.project_date}>
                <VscPreview />
                <span className={styles.task_due_Date}>
                  Completed: November 20, 2026 - 16.03pm
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
