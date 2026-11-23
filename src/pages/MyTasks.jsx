import Greeting from "../components/Greeting";
import { VscEditCode, VscAdd } from "react-icons/vsc";
import styles from "./myTasks.module.css";
import style1 from "./Dashboard.module.css";
import ProjectContainer from "../components/ProjectContainer";
const taskBoardData = {
  myTask: [
    {
      id: 1,
      taskName: "Finalize HomePage WireFrame",
      dueDate: "Today - 1.00pm",
    },
    {
      id: 2,
      taskName: "Review Test Code Result",
      dueDate: "November 25 - 1.00pm",
    },
    {
      id: 3,
      taskName: "Design Relationship Diagram for Database",
      dueDate: "November 27, 2026 - 3.00pm",
    },
    {
      id: 4,
      taskName: "Sketch for E-Commerce FrontEnd",
      dueDate: "November 30, 2026 - 3.00pm",
    },
    {
      id: 5,
      taskName: "API Development for E-Commerce App.",
      dueDate: "December 10, 2026 - 3.00pm",
    },
    {
      id: 6,
      taskName: "API Testing Development for E-Commerce App.",
      dueDate: "December 18, 2026 - 3.00pm",
    },
  ],
};
function MyTasks() {
  return (
    <>
      <div className={styles.section_tasks}>
        <Greeting />
        {/* MY TASKS SECTION */}
        {/* {
          <ProjectContainer
            projects={taskBoardData}
            tab_accent={styles.project_tab_accent}
            taskIcon={<VscEditCode />}
          />
        } */}
        <div className={style1.dashboard_project_container}>
          <div className={styles.myTask_header_container}>
            <div className={style1.dashboard_project_header}>
              <h2>My Tasks</h2>
              <p>Monday, November 23, 2026</p>
            </div>

            <button className={`btn btn-blue ${styles.btn_taskStyle}`}>
              <VscAdd /> Add Task
            </button>
          </div>

          <ProjectContainer
            projects={taskBoardData.myTask}
            tab_accent={style1.project_tab_accent}
            styleOverflow={style1.dashboard_today_project_container_overflow}
            taskIcon={<VscEditCode />}
          />
        </div>
      </div>
    </>
  );
}

export default MyTasks;
