import {
  VscChecklistCompact,
  VscClockface,
  VscCircuitBoard,
  VscCheckAll,
  VscWarningCompact,
  VscSymbolEvent,
  VscEditCode,
} from "react-icons/vsc";
import styles from "./Dashboard.module.css";
import Greeting from "../components/Greeting";
import ProjectContainer from "../components/ProjectContainer";
const dashBoardData = {
  todayProjects: [
    {
      id: 1,
      taskName: "Finalize HomePage WireFrame",
      dueDate: "Today - 1.00pm",
    },
    {
      id: 2,
      taskName: "Review Test Code Result",
      dueDate: "November 20 - 1.00pm",
    },
    {
      id: 3,
      taskName: "Design Relationship Diagram for Database",
      dueDate: "November 27, 2026 - 3.00pm",
    },
  ],
  upComingProjects: [
    {
      id: 1,
      taskName: "Team Meeting: Project E-Commerce KickOff",
      dueDate: "December 10, 2026 - 1.00pm",
    },
  ],
  completedProjects: [
    {
      id: 1,
      taskName: "Finalize Dashboard Design for Task Board",
      dueDate: "November 20, 2026 - 16.03pm",
    },
  ],
};
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
        {/* GREETING COMPONENT */}
        <Greeting />
        {/* END OF GREETING COMPONENT */}
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
          {/* PROJECT CONTAINER COMPONENT FOR TODAYS PROJECT */}
          <ProjectContainer
            projects={dashBoardData.todayProjects}
            tab_accent={styles.project_tab_accent}
            styleOverflow={""}
            taskIcon={<VscEditCode />}
          />
        </div>
        {/* UPCOMING PROJECTS SECTION */}
        <div className={styles.dashboard_upcoming_projects_container}>
          <div className={styles.dashboard_project_header}>
            <h2>Upcoming projects</h2>
            <p>Tommorrow and coming week(s)</p>
          </div>
          {/* PROJECT CONTAINER COMPONENT FOR UPCOMING PROJECT */}
          <ProjectContainer
            projects={dashBoardData.upComingProjects}
            tab_accent={styles.project_tab_in_progress}
            styleOverflow={""}
            taskIcon={<VscCircuitBoard />}
          />
        </div>
        {/* COMPLETED PROJECTS SECTION */}
        <div className={styles.dashboard_upcoming_projects_container}>
          <div className={styles.dashboard_project_header}>
            <h2>Completed projects</h2>
            <p>Great Job These tasks are now off the table.</p>
          </div>

          <ProjectContainer
            projects={dashBoardData.completedProjects}
            tab_accent={styles.project_tab_success}
            styleOverflow={""}
            taskIcon={<VscCheckAll />}
          />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
